import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions/index";
import "./Song.css";

function SongList(props) {
  return (
    <div>
      {props.songs.map((song, index) => (
        <div className="song" key={index}>
          <div className="song__title">
            <h1>{song.title}</h1>
          </div>
          <div className="select__button">
            <button onClick={() => props.dispatchSong(song)}> Select </button>
          </div>
        </div>
      ))}
    </div>
  );
}
// Here the state has All the reducers in it with key value pair.  It re-render everyTime we click.
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { dispatchSong: selectSong })(SongList);

// The Connect is A React Component it connect us with the reducer.
// Whenever we have to call the action creator we are going to call it from the connect function.
// we pass it as object like her {selectSong}
// We can Pass Multiple actions in Second argument as Object.
// This above Syntax is Function Carrying in Js.
