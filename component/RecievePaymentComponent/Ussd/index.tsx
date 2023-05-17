import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Lottie from "react-lottie";
import animationData from "../../Lotties/call.json";
const USSDInput = ({ set, ussd }: { set: any; ussd: any }) => {
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
  return (
    <div className={styles.paylinkInut}>
      <Lottie
        options={defaultOptions}
        height={width > 990 ? 300 : 200}
        width={width > 990 ? 300 : 200}
      />
      <p>Click on the button to make the payment</p>
      <a href={`tel:${ussd}`}>
        <button onClick={handleButtonClick} className={styles.ussBtn}>
          {set == "ussd" ? ussd : "*326*000*refCode#"}
        </button>
      </a>
    </div>
  );
};

export default USSDInput;
