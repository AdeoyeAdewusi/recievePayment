import React, { useState } from "react";
import styles from "./styles.module.css";
import Iframe from "react-iframe";

const CardDetails = ({ action }: { action: any }) => {
  const [activeBtn, setActiveBtn] = useState(true);
  return (
    <div className={styles.cardDtsInputs}>
      <Iframe
        url="https://ebctest.cybersource.com/ebc2/invoicing/payInvoice/wy3obv4tWEXQmQwtZColR6ay4EQB2SVgirlP7C6lCBW2j7oD8rTRm0JgadNkhvOX?version=v2.1"
        width="540px"
        height="700px"
        id=""
        className=""
        display="block"
        position="relative"
        scrolling="yes"
      />
    </div>
  );
};

export default CardDetails;
