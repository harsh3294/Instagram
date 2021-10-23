import Post from "./Post";

function Posts() {
  const Posts = [
    {
      id: 1,
      username: "hellfire",
      userImg:
        "https://lh3.googleusercontent.com/ogw/ADea4I5ZYpXu0fX21kuaqDriE4qxzs88uTlxu9HEvD8Aow=s32-c-mo",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSE67cJT024beicbgKzUxYaodWdnKutYiOtgxI0hZlTHpUFQSrIpd2uHQF_XUoC8AZkdo&usqp=CAU",
      caption: "world best gaming community",
    },
    {
      id: 2,
      username: "hellfire",
      userImg:
        "https://lh3.googleusercontent.com/ogw/ADea4I5ZYpXu0fX21kuaqDriE4qxzs88uTlxu9HEvD8Aow=s32-c-mo",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSE67cJT024beicbgKzUxYaodWdnKutYiOtgxI0hZlTHpUFQSrIpd2uHQF_XUoC8AZkdo&usqp=CAU",
      caption: "world best gaming community",
    },
  ];
  return (
    <div className="mt-3 md:ml-6 md:mr-5 lg:ml-24 md:mt-5 ">
      {Posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          image={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
