import Image from "next/image";
import React from "react";
import classes from "./Navbar.module.scss";
import dimentionLogo from "../../public/svg/dimension.svg";
import GithubGreyIcon from "../../public/svg/socials/github-grey.svg";
import TwitterGreyIcon from "../../public/svg/socials/twitter-grey.svg";
import ArrowLeftIcon from "../../public/svg/navbar/arrow-left.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Image width={33} height={46} src={dimentionLogo} alt="dimension logo" />
      <ul className={classes.navbar__links}>
        <li>
          <Link href="/">Blogs</Link>
        </li>
        <li>
          <Link href="/">Careers</Link>
          <span className="badge">2</span>
        </li>
      </ul>
      <div className={classes.navbar__cta}>
        <Image src={TwitterGreyIcon} alt="github grey icon" />
        <Image src={GithubGreyIcon} alt="github grey icon" />
        {/* <button>
          Join Waitlist{" "}
          <div>
            <Image src={ArrowLeftIcon} alt="arrow left" />
          </div>
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
