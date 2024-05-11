import React from "react";
import styles from "./Landing.module.css";
import HeroImage from "../../assets/hero.png";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.left__side}>
        <h1>Discover endless possibilities</h1>
        <h3>
          <span>100K</span> <br /> HAPPY CUSTOMERS
        </h3>
        <p>Your One-Stop Shop for Everything</p>
        <Link to="/products">
          <button className={styles.shopButton}>Shop Now</button>
        </Link>
      </div>
      <div className={styles.right__side}>
        <div className={styles.landing__image}>
          <img src={HeroImage} alt="landing-img" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
