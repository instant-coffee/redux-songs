import { combineReducers } from "redux"

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05'},
    { title: 'I want it that way', duration: '3:17'},
    { title: 'Smells like teen spirit', duration: '3:55'},
    { title: 'Really Doe', duration: '6:06'},
  ]
}

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
}

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
