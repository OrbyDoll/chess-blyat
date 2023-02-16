import "./App.css";
import { poleSquare, whereCanGo } from "./helpers";
import { getImage } from "./getImage";
import { useState } from "react";
// let allSec = 0
// allSec += now.getSeconds()
function App() {
  const [poleSquares, setPoleSquares] = useState(poleSquare);
  const [firstPositionIndex, setFirstPositionIndex] = useState(-1);
  const [windowFigureChange, setWindowFigureChange] = useState("");
  // const [secondPositionIndex, setSecondPositionIndex] = useState(-1);
  let field = poleSquares.map((square, index) => {
    //Определение типа фигуры
    //Раскрашивание поля
    let poleColor = "white";
    let setColor = true;
    for (let i = 0; i < 8; i++) {
      setColor = !setColor;
      for (let j = 0; j < 8; j++) {
        if (setColor && 8 * i + j == index) {
          poleColor = "black";
        }
        setColor = !setColor;
      }
    }
    function getChangeFigureWindow(mass, index, firstIndex) {
      let poleS = mass.slice();
      let squareColor = mass[firstIndex].side == "white" ? "rgb(240, 217, 181)" : "rgb(181,136,99)";
      return (
        <div
          className="figureWindow"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <div className="figureWindowSelect">
            <div
              className="figureWindowOption"
              style={{ backgroundColor: squareColor }}
              onClick={() => {
                poleS[index].type = "castle";
                setWindowFigureChange("");
                setPoleSquares(poleS);
              }}
            >
              {getImage("castle", poleS[firstIndex].side)}
            </div>
            <div
              className="figureWindowOption"
              style={{ backgroundColor: squareColor }}
              onClick={() => {
                poleS[index].type = "horse";
                setWindowFigureChange("");
                setPoleSquares(poleS);
              }}
            >
              {getImage("horse", poleS[firstIndex].side)}
            </div>
            <div
              className="figureWindowOption"
              style={{ backgroundColor: squareColor }}
              onClick={() => {
                poleS[index].type = "bishop";
                setWindowFigureChange("");
                setPoleSquares(poleS);
              }}
            >
              {getImage("bishop", poleS[firstIndex].side)}
            </div>
            <div
              className="figureWindowOption"
              style={{ backgroundColor: squareColor }}
              onClick={() => {
                poleS[index].type = "queen";
                setWindowFigureChange("");
                setPoleSquares(poleS);
              }}
            >
              {getImage("queen", poleS[firstIndex].side)}
            </div>
          </div>
        </div>
      );
    }
    //Логика Перемещения
    function changeFigurePosition(index) {
      let newPoleSquares = poleSquares.slice();
      if (firstPositionIndex == -1) {
        setFirstPositionIndex(index);
        whereCanGo(newPoleSquares, newPoleSquares[index].type, index);
        return;
      }
      if (firstPositionIndex != -1) {
        if (newPoleSquares[firstPositionIndex].side != newPoleSquares[index].side && newPoleSquares[index].active == true) {
          //Перемещение
          let changePoles = [
            [0, "white"],
            [7, "black"],
          ];
          changePoles.forEach((squares) => {
            if (
              Math.floor(index / 8) == squares[0] &&
              newPoleSquares[firstPositionIndex].side == squares[1] &&
              newPoleSquares[firstPositionIndex].type == "pawn"
            ) {
              setWindowFigureChange(getChangeFigureWindow(poleSquares, index, firstPositionIndex));
              console.log(newPoleSquares[firstPositionIndex].type);
            }
          });
          if (newPoleSquares[firstPositionIndex].type == "pawn") {
            if (newPoleSquares[firstPositionIndex].firstMove == true) {
              newPoleSquares[firstPositionIndex].firstMove = "previous";
            } else if (newPoleSquares[firstPositionIndex].firstMove == "previous") {
              newPoleSquares[firstPositionIndex].firstMove = false;
            }
          }

          newPoleSquares[index].type = newPoleSquares[firstPositionIndex].type;
          newPoleSquares[index].firstMove = newPoleSquares[firstPositionIndex].firstMove;
          newPoleSquares[index].side = newPoleSquares[firstPositionIndex].side;
          if (index - 8 >= 0) {
            if (newPoleSquares[index - 8].attacked == "del") {
              newPoleSquares[index - 8].type = "";
              newPoleSquares[index - 8].side = "";
            }
          }
          if (index + 8 <= 63) {
            if (newPoleSquares[index + 8].attacked == "del") {
              newPoleSquares[index + 8].type = "";
              newPoleSquares[index + 8].side = "";
            }
          }
          newPoleSquares[firstPositionIndex].type = "";
          newPoleSquares[firstPositionIndex].side = "";
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
    <div className={"mainWrap"}>
      {windowFigureChange}
      {/* <div className="roomWrap">
        <input className="roomKeyInput" placeholder="Room Key"></input>
        <button className="roomKeySubmit">Submit</button>
      </div> */}
      <div className="poleWrap">{field}</div>
    </div>
  );
}

export default App;
