import { useState } from "react";


export default function BlogPost() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogBody, setBlogBody] = useState("");
  console.log({ blogPosts });

  //could also say function createBlog
  function handleSubmit(event) {
    event.preventDefault();
    const newBlogPost = { title: blogTitle, body: blogBody };
    setBlogPosts([...blogPosts, newBlogPost]);
    setBlogTitle("");
    setBlogBody("");
  }
  return (
    <>
      <div>
        <h1>Let's Blog</h1>
        <p>Enter blog post below.</p>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          onChange={(event) => setBlogTitle(event.target.value)}
          value={blogTitle}
          placeholder="Title"
        />
        <textarea
          type="text"
          onChange={(event) => setBlogBody(event.target.value)}
          value={blogBody}
          placeholder="Post"
        />
        <button type="submit">Submit</button>
      </form>
      {blogPosts.map((blogPost) => (
        <>
          <div>Title:{blogPost.title}</div>
          <div>Body:{blogPost.body}</div>
        </>
      ))}
    </>
  );
}
