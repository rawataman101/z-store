import React from "react";
import styles from "./Cart.module.css";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useDispatch, useSelector } from "react-redux";

function Cart({ onClose }) {
  const cartItems = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeFromCart = (productId) => ({
    type: "REMOVE_FROM_CART",
    payload: productId,
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.cart}>
        <div className={styles.closeButton} onClick={() => onClose(false)}>
          X
        </div>
        {cartItems.cartItems.length === 0 ? (
          <p>Cart is empty!</p>
        ) : (
          cartItems?.cartItems?.map((item) => {
            return (
              <div className={styles.cart__body}>
                <div className={styles.cart__image}>
                  <img src={item.image} alt="product_image" />
                </div>
                <h6 className={styles.title}>{item.title}</h6>
                <p className={styles.priceTag}>${item.price}</p>
                <div
                  className={styles.removeIcon}
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  <RemoveCircleIcon />
                </div>
              </div>
            );
          })
        )}
        {cartItems.cartItems.length > 0 && (
          <div className={styles.checkoutButton}>Checkout</div>
        )}
      </div>
    </div>
  );
}

export default Cart;
