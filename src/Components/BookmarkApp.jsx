import { useState } from "react";
const INITIAL_BOOKMARK = {
  title: "",
  url: "",
  tag: "",
};

function BookmarkApp() {
  const [bookmark, setBookmark] = useState(INITIAL_BOOKMARK);
  const [bookmarkList, setBookmarkList] = useState([]);
  const [filter, setFilter] = useState("");
  function handleInput(e) {
    setBookmark({ ...bookmark, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setBookmarkList([bookmark, ...bookmarkList]);
    setBookmark(INITIAL_BOOKMARK);
  }
  const tagList = [...new Set(bookmarkList.map((bookmark) => bookmark.tag))];
  console.log({ filter });
  const bookmarksHTML = bookmarkList
    .filter((bookmark) => (filter ? bookmark.tag === filter : bookmark))
    .map((bookmark, index) => (
      <li key={index}>
        <div
          style={{
            height: "2px",
            backgroundColor: "#fff",
          }}
        />
        <h2>{bookmark.title}</h2>
        <a href={bookmark.url}>click me</a>
      </li>
    ));
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="title" style={{ marginRight: "10px" }}>
          Title
        </label>
        <input
          name="title"
          type="text"
          required
          value={bookmark.title}
          placeholder="Title..."
          onChange={handleInput}
          style={{ marginBottom: "10px" }}
        />
        <input
          name="url"
          type="text"
          required
          value={bookmark.url}
          placeholder="Url..."
          onChange={handleInput}
          style={{ marginBottom: "10px" }}
        />
        <input
          name="tag"
          type="text"
          required
          value={bookmark.tag}
          placeholder="Tag..."
          onChange={handleInput}
          style={{ marginBottom: "10px" }}
        />
        <input type="submit" />
      </form>
      <button onClick={() => setFilter("")}>All</button>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        {tagList.map((tag, index) => (
          <button key={index} onClick={() => setFilter(tag)}>
            {tag}
          </button>
        ))}
      </div>
      <ul style={{ listStyle: "none", marginTop: "50px", padding: "0px" }}>
        {bookmarksHTML}
      </ul>
    </>
  );
}

export default BookmarkApp;
