import React, { Fragment, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { LayoutContext } from "../index";
import { cartListProduct } from "./FetchApi";
import { isAuthenticate } from "../auth/fetchApi";
import { cartList } from "../productDetails/Mixins";
import { subTotal, quantity, totalCost } from "./Mixins";

const apiURL = process.env.REACT_APP_API_URL;

const CartModal = (props) => {
  const history = useHistory();

  const { data, dispatch } = useContext(LayoutContext);
  const products = data.cartProduct;

  const cartModalOpen = () =>
    dispatch({ type: "cartModalToggle", payload: !data.cartModal });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let responseData = await cartListProduct();
      if (responseData && responseData.Products) {
        dispatch({ type: "cartProduct", payload: responseData.Products });
        dispatch({ type: "cartTotalCost", payload: totalCost() });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeCartProduct = (id) => {
    let cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    if (cart.length !== 0) {
      cart = cart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(cart));
      fetchData();
      dispatch({ type: "inCart", payload: cartList() });
      dispatch({ type: "cartTotalCost", payload: totalCost() });
    }
    if (cart.length === 0) {
      dispatch({ type: "cartProduct", payload: null });
      fetchData();
      dispatch({ type: "inCart", payload: cartList() });
    }
  };

  return (
    <Fragment>
      {/* Black Overlay */}
      <div
        className={`${
          !data.cartModal ? "hidden" : ""
        } fixed top-0 z-30 w-full h-full bg-gray-200 opacity-50`}
      />
      {/* Cart Modal Start */}
      <section
        className={`${
          !data.cartModal ? "hidden" : ""
        } fixed z-40 inset-0 flex items-start justify-end`}
      >
        <div
          style={{ background: " #EBECF0" }}
          className="flex flex-col justify-between w-full h-full md:w-5/12 lg:w-4/12"
        >
          <div className="overflow-y-auto">
            <div className="flex justify-between border-b border-gray-700">
              <div className="p-4 text-lg font-semibold text-black">Cart</div>
              {/* Cart Modal Close Button */}
              <div className="p-4 text-black">
                <svg
                  onClick={(e) => cartModalOpen()}
                  className="w-6 h-6 cursor-pointer"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-col m-4">
              {products &&
                products.length !== 0 &&
                products.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      {/* Cart Product Start */}
                      <div className="flex items-center my-4 space-x-2 text-black">
                        <img
                          className="object-cover object-center w-16 h-16 rounded"
                          src={`${apiURL}/uploads/products/${item.pImages[0]}`}
                          alt="cartProduct"
                        />
                        <div className="relative flex flex-col w-full">
                          <div className="my-2">{item.pName}</div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center justify-between space-x-2">
                              <div className="text-sm text-yellow-800">
                                Quantity :
                              </div>
                              <div className="flex items-end">
                                <span className="text-black text-md">
                                  {quantity(item._id)}
                                </span>
                              </div>
                            </div>
                            <div>
                              {" "}
                              <span className="text-sm text-yellow-800">
                                Subtotal :
                              </span>{" "}
                              ${subTotal(item._id, item.pPrice)}.00
                            </div>{" "}
                            {/* SUbtotal Count */}
                          </div>
                          {/* Cart Product Remove Button */}
                          <div
                            onClick={(e) => removeCartProduct(item._id)}
                            className="absolute top-0 right-0 text-black transition duration-500 ease-in-out transform hover:scale-150"
                          >
                            <svg
                              className="w-5 h-5 cursor-pointer"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {/* Cart Product Start */}
                    </Fragment>
                  );
                })}

              {products === null && (
                <div className="flex-col m-4 text-xl text-center text-black">
                  No product in cart
                </div>
              )}
            </div>
          </div>
          <div className="m-4 space-y-4">
            <div
              onClick={(e) => cartModalOpen()}
              className="px-4 py-2 text-center text-black bg-gray-300 border border-yellow-700 rounded cursor-pointer"
            >
              Continue shopping
            </div>
            {data.cartTotalCost ? (
              <Fragment>
                {isAuthenticate() ? (
                  <div
                    className="px-4 py-2 text-center text-white bg-black rounded cursor-pointer"
                    onClick={(e) => {
                      history.push("/checkout");
                      cartModalOpen();
                    }}
                  >
                    Checkout ${data.cartTotalCost}.00
                  </div>
                ) : (
                  <div
                    className="px-4 py-2 text-center text-white bg-black rounded cursor-pointer"
                    onClick={(e) => {
                      history.push("/");
                      cartModalOpen();
                      dispatch({
                        type: "loginSignupError",
                        payload: !data.loginSignupError,
                      });
                      dispatch({
                        type: "loginSignupModalToggle",
                        payload: !data.loginSignupModal,
                      });
                    }}
                  >
                    Checkout ${data.cartTotalCost}.00
                  </div>
                )}
              </Fragment>
            ) : (
              <div className="px-4 py-2 text-center text-white bg-black rounded cursor-not-allowed">
                Checkout
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Cart Modal End */}
    </Fragment>
  );
};

export default CartModal;
