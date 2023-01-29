import "./App.css";
import { poleSquare, whereCanGo, getImage } from "./helpers";
import { useState } from "react";
// let allSec = 0
// allSec += now.getSeconds()
function App() {
  const [poleSquares, setPoleSquares] = useState(poleSquare);
  const [firstPositionIndex, setFirstPositionIndex] = useState(-1);
  // const [secondPositionIndex, setSecondPositionIndex] = useState(-1);
  let field = poleSquares.map((square, index) => {
    //Определение типа фигуры
    //Раскрашивание поля
    let poleColor = "white";
    let setColor = false;
    for (let i = 0; i < 8; i++) {
      setColor = !setColor;
      for (let j = 0; j < 8; j++) {
        if (setColor && 8 * i + j == index) {
          poleColor = "black";
        }
        setColor = !setColor;
      }
    }
    //Логика Перемещения
    function changeFigurePosition(index) {
      console.log(index);
      let newPoleSquares = poleSquares.slice();
      if (firstPositionIndex == -1) {
        setFirstPositionIndex(index);
        whereCanGo(newPoleSquares, newPoleSquares[index].type, index);
      }
      if (firstPositionIndex != -1) {
        if (newPoleSquares[firstPositionIndex].side != newPoleSquares[index].side && newPoleSquares[index].active == true) {
          //Перемещение
          let promType = newPoleSquares[firstPositionIndex];
          newPoleSquares[firstPositionIndex].type == "pawn" || newPoleSquares[firstPositionIndex].type == "castle"
            ? (newPoleSquares[firstPositionIndex].firstMove = false)
            : (newPoleSquares[firstPositionIndex].firstMove = true);
          newPoleSquares[firstPositionIndex] = newPoleSquares[index];
          newPoleSquares[index] = promType;
        }
        setFirstPositionIndex(-1);
        newPoleSquares.forEach((card) => {
          card.active = false;
        });
      }

      setPoleSquares(newPoleSquares);
    }
    // console.log("ререндер");
    return (
      <div className={poleSquares[index].active ? poleColor + " active pole" : poleColor + " pole"} onClick={() => changeFigurePosition(index)} key={index}>
        {getImage(square.type, square.side)}
      </div>
    );
  });
  return (
    <div className="mainWrap">
      {/* <div className="roomWrap">
        <input className="roomKeyInput" placeholder="Room Key"></input>
        <button className="roomKeySubmit">Submit</button>
      </div> */}
      <div className="poleWrap">{field}</div>
    </div>
  );
}

export default App;
