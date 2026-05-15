import Header from "./Header.jsx"
import About from "./About.jsx"
import ArticleList from "./ArticleList.jsx"

const blogName = "My Personal Blog"
const blogImage = "https://via.placeholder.com/150"
const blogAbout = "A small place to share thoughts about React, props, and building reusable components."

const posts = [
  {
    id: 1,
    title: "Understanding Props in React",
    date: "May 15, 2026",
    preview: "Props let components receive data and render it dynamically.",
  },
  {
    id: 2,
    title: "Building Component Trees",
    date: "May 16, 2026",
    preview: "A clear component tree makes your UI easier to manage and reuse.",
  },
  {
    id: 3,
    title: "Creating Accessible UIs",
    date: "May 17, 2026",
    preview: "Accessible components ensure every user can enjoy your blog content.",
  },
]

function App() {
  return (
    <div className="App">
      <Header name={blogName} />
      <About image={blogImage} about={blogAbout} />
      <ArticleList posts={posts} />
    </div>
  )
}

export default App
