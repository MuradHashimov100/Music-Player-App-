import React, { useState,useRef,useEffect } from "react";

// Import React Components
import Player from '../src/components/Player';
import Music from '../src/components/Music';
import Nav from '../src/components/Nav';
import Sidebar from './components/Sidebar';
// Import React Components

// Import data,css Files
import styles from  '../src/css/Main.css';

import  data  from './assets/data';



function App() {  
  const audioRef = useRef();
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [volume, setVolume]  =useState(true);
  const [songs, setSongs] = useState(data());
  const [currentSong,setCurrentsong] = useState(songs[1]);
  const [isplaying,setIsplaying] = useState(false);
  const [musicInfo,setMusicInfo] = useState({
    duration:0,
    curTime:0,
    percentage:0
  })


 
  
  const onPlaying = (e) =>{


    const curTime = audioRef.current.currentTime;
   const duration =  audioRef.current.duration;
   const musicPercentage = (Math.round(audioRef.current.currentTime ) / Math.round(audioRef.current.duration) )  * 100;
   setMusicInfo(
   {
    ...musicInfo,
    curTime,
    duration,
    percentage:musicPercentage,
   }
   )
  }

    

  return (
  <>
      <div className={`App   ${libraryStatus? 'library-active' : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Music
          currentSong={currentSong}
          setCurrentsong={setCurrentsong}
          isplaying={isplaying}
          setIsplaying={setIsplaying}
      />
      <Player
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentsong={setCurrentsong}
        isplaying={isplaying}
        setIsplaying={setIsplaying}
        audioRef={audioRef}
        musicInfo={musicInfo}
        setMusicInfo={setMusicInfo}
        volume={volume}
        setVolume={setVolume}
      />
      <Sidebar 
      libraryStatus={libraryStatus}
      songs={songs}
      setSongs={setSongs}
      currentSong={currentSong} 
      setCurrentsong={setCurrentsong}
      isplaying={isplaying}
      setIsplaying={setIsplaying}
      audioRef={audioRef}
      musicInfo={musicInfo}
      setMusicInfo={setMusicInfo}
      />
      <audio
      src={currentSong.audio}
      ref={audioRef}
      onTimeUpdate={onPlaying}
      onLoadedMetadata={() => {
        const curTime = audioRef.current.currentTime;
   const duration =  audioRef.current.duration;
   const musicPercentage = (Math.round(audioRef.current.currentTime ) / Math.round(audioRef.current.duration) )  * 100;
   setMusicInfo(
   {
    ...musicInfo,
    curTime,
    duration,
    percentage:musicPercentage,
   }
   )
       
      }}
      >
      </audio>
      </div>
  </>
  )
}
export default App;
