import React, { useState } from "react";
import styles from "./styles.module.css";

const CardDetails = ({ action }: { action: any }) => {
  const [activeBtn, setActiveBtn] = useState(true);
  return (
    <div className={styles.cardDtsInputs}>
      <div>
        <div className={styles.logos}>
          <div>
            <p>Marvelous Solutions</p>

            <p>marvelousc</p>
          </div>
        </div>
      </div>
      <h1 className={styles.enter}>Enter your card details to make payment</h1>
      <div className={styles.allCardDets}>
        <div className={styles.cardNum}>
          <label>Card Number</label>
          <input type="text" placeholder="0000 0000 0000 0000" />
        </div>
        <div className={styles.moreCardDets}>
          <div>
            <label>Card Expiry</label>
            <input type="text" placeholder="MM/YY" />
          </div>
          <div>
            <label>CVV</label>
            <input type="text" placeholder="123" />
          </div>
        </div>
        <div onClick={action} className={styles.buttonTop}>
          <a href="*303*238473*2000#">
            <button>Pay $50000#</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
