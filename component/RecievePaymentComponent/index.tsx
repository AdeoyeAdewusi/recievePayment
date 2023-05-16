import React, { useEffect, useState } from "react";

import { TbCreditCard } from "react-icons/tb";
import styles from "./styles.module.css";
import CardDetails from "./CardDtails";
import USSDInput from "./Ussd";
import QrInput from "./Qr";
import Transfer from "./Transfer";
import { useRouter } from "next/router";
import { BiPhoneCall, BiTransferAlt } from "react-icons/bi";

const ReacievePaymntComponent = ({
  info,
  newPage,
  data,
  paymenttype,
}: {
  info: any;
  newPage: any;
  data: any;
  paymenttype: any;
}) => {
  const router = useRouter();
  const [activeBtn, setActiveBtn] = useState(true);
  const [page, setPage] = useState(newPage);
  const [selcted, setSelected] = useState(paymenttype);
  useEffect(() => {
    setSelected(router.query.index);
    console.log(router.query);
  }, [router.query.index]);

  const PaylinkComponenet = () => {
    switch (selcted) {
      case "card":
        return <CardDetails action={""} />;
      case "transfer":
        return <Transfer information={info} />;
      case "ussd":
        return (
          <USSDInput
            set={router?.query.index}
            ussd={router?.query.index == "ussd" ? router?.query.data : null}
          />
        );
      case "qr":
        return (
          <QrInput
            terminalId={router?.query?.terminalId}
            marchantCode={router?.query?.merchantCode}
            set={router?.query.index}
            qrData={router?.query.index == "qr" ? router?.query.data : null}
          />
        );
    }
  };
  return (
    <div className={styles.recievePaymentBox}>
      <div className={styles.cardDets}>
        {" "}
        <div className={styles.cardDetsCard}>
          <p>Choose Channel</p>
          <div
            className={selcted === "card" ? styles.marvel : styles.notMarvel}
            onClick={() => setSelected("card")}
          >
            <TbCreditCard />
            <p>Card</p>
          </div>
          <div
            className={
              selcted === "transfer" ? styles.marvel : styles.notMarvel
            }
            onClick={() => setSelected("transfer")}
          >
            <BiTransferAlt />
            <p>Transfer</p>
          </div>
          <div
            className={selcted === "ussd" ? styles.marvel : styles.notMarvel}
            onClick={() => setSelected("ussd")}
          >
            <BiPhoneCall />
            <p>USSD</p>
          </div>
          <div
            className={selcted === "qr" ? styles.marvel : styles.notMarvel}
            onClick={() => setSelected("qr")}
          >
            <TbCreditCard />
            <p>QR</p>
          </div>
        </div>
        <div className={styles.cardDtsInputs}>{PaylinkComponenet()}</div>
      </div>
    </div>
  );
};

export default ReacievePaymntComponent;
