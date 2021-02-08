import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions/index";
import "./Song.css";

function SongList(props) {
  console.log(props);
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
// Here the state has All the reducers in it with key value pair
// It re-ender everytime we click.
const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};

// The Connect is A React Component it connect us with the reducer.
// Whenever we have to call the action creator we are going to call it from the connect fucntion.
// we pass it as object like her {selectSong}
// We can Pass Multiple actions in Second argument as Object.
export default connect(mapStateToProps, { dispatchSong: selectSong })(SongList);
// This above Syntax is Function Carrying in Js.

// ------------------------------------------------------------------------ 2nd Way--------------------------------------------------------------------------------------

// import React from "react";
// import { connect } from "react-redux";
// import { selectSong } from "../actions/index";
// import "./Song.css";

// function SongList({ songs, dispatch }) {
//   console.log(songs);
//   console.log(dispatch);
//   return (
//     <div>
//       {songs.map((song, index) => (
//         <div className="song" key={index}>
//           <div className="song__title">
//             <h1>{song.title}</h1>
//           </div>
//           <div className="select__button">
//             <button onClick={() => dispatch(selectSong(song))}> Select </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
// // Here The state has All the reducers.
// const mapStateToProps = (state) => {
//   // console.log(state);
//   return { songs: state.songs };
// };

// // The Connect is A React Component it connect us with the reducer.
// export default connect(mapStateToProps)(SongList);
// // This above Syntax is Function Carrying in Js.
