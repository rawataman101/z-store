import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { fetchCartItems } from "../../api/api";

function Cart({ onClose }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems().then((data) => setCartItems(data));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.cart}>
        <div className={styles.closeButton} onClick={() => onClose(false)}>
          X
        </div>
        {!cartItems ? (
          <p>Cart is empty!</p>
        ) : (
          <div className={styles.cart__body}>
            <div className={styles.cart__image}>
              <img
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-44-aluminum-midnight-cell-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=ajJYOEQxYjNlejNwbWNnSU16d0NYaWhSbVIzRFJTYlp1MEk4OWNDaTcvNTlEbzMrd1Z5SUpEd0hiT0ZLRlZGNHVDTzRRaC84T1VMbXJRN05SRldIelBRWnNWZWtLcTZCYVRER3FsWWowaTk5RG8zK3dWeUlKRHdIYk9GS0ZWRjR4cVNUNDJadDNVSmRncE9SalAvZ24zZmdHMUt6VFlqa3BpV2VBOUNycGdrcDIxSk5peW5HTWQ0c004MmJwMkNtdGl6SHg4ZE5NYmlWSVQ5akRTdGpCZkNDUmN0SlpnYXpQNFNTbUVsbTlnST0="
                alt="product_image"
              />
            </div>
            <h6>Watch</h6>
            <p>$10</p>
          </div>
        )}
        <div className={styles.checkoutButton}>Checkout</div>
      </div>
    </div>
  );
}

export default Cart;
