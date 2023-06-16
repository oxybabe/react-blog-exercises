import { useState } from "react";
function BlogDetail({ blogPost, updateBlog, deleteBlog }) {
  //pulling the props from BlogDetail
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
              onChange={(e) =>
                setEditedBlog({
                  ...editedBlog,
                  title: e.target.value,
                })
              }
              style={{ marginBottom: "10px" }}
            />
            <input
              name="body"
              type="text"
              value={editedBlog.body}
              onChange={(e) =>
                setEditedBlog({
                  ...editedBlog, //spreading the blog body and id to be able to update blog title
                  body: e.target.value,
                })
              }
            >
              {/* Post:{blogPost.body} */}
            </input>
            <div>Id:{blogPost.id}</div>
            <button
              onClick={() => {
                updateBlog(editedBlog), setIsEditing(false);
              }}
              type="update"
            >
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
