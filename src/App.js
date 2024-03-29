import "./App.css";
import { poleSquare, whereCanGo, adminMode, shahActive } from "./helpers";
import { getImage } from "./getImage";
import { useState } from "react";
import { logDOM } from "@testing-library/react";
function App() {
  const [poleSquares, setPoleSquares] = useState(poleSquare);
  const [firstPositionIndex, setFirstPositionIndex] = useState(-1);
  const [WindowChange, setWindowChange] = useState("");
  const [actualSideMove, setActualSideMove] = useState("white");
  const nullCell = { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true };
  window.logMass = () => {
    console.log(poleSquares);
    // poleSquares.forEach((item) => {
    //   console.log(item.canMove);
    // });
  };
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
    function renderChangeWindow(mass, index, firstIndex) {
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
                poleS[index] = poleS[firstIndex];
                poleS[firstPositionIndex] = nullCell;
                poleS[index].type = "castle";
                setWindowChange("");
                setPoleSquares(poleS);
              }}
            >
              {getImage("castle", poleS[firstIndex].side)}
            </div>
            <div
              className="figureWindowOption"
              style={{ backgroundColor: squareColor }}
              onClick={() => {
                poleS[index] = poleS[firstIndex];
                poleS[firstPositionIndex] = nullCell;
                poleS[index].type = "horse";
                setWindowChange("");
                setPoleSquares(poleS);
              }}
            >
              {getImage("horse", poleS[firstIndex].side)}
            </div>
            <div
              className="figureWindowOption"
              style={{ backgroundColor: squareColor }}
              onClick={() => {
                poleS[index] = poleS[firstIndex];
                poleS[firstPositionIndex] = nullCell;
                poleS[index].type = "bishop";
                setWindowChange("");
                setPoleSquares(poleS);
              }}
            >
              {getImage("bishop", poleS[firstIndex].side)}
            </div>
            <div
              className="figureWindowOption"
              style={{ backgroundColor: squareColor }}
              onClick={() => {
                poleS[index] = poleS[firstIndex];
                poleS[firstPositionIndex] = nullCell;
                poleS[index].type = "queen";
                setWindowChange("");
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
      let kingAttacked = true;
      if (!newPoleSquares[index].canMove) {
        return;
      }
      newPoleSquares.forEach((sqr, sqrIndex) => {
        if (sqr.dangerForKing) {
          kingAttacked = "afterShah";
        }
      });
      if (firstPositionIndex == -1 && (newPoleSquares[index].side == actualSideMove || adminMode)) {
        setActualSideMove(actualSideMove == "white" ? "black" : "white");
        setFirstPositionIndex(index);
        whereCanGo(newPoleSquares, newPoleSquares[index].type, index, kingAttacked, 1);
        return;
      }
      if (firstPositionIndex != -1) {
        if (newPoleSquares[firstPositionIndex].side != newPoleSquares[index].side && newPoleSquares[index].active == true) {
          //Перемещение

          //Ракировка
          if (
            newPoleSquares[firstPositionIndex].type == "king" &&
            Math.abs(index - firstPositionIndex) > 1 &&
            Math.abs(index - firstPositionIndex) < 3 &&
            newPoleSquares[firstPositionIndex].firstMove
          ) {
            const castleIndex = index + (index - firstPositionIndex > 0 ? 1 : -2);
            let newCastleIndex = 0;
            let newKingIndex = 0;
            if (index - firstPositionIndex > 0) {
              newKingIndex = firstPositionIndex + 2;
              newCastleIndex = index - 1;
            } else {
              newKingIndex = firstPositionIndex - 2;
              newCastleIndex = index + 1;
            }
            newPoleSquares[newCastleIndex] = newPoleSquares[castleIndex];
            newPoleSquares[newCastleIndex].firstMove = false;
            newPoleSquares[newKingIndex] = newPoleSquares[firstPositionIndex];
            newPoleSquares[castleIndex] = nullCell;
          } else {
            if (newPoleSquares[firstPositionIndex].type == "pawn") {
              if (newPoleSquares[firstPositionIndex].firstMove == true && Math.abs(index - firstPositionIndex) == 16) {
                newPoleSquares[firstPositionIndex].firstMove = "previous";
              } else if (newPoleSquares[firstPositionIndex].firstMove == "previous" || Math.abs(index - firstPositionIndex) == 8) {
                newPoleSquares[firstPositionIndex].firstMove = false;
              }
            }

            newPoleSquares[index] = newPoleSquares[firstPositionIndex];
          }

          if (index - 8 >= 0) {
            if (newPoleSquares[index - 8].attacked && firstPositionIndex == newPoleSquares[index - 8].attacked) {
              newPoleSquares[index - 8].type = "";
              newPoleSquares[index - 8].side = "";
            }
          }
          if (index + 8 <= 63) {
            if (newPoleSquares[index + 8].attacked && firstPositionIndex == newPoleSquares[index + 8].attacked) {
              newPoleSquares[index + 8].type = "";
              newPoleSquares[index + 8].side = "";
            }
          }

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
              setWindowChange(renderChangeWindow(poleSquares, index, firstPositionIndex));
            }
          });
          if (
            newPoleSquares[firstPositionIndex].type == "king" ||
            newPoleSquares[firstPositionIndex].type == "castle" ||
            newPoleSquares[firstPositionIndex].type == "pawn"
          ) {
            newPoleSquares[firstPositionIndex].firstMove = false;
          }
          newPoleSquares[firstPositionIndex] = nullCell;
        }

        setFirstPositionIndex(-1);
        newPoleSquares.forEach((card, cardIndex) => {
          if (firstPositionIndex != -1 && card.type != "king") {
            whereCanGo(newPoleSquares, newPoleSquares[cardIndex].type, cardIndex, "checkForKingSafe", 1);
          }
          card.active = false;
          // if (card.dangerForKing) {
          //   console.log(newPoleSquares, "sqr");
          //   console.log(cardIndex);
          // }
          if (card.type != "" && card.type != "king") {
            whereCanGo(newPoleSquares, card.type, cardIndex, "shah", 1);
          }
        });
      }
      setPoleSquares(newPoleSquares);
    }
    // console.log("ререндер");
    return (
      <div
        className={poleSquares[index].active == true ? poleColor + " active pole" : poleColor + " pole"}
        onClick={() => {
          // console.log(index);
          if (square.type != "" || square.active == true) {
            changeFigurePosition(index);
          }
        }}
        key={index}
      >
        {getImage(square.type, square.side)}
      </div>
    );
  });
  return (
    <div className={"mainWrap"}>
      {WindowChange}
      {/* <div className="roomWrap">
        <input className="roomKeyInput" placeholder="Room Key"></input>
        <button className="roomKeySubmit">Submit</button>
      </div> */}
      <div className="poleWrap">{field}</div>
    </div>
  );
}

export default App;
