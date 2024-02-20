import {useState } from "react";
// import ReactPlayer from "react-player";
import VideoPlayer from "./VideoPlayer";

function PLayer() {

  const [inputURL, setInputUrl] = useState(null);

  const initialURL = "https://www.youtube.com/shorts/xM4CAkG9BHg";

  const [myUrl, setMyUrl] = useState(initialURL);

  const [mySpeed, setMySpeed] = useState(1);

  function urlManage(e) {
    e.preventDefault();
    if (inputURL) setMyUrl(`'${inputURL}'`);
    setInputUrl("");
  }

    // useEffect( ()=>{
    // console.log('input UrL Modified')
    //   }, [myUrl])


  return (
    <div>
    <VideoPlayer  myVideoSpeed={mySpeed} >{myUrl}</VideoPlayer>

    {/*  
    <ReactPlayer
    // fallback={<img src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-loading-icon-vector-transparent-png-image_5687537.png" />}
    id="app"
    url={myUrl}
    playing={true}
    autoplay="true"
    loop="true"
    // pip='true'
    volume={null}
    style={{ margin: "auto" }}
    playbackRate={mySpeed}
    controls={true}
    />
  */}

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
    </div>
  );
}

export default PLayer;
