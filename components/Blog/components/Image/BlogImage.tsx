import Image, { StaticImageData } from "next/image";
import React from "react";
import classes from "../../Blog.module.scss";

const BlogImage: React.FC<{
  src: StaticImageData;
  alt: string;
  caption: string;
}> = (props) => {
  return (
    <div className={classes.blog__image}>
      <Image src={props.src} alt={props.alt} />
      <span>{props.caption}</span>
    </div>
  );
};

export default BlogImage;
