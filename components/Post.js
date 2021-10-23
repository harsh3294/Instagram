import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
function Post({ id, username, image, userImg, caption }) {
  return (
    <div key={id} className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5 ">
        <img
          src={userImg}
          alt=""
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
        />
        <p className="flex-1 font-semibold text-gray-700">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img src={image} className="object-cover w-full" alt="" />
      <div className="flex justify-between px-4 py-4">
        <div className="flex space-x-4 ">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn rotate-45" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      <p className="py-2 px-5 truncate">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>

      <form className="flex items-center p-2">
        <EmojiHappyIcon className="h-7 text-gray-500" />
        <input
          type="text"
          className="border-none flex-1 focus:ring-0"
          placeholder="Add a comment ..."
        />
        <button className="font-semibold text-gray-500">
          <PaperAirplaneIcon className="btn rotate-45 mr-1" />
        </button>
      </form>
    </div>
  );
}

export default Post;
