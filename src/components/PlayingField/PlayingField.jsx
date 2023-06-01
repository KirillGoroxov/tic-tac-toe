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
    </div>
  )
}

export default PlayingField