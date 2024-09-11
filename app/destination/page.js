"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import { PlanetWishlistItem } from "./PlanetWishListItem";
import { Tulpen_One } from "next/font/google";
import { PlanetCard } from "./PlanetCard";

const planets = [
  {
    name: "EUROPA",
    description:
      "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
    thumbnail: "/destination/image-europa.png",
    isSelected: false,
  },
  {
    name: "MARS",
    description:
      "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
    thumbnail: "/destination/image-mars.png",
    isSelected: false,
  },
  {
    name: "MOON",
    description:
      "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
    thumbnail: "/destination/image-moon.png",
    isSelected: false,
  },
  {
    name: "TITAN",
    description:
      "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
    thumbnail: "/destination/image-titan.png",
    isSelected: false,
  },
];

export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  const onAddOrRemovePlanet = (name) => {
    setSelectedPlanets((prevSelected) => {
      if (prevSelected.includes(name)) {
        return prevSelected.filter((planet) => planet !== name);
      } else {
        return [...prevSelected, name];
      }
    });
  };

  const numberOfPlanets = selectedPlanets.length;
  const checkIfIssSelected = (name) => selectedPlanets.includes(name);

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

          <b>List coming soon after lesson 3!</b>
          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
          {/* 
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div> */}
        </section>
        <section className="card">
          <h2>Possible destinations</h2>

          <PlanetCard
            name={planets[0].name}
            description={planets[0].description}
            thumbnail={planets[0].thumbnail}
            isSelected={checkIfIssSelected(planets[0].name)}
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
          <PlanetCard
            name={planets[1].name}
            description={planets[1].description}
            thumbnail={planets[1].thumbnail}
            isSelected={checkIfIssSelected(planets[1].name)}
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
          <PlanetCard
            name={planets[2].name}
            description={planets[2].description}
            thumbnail={planets[2].thumbnail}
            isSelected={checkIfIssSelected(planets[2].name)}
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
          <PlanetCard
            name={planets[3].name}
            description={planets[3].description}
            thumbnail={planets[3].thumbnail}
            isSelected={checkIfIssSelected(planets[3].name)}
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
        </section>
      </main>
    </div>
  );
};

export default Destinations;
