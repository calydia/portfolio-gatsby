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
          <meta
            property="og:description"
            content="I'm a web developer mainly working with Drupal with a passion for UI design and the frontend."
          />
          <meta
            name="Description"
            content="I'm a web developer mainly working with Drupal with a passion for UI design and the frontend."
          />
          <meta property="og:title" content="Portfolio - Sanna Mäkinen" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en" />
          <meta property="og:site_name" content="Portfolio - Sanna Mäkinen" />
          <meta property="og:url" content="https://sanna.ninja" />
          <meta property="og:image" content="../images/osiris.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </Helmet>

        <h1>Hello!</h1>
        <div className="page-content">
          <p>
            I'm Sanna. I currently work as a web developer at{" "}
            <a
              href="https://www.karhuhelsinki.fi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Karhu Helsinki
            </a>
            , mainly working with Drupal. I like to work on both the backend and
            the frontend but if I had to choose, I would definitely pick the
            frontend. There's just something about bringing the design to life.
          </p>
          <p>
            Please take a look around and feel free to contact me if you have
            any questions or if you just want to say hello!
          </p>
        </div>
      </div>
    </Layout>
  );
};
