const posts = fetch("https://vachanmn.is-a.dev/BlogPosts/register.json");
posts.then((res) => res.json()).then((data) => console.log(Object.keys(data)));
