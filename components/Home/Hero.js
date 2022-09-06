import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/Mohamed.jpg"
          alt="An Image showing Mohamed"
          width={350}
          height={350}
        />
      </div>
      <h1>Hey there!<br/> I&apos;m Mohamed </h1>
      <p>I blog about web development - especially React.</p>
    </section>
  );
};

export default Hero;
