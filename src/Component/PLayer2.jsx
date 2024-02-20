import { useState, useRef, useEffect, createContext, useContext } from "react";
import ReactPlayer from "react-player";
import SeekBar from "./SeekBar";
import AppContext from "../Context/CreateContext";

function PLayer() {
  const {myInputURL} = useContext(AppContext)
  const [inputURL, setInputUrl] = useState(null);
  const [state, setState] = useState({value: 10})
  useEffect(()=>{
    console.log('Input URL Changed')
    setState(prev => {
      return {...prev}
  })
  },[myInputURL])

  const initialURL = "https://www.youtube.com/watch?v=1w7OgIMMRc4&pp=ygUSc3dlZXQgY2hpbGQgbyBtaW5l";

  // const [myUrl, setMyUrl] = useState(initialURL);
 
  const [mySpeed, setMySpeed] = useState(1);

  function urlManage(e) {
    e.preventDefault();
    if (inputURL) setMyUrl(`'${inputURL}'`);
    setInputUrl("");
  }


  const [myDuration, setMyDuration] = useState(1);
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentState, setCurrentState] = useState("Pause");

  function togglePlayPause() {
    if (currentState === "Pause") {
      setCurrentState("Play");
      setIsPlaying(false);
    } else if (currentState === "Play") {
      setCurrentState("Pause");
      setIsPlaying(true);
    }
  }

  setTimeout(() => {
    let myOutput = videoRef.current.getDuration(() => {
      if (!this.player) return null;
      return this.player.getDuration();
    });
    setMyDuration(myOutput);
  }, 1000);

 
  let currentTime = 0;
  currentTime =
    videoRef.current &&
    videoRef.current.getCurrentTime(() => {
      if (!this.player) return null;
      return this.player.getCurrentTime();
    });

  function backVideo() {
    videoRef.current.seekTo(videoRef.current.getCurrentTime() - 5);
  }

  function forwardVideo() {
    videoRef.current.seekTo(videoRef.current.getCurrentTime() + 5);
  }
  let myCoverage;

  const [seekRange, setSeekRange] = useState(0);
  myCoverage = (currentTime / myDuration) * 100;



  return (
    <div>
      <ReactPlayer
        id="app"
        // url={myInputURL?myInputURL:initialURL}
        // url={"https://www.youtube.com/watch?v=1w7OgIMMRc4&pp=ygUSc3dlZXQgY2hpbGQgbyBtaW5l"}
         url={myInputURL}

        playing={isPlaying}
        autoPLay={true}
        muted
        ref={videoRef}
        loop={true}
        volume={null}
        style={{ margin: "auto" }}
        playbackRate={mySpeed}
        controls={true}
        onPause={() => setCurrentState("Play")}
        onPlay={() => setCurrentState("Pause")}
      />

      <div>
        <button onClick={togglePlayPause}>{currentState}</button>
        <div>
          {/* 
        {myDuration && <h2>Video Duration: {myDuration} seconds</h2>}
 */}
          <h4>Video Duration: {myDuration} seconds</h4>
          <h4>Played: {currentTime && currentTime.toFixed(2)} seconds</h4>

        </div>
      </div>

      <div>
        <label htmlFor="urlSubmit"> Enter URL to play: </label>
        <input
          name="urlSubmit"
          placeholder="Enter here"
          id="urlSubmit"
          value={inputURL}
          onChange={(e) => setInputUrl(e.target.value)}
        />
        <button onClick={urlManage}> Submit </button>
      </div>

      <div>
        <label /> Select Video Speed:
        <button onClick={() => setMySpeed(0.5)}> 0.5x </button>
        <button onClick={() => setMySpeed(1)}> 1x </button>
        <button onClick={() => setMySpeed(1.5)}> 1.5x </button>
        <button onClick={() => setMySpeed(2)}> 2x </button>
      </div>
      <div>
        <button onClick={backVideo}>5 Sec Back </button>
        <button onClick={forwardVideo}>5 seconds forward</button>
      </div>
      <div>
        <label htmlFor="range">Play Range:</label>
        <input
          type="range"
          value={seekRange}
          onChange={(e) => setSeekRange(e.target.value)}
          id="range"
        />
      </div>
      <SeekBar playTime={myCoverage} />
    </div>
  );
}

export default PLayer;
