import React from "react";
import SongList from "./SongList/SongList.jsx";
import SongDetail from "./SelectedSong/SongDetail.jsx";
import "./App.css";
function App() {
  return (
    <div className="app">
      <SongList />
      <SongDetail />
    </div>
  );
}

export default App;
