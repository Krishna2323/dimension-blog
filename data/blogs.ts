import { StaticImageData } from "next/image";
import BlogImage1 from "../public/images/Blog/blog-image-1.png";

export type BlogInfoType = {
  link: string;
  image: StaticImageData;
  title: string;
  description: string;
  date: string;
  children?: JSX.Element | JSX.Element[];
};

export const blogsData: BlogInfoType[] = [
  {
    link: "/pre-seed",
    date: "12th December 2022",
    description:
      "Raising a pre-seed to change the way developers build software.",
    image: BlogImage1,
    title: "Announcing our pre-seed fundraise",
  },
];
