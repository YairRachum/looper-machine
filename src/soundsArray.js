import { v4 as uuidv4 } from 'uuid';

export function createSoundsArray() {
    return [
      {
        id: uuidv4(),
        name: "Bass",
        isPlaying: false,
        audio: new Audio(
          process.env.PUBLIC_URL + "/sounds/bass.mp3"
        ),
      },
      {
        id: uuidv4(),
        name: "Guitar",
        isPlaying: false,
        audio: new Audio(
          process.env.PUBLIC_URL +
          "/sounds/electricGuitar.mp3"
        ),
      },
      {
        id: uuidv4(),
        name: "FuncBeats",
        isPlaying: false,
        audio: new Audio(
          process.env.PUBLIC_URL + "/sounds/futureFuncBeats.mp3"
        ),
      },
      {
        id: uuidv4(),
        name: "grooveB",
        isPlaying: false,
        audio: new Audio(
          process.env.PUBLIC_URL + "/sounds/grooveB.mp3"
        ),
      },
      {
        id: uuidv4(),
        name: "MazePolitics",
        isPlaying: false,
        audio: new Audio(
          process.env.PUBLIC_URL + "/sounds/mazePolitics.mp3"
        ),
      },
      {
        id: uuidv4(),
        name: "pass3Groove",
        isPlaying: false,
        audio: new Audio(
          process.env.PUBLIC_URL + "/sounds/pass3Groove.mp3"
        ),
      },
      {
        id: uuidv4(),
        name: "SilentStar",
        isPlaying: false,
        audio: new Audio(process.env.PUBLIC_URL + "/sounds/silentStar.mp3"),
      },
      {
        id: uuidv4(),
        name: "StompySlosh",
        isPlaying: false,
        audio: new Audio(
          process.env.PUBLIC_URL + "/sounds/stompySlosh.mp3"
        ),
      },
      {
        id: uuidv4(),
        name: "StutterBeats",
        isPlaying: false,
        audio: new Audio(
          process.env.PUBLIC_URL + "/sounds/stutterBeats.mp3"
        ),
      },
    ]
  };
