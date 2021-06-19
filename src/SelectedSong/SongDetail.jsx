import React from "react";
import { connect } from "react-redux";
import "./SongDetail.css";

function SongDetail({ selectedSong }) {
  return (
    <div className="songDetail" style={{ fontSize: "14px", fontWeight: "400" }}>
      <h3>Title :{selectedSong === null ? "" : selectedSong.title}</h3>
      <p>Artist : {selectedSong === null ? "" : selectedSong.artist}</p>
      <p>Duration : {selectedSong === null ? "" : selectedSong.duration}</p>
    </div>
  );
}

// this selectedSong is pass to our Function as Props with Dispatch FUnction
const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
