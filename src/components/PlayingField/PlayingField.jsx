import React, { useContext, useState } from 'react'
import c from './PlayingField.module.scss'
import Cell from './Cell/Cell'
import { dataContext } from '../../Context'

const PlayingField = () => {
  // создаем массив с девятью значениеями null
  const [dataField, setDataField] = useState(Array(9).fill(null))
  // используем хук useContext
  const data = useContext(dataContext)
  // Функция для обнуления игры
  const clearField = () => {
    const copyDataField = [...dataField]
    copyDataField.fill(null)
    setDataField(copyDataField)
    data.setWin(false)
  }
  // функция для удаления истории игр
  const clearHistory = () => {
    localStorage.removeItem('x')
    localStorage.removeItem('o')
    setDataField(Array(9).fill(null))
    data.setCross(0)
    data.setCircle(0)
  }
  return (
    <div>
      <div className={c.wrapperPlayingField}>
        {dataField.map((cell, id) =>
          <Cell
            dataField={dataField}
            setDataField={setDataField}
            value={cell}
            key={id}
            id={id} />)}
      </div>
      <button className={c.reset} onClick={clearField}>RESET</button>
      <button className={c.history} onClick={clearHistory}>Clear history</button>
    </div>
  )
}

export default PlayingField