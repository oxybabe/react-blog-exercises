import { useState } from "react";

export default function Bookmark() {
  const [bookMarks, setBookMarks] = useState([]);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const filters = bookMarks.filter((bookMark) => bookMark.tag === tag);
  console.log({ bookMarks });

  function handleSubmit(event) {
    event.preventDefault();
    const newBookMark = { url: url, title: title, tag: tag };
    setBookMarks([...bookMarks, newBookMark]);
    setUrl("");
    setTitle("");
    setTag("");
  }

  return (
    <>
      {filters.map((filter) => (
        <>
          <button>{filter}</button>
        </>
      ))}
      <div>Hello Bookmark App</div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <input
          type="url"
          onChange={(event) => setUrl(event.target.value)}
          placeholder="URL"
        />
        <input
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          onChange={(event) => setTag(event.target.value)}
          placeholder="tag"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
