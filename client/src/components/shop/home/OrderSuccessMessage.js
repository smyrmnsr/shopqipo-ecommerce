import React, { Fragment, useContext } from "react";
import { LayoutContext } from "../layout";

const OrderSuccessMessage = (props) => {
  const { data, dispatch } = useContext(LayoutContext);
  return (
    <Fragment>
      <div
        className={`${
          data.orderSuccess ? "" : "hidden"
        } fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen px-4 py-8 text-lg text-center text-white bg-gray-800 bg-opacity-75 md:py-16 md:text-xl`}
      >
        <div
          className="w-11/12 max-w-md pt-10 text-center bg-white rounded-md shadow-lg appear-done enter-done"
        >
          <div
            className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-300 rounded-full"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="check"
              className="text-2xl text-green-700 svg-inline--fa fa-check fa-w-17"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
              ></path>
            </svg>
          </div>
          <div className="px-4 mb-4">
            <h2 className="text-3xl font-medium">Payment successful</h2>
            <p
              className="w-10/12 max-w-6xl max-w-full mx-auto mt-2 text-base text-gray-800"
            >
              Your payment has been successfully submitted. We’ve sent your an email with all of the details of your order.
            </p>
          </div>
          <div
            className="flex justify-center px-4 py-4 mt-10 border-t border-gray-300 false"
          >
            <div
              onClick={(e) => dispatch({ type: "orderSuccess", payload: false })}
              className="inline-block w-full px-6 py-3 mx-4 text-base font-medium text-center text-white bg-gray-700 border border-green-600 border-solid rounded-md cursor-pointer hover:bg-black hover:border-green-600"
              type=""
            >
              Go back to Shopqipo
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OrderSuccessMessage;
