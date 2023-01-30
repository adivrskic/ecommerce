import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantity } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantity(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thanks for your order!</h2>
        <p className="email-msg">Check your email for your receipt.</p>
        <p className="description">
          For any questions, please email{" "}
          <a className="email" href="mailto:orders@example.com">
            order@example.com
          </a>
          <Link href="/">
            <button type="button" className="btn" width="300px">
              Continue Shopping
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Success;
