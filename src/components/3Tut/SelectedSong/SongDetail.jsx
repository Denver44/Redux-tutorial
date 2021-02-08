import React from "react";
import { connect } from "react-redux";

import "./SongDetail.css";
function SongDetail({ selectedSong }) {
  // console.log(props); We have destruct the props
  console.log(selectedSong); 
  return (
    <div className="songDetail" style={{ fontSize: "14px", fontWeight: "400" }}>
      <h3>Title :{selectedSong === null ? "" : selectedSong.title}</h3>
      <p>Artist : {selectedSong === null ? "" : selectedSong.artist}</p>
      <p>Duration : {selectedSong === null ? "" : selectedSong.duration}</p>
    </div>
  );
}

// this pass selectedSong is pass to our Function SongDeatil as Props with Dispatch FUnction
const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
