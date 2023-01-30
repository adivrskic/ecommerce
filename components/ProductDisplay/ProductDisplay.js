import React from "react";
import { Product } from "../Product";
import styles from "./ProductDisplay.module.css";

const ProductDisplay = ({ products }) => {
  return (
    <>
      <div className={styles.heading}>
        <h2>Best Sellers</h2>
        <p>Our best selling speakers and headphones.</p>
      </div>
      <div className={styles.container}>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductDisplay;
