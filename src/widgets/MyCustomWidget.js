import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "../styles/MyCustomWidget.css";

//JSON data of songsList
import { songsList } from "../songsList";

export default function MyCustomWidget() {
  const [currentSong, setCurrentSong] = useState(songsList[0]);

  const playNextSong = () => {
    setCurrentSong(
      (prevSong) => songsList[(prevSong.id + 1) % songsList.length]
    );
  };

  const playPreviousSong = () => {
    setCurrentSong(
      (prevSong) =>
        songsList[(prevSong.id - 1 + songsList.length) % songsList.length]
    );
  };

  return (
    <div className="MusicPlayer">
      <h2>Currently Playing</h2>
      <img
        src={currentSong.img_src}
        alt="Artist pic"
        className="Thumbnail"
        draggable={false}
      />
      <div style={{ textAlign: "center" }}>
        <h3>{currentSong.title}</h3>
        <h5>{currentSong.artist}</h5>
      </div>
      <div style={{ width: "17rem" }}>
        <AudioPlayer
          src={currentSong.src}
          showJumpControls={false}
          showSkipControls={true}
          showFilledVolume={false}
          onClickNext={() => playNextSong()}
          onClickPrevious={() => playPreviousSong()}
          onEnded={() => playNextSong()}
        />
      </div>
    </div>
  );
}
