import { useState } from "react";

import BlogPost from "./Components/BlogpostA";
import PersonInfo from "./Components/PersonInfoB";
import BlogReading from "./Components/BlogreadingC";
import Bookmarking from "./Components/BookmarkingD";
import BlogCMSE from "./Components/BlogCMSE";
import BookmarkApp from "./Components/BookmarkApp";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
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
  // if (page === 4) {
  //   content = <Bookmarking />;
  // }
  if (page === 4) {
    content = <BlogCMSE />;
  }
  if (page === 5) {
    content = <BookmarkApp />;
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
