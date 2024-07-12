import React from "react";
import styles from "./topCard.module.css";

const TopCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.miniContainer}>
        <img src="/images/image-jeremy.png" alt="img-people" />
        <div className={styles.bio}>
          <p>Report for</p>
          <h2>Jeremy Robson</h2>
        </div>
      </div>
      <div className={styles.time}>
        <p>
          <a>Daily</a>
        </p>
        <p>
          <a>Weakly</a>
        </p>
        <p>
          <a>Monthly</a>
        </p>
      </div>
    </div>
  );
};

export default TopCard;
