"use client";
import { useState } from "react";
import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import { PlanetWishlistItem } from "./PlanetWishlistItem";
import { PlanetCard } from "./PlanetCard";

const planets = [
  {
    name: "EUROPA",
    description:
      "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
    thumbnail: "/destination/image-europa.png",
  },
  {
    name: "MARS",
    description:
      "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
    thumbnail: "/destination/image-mars.png",
  },
  {
    name: "MOON",
    description:
      "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
    thumbnail: "/destination/image-moon.png",
  },
  {
    name: "TITAN",
    description:
      "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
    thumbnail: "/destination/image-titan.png",
  },
];

export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  const onAddOrRemovePlanet = (name) => {
    setSelectedPlanets((prevSelected) => {
      if (prevSelected.some((planet) => planet.name === name)) {
        return prevSelected.filter((planet) => planet.name !== name);
      } else {
        const planet = planets.find((p) => p.name === name);
        return planet ? [...prevSelected, planet] : prevSelected;
      }
    });
  };

  const addCustomPlanet = (name, thumbnail) => {
    if (name && thumbnail) {
      setSelectedPlanets((prevSelected) => [...prevSelected, { name, thumbnail }]);
    }
  };

  const checkIfIsSelected = (name) => selectedPlanets.some((planet) => planet.name === name);

  const removeFromWishlist = (name) => {
    setSelectedPlanets((prevSelected) => prevSelected.filter((planet) => planet.name !== name));
  };

  const numberOfPlanets = selectedPlanets.length;

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>

          {numberOfPlanets === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <p>You have {numberOfPlanets} in your wishlist</p>
          )}

          <AddWishlistItem onAddCustomPlanet={addCustomPlanet} />

          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            {selectedPlanets.map((planetName) => (
              <PlanetWishlistItem
                key={planetName.name}
                name={planetName.name}
                onRemove={() => removeFromWishlist(planetName.name)}
                thumbnail={planetName.thumbnail}
              />
            ))}
          </div>
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {planets.map((planet) => (
            <PlanetCard
              key={planet.name}
              name={planet.name}
              description={planet.description}
              thumbnail={planet.thumbnail}
              isSelected={checkIfIsSelected(planet.name)}
              onAddOrRemovePlanet={onAddOrRemovePlanet}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
