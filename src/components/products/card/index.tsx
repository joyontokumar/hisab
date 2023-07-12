import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: any) => {
  return (
    <React.Fragment>
      <Link
        href={`/products/${product?.id}`}
        className="product-card-view-wrapper"
      >
        <div className="product-img">
          <img src={product?.image} alt="products" />
        </div>
        <div className="product-content">
          <span className="card-view-product-name">{product?.title}</span>
          <div className="product-rating-system">
            <div className="rating-number">
              <span>{product?.rating?.rate}</span>
            </div>
          </div>
          <div className="product-price">
            <div className="discount-price">
              <h4>&#2547; {product?.price}</h4>
            </div>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default ProductCard;
