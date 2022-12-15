import React from "react";
type CardProps = {
  image: string;
  title: string;
};
function CategoryCard({ image, title }: CardProps) {
  return (
    <div className="card category">
      <div className="card_image">
        <img alt={image} src={image} />
      </div>
      <div className="card_description">
        <p className="title">{title}</p>
      </div>
    </div>
  );
}

export default CategoryCard;
