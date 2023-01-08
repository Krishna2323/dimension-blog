import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import classes from "./Blog.module.scss";

type BlogPropsType = {
  children?: React.ReactNode;
  title: string;
  description: string;
  subheading: string;
  writer: string;
  writerAvatar: StaticImageData;
  publishedDate: string;
  socialLink: string;
};

const Blog: React.FC<BlogPropsType> = (props) => {
  const {
    title,
    description,
    subheading,
    publishedDate,
    writer,
    writerAvatar,
    socialLink,
  } = props;

  return (
    <div className={classes.blog__outer}>
      <div className={classes.blog}>
        <div className={classes.blog__info}>
          <h1 className={classes.blog__info__heading}>{title}</h1>
          <h3 className={classes.blog__info__subheading}>
            {subheading}/{description}
          </h3>
          <div className={classes.blog__info__writer}>
            <Link target={"_blank"} href={socialLink}>
              <Image
                width={24}
                height={24}
                src={writerAvatar}
                alt="Profile Pciture"
              />
              {writer}
            </Link>
            <span></span>
            <span>{publishedDate}</span>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Blog;
