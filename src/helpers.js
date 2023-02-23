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
export function whereCanGo(mass, figureType, index, squareType) {
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
          if (
            mass[eatingCellIndex].type != "king" &&
            mass[eatingCellIndex].side != mass[index].side &&
            Math.floor(eatingCellIndex / 8) == Math.floor(index / 8) + 1 * pawnSide
          ) {
            if (mass[eatingCellIndex].type != "" || squareType == "attacked") {
              mass[eatingCellIndex].active = squareType;
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
      let castleCells = [
        [index, 8],
        [index, -8],
        [index, 1],
        [index, -1],
      ];
      for (let i = 0; i < castleCells.length; i++) {
        let castleActualIndex = castleCells[i][0];
        let castleActualIndexChange = castleCells[i][1];
        while (castleActualIndex >= 0 && castleActualIndex <= 64) {
          if (!(castleActualIndex % 8 == 0 && castleActualIndexChange == -1) && !(castleActualIndex % 8 == 7 && castleActualIndexChange == 1)) {
            if (castleActualIndex + castleActualIndexChange <= 63 && castleActualIndex + castleActualIndexChange >= 0) {
              if (mass[castleActualIndex + castleActualIndexChange].type == "") {
                mass[castleActualIndex + castleActualIndexChange].active = squareType;
              } else {
                if (
                  mass[index].side != mass[castleActualIndex + castleActualIndexChange].side &&
                  mass[castleActualIndex + castleActualIndexChange].type != "king"
                ) {
                  mass[castleActualIndex + castleActualIndexChange].active = squareType;
                }
                break;
              }
            }
          } else {
            break;
          }
          castleActualIndex += castleActualIndexChange;
        }
      }
      break;
    case "horse":
      let horseCells = [
        [6, 1],
        [10, 1],
        [15, 2],
        [17, 2],
      ];
      for (let i = 0; i < horseCells.length; i++) {
        for (let mnozhitel = -1; mnozhitel <= 1; mnozhitel += 2) {
          let horseCellIndex = index + horseCells[i][0] * mnozhitel;
          let horseCellRowIndex = horseCells[i][1] * mnozhitel;
          if (horseCellIndex <= 63 && horseCellIndex >= 0) {
            if (Math.floor(index / 8) + horseCellRowIndex == Math.floor(horseCellIndex / 8) && mass[horseCellIndex].side != mass[index].side) {
              if (mass[horseCellIndex].type == "" && mass[horseCellIndex].type != "king") {
                mass[horseCellIndex].active = squareType;
              } else {
                if (mass[horseCellIndex].type != "king" && mass[horseCellIndex].side != mass[index].side) {
                  mass[horseCellIndex].active = squareType;
                }
              }
            }
          }
        }
      }
      break;
    case "bishop":
      let bishopCells = [
        [index, -9],
        [index, -7],
        [index, 9],
        [index, 7],
      ]; // 1 - лв, 2 - пв, 3 - пн, 4 - лн
      for (let j = 0; j < bishopCells.length; j++) {
        let bishopActualIndex = bishopCells[j][0];
        let bishopActualIndexChange = bishopCells[j][1];
        let figureColor = mass[bishopActualIndex].side;
        while (bishopActualIndex + bishopActualIndexChange <= 63 && bishopActualIndex + bishopActualIndexChange >= 0) {
          if (mass[bishopActualIndex + bishopActualIndexChange].type == "") {
            if (
              Math.floor((bishopActualIndex + bishopActualIndexChange) / 8) == Math.floor(bishopActualIndex / 8) + 1 ||
              Math.floor((bishopActualIndex + bishopActualIndexChange) / 8) == Math.floor(bishopActualIndex / 8) - 1
            ) {
              mass[bishopActualIndex + bishopActualIndexChange].active = squareType;
            } else {
              break;
            }
          } else {
            if (
              mass[bishopActualIndex + bishopActualIndexChange].side != figureColor &&
              mass[bishopActualIndex + bishopActualIndexChange].type != "king" &&
              (Math.floor((bishopActualIndex + bishopActualIndexChange) / 8) == Math.floor(bishopActualIndex / 8) + 1 ||
                Math.floor((bishopActualIndex + bishopActualIndexChange) / 8) == Math.floor(bishopActualIndex / 8) - 1)
            ) {
              mass[bishopActualIndex + bishopActualIndexChange].active = squareType;
            }
            break;
          }
          bishopActualIndex += bishopActualIndexChange;
        }
      }
      break;
    case "queen":
      whereCanGo(mass, "castle", index, squareType);
      whereCanGo(mass, "bishop", index, squareType);
      break;
    case "king":
      if (squareType == true) {
        mass.forEach((sqr, sqrIndex) => {
          if (sqr.side != mass[index].side) {
            whereCanGo(mass, mass[sqrIndex].type, sqrIndex, "attacked");
          }
        });
      }
      const kingCells = [
        [-8, -1],
        [-7, -1],
        [1, 0],
        [9, 1],
        [8, 1],
        [7, 1],
        [-1, 0],
        [-9, -1],
      ];
      for (let p = 0; p < kingCells.length; p++) {
        const kingActualIndex = kingCells[p][0];
        const kingActualRowIndex = kingCells[p][1];
        if (
          index + kingActualIndex >= 0 &&
          index + kingActualIndex <= 63 &&
          Math.floor(index / 8) + kingActualRowIndex == Math.floor((index + kingActualIndex) / 8)
        ) {
          let squareTypeCondition = squareType == "attacked" ? true : mass[index + kingActualIndex].active != "attacked";
          if (squareTypeCondition) {
            if (mass[index + kingActualIndex].type == "") {
              mass[index + kingActualIndex].active = squareType;
            } else if (mass[index + kingActualIndex].side != mass[index].side && mass[index + kingActualIndex].type != "king") {
              mass[index + kingActualIndex].active = squareType;
            }
          }
        }
      }
  }
}
