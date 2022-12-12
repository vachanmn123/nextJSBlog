import Image from "next/image";
import { Card, CardGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import PostCard from "../../components/post/postCard";
import Head from "next/head";

export default function Posts() {
  const [postSnippets, setPostSnippets] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const data = fetch("https://vachanmn.is-a.dev/BlogPosts/register.json");
    data.then((res) =>
      res.json().then((json) => {
        const keys = Object.keys(json);
        let final = [];
        keys.forEach((key) => {
          final.push({
            id: key,
            snippet: json[key].snippet,
            title: json[key].title,
            displayImage: json[key].displayImage,
            authors: json[key].authors,
            date: json[key].date,
          });
        });
        final = final.sort((a, b) => {
          return b.date - a.date;
        });
        setPostSnippets(final);
        setIsLoaded(true);
      })
    );
  }, []);

  if (postSnippets.length < 1) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ margin: "3vh" }}>
      <Head>
        <title>All Posts - The Vachan MN Blog</title>
      </Head>
      <h1 className="display-5 fw-bold">All Posts</h1>
      <hr />
      <CardGroup>
        {postSnippets.map((post) => (
          <PostCard post={post} />
        ))}
      </CardGroup>
    </div>
  );
}
