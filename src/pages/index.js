import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Index = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Ali, a full-stack developer living in Mashhad.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default Index
