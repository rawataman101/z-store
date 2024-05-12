import React from "react";
import styles from "./Product.module.css";

function Product({ onClose, product }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.product}>
        <div className={styles.closeButton} onClick={() => onClose(false)}>
          X
        </div>
        <div className={styles.product__body}>
          <div className={styles.product_image}>
            <img src={product?.image} alt="product_image" />
          </div>
          <div className={styles.product__info}>
            <h3 className={styles.title}>{product?.title}</h3>
            <p className={styles.description}>{product?.description}</p>
            <p className={styles.price}>${product?.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
