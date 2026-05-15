import React from "react";
import blogData from "../data/blog.js";
import Header from "./Header.jsx";
import About from "./About.jsx";
import ArticleList from "./ArticleList.jsx";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About about={blogData.about} image={blogData.image} />
      <ArticleList posts={blogData.posts} /> {/* Add this and pass the posts */}
    </div>
  );
}

export default App;
// Final submission check .