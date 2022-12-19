import React from "react";

import testImg from '../assets/testimg.jpg';

const Sidebarinner = ({
    song,
    audioRef,
    currentSong,
    setCurrentsong,
    songs,
    id,
    setSongs,
    isPlaying,
    setIsplaying
}) => { 

    const selectSongHandler = async () => {
        await setCurrentsong(song);
    
        // Add Active State
        const newSong = songs.map((song) => {
          if (song.id === id) {
            return {
              ...song,
              active: true,
            };
          } else {
            return {
              ...song,
              active: false,
            };
          }
        });
        setSongs(newSong);
        // if (isPlaying) {
        //   audioRef.current.play();
        //   setIsplaying(isPlaying);
        // } else {
        //   audioRef.current.pause();
        //   setIsplaying(!isPlaying);
        // }
        audioRef.current.play();

  

    }
  return (
  <>
    <div onClick={selectSongHandler} className={`library-song ${song.active ? 'selected' : ''}`}   >
        <img src={song.cover}  alt="Song Cover" />
        <div className="song-description">
          <h3>{song.name}</h3>
          <h4>{song.artist}</h4>
        </div>
      </div>
  </>
  );
};

export default Sidebarinner;