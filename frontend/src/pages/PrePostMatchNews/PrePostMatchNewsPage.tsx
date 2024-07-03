import React from "react";
import styles from "./PrePostMatchNewsPage.module.css";
import PrePostMatchSingleNewsComponent from "../../components/PrePostMatchSingleNews/PrePostMatchSingleNewsComponent";

const PrePostMatchNewsPage: React.FC = () => {
  return (
    <>
      <div className={styles.mainHeader}>Match News</div>

      <div>
        <h1 className={styles.sectionHeader}>Pre Game News</h1>
        <PrePostMatchSingleNewsComponent />
        <PrePostMatchSingleNewsComponent />
        <PrePostMatchSingleNewsComponent />
      </div>
      <div>
        <h1 className={styles.sectionHeader}>Post Game News</h1>
        <PrePostMatchSingleNewsComponent />
        <PrePostMatchSingleNewsComponent />
        <PrePostMatchSingleNewsComponent />
        <PrePostMatchSingleNewsComponent />
      </div>
    </>
  );
};

export default PrePostMatchNewsPage;
