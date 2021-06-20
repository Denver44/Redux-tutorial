import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSong } from "../actions";
import "./Song.css";

function SongList() {
  const dispatch = useDispatch();
  const songList = useSelector((state) => state.songs);

  return (
    <div>
      {songList.map((song, index) => (
        <div className="song" key={index}>
          <div className="song__title">
            <h1>{song.title}</h1>
          </div>
          <div className="select__button">
            <button onClick={() => dispatch(selectSong(song))}> Select </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SongList;
