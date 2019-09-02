import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

export default () => {

  return (
    <Layout>
      <div className="layout-page front-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Hello! | Portfolio - Sanna Mäkinen</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <h1>Hello!</h1>
        <div className="page-content">
          <p>I'm Sanna. I currently work as a web developer at <a href="https://www.karhuhelsinki.fi" target="_blank" rel="noopener noreferrer">Karhu Helsinki</a>.</p>
        </div>
      </div>
    </Layout>
  );
};