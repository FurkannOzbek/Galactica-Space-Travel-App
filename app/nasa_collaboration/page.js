"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { RoverPhoto } from "./RoverPhoto";

const API_KEY = process.env.REACT_APP_NASA_API_KEY;

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    // Function to fetch Mars rover photos
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then((response) =>
        response.json()
      );
      setRoverPhoto(roverPhotoResponse);
    };
    // Function to fetch Astronomy Picture of the Day
    const fetchPicOfTheDay = async () => {
      const picOfTheDayResponse = await fetch(NASA_URLs.astronomyPicOfTheDay).then((response) =>
        response.json()
      );
      setDailyImg(picOfTheDayResponse);
    };

    fetchRoverPhotos();
    fetchPicOfTheDay();
    console.log(dailyImg);
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2 className={styles.cardTitle}>Astronomy Picture of the day</h2>

          <img className={styles.podImg} src={dailyImg?.url} />
          <h2 className={styles.imgTitle}> {dailyImg?.title}</h2>
          <p className={styles.imgDescription}> {dailyImg?.explanation}</p>
        </section>
        <section className={`card ${styles.roverCard}`}>
          <h2 className={styles.roverHeader}>Rover Photos</h2>
          {roverPhoto?.photos?.length ? (
            <div className={styles.roverGrid}>
              {roverPhoto.photos.map((photo) => (
                <RoverPhoto
                  key={photo.id}
                  src={photo.img_src}
                  date={photo.earth_date}
                  roverName={photo.rover.name}
                  className={styles.roverImg}
                />
              ))}
            </div>
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
