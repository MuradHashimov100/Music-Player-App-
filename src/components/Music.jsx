import React from "react";

import testImg from '../assets/testimg.jpg';

import styles from  '../css/Main.module.css';
// import { keyframes } from "styled-components";

const Music = ({
  currentSong,
  isplaying,
  setIsplaying
}) => {






  return (
    <div className="song-container">
      <img src={currentSong.cover}  alt="Song Cover"  
      className={isplaying ? styles.rotate : styles.paused}
      />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Music;
