import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <div className="bg-gray-50 h-[95vh] overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Feed />
        <Modal />
      </main>
    </div>
  );
}
