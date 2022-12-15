import React from "react";
import share from "@icons/share.svg";
import Image from "next/image";

type CardProps = {
  image: string;
  title: string;
  price: string;
};
function FavoriteCard({ image, title, price }: CardProps) {
  return (
    <div className="card favorite">
      <div className="card_image">
        <img alt={image} src={image} />
      </div>
      <div className="card_description">
        <p className="title">{title}</p>
        <p className="price">Rs.{price}</p>
      </div>
      <div className="card_footer">
        <Image alt={share} src={share} />
      </div>
    </div>
  );
}

export default FavoriteCard;
