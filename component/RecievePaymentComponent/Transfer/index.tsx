import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Lottie from "react-lottie";
import animationData from "../../Lotties/transfer.json";
import BillingAddress from "../BillingAddress";
const Transfer = ({
  information,
  amount,
}: {
  information: any;
  amount: any;
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [width, setWidth] = useState(991);

  const [height, setHeight] = useState(0);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    console.log(width);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);
  const [payentComp, setPayentComp] = useState(true);
  return (
    <>
      {payentComp ? (
        <div className={styles.accountInfo}>
          {/* <Lottie
            options={defaultOptions}
            height={width > 990 ? 300 : 200}
            width={width > 990 ? 300 : 200}
          />{" "} */}
          <div className={styles.data}>
            <p>Account Number:</p>
            <p>{information?.accountNumber}</p>
          </div>
          {information?.accountName ? (
            <div className={styles.data}>
              <p>Account Name:</p>
              <p>{information?.accountName}</p>
            </div>
          ) : null}
          <div className={styles.data}>
            <p>Bank Name:</p>
            <p>Ecobank</p>
          </div>
          <div className={styles.data}>
            <p>Ammount:</p>
            <p>1234567890</p>
          </div>

          <button>Pay {amount}</button>
          <div>
            <p
              className={styles.complete}
              onClick={() => setPayentComp((prev) => !prev)}
            >
              I have Completed the payment
            </p>
          </div>
        </div>
      ) : (
        <BillingAddress
          action={() => setPayentComp((prev) => !prev)}
          newPage=""
        />
      )}
    </>
  );
};

export default Transfer;
