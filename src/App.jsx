import "./App.css";
import { useState, useEffect } from "react";
import VideoRecorder from "../src/VideoRecorder";
import AudioRecorder from "../src/AudioRecorder";
import Logs from "../src/Videos";
//import {useVolumeLevel, VolumeIndicator} from 'react-volume-indicator'

const App = () => {
  let [recordOption, setRecordOption] = useState("video");
  const toggleRecordOption = (type) => {
    return () => {
      setRecordOption(type);
    };
  };
  const [val, setVal] = useState("Enter Critiques Here");
  const click = () => {
    alert(val);
  };
  const change = (event) => {
    setVal(event.target.value);
  };

  const [toggle, setToggle] = useState(1)

  function updateToggle(id) {
    setToggle(id)
  }

  return (
    <>
      <div className="alex-park-homescreen">
        <button className="button-left" onClick={()=>updateToggle(1)}> About</button>
        <button className="button-middleleft" onClick={()=>updateToggle(2)}>Record</button>
        <h1>CRITIQIFY</h1>
        <button className="button-middleright" onClick={()=>updateToggle(4)}>Video Logs</button>
        <button className="button-right" onClick={()=>updateToggle(3)}>Credits</button>
      </div>
      <div className={toggle === 1 ? "show-content" : "content"}>
        <h2> 
          Critiqify is an app used to record and self-critique video presentations.
          <br></br>
          Users can also store videos with comments and access them in the video logs.
        </h2>
        <br></br>
        <button onClick={()=>updateToggle(2)} className = "button">
          Use Critiqify
        </button>
        <h3>&nbsp;</h3>
        <h1>HOW TO USE CRITIQIFY</h1>
        <h2>Simply click the button above to go to the recording page.
          <br></br>Once you record your videos, use the text box to add self-critiques. 
          <br></br>Have fun!
        </h2>
        <h3>&nbsp;</h3>
        <img src = "https://media.discordapp.net/attachments/799331016489042020/1224050139186991205/Screenshot_2024-03-31_at_1.37.57_PM.png?ex=661c1486&is=66099f86&hm=f9c8e74b3c2d70ac91c5bbf7d4b9ad6b8714dc24db13e011ba49cd8d4f1312e5&=&format=webp&quality=lossless&width=1100&height=578" alt="example" width="1024" height="512"></img>
      </div>
      <div className={toggle === 2 ? "show-content" : "content"}>
        <h2>Record Yourself Doing a Presentation!</h2>
        <div className="button-flex">
          <button onClick={toggleRecordOption("video")}>Record Video</button>
          <button onClick={toggleRecordOption("audio")}>Record Audio</button>
        </div>
        <div>
          {recordOption === "video" ? <VideoRecorder /> : <AudioRecorder />}
        </div>
      </div>
      <div className={toggle === 3 ? "show-content" : "content"}>
        <h2>
          Alex Park :   park.ale@northeastern.edu
        </h2>
        <a href= "https://www.linkedin.com/in/alex-park-/"><img src = "https://media.discordapp.net/attachments/799331016489042020/1224047747909292042/Screenshot_2024-03-31_at_1.28.38_PM.png?ex=661c124c&is=66099d4c&hm=a344d127c93404ad46104cf360ad5768149819ee005ee2b2c27ad52748bdc922&=&format=webp&quality=lossless&width=854&height=1174" alt="alepark" width="160" height="200"></img></a>
        <h2>
          Aiden Rim :   rim.a@northeastern.edu
        </h2>
        <a href="https://www.youtube.com/watch?v=DINnS09LZww"><img src = "https://media.discordapp.net/attachments/799331016489042020/1224047747510829166/Screenshot_2024-03-31_at_1.26.42_PM.png?ex=661c124c&is=66099d4c&hm=9ea8d2a22ea489829cd3dfdf0cb6b80d935dfcfec2f88be771ae7b8584e497bf&=&format=webp&quality=lossless&width=1076&height=1174" alt="arim" width="160" height="180"></img></a>
        <h2>
          Bryan Li  :   li.brya@northeastern.edu
        </h2>
        <a href="https://www.linkedin.com/in/bryanli27/"><img src = "https://media.discordapp.net/attachments/799331016489042020/1224047746248347668/Screenshot_2024-03-31_at_1.20.47_PM.png?ex=661c124c&is=66099d4c&hm=e25acc8ff599b3f886ac8be94ef24177a8f6fe16de2806f663c30cdf19135cd6&=&format=webp&quality=lossless&width=912&height=1174" alt="bryali" width="140" height="180"></img></a>
        <h2>
          Colin Chu :   chu.col@northeastern.edu
        </h2>
        <a href="https://www.crunchyroll.com/series/GYWE7W5GY/steinsgate"><img src = "https://media.discordapp.net/attachments/799331016489042020/1224047746915500032/Screenshot_2024-03-31_at_1.25.17_PM.png?ex=661c124c&is=66099d4c&hm=f9b593ca40740949a1d2b4d7e73eff9865b3cb9ff2731cdbad29b841aec31000&=&format=webp&quality=lossless&width=912&height=1174" alt="colchu" width="150" height="190"></img></a>
      </div>
      <div className={toggle === 4 ? "show-content" : "content"}>
        { Logs() }
      </div>
    </>
  );
};

export default App;