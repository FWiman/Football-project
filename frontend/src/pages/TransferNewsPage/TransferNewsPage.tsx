import React from "react";
import styles from "./TransferNewsPage.module.css";
import TransferNewsComponent from "../../components/TransferNewsComponent/TransferNewsComponent";

const TransferNewsPage: React.FC = () => {
  return (
    <>
      <div className={styles.mainHeader}>Transfer News</div>
      <TransferNewsComponent />
    </>
  );
};

export default TransferNewsPage;
