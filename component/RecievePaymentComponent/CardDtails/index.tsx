import React, { useState } from "react";
import styles from "./styles.module.css";
import Iframe from "react-iframe";
import Link from "next/link";
import BillingAddress from "../BillingAddress";

const CardDetails = ({ action, amount }: { action: any; amount: any }) => {
  const [payentComp, setPayentComp] = useState(true);
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
    copyTextToClipboard(
      "https://ebctest.cybersource.com/ebc2/invoicing/payInvoice/wy3obv4tWEXQmQwtZColR6ay4EQB2SVgirlP7C6lCBW2j7oD8rTRm0JgadNkhvOX?version=v2.1"
    )
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
  };
  return (
    <>
      {payentComp ? (
        <div className={styles.cardDtsInputs}>
          <p className={styles.complete}>Pay {amount}</p>
          <div className={styles.inputCopy}>
            <input
              className={styles.paylinkInput}
              type="text"
              value="https://ebctest.cybersource.com/ebc2/invoicing/payInvoice/wy3obv4tWEXQmQwtZColR6ay4EQB2SVgirlP7C6lCBW2j7oD8rTRm0JgadNkhvOX?version=v2.1"
            />
            <p onClick={copyUssd}> {isCopied ? "Copied" : "Copy"} </p>
          </div>
          <Link
            href="https://ebctest.cybersource.com/ebc2/invoicing/payInvoice/wy3obv4tWEXQmQwtZColR6ay4EQB2SVgirlP7C6lCBW2j7oD8rTRm0JgadNkhvOX?version=v2.1"
            target="_blank"
          >
            <button>Pay</button>
          </Link>
          <div>
            <p
              className={styles.complete}
              onClick={() => setPayentComp((prev) => !prev)}
            >
              I have Completed the payment
            </p>
          </div>
        </div>
      ) : (
        <BillingAddress
          action={() => setPayentComp((prev) => !prev)}
          newPage=""
        />
      )}
    </>
  );
};

export default CardDetails;
