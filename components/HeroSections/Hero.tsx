import React from "react";
import classes from "./Hero.module.scss";
import HeroImage1 from "../../public/images/Hero/hero-image-1.png";
import HeroImage2 from "../../public/images/Hero/hero-image-2.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <h2 className={classes.hero__subheading}>
        Discover incredible projects.
      </h2>
      <h1 className={classes.hero__heading}>
        <span>Discover</span> together.
      </h1>
      <div className={classes.hero__images}>
        <div>
          <Image src={HeroImage1} alt="Hero Image" />
        </div>
        <div>
          <Image src={HeroImage2} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
