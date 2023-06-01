import { useState } from 'react'
import './App.css'
import PlayingField from './components/PlayingField/PlayingField'
import Score from './components/Score/Score'

function App() {
  return (
    <div className='App'>
      <Score />
      <PlayingField />
    </div>
  )
}

export default App
