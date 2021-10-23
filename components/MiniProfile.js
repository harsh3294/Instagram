function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://lh3.googleusercontent.com/ogw/ADea4I5ZYpXu0fX21kuaqDriE4qxzs88uTlxu9HEvD8Aow=s32-c-mo"
        alt=""
        className="rounded-full border p-[2px] w-16 h-16"
      />
      <div className="flex-1 mx-3">
        <h2 className="font-bold">Harsh</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
}

export default MiniProfile;
