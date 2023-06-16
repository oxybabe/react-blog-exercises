import { useState } from "react";
function BlogDetail({ blogPost, updateBlog }) {
  const [isEditing, setIsEditing] = useState(false); //boolean, setting it to false
  const [editedBlog, setEditedBlog] = useState({ ...blogPost });

  return (
    <>
      {isEditing ? (
        <form>
          <li key={blogPost.id}>
            <input
              name="title"
              type="text"
              required
              value={editedBlog.title}
              onChange={setEditedBlog}
              style={{ marginBottom: "10px" }}
            />
            <div>Post:{blogPost.body}</div>
            <div>Id:{blogPost.id}</div>
            <button onClick={() => updateBlog(editedBlog)} type="update">
              Update
            </button>
            <button onClick={() => deleteBlog(blogPost.id)} type="delete">
              Delete
            </button>
          </li>
        </form>
      ) : (
        <li key={blogPost.id}>
          <div>Title:{blogPost.title}</div>
          <div>Post:{blogPost.body}</div>
          <div>Id:{blogPost.id}</div>
          <button onClick={() => setIsEditing(true)} type="update">
            Update
          </button>
          <button onClick={() => deleteBlog(blogPost.id)} type="delete">
            Delete
          </button>
        </li>
      )}
    </>
  );
}
export default BlogDetail;
