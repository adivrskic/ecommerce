import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>2023 AV Headphones Store | All Rights Reserved</p>
      <p className={styles.icons}>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};
export default Footer;
