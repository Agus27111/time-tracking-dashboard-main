import react from "react";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <main>
        <div className={styles.container}>
          <div className={styles.miniContainer}>
            <img src="../public/images/image-jeremy.png" alt="img-people" />
            <div className={styles.bio}>
              <p>Report for</p>
              <h2>Jeremy Robson</h2>
            </div>
          </div>
          <div className={styles.time}>
            <p>Daily</p>
            <p>Weakly</p>
            <p>Monthly</p>
          </div>
        </div>
        <div className="card">
          <img src="../public/images/icon-ellipsis.svg" alt="icon" />
          <div className="containerCard">
            <div className="work">
              <p>Work</p>
              <h1>32Hrs</h1>
            </div>
            <div className="desc">
              <p>...</p>
              <p>Last Week - 36 hrs</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
