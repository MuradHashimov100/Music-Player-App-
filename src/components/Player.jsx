import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
  faVolumeUp,
  faVolumeMute
} from "@fortawesome/free-solid-svg-icons";
import { icon } from '@fortawesome/fontawesome-svg-core';
function Music({
  songs,
  setSongs,
  audioRef,
  isplaying,
  setIsplaying,
  currentSong,
  setCurrentsong,
  musicInfo,
  setMusicInfo,
  volume,
  setVolume
}){
 
    
    // console.log('Player JSX is rendered');
  // const playMusic =  () =>{
  //   setIsplaying(!isplaying);
  // }
  const playSongHandler = () => {
    if (isplaying) {
      audioRef.current.pause();
      setIsplaying(!isplaying);
    } else {
      audioRef.current.play();
      setIsplaying(!isplaying);
    }
  };
  const muteVolume = () =>{

    if(volume){
      audioRef.current.muted = true;
      setVolume(false);
    }
    else{
      audioRef.current.muted = false;
      setVolume(true);
    }
  }

  const getTime = (time) =>{

    let str = Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);

 
     return str;
     
     
  }

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setMusicInfo({
      ...musicInfo,
      currentTime: e.target.value,
    });
  };

  const  skipPrev  = async (e) =>{

    const index = songs.findIndex((song) => song.id === currentSong.id);

    if(index == 0){
     await setCurrentsong(songs[songs.length - 1]);
    }
    else{
      await setCurrentsong(songs[index - 1])
    }
    audioRef.current.currentTime = 0;
    if(isplaying) audioRef.current.play()
  }

  

  const skipNext = async (e) =>{

    let index = songs.findIndex(mus => mus.id == currentSong.id)
    if(index == songs.length - 1){
     await setCurrentsong(songs[0]);
    }
    else{
     await setCurrentsong(songs[index + 1])
    }
    audioRef.current.currentTime = 0;
    if(isplaying) audioRef.current.play()
    console.log('clicked');
  }

  





  const trackAnimation = {
    transform: `translateX(${musicInfo.percentage}%)`,
  };

  const trackBgColor = {
    background: `linear-gradient(to bottom,  ${currentSong.color[0]} 0%,${currentSong.color[1]} 100%)`
  }
  
  return (
    <>
    <div className="player">
      <div className="time-control">
        <p>{getTime(musicInfo.curTime)? getTime(musicInfo.curTime) : '0:00'}</p>
        <div className='Range' style={trackBgColor} >
          <input
            type="range" 
            value={musicInfo.curTime}
            min= '0'
            max={musicInfo.duration || 0 }
            onChange={dragHandler}
            />
          <div  style={trackAnimation} className='animate-track' ></div>     
        </div>
        <p>{getTime(musicInfo.duration) ? getTime(musicInfo.duration) : '0:00'}</p>
      </div>
      <div className="play-control">
      <FontAwesomeIcon
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
          onClick={skipPrev}
        />
        <FontAwesomeIcon 
          className="play"
          icon={isplaying ? faPause : faPlay}
          size="2x"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
          onClick={skipNext}
        />
        <FontAwesomeIcon
        icon={volume ? faVolumeUp : faVolumeMute}
        onClick={muteVolume}
        />
      </div>
    </div>
    </>
  )
}

export default Music;