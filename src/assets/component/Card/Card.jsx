import React from "react";
import styles from "./card.module.css";
const Card = ({ title, curTime, prevTime, src, backgroundColor, className, }) => {
    return (<div className={`${styles.card} ${className}`} style={{ backgroundColor }}>
      {src && <img src={src} alt="icon" className={styles.icon}/>}
      <div className={styles.containerCard}>
        <div className={styles.work}>
          <p>
            <strong>{title}</strong>
          </p>
          <h2>{curTime}Hrs</h2>
        </div>
        <div className={styles.desc}>
          <img src="/images/icon-ellipsis.svg" alt="elipsis"/>
          <p>Last Week - {prevTime}hrs</p>
        </div>
      </div>
    </div>);
};
export default Card;
//# sourceMappingURL=Card.jsx.map