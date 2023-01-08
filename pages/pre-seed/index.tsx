import React from "react";
import TejasRavishankarAvatar from "../../public/images/Investors/tejas-ravishankar.svg";
import Link from "next/link";
import Blog from "../../components/Blog/Blog";
import BlogImage from "../../components/Blog/components/Image/BlogImage";
import Paragraph from "../../components/Blog/components/Paragraph/Paragraph";
import { People } from "../../data/investorsInfo";
import BlogImage1 from "../../public/images/Blog/blog-image-1.png";
import Head from "next/head";

let quote = {
  text: "“Dimension is solving for one of the biggest problems in the development space and I’m excited to join them in their journey!”",
  by: "Tom Preston-Werner, Co-Founder of GitHub",
};

const index = () => {
  return (
    <div>
      {" "}
      <Head>
        <title>Blog | Pre-Seed</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Blog
        title="Blog title"
        subheading="sub-heading"
        description="description"
        writer="Tejas Ravishankar"
        writerAvatar={TejasRavishankarAvatar}
        publishedDate="12th December 2022"
        socialLink="https://twitter.com/suptejas"
      >
        <BlogImage
          caption="Manage your projects on Dimension."
          src={BlogImage1}
          alt="Blog image"
        />
        <Paragraph
          text={
            <>
              We believe software development is broken today, millions of
              tools, hundreds of tabs, and a lack of integration results in a
              slow, <Link href={"#"}>This is a link</Link>{" "}
              <strong>painful</strong> development process and a poor developer
              experience.
              <br />
              <p>
                We believe software development is broken today, millions of
                tools, hundreds of tabs, and a lack of integration results in a
              </p>
            </>
          }
          heading="The Problem"
        />
        <Paragraph heading="Heading #2" quote={quote} />
        <Paragraph
          heading="Heading #2"
          style={{ marginTop: "1.2rem" }}
          people={People}
        />
      </Blog>
    </div>
  );
};

export default index;
