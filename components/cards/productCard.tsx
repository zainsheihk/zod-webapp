import React from "react";
import { HeartOutlined } from "@ant-design/icons";
type CardProps = {
  image: string;
  title: string;
  price: string;
  oldPrice?: string;
};
function ProductCard({ image, title, price, oldPrice }: CardProps) {
  return (
    <div className="card">
      <div className="fav">
        <HeartOutlined />
      </div>
      <div className="card_image">
        <img alt={image} src={image} />
      </div>
      <div className="card_description">
        <p className="title">{title}</p>
        <p className="price">Rs.{price}</p>
        <p className="oldPrice">{oldPrice}</p>
      </div>
    </div>
  );
}

export default ProductCard;
