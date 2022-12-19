import React from "react";
import Sidebarinner from "./Sidebarinner";
const Sidebar = ({
  libraryStatus,
  songs,
  setSongs,
  isplaying,
  audioRef,
  isPlaying,
  setCurrentsong,
  setIsplaying
  }) => {
  // console.log(songs);
  // console.log(props.songs);

  return (
    <div  className={`library ${libraryStatus ? "active-library" : ""}`}>
    <h2>My Library</h2>
    <div className="library-songs">
      {
        songs.map((song) => 
          <Sidebarinner
          setCurrentsong={setCurrentsong}
          key={song.id}
          song={song}
          id={song.id}
          audioRef={audioRef}
          isplaying={isplaying}
          setSongs={setSongs}
          songs={songs}
          setIsplaying={setIsplaying}
          >
          </Sidebarinner>
        )
      }
    </div>
  </div>
  );
};

export default Sidebar;