import React from "react";
import ReactDOM from "react-dom/client";
import EmblaCarousel from "../../components/Carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

import "../../css/base.css";
import "../../css/sandbox.css";
import "../../css/embla.css";
import styles from "./TeamsPage.module.css";

import SingleVersusTabComponent from "../../components/LiveScores/SingleVerusTab/SingleVersusTabComponent";
import GridComponent from "../../components/Grid/GridComponent";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 11;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const TeamsPage: React.FC = () => {
  //Tabs variable to store array of SingleVersusTab components. This is mock data.
  const tabs: JSX.Element[] = [];

  //Store 5 tabs to be displayed. Change as you like.
  for (let i = 0; i < 5; i++) {
    tabs.push(
      <SingleVersusTabComponent
        key={i}
        Teams={[
          {
            teamName: "HSV",
            teamLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUlwwpH4tQt6i3WDKZeHIi5Q3_NUSbgAryw&s",
          },
          {
            teamName: "Liverpool",
            teamLogo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
          },
        ]}
      />
    );
  }
  return (
    <>
      <div className={styles.teamLogo} style={{ backgroundImage: `url("https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg")` }}></div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <h1 className={styles.leagueHeader}>Latest Results</h1>
      <div className={styles.liveScoresContainer}>{tabs}</div>
      <div style={{ marginTop: "10%" }}>
        <h1 className={styles.leagueHeader}>Schedule</h1>
        <GridComponent />
      </div>
    </>
  );
};

export default TeamsPage;
