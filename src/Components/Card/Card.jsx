import React from "react";
import styles from "./Card.module.css";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

function Card({ data }) {
  return (
    <div className={styles.card}>
      <StyledRating
        className={styles.rating}
        readOnly
        name="customized-color"
        defaultValue={2}
        getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <div className={styles.card__image}>
        <img src={data.image} alt="product_image" />
      </div>
      <div className={styles.card__body}>
        <div className={styles.cardBody__info}>
          <h4 className={styles.title}>{data?.title}</h4>
          <p className={styles.price}>{data?.price}</p>
        </div>
        <button className={styles.addToCart}>ADD</button>
      </div>
    </div>
  );
}

export default Card;
