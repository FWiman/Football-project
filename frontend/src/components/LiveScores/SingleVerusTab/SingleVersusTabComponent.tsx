import React, { useEffect } from "react";
import styles from "./SingleVersusTabComponent.module.css";

interface TeamInfo {
  teamName: string;
  teamLogo: string;
}

interface Teams {
  Teams: TeamInfo[];
}

const SingleVersusTabComponent: React.FC<Teams> = (props: Teams) => {
  useEffect(() => {
    console.log("hello from singelversus tab");
    console.log("team logo: ", props.Teams[0].teamLogo);
  }, []);

  return (
    <div className={styles.resultContainer}>
      <div className={styles.teamsContainer}>
        <div className={styles.teamNameContainer}>{props.Teams[0].teamName}</div>
        <div className={styles.teamLogoContainerLeft} style={{ backgroundImage: `url(${props.Teams[0].teamLogo}` }}></div>
      </div>
      <div className={styles.versusContainer}>1 - 2</div>
      <div className={styles.teamsContainer}>
        <div className={styles.teamLogoContainerRight} style={{ backgroundImage: `url(${props.Teams[1].teamLogo}` }}></div>
        <div className={styles.teamNameContainer}>{props.Teams[1].teamName}</div>
      </div>
    </div>
  );
};

export default SingleVersusTabComponent;
