import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

export default () => {
  return (
    <Layout>
      <div className="layout-page front-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Page not found | Portfolio - Sanna Mäkinen</title>
        </Helmet>

        <h1>Page not found</h1>
        <div className="page-content">
          <p>
            Page not found. Please use the navigation to find the page you were
            looking for.
          </p>
        </div>
      </div>
    </Layout>
  );
};
