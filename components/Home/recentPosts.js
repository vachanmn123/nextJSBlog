import { CardGroup } from "react-bootstrap";
import PostSnippetCard from "./postSnippetCard";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function RecentPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const res = fetch("https://vachanmn.is-a.dev/BlogPosts/register.json").then(
      (res) => res.json()
    );
    res.then((data) => {
      let postDatas = [];
      Object.keys(data).forEach((key) => {
        postDatas.push({ key: key, data: data[key] });
      });
      postDatas.sort((a, b) => {
        return b.data.date - a.data.date;
      });
      setPosts(postDatas.splice(0, 5));
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="text-center" style={{ marginTop: "5vh" }}>
        <h2>Recent Posts</h2>
        <Image
          src="/loadingSpinner.gif"
          alt="loading"
          height={20}
          width={20}
          style={{ margin: "3px" }}
        />
        Fetching the latest posts...
      </div>
    );
  }
  return (
    <div>
      <h2
        className="display-5 fw-bold"
        align="center"
        style={{ marginLeft: "3vh", marginTop: "5vh" }}
      >
        Recent Posts
      </h2>
      <CardGroup>
        {posts.map((post) => (
          <PostSnippetCard post={post} />
        ))}
      </CardGroup>
    </div>
  );
}
