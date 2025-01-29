import React from "react";

import styles from "./Hero.module.css";
import Image1 from '../Images/20240205_085807-removebg-preview.png'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Allan Freddy</h1>
        <p className={styles.description}>
          I'm a full stack developer with 3 years of experience using HTML, React and
          NodeJS. 
        </p>
        <a href="mailto:freddytino2002@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={Image1}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
