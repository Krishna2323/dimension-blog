import Image, { StaticImageData } from "next/image";
import React from "react";
import classes from "./Blogs.module.scss";
import BlogImage1 from "../../public/images/Blog/blog-image-1.png";
import Link from "next/link";
import { BlogInfoType, blogsData } from "../../data/blogs";

const BlogCard: React.FC<BlogInfoType> = (props) => {
  const { date, description, image, link, title } = props;
  return (
    <Link href={link} className={classes.blog_card}>
      <Image src={image} alt="Blog image preview" />
      <div className={classes.blog_card__info}>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{date}</span>
      </div>
    </Link>
  );
};

const Blogs: React.FC<{ children?: React.ReactNode | React.ReactNode[] }> = (
  props
) => {
  return (
    <div className={classes.blogs}>
      <div className={classes.blogs__inner}>
        <h1>The Dimension Blog</h1>
        {blogsData &&
          blogsData.map((blogData, i) => <BlogCard {...blogData} key={i} />)}
      </div>
    </div>
  );
};

export default Blogs;
