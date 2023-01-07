import React from "react";
import classes from "./Blog.module.scss";

const Blog: React.FC<{
  children?: React.ReactNode;
  title: string;
  description: string;
  subheading: string;
}> = (props) => {
  const { title, description, subheading } = props;

  return (
    <div className={classes.blog}>
      <div className={classes.blog__info}>
        <h1 className={classes.blog__info__heading}>{title}</h1>
        <h3 className={classes.blog__info__subheading}>
          {subheading}/{description}
        </h3>
      </div>
      {props.children}
    </div>
  );
};

export default Blog;
