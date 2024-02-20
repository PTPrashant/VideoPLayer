import { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";

function VideoPlayer(props) {
  const { myVideoSpeed, children } = props;

  const [myDuration, setMyDuration] = useState(null);
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

  // useEffect(()=>{
  //   if( videoRef.current.player.isPlaying == false) setCurrentState('Play')

  // },[])

  setTimeout(() => {
    let myOutput = videoRef.current.getDuration(() => {
      if (!this.player) return null;
      return this.player.getDuration();
    });
    setMyDuration(myOutput);
  });
  useEffect(() => {
    
  }, [myDuration]);

  //current time
  console.log(videoRef.current.getCurrentTime( ()=>{
    if (!this.player) return null;
    return this.player.getCurrentTime();

  }))
// console.log("Video Length= ", (myDuration / 60).toFixed(2) + " minutes")

  return (
    <>
      <ReactPlayer
        id="app"
        url={children}
        playing={isPlaying}
        autoPLay={true}
        muted
        ref={videoRef}
        loop={true}
        volume={null}
        style={{ margin: "auto" }}
        playbackRate={myVideoSpeed}
        controls={true}
        onPause={() => setCurrentState("Play")}
        onPlay={() => setCurrentState("Pause")}
      />

      <div>
        <button onClick={togglePlayPause}>{currentState}</button>
        {myDuration && <h2>Video Duration: {myDuration} seconds</h2>}
      </div>
    </>
  );
}

export default VideoPlayer;