export default function getPosts() {
  const res = fetch("https://vachanmn.is-a.dev/BlogPosts/register.json");
  const json = res.then((res) => res.json());
  const posts = json.then((json) => json);
  return posts.then((posts) => {
    const keys = Object.keys(posts);
    const final = [];
    keys.forEach((key) => {
      final.push({
        params: {
          id: key,
        },
      });
    });
    return final;
  });
}
