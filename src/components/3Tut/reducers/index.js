import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Only God Can Judge Me",
      duration: "4:05",
      artist: "Tupac",
    },
    {
      title: "Backbone",
      duration: "3:15",
      artist: "Hardy Sandhu",
    },
    {
      title: "Venom",
      duration: "4:35",
      artist: "Eminem",
    },
    {
      title: "Till i Collapse",
      duration: "2:55",
      artist: "Eminem",
    },
    {
      title: "Kaam 25",
      duration: "3:15",
      artist: "Divine",
    },
    {
      title: "Paintra",
      duration: "3:15",
      artist: "Divine",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
