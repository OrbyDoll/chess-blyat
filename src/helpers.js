//Массив всех фигур
export let poleSquare = [
  { type: "castle", side: "black", attacked: false, firstMove: true, active: false },
  { type: "horse", side: "black", attacked: false, active: false },
  { type: "bishop", side: "black", attacked: false, active: false },
  { type: "queen", side: "black", attacked: false, active: false },
  { type: "king", side: "black", attacked: false, firstMove: true, active: false },
  { type: "bishop", side: "black", attacked: false, active: false },
  { type: "horse", side: "black", attacked: false, active: false },
  { type: "castle", side: "black", attacked: false, firstMove: true, active: false },
  { type: "pawn", side: "black", attacked: false, firstMove: true, active: false },
  { type: "pawn", side: "black", attacked: false, firstMove: true, active: false },
  { type: "pawn", side: "black", attacked: false, firstMove: true, active: false },
  { type: "pawn", side: "black", attacked: false, firstMove: true, active: false },
  { type: "pawn", side: "black", attacked: false, firstMove: true, active: false },
  { type: "pawn", side: "black", attacked: false, firstMove: true, active: false },
  { type: "pawn", side: "black", attacked: false, firstMove: true, active: false },
  { type: "pawn", side: "black", attacked: false, firstMove: true, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "pawn", side: "white", attacked: false, firstMove: true, active: false },
  { type: "pawn", side: "white", attacked: false, firstMove: true, active: false },
  { type: "pawn", side: "white", attacked: false, firstMove: true, active: false },
  { type: "pawn", side: "white", attacked: false, firstMove: true, active: false },
  { type: "pawn", side: "white", attacked: false, firstMove: true, active: false },
  { type: "pawn", side: "white", attacked: false, firstMove: true, active: false },
  { type: "pawn", side: "white", attacked: false, firstMove: true, active: false },
  { type: "pawn", side: "white", attacked: false, firstMove: true, active: false },
  { type: "castle", side: "white", attacked: false, firstMove: true, active: false },
  { type: "horse", side: "white", attacked: false, active: false },
  { type: "bishop", side: "white", attacked: false, active: false },
  { type: "queen", side: "white", attacked: false, active: false },
  { type: "king", side: "white", attacked: false, firstMove: true, active: false },
  { type: "bishop", side: "white", attacked: false, active: false },
  { type: "horse", side: "white", attacked: false, active: false },
  { type: "castle", side: "white", attacked: false, firstMove: true, active: false },
];

//Перемещение фигур
export function whereCanGo(mass, figureType, index, functionType) {
  const squareType = functionType == "shah" ? false : functionType;
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
            mass[firstCellIndex].active = squareType;
            if (secondCellIndex >= 0 && secondCellIndex <= 63) {
              if (mass[secondCellIndex].type == "" && mass[index].firstMove == true) {
                mass[secondCellIndex].active = squareType;
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
                  mass[eatingCellIndex].active = squareType;
                } else if (functionType == "attacked") {
                  mass[eatingCellIndex].active = "attacked";
                }
              } else if (functionType == "attacked") {
                mass[eatingCellIndex].active = "attacked";
              }
            } else if (mass[eatingCellIndex].type == "king" && functionType == "shah" && mass[eatingCellIndex].side != mass[index].side) {
              console.log(1, "pawn", index);
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
            Math.floor(OnMoveCellIndex / 8) == Math.floor(index / 8)
          ) {
            mass[OnMoveCellIndex + 8 * pawnSide].active = squareType;
            mass[OnMoveCellIndex].attacked = "del";
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
        while (actualIndex >= 0 && actualIndex <= 64) {
          if (!(actualIndex % 8 == 0 && actualIndexChange == -1) && !(actualIndex % 8 == 7 && actualIndexChange == 1)) {
            if (actualIndex + actualIndexChange <= 63 && actualIndex + actualIndexChange >= 0) {
              if (mass[actualIndex + actualIndexChange].type == "") {
                mass[actualIndex + actualIndexChange].active = squareType;
              } else {
                if (mass[index].side != mass[actualIndex + actualIndexChange].side) {
                  if (mass[actualIndex + actualIndexChange].type != "king") {
                    mass[actualIndex + actualIndexChange].active = squareType;
                  } else {
                    if (
                      mass[actualIndex + actualIndexChange].type == "king" &&
                      functionType == "shah" &&
                      mass[actualIndex + actualIndexChange].side != mass[index].side
                    ) {
                      console.log(1, "castle");
                    }
                  }
                } else if (squareType == "attacked") {
                  mass[actualIndex + actualIndexChange].active = squareType;
                }
                break;
              }
            }
          } else {
            break;
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
                mass[cellIndex].active = squareType;
              } else if (mass[cellIndex].side != mass[index].side) {
                if (mass[cellIndex].type != "king") {
                  mass[cellIndex].active = squareType;
                } else if (functionType == "shah" && mass[cellIndex].type == "king" && mass[cellIndex].side != mass[index].side) {
                  console.log(1, "horse");
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
        while (actualIndex + actualIndexChange <= 63 && actualIndex + actualIndexChange >= 0) {
          if (mass[actualIndex + actualIndexChange].type == "") {
            if (
              Math.floor((actualIndex + actualIndexChange) / 8) == Math.floor(actualIndex / 8) + 1 ||
              Math.floor((actualIndex + actualIndexChange) / 8) == Math.floor(actualIndex / 8) - 1
            ) {
              mass[actualIndex + actualIndexChange].active = squareType;
            } else {
              break;
            }
          } else {
            if (
              Math.floor((actualIndex + actualIndexChange) / 8) == Math.floor(actualIndex / 8) + 1 ||
              Math.floor((actualIndex + actualIndexChange) / 8) == Math.floor(actualIndex / 8) - 1
            ) {
              if (mass[actualIndex + actualIndexChange].type != "king") {
                if (mass[actualIndex + actualIndexChange].side != figureColor) {
                  mass[actualIndex + actualIndexChange].active = squareType;
                } else if (squareType == "attacked") {
                  mass[actualIndex + actualIndexChange].active = "attacked";
                }
              } else {
                if (
                  mass[actualIndex + actualIndexChange].type == "king" &&
                  functionType == "shah" &&
                  mass[actualIndex + actualIndexChange].side != mass[index].side
                ) {
                  console.log(1, "bishop");
                }
              }
            }
            break;
          }
          actualIndex += actualIndexChange;
        }
      }
      break;
    case "queen":
      whereCanGo(mass, "castle", index, functionType);
      whereCanGo(mass, "bishop", index, functionType);
      break;
    case "king":
      if (squareType == true) {
        mass.forEach((sqr, sqrIndex) => {
          if (sqr.side != mass[index].side) {
            whereCanGo(mass, mass[sqrIndex].type, sqrIndex, "attacked");
          }
        });
      }
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
          let squareTypeCondition = squareType == "attacked" ? true : mass[index + actualIndex].active != "attacked";
          if (squareTypeCondition) {
            if (mass[index + actualIndex].type == "") {
              mass[index + actualIndex].active = squareType;
            } else if (mass[index + actualIndex].side != mass[index].side && mass[index + actualIndex].type != "king") {
              mass[index + actualIndex].active = squareType;
            }
          }
        }
      }
  }
}
