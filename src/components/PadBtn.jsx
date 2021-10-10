import React from "react";
import "../styles/pad.css"

const PadBtn = ({ sound, onPadClicked }) => {

  return (
    <button
      className={sound.isPlaying ? "clicked-button" :"button"}
      key={sound.id}
      onClick={() => onPadClicked(sound.id)}
    >
      <h4 className="sound-name">{sound.name}</h4>
    </button>
  );
};

export default PadBtn;
