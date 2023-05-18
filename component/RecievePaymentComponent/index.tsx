import React, { useEffect, useState } from "react";

import { TbCreditCard } from "react-icons/tb";
import styles from "./styles.module.css";
import CardDetails from "./CardDtails";
import USSDInput from "./Ussd";
import QrInput from "./Qr";
import Transfer from "./Transfer";
import { useRouter } from "next/router";
import { BiPhoneCall, BiTransferAlt } from "react-icons/bi";
import ElevateLogo from "../EllwvateLogoSvg";

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
    setSelected(paymenttype);
  }, [paymenttype]);

  const PaylinkComponenet = () => {
    switch (selcted) {
      case "card":
        return <CardDetails action={""} amount={router?.query?.amount} />;
      case "transfer":
        return <Transfer information={info} amount={router?.query?.amount} />;
      case "ussd":
        return (
          <USSDInput
            set={router?.query.index}
            amount={router?.query?.amount}
            ussd={router?.query.index == "ussd" ? router?.query.data : null}
          />
        );
      case "qr":
        return (
          <QrInput
            information={info}
            terminalId={router?.query?.terminalId}
            marchantCode={router?.query?.merchantCode}
            amount={router?.query?.amount}
            set={router?.query.index}
            qrData={router?.query.index == "qr" ? router?.query.data : null}
          />
        );
    }
  };
  return (
    <div className={styles.recievePaymentBox}>
      <div className={styles.cardDets}>
        <div className={styles.cardDetsCard}>
          <ElevateLogo />
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
        <div className={styles.sidesII}>
          <div className={styles.cardDtsInputs}>
            <h2>{info?.qrMerchantInfo?.terminalName}</h2>

            <p>Merchant Link</p>
          </div>
          <div className={styles.cardDtsInputsII}>{PaylinkComponenet()}</div>
        </div>
      </div>
    </div>
  );
};

export default ReacievePaymntComponent;
