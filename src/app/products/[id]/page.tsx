"use client";
import Loader from "@/components/loader";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { bindActionCreators, Dispatch } from "redux";
import { addShopping } from "../../../state-management/actions/cart";
interface Details {
  params: any;
  addShopping: any;
}
const ProductDetails = ({ params, addShopping }: Details) => {
  const dispatch = useDispatch();
  const [getProductInfo, setProductInfo] = useState<any>(undefined);
  const [qty, setQty] = useState<number>(1);
  const fetchSingleProduct: any = useCallback(() => {
    if (params?.id) {
      try {
        fetch(`https://fakestoreapi.com/products/${params?.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setProductInfo(data);
          })
          .catch((err) => console.error(err));
      } catch (error) {
        console.error(error, "error");
      }
    }
  }, [params?.id]);

  useEffect(() => {
    fetchSingleProduct();
  }, [fetchSingleProduct, params?.id]);

  const increaseQty = () => {
    if (qty >= 1) {
      setQty(qty + 1);
    } else {
      setQty(qty);
    }
  };
  const decreaseQty = () => {
    if (qty <= 1) {
      setQty(1);
    } else {
      setQty(qty - 1);
    }
  };
  const onChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= 1) {
      setQty(value);
    }
  };
  return (
    <div className="product-details-page section-padding min-h-100">
      <div className="container mx-auto px-4">
        {getProductInfo !== undefined ? (
          <div className="grid gap-4 mb-20 xll:grid-cols-3 md:grid-cols-3 grid-cols-1">
            {/* grid sm:grid-cols-2 xll:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-4 */}
            <div className="products-content-info col-span-2 md:flex xll:flex block">
              <div className="product-images-info md:w-2/4 xll:w-2/4 w-full">
                <img src={getProductInfo?.image} alt="hisabee" />
              </div>
              <div className="product-descriptions md:w-2/4 xll:w-2/4 w-full">
                <div className="product-name">
                  <h3>{getProductInfo?.title}</h3>
                </div>
                <h4 className="category">
                  Category: {getProductInfo?.category}
                </h4>
                <h5 className="rating">
                  Rating: {getProductInfo?.rating?.rate}
                </h5>
                <div className="price-info">
                  <h3>&#x9F3; {getProductInfo?.price}</h3>
                </div>
                <div className="description">
                  <p>{getProductInfo?.description}</p>
                </div>

                {/* increment decrement */}
                <div className="quantity-wrapper mt-5">
                  <div className="quantity-text">
                    <h4>Quantity</h4>
                  </div>
                  <div className="quantity-content">
                    <button onClick={decreaseQty}> - </button>
                    <input
                      type="number"
                      name="quantity"
                      onChange={onChangeQuantity}
                      value={qty || 1}
                    />
                    <button
                      // disabled={selectedProductInfo?.stock <= qty}
                      onClick={increaseQty}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                </div>

                {/* end increment decrement */}

                <div className="cart-action-btns mt-2">
                  <button
                    onClick={() => {
                      console.log("get qty", qty);
                      dispatch(
                        addShopping({
                          product: getProductInfo,
                          quantity: qty,
                        })
                      );
                      toast("Item Added Succefully");
                    }}
                    className="primary-btn"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
            <div className="delivery-info col-span-1">
              <div className="delivery-info-inner-content">
                <div className="single-info-content">
                  <div className="left-content">
                    <h4>Delivery Area</h4>
                    <div className="icon-content">
                      <div className="icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.75 7.5C15.75 12.75 9 17.25 9 17.25C9 17.25 2.25 12.75 2.25 7.5C2.25 5.70979 2.96116 3.9929 4.22703 2.72703C5.4929 1.46116 7.20979 0.75 9 0.75C10.7902 0.75 12.5071 1.46116 13.773 2.72703C15.0388 3.9929 15.75 5.70979 15.75 7.5Z"
                            stroke="#565656"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z"
                            stroke="#565656"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content-text">
                        <p>Dhaka , Dhaka North, Banani Road No. 12-19</p>
                      </div>
                    </div>
                  </div>
                  <div className="right-content">
                    <button className="change">CHANGE</button>
                  </div>
                </div>
                <div className="single-info-content">
                  <div className="left-content">
                    <div className="icon-content">
                      <div className="icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.75 12V6.00005C15.7497 5.737 15.6803 5.47866 15.5487 5.25092C15.417 5.02319 15.2278 4.83407 15 4.70255L9.75 1.70255C9.52197 1.5709 9.2633 1.50159 9 1.50159C8.7367 1.50159 8.47803 1.5709 8.25 1.70255L3 4.70255C2.7722 4.83407 2.58299 5.02319 2.45135 5.25092C2.31971 5.47866 2.25027 5.737 2.25 6.00005V12C2.25027 12.2631 2.31971 12.5214 2.45135 12.7492C2.58299 12.9769 2.7722 13.166 3 13.2975L8.25 16.2975C8.47803 16.4292 8.7367 16.4985 9 16.4985C9.2633 16.4985 9.52197 16.4292 9.75 16.2975L15 13.2975C15.2278 13.166 15.417 12.9769 15.5487 12.7492C15.6803 12.5214 15.7497 12.2631 15.75 12Z"
                            stroke="#565656"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2.45248 5.21997L8.99998 9.00747L15.5475 5.21997"
                            stroke="#565656"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 16.56V9"
                            stroke="#565656"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content-text">
                        <p>Home Delivery</p>
                        <p>10 - 15 days</p>
                      </div>
                    </div>
                    <div className="icon-content">
                      <div className="icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.75 3H2.25C1.42157 3 0.75 3.67157 0.75 4.5V13.5C0.75 14.3284 1.42157 15 2.25 15H15.75C16.5784 15 17.25 14.3284 17.25 13.5V4.5C17.25 3.67157 16.5784 3 15.75 3Z"
                            stroke="#565656"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.75 7.5H17.25"
                            stroke="#565656"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content-text">
                        <p>Cash on Delivery Available</p>
                      </div>
                    </div>
                  </div>
                  <div className="right-content">
                    <button>Free</button>
                  </div>
                </div>
                <div className="single-info-content">
                  <div className="left-content">
                    <h4>Return & Warranty</h4>
                    <div className="icon-content">
                      <div className="icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.75 8.25L9 10.5L16.5 3"
                            stroke="#35A872"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.75 9V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H12"
                            stroke="#35A872"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content-text">
                        <p>100% Authentic</p>
                      </div>
                    </div>
                    <div className="icon-content">
                      <div className="icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.75 8.25L9 10.5L16.5 3"
                            stroke="#35A872"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.75 9V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H12"
                            stroke="#35A872"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content-text">
                        <p>10 days easy return</p>
                        <p>Change of mind is not applicable</p>
                      </div>
                    </div>
                  </div>
                  <div className="right-content">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                        stroke="#565656"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 6V9"
                        stroke="#565656"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 12H9.0075"
                        stroke="#565656"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const data = state?.cart?.shopping;
  return {
    products: data,
  };
};
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    addShopping: bindActionCreators(addShopping, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
