import React, { useState, useCallback, useEffect } from "react";
import PadBtn from "./PadBtn.jsx";
import ControlButtons from "./ControlButtons.jsx";
import { createSoundsArray } from "../soundsArray"
import "../styles/layout.css";

const Layout = () => {
  //our app states
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundsArray, setSoundsArray] = useState([]);
  const [currentSoundInterval, setCurrentSoundInterval] = useState(0);
  const [isLoopHasSoundActive, setIsLoopHasSoundActive] = useState(false);
  
  // setting the opposite state from what it was (the sound state)
  const onPadClicked = (soundId) => {
    let index = soundsArray.map(function(x) {return x.id; }).indexOf(soundId);
    let sound = soundsArray[index];
    sound.isPlaying = !sound.isPlaying;
    updateSoundsArray(soundsArray);
  };

  const onPlayLoopClicked = () => {
      //our boolean state that indicates if the sound is playing
      setIsPlaying(true);
      //here we starting to play immediately (only the first loop !)
      playAllSelectedSoundsInLoop();
      //and then calling the function in interval of 8 seconds 
      //so every time the sound is over the loop starts from the beginning
      const soundInterval = setInterval(() => {
        playAllSelectedSoundsInLoop();
      }, 8000);
      setCurrentSoundInterval(soundInterval);
  };

  const onStopLoopClicked = () => {
      setIsPlaying(false);
      //clearing the interval so the sound always be synced after stop
      clearInterval(currentSoundInterval);
      // eslint-disable-next-line array-callback-return
      soundsArray.map((sound) => {
        resetAllSounds(sound);
      });
      updateSoundsArray(soundsArray);
  };

  //forcing the component to rerender with the updated soundsArray data 
  //found on :
  //https://stackoverflow.com/questions/53215285/how-can-i-force-a-component-to-re-render-with-hooks-in-react
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const updateSoundsArray = (soundsArray) => {
    //here we are updating our array with updated data
    //after the user clicked on the pad
    setSoundsArray(soundsArray);
    //checking if the loop has active sounds
    checkLoopSounds();
    //forcing react to rerender the pad with the updates
    forceUpdate();
  }

  //stop and reset all active sounds
  const resetAllSounds = (sound) => {
    sound.isPlaying = false;
    sound.audio.pause();
    sound.audio.currentTime = 0;
  }

  const checkLoopSounds = () => {
    //here we are getting array with the active sounds, if the array is empty we are updating our state to false and
    //and if not empty (> 0) we set it to true
    if (soundsArray.filter((x) => x.isPlaying).length > 0) {
      setIsLoopHasSoundActive(true);
    } else {
      setIsLoopHasSoundActive(false);
    }
  };

  const playAllSelectedSoundsInLoop = () => {
    // eslint-disable-next-line array-callback-return
    soundsArray.map((sound) => {
      if (sound.isPlaying) {
        loopSound(sound);
      }
    });
    //if the user disable all sounds manually we are setting isPlaying to false
    if (soundsArray.filter((x) => x.isPlaying).length === 0) {
      setIsPlaying(false);
    }
  };

  //stop reset and start the sound
  const loopSound = (sound) => {
    sound.audio.pause();
    sound.audio.currentTime = 0;
    sound.audio.play();
  }

  useEffect(() => {
    setSoundsArray(createSoundsArray());
  },[]);

  return (
    <div className="container">
      <div>
        <h1 id="logo">Looper Task</h1>
      <div className="play-pause-buttons">
        <ControlButtons
          isLoopHasSoundActive={isLoopHasSoundActive}
          onPlayLoopClicked={onPlayLoopClicked}
          onStopLoopClicked={onStopLoopClicked}
          isPlaying={isPlaying}
        />
      </div>
      </div>
      <div className="pads-container">
        {soundsArray.map((sound, index) => (
          <PadBtn
            key={index}
            sound={sound}
            onPadClicked={onPadClicked}
          />
        ))}
      </div>
    </div>
  );
};
export default Layout;
