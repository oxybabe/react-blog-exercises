import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import BlogDetail from "./BlogDetail";
export default function BlogCMSE() {
  const INITIAL_BLOGS = [
    {
      title: "title1",
      body: "body1",
      id: "1",
    },
    {
      title: "title2",
      body: "body2",
      id: "2",
    },
    {
      title: "title3",
      body: "body3",
      id: "3",
    },
  ];

  const [blogPosts, setBlogPosts] = useState(INITIAL_BLOGS);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogBody, setBlogBody] = useState("");
  console.log({ blogPosts });

  function createBlog(event) {
    event.preventDefault();
    const newBlogPost = { title: blogTitle, body: blogBody, id: uuidv4() };
    setBlogPosts([...blogPosts, newBlogPost]);
    setBlogTitle("");
    setBlogBody("");
  }
  function deleteBlog(id) {
    const index = blogPosts.findIndex((newBlogPost) => newBlogPost.id === id);
    const updatedBlogPosts = [...blogPosts];
    updatedBlogPosts.splice(index, 1);
    setBlogPosts(updatedBlogPosts);
  }
  function updateBlog(updatedBlog) {
    const index = blogPosts.findIndex((blog) => blog.id === updatedBlog.id);
    const updatedBlogPosts = [...blogPosts];
    updatedBlogPosts[index] = updatedBlog;
    setBlogPosts(updatedBlogPosts);
  }
  return (
    <>
      <div>
        <h1>Hello CMS</h1>
        <p>
          A place where you can create, read, update, and delete blog posts.
        </p>
      </div>
      <form
        onSubmit={createBlog}
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
        <BlogDetail
          blogPost={blogPost}
          updateBlog={updateBlog}
          deleteBlog={deleteBlog}
        />
        //passed the props to be able to pull in blogDetail
      ))}
    </>
  );
}
