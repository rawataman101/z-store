import React, { useEffect, useState } from "react";
import styles from "./Product.module.css";
import { Link, useParams } from "react-router-dom";
import { fetchProducts } from "../../api/api";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        const foundProduct = data.find((p) => p.id == id);
        setProduct(foundProduct);
      })
      .catch((error) => console.error("Error fetching products: ", error))
      .finally(() => setLoading(false));
  }, [id]);

  console.log(product);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.product}>
        <div className={styles.product__body}>
          <div className={styles.product_image}>
            <img
              src={product.image}
              alt="product_image"
              className="product__img"
            />
          </div>
          <div className={styles.product__info}>
            <h3 className={styles.title}>{product?.title}</h3>
            <p className={styles.description}>{product?.description}</p>
            <p className={styles.price}>${product?.price}</p>
          </div>
        </div>
        <Link to="/products" style={{ textDecoration: "none", color: "black" }}>
          <div className={styles.moreButton}>See more products</div>
        </Link>
      </div>
    </div>
  );
}

export default Product;
