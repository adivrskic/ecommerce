import React from "react";
import Link from "next/link";
import { urlFor } from "../../lib/client";
import styles from "./HeroBanner.module.css";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{heroBanner.smallText}</p>
      <h3>{heroBanner.midText}</h3>
      <h1>{heroBanner.largeText1}</h1>
      <img
        src={urlFor(heroBanner.image)}
        alt="headphones"
        className={styles.bannerImage}
      />

      <Link href={`product/${heroBanner.product}`}>
        <button type="button">{heroBanner.buttonText}</button>
      </Link>
    </div>
  );
};

export default HeroBanner;
