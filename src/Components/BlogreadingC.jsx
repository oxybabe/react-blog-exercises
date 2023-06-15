import { useState } from "react";

export default function BlogReading() {
  const [blogList, setBlogList] = useState([]);
  const [postTitle, setPostTitle] = useState("");


  return (
    <>
      <div>Blog Reading</div>
      <button onClick={() => setBlogList()}>Title:{setPostTitle}</button>
    </>
  );
}
