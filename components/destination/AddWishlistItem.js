import { useState } from "react";
import styles from "./destination.module.css";

export const AddWishlistItem = ({ onAddCustomPlanet }) => {
  const [thumbnail, setThumbnail] = useState("/destination/image-europa.png");
  const [name, setInputPlanetName] = useState("");

  const inputHandler = (e) => {
    setInputPlanetName(e.target.value.toUpperCase());
  };

  const selectHandler = (e) => {
    setThumbnail(e.target.value);
  };

  const onAddItemPressed = () => {
    onAddCustomPlanet(name, thumbnail);
    setInputPlanetName("");
    setThumbnail("/destination/image-europa.png");
  };

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input id="customWishlist" type="text" value={name} onChange={inputHandler} />
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select id="customWishlistThumbnail" value={thumbnail} onChange={selectHandler}>
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-titan.png">TITAN</option>
      </select>
      <button onClick={onAddItemPressed}>ADD CUSTOM</button>
    </div>
  );
};
