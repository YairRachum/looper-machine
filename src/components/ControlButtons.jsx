import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import "../styles/controlButtons.css"

const ControlButtons = ({ onPlayLoopClicked, onStopLoopClicked, isPlaying, isLoopHasSoundActive }) => {
  return (
    <div className="control-btn-container">
      <button
        className="control-btn"
        disabled={!isLoopHasSoundActive || isPlaying}
        onClick={() => onPlayLoopClicked()}
      >
        <FontAwesomeIcon icon={faPlay} />
      </button>

      <button 
      className="control-btn"
       disabled={!isPlaying}
      onClick={() => onStopLoopClicked()}>
        <FontAwesomeIcon icon={faPause} />
      </button>
    </div>
  );
};

export default ControlButtons;
