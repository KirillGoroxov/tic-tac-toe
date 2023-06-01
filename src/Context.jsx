import { useState, createContext } from 'react'

export const dataContext = createContext()
const Context = (props) => {
  // победы крестика
  const [cross, setCross] = useState(0)
  // победы нолика
  const [circle, setCircle] = useState(0)
  // чей сейчас ход
  const [whoseMove, setWhoseMove] = useState('cross')
  // выиграл ли уже кто-то
  const [win, setWin] = useState(false)
  const value = {
    cross, setCross,
    circle, setCircle,
    whoseMove, setWhoseMove,
    win, setWin
  }
  return (
    <dataContext.Provider value={value}>
      {props.children}
    </dataContext.Provider>
  )
}

export default Context