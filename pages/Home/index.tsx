import React, { useState } from "react";
import styles from "./styles.module.css";
import ReacievePaymntComponent from "../../component/RecievePaymentComponent";

const HomeMain = () => {
  const [page, setPage] = useState("PaymentItem");
  const recievePaylinkComponenet = () => {
    switch (page) {
      case "PaymentItem":
        return (
          <ReacievePaymntComponent
            newPage={1}
            action={() => setPage("BillingAddress")}
          />
        );
    }
  };
  return (
    <div className={styles.recievePaylink}>{recievePaylinkComponenet()}</div>
  );
};

export default HomeMain;
