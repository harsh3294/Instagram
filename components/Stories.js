import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";
function Stories() {
  const [suggestionsData, setSuggestionsData] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(40)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestionsData(suggestions);
  }, []);
  const { data: session } = useSession();
  return (
    <div className="flex space-x-4 p-6 bg-white mt-3 md:ml-6 md:mr-5 lg:ml-24 md:mt-5  border-gray-200 border rounded-sm overflow-x-scroll scrollbar-hide">
      {session && (
        <Story
          key={session.user.uid}
          id={session.user.uid}
          username={session.user.username}
          img={session.user.image}
        />
      )}
      {suggestionsData.map((profile) => (
        <Story
          key={profile.id}
          id={profile.id}
          username={profile.username}
          img={profile.avatar}
        />
      ))}
    </div>
  );
}

export default Stories;
