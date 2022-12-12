import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Hero from "../components/Home/hero";
import Divider from "../components/global/divider";
import RecentPosts from "../components/Home/recentPosts";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - The Vachan MN Blog</title>
      </Head>
      <div>
        <Hero />
        <Divider />
        <RecentPosts />
      </div>
    </div>
  );
}
