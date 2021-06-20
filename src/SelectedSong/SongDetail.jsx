import React from "react";
import { useSelector } from "react-redux";
import "./SongDetail.css";

function SongDetail() {
  const selectedSong = useSelector((state) => state.selectedSong);
  return (
    <div className="songDetail" style={{ fontSize: "14px", fontWeight: "400" }}>
      <h3>Title :{selectedSong === null ? "" : selectedSong.title}</h3>
      <p>Artist : {selectedSong === null ? "" : selectedSong.artist}</p>
      <p>Duration : {selectedSong === null ? "" : selectedSong.duration}</p>
    </div>
  );
}

// this selectedSong is pass to our Function as Props with Dispatch FUnction

export default SongDetail;
