import getPosts from "../../lib/posts/getPosts";
import PostDisplay from "../../components/post/postContent";
import Head from "next/head";
import { formatDate } from "../../lib/global/dateUtils";
import { useRouter } from "next/router";

export default function Post({
  post,
  title,
  authors,
  date,
  snippet,
  displayImage,
}) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title} - The Vachan MN Blog</title>
        <meta name="description" content={snippet} />
        <meta name="keywords" content={title} />
        <meta name="authors" content={authors.join(", ")} />
        <meta name="date" content={formatDate(date)} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={snippet} />
        <meta name="og:authors" content={authors.join(", ")} />
        <meta name="og:date" content={formatDate(date)} />
        <meta
          name="og:image:url"
          content={`https://vachanmn.is-a.dev/BlogPosts/${displayImage}`}
        />
        <meta name="og:image:alt" content={title} />
        <meta
          name="og:url"
          content={`https://vachanmn.is-a.dev/blog/${
            router.basePath + router.asPath
          }`}
        />
        <meta name="og:type" content="article" />
        <meta name="og:article:published_time" content={formatDate(date)} />
        <meta name="og:article:author" content={authors.join(", ")} />
        <meta name="og:article:section" content="Blog" />
        {/* TODO: Add more tags replated to article. Also add the tags to the JSON */}
        <meta name="og:locale" content="en_US" />
        <meta name="og:site_name" content="The Vachan MN Blog" />
      </Head>
      <PostDisplay post={post} title={title} authors={authors} date={date} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getPosts();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = await (
    await fetch(`https://vachanmn.is-a.dev/BlogPosts/register.json`)
  ).json();
  const postInfo = posts[params.id];
  const mdFile = await (
    await fetch(`https://vachanmn.is-a.dev/BlogPosts/${postInfo.mdFile}`)
  ).text();
  return {
    props: {
      post: mdFile,
      title: postInfo.title,
      authors: postInfo.Authors,
      date: postInfo.date,
      snippet: postInfo.snippet,
      displayImage: postInfo.displayImage,
    },
  };
}
