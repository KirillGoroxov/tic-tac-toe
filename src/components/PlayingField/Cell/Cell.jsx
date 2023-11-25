import React, { useContext } from "react";
import c from "./Cell.module.scss";
import { dataContext } from "../../../Context";

const Cell = ({ value, dataField, setDataField, id }) => {
  const data = useContext(dataContext);
  // комбинации для победы
  const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const click = (e) => {
    // Проверяем пустая ли клетка и что никто еще не выиграл
    if (value === null && data.win === false) {
      // в константу получаем данные о том, чей ход
      const whoseMove = data.whoseMove;
      // меняем информацию о том, чей ход в зависимости от того, чей ход был совершен
      data.setWhoseMove(whoseMove === "cross" ? "circle" : "cross");
      // получаем id клетки, по которой был совершен клик
      const id = e.target.id;
      // создаем копию массива с информацией об игровом поле
      const copyDataField = [...dataField];
      // меняем значение в массиве по id
      copyDataField[id] = whoseMove === "cross" ? "x" : "o";
      // меняем стейт с помощью созданной ранее копии
      setDataField(copyDataField);
      // проверяем условие победы с помощью специальной функции
      checkWinner(copyDataField);
    }
  };
  // Функция, проверяющая условие победы
  const checkWinner = (board) => {
    // создаем цикл для массива с данными о поле
    for (let i = 0; i < 8; i++) {
      const [x, y, z] = winCondition[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        // меняем значение победы, чтобы игроки не смогли играть после нее
        data.setWin(true);
        // Прибавляем очки крестику
        if (board[x] === "x") {
          data.setCross(data.cross + 1);
          localStorage.setItem("x", data.cross);
        }
        // Прибавляем очки нолику
        if (board[x] === "o") {
          data.setCircle(data.circle + 1);
          localStorage.setItem("o", data.circle);
        }
        return "win";
      }
    }
  };
  return (
    <div
      id={id}
      className={c.cell}
      style={{
        color: value === "x" ? "rgb(108, 160, 180)" : "rgb(137, 100, 196)",
      }}
      onClick={click}
    >
      {value}
    </div>
  );
};

export default Cell;
