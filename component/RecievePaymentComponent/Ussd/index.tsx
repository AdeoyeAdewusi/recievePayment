import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Lottie from "react-lottie";
import animationData from "../../Lotties/call.json";
const USSDInput = ({
  set,
  ussd,
  amount,
}: {
  set: any;
  ussd: any;
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
  function handleButtonClick() {
    window.location.href = ussd;
  }
  const [isCopied, setIsCopied] = useState(false);
  const [usd, setUsd] = useState("");
  async function copyTextToClipboard(text: any) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }
  const copyUssd = () => {
    if (ussd === null) {
      copyTextToClipboard("*326*000*refCode#")
        .then(() => {
          // If successful, update the isCopied state value
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      copyTextToClipboard(`${ussd}#`)
        .then(() => {
          // If successful, update the isCopied state value
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className={styles.paylinkInut}>
      <Lottie
        options={defaultOptions}
        height={width > 990 ? 200 : 200}
        width={width > 990 ? 200 : 200}
      />
      <p>Click on the button to make the payment</p>
      <a href={`tel:${ussd}`}>
        <button onClick={handleButtonClick} className={styles.ussBtn}>
          <h1 className={styles.h1Code}>
            {set == "ussd" ? `${ussd}#` : "*326*000*refCode#"}
          </h1>
        </button>
      </a>
      <p className={styles.ussdCode} onClick={copyUssd}>
        {isCopied ? "Copied" : "Copy"} the USSD Code.
      </p>
      <p className={styles.complete}>Pay {amount}</p>
    </div>
  );
};

export default USSDInput;
