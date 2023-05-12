import React, { useState } from "react";
import styles from "./styles.module.css";
import ReacievePaymntComponent from "../../component/RecievePaymentComponent";
import { useRouter } from "next/router";

const HomeMain = () => {
  const [page, setPage] = useState("PaymentItem");
  const router = useRouter();

  const recievePaylinkComponenet = () => {
    switch (page) {
      case "PaymentItem":
        return (
          <ReacievePaymntComponent
            data={router.query.data}
            paymenttype={router.query.index}
            newPage={1}
          />
        );
    }
  };
  return (
    <div className={styles.recievePaylink}>{recievePaylinkComponenet()}</div>
  );
};

export default HomeMain;
