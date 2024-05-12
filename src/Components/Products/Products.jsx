import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { fetchProducts } from "../../api/api";
import Card from "../Card/Card";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Product from "../Product/Product";

function Products() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSortByPrice = (type) => {
    const sorted = [...products];
    if (type === "low") {
      setSortedProducts(sorted.sort((a, b) => a.price - b.price));
    } else {
      setSortedProducts(sorted.sort((a, b) => b.price - a.price));
    }
  };

  const handleCardClick = (data) => {
    setSelectedProduct(data);
    setShowModal(true);
  };
  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(true);
    });

    return () => {};
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <div
          className={styles.control}
          onClick={() => handleSortByPrice("high")}
        >
          <p>high price</p>
          <ArrowDropUpIcon />
        </div>
        <div
          className={styles.control}
          onClick={() => handleSortByPrice("low")}
        >
          <p>low price</p>
          <ArrowDropDownIcon />
        </div>
      </div>
      <div className={styles.products}>
        {loading ? (
          <>
            {(sortedProducts.length ? sortedProducts : products).map(
              (product) => (
                <Card
                  key={product.id}
                  data={product}
                  onClick={() => handleCardClick(product)}
                />
              )
            )}
          </>
        ) : (
          <p className={styles.loading}>loading...</p>
        )}
      </div>
      {showModal && (
        <Product
          onClose={() => setShowModal(false)}
          product={selectedProduct}
        />
      )}
    </div>
  );
}

export default Products;
