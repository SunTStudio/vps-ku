import Image from "next/image";
import Link from "next/link";
import PostList from "../components/PostList";
import {getLastPost} from "../services/ArtikelServices";

export default async function Home() {
  const posts = await getLastPost();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <>
          <div className="main-heading">
            <h1>Selamat datang di NextJS News</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              dolor alias cum maxime cumque magnam odit. Maiores minus
              voluptatibus sint perferendis, ab pariatur doloribus consequuntur
              exercitationem adipisci ducimus hic omnis.
            </p>
          </div>
          <PostList posts={posts.data}/>
        </>
      </main>
    </div>
  );
}
