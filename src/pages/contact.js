import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

const Contact = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <h2>
        The best way to reach me is via{" "}
        <a target="_blank" rel="noreferrer" href="https://t.me/aliemili">
          @aliemili
        </a>{" "}
        on Telegram.
      </h2>
      <Footer />
    </div>
  )
}

export default Contact
