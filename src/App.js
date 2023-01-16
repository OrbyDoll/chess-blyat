import "./App.css";
import poleSquare from "./poleMass";
import switchType from "./typeSwitch";
import { useState } from "react";

function App() {
  const [poleSquares, setPoleSquares] = useState(poleSquare);
  const [firstPositionIndex, setFirstPositionIndex] = useState(-1);
  // const [secondPositionIndex, setSecondPositionIndex] = useState(-1);
  let field = poleSquares.map((square, index) => {
    //Определение типа фигуры
    let figure = switchType(square.type);
    //Раскрашивание поля
    let poleColor = "white";
    let flag = false;
    for (let i = 0; i < 8; i++) {
      flag = !flag;
      for (let j = 0; j < 8; j++) {
        if (flag && 8 * i + j == index) {
          poleColor = "black";
        }
        flag = !flag;
      }
    }
    //Логика Перемещения
    function changeFigurePosition(index) {
      // console.log(1);
      if (firstPositionIndex == -1) {
        setFirstPositionIndex(index);
      }
      if (firstPositionIndex != -1) {
        let newPoleSquares = poleSquares.slice();
        let promType = newPoleSquares[firstPositionIndex].type;
        newPoleSquares[firstPositionIndex].type = newPoleSquares[index].type;
        newPoleSquares[index].type = promType;
        setPoleSquares(newPoleSquares);
        setFirstPositionIndex(-1);
      }
    }
    return (
      <div
        className={poleColor + " pole"}
        onClick={() => changeFigurePosition(index)}
        key={index}
      >
        {figure}
      </div>
    );
  });
  return (
    <div className="mainWrap">
      <div className="roomWrap">
        <input className="roomKeyInput" placeholder="Room Key"></input>
        <button className="roomKeySubmit">Submit</button>
      </div>
      <div className="poleWrap">{field}</div>
    </div>
  );
}

export default App;
