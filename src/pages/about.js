import { Link } from "gatsby"
import React from "react"
import Header from "../component/header"
export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header />
      <h1>About Gatsby</h1>
      <p>Such wow. Very React.</p>
      <Link to="/">
        <button>to home</button>
      </Link>
      <Link to="/articles/articleA">
        <button>articles</button>
      </Link>
    </div>
  )
}
