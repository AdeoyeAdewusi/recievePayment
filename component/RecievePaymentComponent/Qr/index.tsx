import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Lottie from "react-lottie";
import animationData from "../../Lotties/qr.json";
const QrInput = ({ qrData }: { qrData: any }) => {
  const [qrDatas, setQrData] = useState("");
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    setQrData(`data:image/png;base64,${qrData}`?.split(" ")?.join(""));
  }, [qrData]);
  return (
    <div className={styles.qrInp}>
      <Lottie options={defaultOptions} height={200} width={200} />
      <img src={qrDatas} width={254} height={254} />
      <div>
        <p>Merchant ID:</p>
        <p>1234567890</p>
      </div>
      <div>
        <p>Terminal ID:</p>
        <p>1234567890</p>
      </div>
    </div>
  );
};

export default QrInput;
