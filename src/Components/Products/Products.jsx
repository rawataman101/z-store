import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { fetchProducts } from "../../api/api";
import Card from "../Card/Card";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      products && setLoading(true);
    });
  }, []);
  return (
    <div className={styles.products}>
      {loading ? (
        <>
          {products?.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </>
      ) : (
        <p className={styles.loading}>loading...</p>
      )}
    </div>
  );
}

export default Products;
