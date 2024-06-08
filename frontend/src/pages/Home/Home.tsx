import React from "react";
import FootballNews from "../../components/FootballNews/FootballNews";
import TransferNews from "../../components/TransferNews/TransferNews";
import LiveScores from "../../components/LiveScores/LiveScores";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.topSection}>
        <div className={styles.news}>
          <FootballNews />
        </div>
        <div className={styles.news}>
          <TransferNews />
        </div>
      </div>
      <div className={styles.liveScores}>
        <LiveScores />
      </div>
    </div>
  );
};

export default Home;
