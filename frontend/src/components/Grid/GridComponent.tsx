import styles from "./GridComponent.module.css";

const GridComponent: React.FC = () => {
  const gridItems: JSX.Element[] = [];
  for (let i = 0; i < 15; i++) {
    gridItems.push(
      <div className={styles.gridItem}>
        <p>Home Team</p>
        <p>vs</p>
        <p>Away Team</p>
      </div>
    );
  }
  return <div className={styles.gridContainer}>{gridItems}</div>;
};

export default GridComponent;
