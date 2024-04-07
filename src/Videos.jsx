import './App.css';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://wphskugowytehppkqvaf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwaHNrdWdvd3l0ZWhwcGtxdmFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzODg4NjYsImV4cCI6MjAyNzk2NDg2Nn0.lFtnTj5JwPDT1NtY8ZyATpqg9mkIYZagOPGr0-owrgk";
const supabase = createClient(supabaseUrl, supabaseKey);

function Logs() {
  const [ videos, setVideos ] = useState([]); // [video1, video2, video3]

  async function getVideos() {
    const { data, error } = await supabase
    .from('links').select("*")

    if (data !== null) {
      setVideos(data);
    }
    else {
      console.log(error);
      alert("Error grabbing links from Supabase");
    }
  } 

  useEffect(() => {
    getVideos();
  }, [])

  console.log(videos);

  return (
    <div className="logs-container">
      {videos.map((video) => (
        <div className="log-card">
          <h2> Date: {video.date} </h2>
          <video className="log-video" controls>
            <source src={video.link} type="video/webm" />
          </video>
          <div className="log-notes">Notes: {video.notes}</div>
        </div>
      ))}
    </div>
  );
}

export default Logs;
