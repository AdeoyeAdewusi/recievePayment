import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import ReacievePaymntComponent from "../../component/RecievePaymentComponent";
import { useRouter } from "next/router";
import axios from "axios";

const HomeMain = () => {
  const [page, setPage] = useState("PaymentItem");
  const [accountInfo, setAccountInfo] = useState();
  const router = useRouter();
  console.log(router);
  useEffect(() => {
    const datas = {
      accountId: router?.query.accountId,
    };
    axios
      .post(
        `https://testvate.live/bank-account/search`,
        { accountId: router?.query.accountId },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Client-Type": "web",
          },
        }
      )
      .then((response) => {
        setAccountInfo(response?.data?.data);
      })
      .catch((error) => {
        console.log(error?.response);
      });
  }, [router?.query]);

  const recievePaylinkComponenet = () => {
    switch (page) {
      case "PaymentItem":
        return (
          <ReacievePaymntComponent
            info={accountInfo}
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
