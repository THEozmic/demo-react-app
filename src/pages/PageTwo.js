import React from "react";
import Footer from "../components/Footer";

function PageTwo() {
  const links = [
    {
      url: "https://facebook.com",
      name: "Facebook"
    },
    {
      url: "https://instagram.com",
      name: "Instagram"
    },
    {
      url: "https://twitter.com",
      name: "Twitter"
    }
  ];

  return (
    <div className="Page">
      <h1>This is page2</h1>
      <p>
        This is page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2This is page2This is page2This is
        page2This is page2This is page2
      </p>
      <Footer links={links} />
    </div>
  );
}

export default PageTwo;
