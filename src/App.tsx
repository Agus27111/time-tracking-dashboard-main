import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import axios from "axios";
import Card from "./assets/component/Card/Card";
import TopCard from "./assets/component/TopCard/TopCard";

function App() {
  const [dataAPI, setDataAPI] = useState<any[]>([]);

  const colors = [
    "hsl(15, 100%, 70%)",
    "hsl(195, 74%, 62%)",
    "hsl(348, 100%, 68%)",
    " hsl(145, 58%, 55%)",
    "hsl(264, 64%, 52%)",
    " hsl(43, 84%, 65%)",
  ];

  useEffect(() => {
    axios
      .get("/data.json")
      .then((response) => setDataAPI(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.topCard}>
        <TopCard />
      </div>

      {dataAPI.map((item, index) =>
        item.timeframes ? (
          <Card
            key={item.id}
            title={item.title}
            curTime={item.timeframes.weekly.current}
            prevTime={item.timeframes.weekly.previous}
            src={item.src}
            backgroundColor={colors[index % colors.length]}
            className={styles[`card${index + 1}`]}
          />
        ) : null
      )}
    </main>
  );
}

export default App;
