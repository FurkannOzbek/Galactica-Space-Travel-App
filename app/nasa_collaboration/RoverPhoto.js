import styles from "./page.module.css";

export const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <div className={styles.roverCard}>
      <p>Date: {date}</p>
      <img className={styles.roverImg} src={src} alt={`Rover photo taken on ${date}`} />
      <p>Rover: {roverName}</p>
    </div>
  );
};
