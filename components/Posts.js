import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

function Posts() {
  // const Posts = [
  //   {
  //     id: 1,
  //     username: "hellfire",
  //     userImg:
  //       "https://lh3.googleusercontent.com/ogw/ADea4I5ZYpXu0fX21kuaqDriE4qxzs88uTlxu9HEvD8Aow=s32-c-mo",
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSE67cJT024beicbgKzUxYaodWdnKutYiOtgxI0hZlTHpUFQSrIpd2uHQF_XUoC8AZkdo&usqp=CAU",
  //     caption: "world best gaming community",
  //   },
  //   {
  //     id: 2,
  //     username: "hellfire",
  //     userImg:
  //       "https://lh3.googleusercontent.com/ogw/ADea4I5ZYpXu0fX21kuaqDriE4qxzs88uTlxu9HEvD8Aow=s32-c-mo",
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSE67cJT024beicbgKzUxYaodWdnKutYiOtgxI0hZlTHpUFQSrIpd2uHQF_XUoC8AZkdo&usqp=CAU",
  //     caption: "world best gaming community",
  //   },
  // ];
  const [posts, setPosts] = useState([]);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );
  return (
    <div className="mt-3 md:ml-6 md:mr-5 lg:ml-24 md:mt-5 ">
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          image={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
