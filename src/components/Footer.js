import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const data = useStaticQuery(
    graphql`
      query MySomeLinks {
        allBlockContentBasic {
          nodes {
            body {
              value
            }
          }
        }
      }
    `
  );

  return (
    <footer className="main-footer">
      <div className="footer-links">
        {data.allBlockContentBasic.nodes.map((node, index) => {
          return <div key={index} dangerouslySetInnerHTML={{ __html: node.body.value }}></div>
        })}
      </div>
    </footer>
  );
};



