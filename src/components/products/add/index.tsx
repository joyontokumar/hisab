import { addShopping } from "@/state-management/actions/cart";
import Link from "next/link";
import React from "react";
import { connect, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { bindActionCreators } from "redux";
const Add = ({ product, addShopping }: any) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="product-card-view-wrapper">
        <div className="product-img">
          <img src={product?.image} alt="products" />
        </div>
        <div className="product-content">
          <span className="card-view-product-name">
            <Link href={`/products/${product?.id}`}>{product?.title}</Link>
          </span>
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
          <div className="add-to-cart mt-5">
            <button
              onClick={() => {
                dispatch(
                  addShopping({
                    product: product,
                    quantity: 1,
                  })
                );
                toast("Item Added Succefully");
              }}
              className="btn primary-btn w-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <ToastContainer position="top-center" />
      </div>
    </React.Fragment>
  );
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    addShopping: bindActionCreators(addShopping, dispatch),
  };
};
export default connect(null, mapDispatchToProps)(Add);
