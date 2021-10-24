import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50">
      <nav className="sticky top-0 z-50 shadow-sm border-b bg-white ">
        <div className="flex justify-between max-w-5xl mx-5 lg:mx-auto">
          <div
            className="relative hidden  lg:inline-flex xl:inline-grid  w-24 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image
              src="https://links.papareact.com/ocw"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div
            className="relative w-10  lg:hidden flex-shrink-0 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image
              src="https://links.papareact.com/jjm"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="max-w-sm">
            <div className="relative mt-1 p-3 rounded-md">
              <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              />
            </div>
          </div>
          <div className="flex items-center justify-end space-x-4">
            <HomeIcon className="navBtn" onClick={() => router.push("/")} />
            <MenuIcon className="h-6 md:hidden cursor-pointer" />
            {session ? (
              <>
                <div className="relative navBtn">
                  <PaperAirplaneIcon className="navBtn rotate-45" />
                  <div className="absolute -top-2 -right-2 text-sm w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                    4
                  </div>
                </div>
                <PlusCircleIcon className="navBtn" />
                <UserGroupIcon className="navBtn" />
                <HeartIcon className="navBtn" />
                <img
                  src={session?.user?.image}
                  alt="Profile Pic"
                  onClick={signOut}
                  className="h-10 w-10 rounded-full cursor-pointer"
                />
              </>
            ) : (
              <button onClick={signIn}>Sign In</button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
