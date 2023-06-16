import { useState } from "react";

import BlogPost from "./Components/BlogpostA";
import PersonInfo from "./Components/PersonInfoB";
import BlogReading from "./Components/BlogreadingC";
import Bookmarking from "./Components/BookmarkingD";
import BlogCMSE from "./Components/BlogCMSE/BlogCMSE";
import BookmarkApp from "./Components/BookmarkApp";
import "./App.css";

function App() {
  const [page, setPage] = useState(5);
  let content;
  if (page === 1) {
    content = <BlogPost />;
  }
  if (page === 2) {
    content = <PersonInfo />;
  }
  if (page === 3) {
    content = <BlogReading />;
  }
  if (page === 4) {
    content = <BookmarkApp />;
  }
  if (page === 5) {
    content = <BlogCMSE />;
  }

  return (
    <>
      <button onClick={() => setPage(1)}>Blog Post</button>
      <button onClick={() => setPage(2)}>Person Info</button>
      <button onClick={() => setPage(3)}>Blog Reading</button>
      <button onClick={() => setPage(4)}>Bookmarking</button>
      <button onClick={() => setPage(5)}>Blog CMSE</button>
      {/* <button onClick={() => setPage(6)}>Bookmark APP</button> */}

      <div>{content}</div>
    </>
  );
}

export default App;
