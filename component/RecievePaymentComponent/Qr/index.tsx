import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Lottie from "react-lottie";
import animationData from "../../Lotties/qr.json";
const QrInput = ({
  set,
  qrData,
  terminalId,
  marchantCode,
}: {
  set: any;
  qrData: any;
  terminalId: any;
  marchantCode: any;
}) => {
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
    setQrData(
      `data:image/png;base64,${decodeURIComponent(qrData)}`
        ?.split(" ")
        ?.join("")
    );
  }, [qrData]);
  return (
    <div className={styles.qrInp}>
      <Lottie options={defaultOptions} height={200} width={200} />
      {set == "qr" ? (
        <>
          <img src={qrDatas} width={254} height={254} />
          <div>
            <p>Merchant ID:</p>
            <p>{marchantCode}</p>
          </div>
          <div>
            <p>Terminal ID:</p>
            <p>{terminalId}</p>
          </div>
        </>
      ) : (
        <p>You Did Not Select Qr Code</p>
      )}
    </div>
  );
};

export default QrInput;
