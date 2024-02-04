import React, { useEffect, useState } from "react";
import { Youtube_API } from "./../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);


  const getVideos = async () => {
    const response = await fetch(Youtube_API);
    const data = await response.json();
    // console.log(data);
    setVideos(data.items);
    
  };
  
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
