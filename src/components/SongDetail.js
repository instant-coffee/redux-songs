import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({song}) => {
    if (!song){
      return <div>Select a song</div>
    }
    return(<div>
      <h3>{song.title}</h3>
      <p>duration: {song.duration}</p>
    </div>)
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
}

export const ConnectedSongDetail = connect(mapStateToProps)(SongDetail)
