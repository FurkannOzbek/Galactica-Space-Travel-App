import styles from "@/components/destination/destination.module.css";

export const PlanetWishlistItem = ({ name, thumbnail, onRemove }) => {
  return (
    <div className={styles.wishlistItem}>
      <img className={styles.wishlistItemThumbnail} src={thumbnail} alt="" />
      <b>{name}</b>
      <button onClick={onRemove}>remove</button>
    </div>
  );
};
