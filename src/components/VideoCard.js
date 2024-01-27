import React from 'react'

const VideoCard = ({ info }) => {
  // const { snippet, statistics } = info;
  // console.log(info);

  return (
    <div className="p-2 m-2 w-72">
      <img
        className="rounded-lg"
        src={info?.snippet?.thumbnails?.medium?.url}
        alt="video-img"
      ></img>
      <ul>
        <li className="font-bold">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{Math.floor(info?.statistics?.viewCount / 1000)}K views</li>
      </ul>
    </div>
  );
}

export default VideoCard