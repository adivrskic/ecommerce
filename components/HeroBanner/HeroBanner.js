import React from "react";
import Link from "next/link";
import { urlFor } from "../../lib/client";
import styles from "./HeroBanner.module.css";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.text}>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className={styles.bannerImage}
        />

        <div>
          <Link href={`product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
