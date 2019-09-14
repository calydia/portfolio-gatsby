import React from "react";
import { graphql, StaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import ThemeContext from "../context/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default ({ children }) => {
  const BackgroundSection = ({ className }) => (
    <StaticQuery
      query={graphql`
        query Backgrounds {
          bg0: file(relativePath: { eq: "bg01.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          bg1: file(relativePath: { eq: "bg02.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          bg2: file(relativePath: { eq: "bg03.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          bg3: file(relativePath: { eq: "bg04.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          bg4: file(relativePath: { eq: "bg05.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          bg5: file(relativePath: { eq: "bg06.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        const getRandomInt = max => {
          return Math.floor(Math.random() * Math.floor(max));
        };
        const random = "bg" + getRandomInt(6);
        // Set ImageData.
        let imageData = data.bg0.childImageSharp.fluid;
        if (random === "bg1") {
          imageData = data.bg1.childImageSharp.fluid;
        }
        if (random === "bg2") {
          imageData = data.bg2.childImageSharp.fluid;
        }
        if (random === "bg3") {
          imageData = data.bg3.childImageSharp.fluid;
        }
        if (random === "bg4") {
          imageData = data.bg4.childImageSharp.fluid;
        }
        if (random === "bg5") {
          imageData = data.bg5.childImageSharp.fluid;
        }

        return (
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
            <div className="content-container">
              <Header />
              {children}
              <Footer />
            </div>
          </BackgroundImage>
        );
      }}
    />
  );

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={theme.dark ? "light" : "dark"}>
          <BackgroundSection>{children}</BackgroundSection>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};
