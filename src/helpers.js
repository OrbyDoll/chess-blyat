import { logDOM } from "@testing-library/react";

//Массив всех фигур
export let poleSquare = [
  { type: "castle", side: "black", attacked: false, firstMove: true, active: false, dangerForKing: false, canMove: true },
  { type: "horse", side: "black", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "bishop", side: "black", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "queen", side: "black", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "king", side: "black", attacked: false, firstMove: true, active: false, dangerForKing: false, canMove: true },
  { type: "bishop", side: "black", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "horse", side: "black", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "castle", side: "black", attacked: false, firstMove: true, active: false, dangerForKing: false, canMove: true },
  { type: "pawn", side: "black", attacked: false, firstMove: true, active: false, dangerForKing: false, canMove: true },
  { type: "pawn", side: "black", attacked: false, firstMove: true, active: false, dangerForKing: false, canMove: true },
  { type: "pawn", side: "black", attacked: false, firstMove: true, active: false, dangerForKing: false, canMove: true },
  { type: "pawn", side: "black", attacked: false, firstMove: true, active: false, dangerForKing: false, canMove: true },
  { type: "pawn", side: "black", attacked: false, firstMove: true, active: false, dangerForKing: false, canMove: true },
  { type: "pawn", side: "black", attacked: false, firstMove: true, active: false, dangerForKing: false, canMove: true },
  { type: "pawn", side: "black", attacked: false, firstMove: true, active: false, dangerForKing: false, canMove: true },
  { type: "pawn", side: "black", attacked: false, firstMove: true, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "", side: "", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "pawn", side: "white", attacked: false, firstMove: true, active: false, dangerForKing: false, canMove: true },
  { type: "pawn", side: "white", attacked: false, firstMove: true, active: false, dangerForKing: false, canMove: true },
  { type: "pawn", side: "white", attacked: false, firstMove: true, active: false, dangerForKing: false, canMove: true },
  { type: "pawn", side: "white", attacked: false, firstMove: true, active: false, dangerForKing: false, canMove: true },
  { type: "pawn", side: "white", attacked: false, firstMove: true, active: false, dangerForKing: false, canMove: true },
  { type: "pawn", side: "white", attacked: false, firstMove: true, active: false, dangerForKing: false, canMove: true },
  { type: "pawn", side: "white", attacked: false, firstMove: true, active: false, dangerForKing: false, canMove: true },
  { type: "pawn", side: "white", attacked: false, firstMove: true, active: false, dangerForKing: false, canMove: true },
  { type: "castle", side: "white", attacked: false, firstMove: true, active: false, dangerForKing: false, canMove: true },
  { type: "horse", side: "white", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "bishop", side: "white", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "queen", side: "white", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "king", side: "white", attacked: false, firstMove: true, active: false, dangerForKing: false, canMove: true },
  { type: "bishop", side: "white", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "horse", side: "white", attacked: false, active: false, dangerForKing: false, canMove: true },
  { type: "castle", side: "white", attacked: false, firstMove: true, active: false, dangerForKing: false, canMove: true },
];
export let adminMode = true;
window.admin = () => {
  adminMode = !adminMode;
};
var figureOnlyCan = [false, ""];
window.figureOnly = (figure) => {
  figureOnlyCan = [!figureOnlyCan[0], figure];
};
//Перемещение фигур
export function whereCanGo(mass, figureType, index, functionType, kingData) {
  if (functionType == "checking") {
    //console.log("shah");
    mass[index].dangerForKing = true;
  }
  const squareTypeBefore = functionType == "shah" || functionType == "checking" || functionType == "checkForKingSafe" ? false : functionType;
  const squareType = functionType == "afterShah" ? true : squareTypeBefore;
  if (figureOnlyCan[0] && figureType != figureOnlyCan[1]) {
    return;
  }
  switch (figureType) {
    case "pawn":
      //Определение цвета, множителя
      const pawnSide = mass[index].side == "white" ? -1 : 1;
      //Клетки, которые атакует пешка
      const pawnEatingCells = [9, 7];
      //Клетки, которые пешка может съесть на ходу
      const pawnOnMoveCells = [1, -1];

      //Передвижение
      let firstCellIndex = index + 8 * pawnSide;
      let secondCellIndex = index + 16 * pawnSide;
      if (squareType == true) {
        if (firstCellIndex >= 0 && firstCellIndex <= 63) {
          if (mass[firstCellIndex].type == "") {
            if (functionType == "afterShah") {
              if (mass[firstCellIndex].dangerForKing) {
                mass[firstCellIndex].active = squareType;
              }
            } else {
              mass[firstCellIndex].active = squareType;
            }
            if (secondCellIndex >= 0 && secondCellIndex <= 63) {
              if (mass[secondCellIndex].type == "" && mass[index].firstMove == true) {
                if (functionType == "afterShah") {
                  if (mass[secondCellIndex].dangerForKing) {
                    mass[secondCellIndex].active = squareType;
                  }
                } else {
                  mass[secondCellIndex].active = squareType;
                }
              }
            }
          }
        }
      }
      //Съедание
      for (let i = 0; i < pawnEatingCells.length; i++) {
        let eatingCellIndex = index + pawnEatingCells[i] * pawnSide;
        if (eatingCellIndex <= 63 && eatingCellIndex >= 0) {
          if (Math.floor(eatingCellIndex / 8) == Math.floor(index / 8) + 1 * pawnSide) {
            if (mass[eatingCellIndex].type != "king") {
              if (mass[eatingCellIndex].side != mass[index].side) {
                if (mass[eatingCellIndex].type != "") {
                  if (functionType == "afterShah") {
                    if (mass[eatingCellIndex].dangerForKing) {
                      mass[eatingCellIndex].active = squareType;
                    }
                  } else {
                    mass[eatingCellIndex].active = squareType;
                  }
                } else if (functionType == "attacked") {
                  mass[eatingCellIndex].active = "attacked";
                }
              } else if (functionType == "attacked") {
                mass[eatingCellIndex].active = "attacked";
              }
            } else if (mass[eatingCellIndex].type == "king" && mass[eatingCellIndex].side != mass[index].side) {
              if (functionType == "shah") {
                whereCanGo(mass, mass[index].type, index, "checking", eatingCellIndex);
              } else if (functionType == "checking") {
                mass[index].dangerForKing = true;
                // attackedCells.push(index);
              }
            }
          }
        }
      }
      //Съедание на ходу
      for (let j = 0; j < pawnOnMoveCells.length; j++) {
        let OnMoveCellIndex = index + pawnOnMoveCells[j];
        if (OnMoveCellIndex <= 63 && OnMoveCellIndex >= 0) {
          if (
            mass[OnMoveCellIndex].type == "pawn" &&
            mass[OnMoveCellIndex].side != mass[index].side &&
            mass[OnMoveCellIndex].firstMove == "previous" &&
            mass[OnMoveCellIndex + 8 * pawnSide].type == "" &&
            Math.floor(OnMoveCellIndex / 8) == Math.floor(index / 8)
          ) {
            mass[OnMoveCellIndex + 8 * pawnSide].active = squareType;
            mass[OnMoveCellIndex].attacked = index;
            //console.log(OnMoveCellIndex + 8 * pawnSide, "pawn");
          }
        }
      }
      break;
    case "castle":
      let c_cells = [
        [index, 8],
        [index, -8],
        [index, 1],
        [index, -1],
      ];
      for (let i = 0; i < c_cells.length; i++) {
        let actualIndex = c_cells[i][0];
        let actualIndexChange = c_cells[i][1];
        let cantMoveCell = -1;
        let checkBehingKing_c = false;
        while (actualIndex >= 0 && actualIndex <= 64) {
          if (!checkBehingKing_c) {
            if (!(actualIndex % 8 == 0 && actualIndexChange == -1) && !(actualIndex % 8 == 7 && actualIndexChange == 1)) {
              if (actualIndex + actualIndexChange <= 63 && actualIndex + actualIndexChange >= 0) {
                if (mass[actualIndex + actualIndexChange].type == "") {
                  if (functionType == "afterShah") {
                    if (mass[actualIndex + actualIndexChange].dangerForKing) {
                      mass[actualIndex + actualIndexChange].active = squareType;
                      ////console.log(actualIndex + actualIndexChange, "castle 1");
                    }
                  } else {
                    if (functionType == "checking" && actualIndexChange == kingData.destination) {
                      mass[actualIndex + actualIndexChange].dangerForKing = true;
                    } else {
                      mass[actualIndex + actualIndexChange].active = squareType;
                      //console.log(actualIndex + actualIndexChange, "castle 2");
                    }
                  }
                } else if (functionType == "checking") {
                  break;
                } else {
                  if (functionType == "checkForKingSafe") {
                    if (mass[actualIndex + actualIndexChange].type != "king") {
                      // //console.log(3, "cfks");
                      cantMoveCell = actualIndex + actualIndexChange;
                      checkBehingKing_c = true;
                    }
                  } else if (mass[index].side != mass[actualIndex + actualIndexChange].side) {
                    if (mass[actualIndex + actualIndexChange].type != "king") {
                      if (functionType == "afterShah") {
                        if (mass[actualIndex + actualIndexChange].dangerForKing) {
                          mass[actualIndex + actualIndexChange].active = squareType;
                          //console.log(actualIndex + actualIndexChange, "castle 3");
                        }
                      } else {
                        mass[actualIndex + actualIndexChange].active = squareType;
                        //console.log(actualIndex + actualIndexChange, "castle 4");
                      }
                    } else {
                      if (mass[actualIndex + actualIndexChange].type == "king" && mass[actualIndex + actualIndexChange].side != mass[index].side) {
                        checkBehingKing_c = true;
                        if (functionType == "shah") {
                          whereCanGo(mass, mass[index].type, index, "checking", { index: actualIndex + actualIndexChange, destination: actualIndexChange });
                        }
                      }
                    }
                  } else if (squareType == "attacked") {
                    mass[actualIndex + actualIndexChange].active = squareType;
                    //console.log(actualIndex + actualIndexChange, "castle");
                  }
                  if (!checkBehingKing_c) {
                    break;
                  }
                }
              }
            } else {
              break;
            }
          } else {
            if (!(actualIndex % 8 == 0 && actualIndexChange == -1) && !(actualIndex % 8 == 7 && actualIndexChange == 1)) {
              if (actualIndex + actualIndexChange <= 63 && actualIndex + actualIndexChange >= 0) {
                if (functionType == "checkForKingSafe") {
                  if (mass[actualIndex + actualIndexChange].type == "king") {
                    if (mass[actualIndex + actualIndexChange].side != mass[index].side && mass[index].side != mass[cantMoveCell].side && cantMoveCell != -1) {
                      //console.log(0);
                      mass[cantMoveCell].canMove = false;
                    }
                  } else if (mass[actualIndex + actualIndexChange].type != "") {
                    break;
                  }
                } else if (mass[actualIndex + actualIndexChange].type == "") {
                  mass[actualIndex + actualIndexChange].active = "attacked";
                }
              }
            }
          }
          actualIndex += actualIndexChange;
        }
      }
      break;
    case "horse":
      let h_cells = [
        [6, 1],
        [10, 1],
        [15, 2],
        [17, 2],
      ];
      for (let i = 0; i < h_cells.length; i++) {
        for (let mnozhitel = -1; mnozhitel <= 1; mnozhitel += 2) {
          let cellIndex = index + h_cells[i][0] * mnozhitel;
          let cellRowIndex = h_cells[i][1] * mnozhitel;
          if (cellIndex <= 63 && cellIndex >= 0) {
            if (Math.floor(index / 8) + cellRowIndex == Math.floor(cellIndex / 8)) {
              if (mass[cellIndex].type == "" && mass[cellIndex].type != "king") {
                if (functionType == "afterShah") {
                  if (mass[cellIndex].dangerForKing) {
                    mass[cellIndex].active = squareType;
                    //console.log(cellIndex, "horse 1");
                  }
                } else {
                  mass[cellIndex].active = squareType;
                  //console.log(cellIndex, "horse 2");
                }
              } else if (mass[cellIndex].side != mass[index].side) {
                if (mass[cellIndex].type != "king") {
                  if (functionType == "afterShah") {
                    if (mass[cellIndex].dangerForKing) {
                      mass[cellIndex].active = squareType;
                      //console.log(cellIndex, "horse 3");
                    }
                  } else {
                    mass[cellIndex].active = squareType;
                    //console.log(cellIndex, "horse 4");
                  }
                } else if (functionType == "shah" && mass[cellIndex].type == "king" && mass[cellIndex].side != mass[index].side) {
                  whereCanGo(mass, mass[index].type, index, "checking", cellIndex);
                }
              } else {
                mass[cellIndex].active = "attacked";
              }
            }
          }
        }
      }
      break;
    case "bishop":
      const b_cells = [
        [index, -9],
        [index, -7],
        [index, 9],
        [index, 7],
      ]; // 1 - лв, 2 - пв, 3 - пн, 4 - лн
      for (let j = 0; j < b_cells.length; j++) {
        let actualIndex = b_cells[j][0];
        let actualIndexChange = b_cells[j][1];
        const figureColor = mass[actualIndex].side;
        let checkBehingKing_b = false;
        while (actualIndex + actualIndexChange <= 63 && actualIndex + actualIndexChange >= 0) {
          if (!checkBehingKing_b) {
            if (mass[actualIndex + actualIndexChange].type == "") {
              if (
                Math.floor((actualIndex + actualIndexChange) / 8) == Math.floor(actualIndex / 8) + 1 ||
                Math.floor((actualIndex + actualIndexChange) / 8) == Math.floor(actualIndex / 8) - 1
              ) {
                if (functionType == "afterShah") {
                  if (mass[actualIndex + actualIndexChange].dangerForKing) {
                    mass[actualIndex + actualIndexChange].active = squareType;
                    //console.log(actualIndex + actualIndexChange, "bishop 1");
                  }
                } else if (functionType == "checking" && actualIndexChange == kingData.destination) {
                  mass[actualIndex + actualIndexChange].dangerForKing = true;
                  // attackedCells.push(actualIndex + actualIndexChange);
                } else {
                  mass[actualIndex + actualIndexChange].active = squareType;
                  //console.log(actualIndex + actualIndexChange, "bishop 2");
                }
              } else {
                break;
              }
            } else if (functionType == "checking") {
              break;
            } else {
              if (
                Math.floor((actualIndex + actualIndexChange) / 8) == Math.floor(actualIndex / 8) + 1 ||
                Math.floor((actualIndex + actualIndexChange) / 8) == Math.floor(actualIndex / 8) - 1
              ) {
                if (mass[actualIndex + actualIndexChange].type != "king") {
                  if (mass[actualIndex + actualIndexChange].side != figureColor) {
                    if (functionType == "afterShah") {
                      if (mass[actualIndex + actualIndexChange].dangerForKing) {
                        mass[actualIndex + actualIndexChange].active = squareType;
                        //console.log(actualIndex + actualIndexChange, "bishop 3");
                      }
                    } else {
                      mass[actualIndex + actualIndexChange].active = squareType;
                      //console.log(actualIndex + actualIndexChange, "bishop 4");
                    }
                  } else if (squareType == "attacked") {
                    mass[actualIndex + actualIndexChange].active = "attacked";
                  }
                } else if (mass[actualIndex + actualIndexChange].type == "king" && mass[actualIndex + actualIndexChange].side != figureColor) {
                  checkBehingKing_b = true;
                  if (functionType == "shah") {
                    whereCanGo(mass, mass[index].type, index, "checking", { index: actualIndex + actualIndexChange, destination: actualIndexChange });
                  }
                }
              }
              if (!checkBehingKing_b) {
                break;
              }
            }
          } else {
            if (mass[actualIndex + actualIndexChange].type == "") {
              if (
                Math.floor((actualIndex + actualIndexChange) / 8) == Math.floor(actualIndex / 8) + 1 ||
                Math.floor((actualIndex + actualIndexChange) / 8) == Math.floor(actualIndex / 8) - 1
              ) {
                mass[actualIndex + actualIndexChange].active = "attacked";
              }
            }
          }
          actualIndex += actualIndexChange;
        }
      }
      break;
    case "queen":
      whereCanGo(mass, "castle", index, functionType, kingData);
      whereCanGo(mass, "bishop", index, functionType, kingData);
      break;
    case "king":
      // if (functionType == true) {
      //   mass.forEach((sqr, sqrIndex) => {
      //     if (sqr.side != mass[index].side) {
      //       whereCanGo(mass, mass[sqrIndex].type, sqrIndex, "attacked");
      //     }
      //   });
      // }
      const k_cells = [
        [-8, -1],
        [-7, -1],
        [1, 0],
        [9, 1],
        [8, 1],
        [7, 1],
        [-1, 0],
        [-9, -1],
      ];
      for (let p = 0; p < k_cells.length; p++) {
        const actualIndex = k_cells[p][0];
        const actualRowIndex = k_cells[p][1];
        if (index + actualIndex >= 0 && index + actualIndex <= 63 && Math.floor(index / 8) + actualRowIndex == Math.floor((index + actualIndex) / 8)) {
          if (functionType == true) {
            if (mass[index + actualIndex].active != "attacked") {
              if (mass[index + actualIndex].type == "") {
                mass[index + actualIndex].active = squareType;
                console.log(index + actualIndex, "king 1");
              } else if (mass[index + actualIndex].side != mass[index].side && mass[index + actualIndex].type != "king") {
                mass[index + actualIndex].active = squareType;
                console.log(index + actualIndex, "king 2");
              }
            }
          } else {
            mass[index + actualIndex].active = squareType;
            console.log(index + actualIndex, "king 3");
          }
        }
      }
      const castlingCells = [3, -4];
      if (mass[index].firstMove && functionType == true) {
        main: for (let i = 0; i < castlingCells.length; i++) {
          console.log(index + castlingCells[i]);
          const sign = Math.sign(castlingCells[i]);
          const castleCell = index + castlingCells[i];
          if (castleCell >= 0 && castleCell <= 63) {
            if (mass[castleCell].type == "castle" && mass[castleCell].firstMove) {
              for (let j = 1 * sign; j != castlingCells[i]; j = j + 1 * sign) {
                if (mass[index + j].type != "") {
                  continue main;
                }
              }
              // console.log(castleCell - (castlingCells[i] == 3 ? 1 : 2) * sign, "king 4");
              mass[castleCell - (castlingCells[i] == 3 ? 1 : 2) * sign].active = true;
            }
          }
        }
      }
  }
}
