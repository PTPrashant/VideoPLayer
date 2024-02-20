import React, { useContext, useState } from "react";
import AppContext from "../Context/CreateContext";

function PLayList() {
  const playList = [
    {
      videoName: "Lord Puneet",
      videoURL: "https://www.youtube.com/shorts/xM4CAkG9BHg",
    },
    {
      videoName: " Invincible 2 Trailer",
      videoURL: "https://www.youtube.com/watch?v=k5OY-vXYzeE",
    },
    {
      videoName: "Bike Race",
      videoURL: "https://www.youtube.com/watch?v=S6weank3Kjc",
    },
  ];

  const [mySong, setMySong] = useState(0);
  const {setMyInputURL} = useContext(AppContext)
  function setTheSong(e){
    setMySong(e.target.value)
    setMyInputURL(playList[mySong].videoURL)
  }

  return (
    <div>
      <h2>Player List:</h2>
      <div>
        <select defaultChecked="" onChange={setTheSong}>
          {playList.map((list, index) => {
            return (
              <option value={index} key={index}>
                {list.videoName}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <h3>Current Song:</h3>
        Video Name: {playList[mySong].videoName}
        <br />
        Video URL: {playList[mySong].videoURL}
      </div>
    </div>
  );
}

export default PLayList;
