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
      //Определение цвета
      if (mass[index].side == "white") {
        //Белые
        //Передвижение
        if (index - 8 >= 0) {
          if (mass[index - 8].type == "") {
            mass[index - 8].active = squareType;
            if (index - 16 >= 0) {
              if (mass[index - 16].type == "" && mass[index].firstMove == true) {
                mass[index - 16].active = squareType;
              }
            }
          }
        }
        //Съедание
        if (index - 9 >= 0) {
          if (
            mass[index - 9].type != "" &&
            mass[index - 9].type != "king" &&
            mass[index - 9].side != mass[index].side &&
            Math.floor((index - 9) / 8) == Math.floor(index / 8) - 1
          ) {
            mass[index - 9].active = squareType;
          }
        }
        if (index - 7 >= 0) {
          if (
            mass[index - 7].type != "" &&
            mass[index - 7].type != "king" &&
            mass[index - 7].side != mass[index].side &&
            Math.floor((index - 7) / 8) == Math.floor(index / 8) - 1
          ) {
            mass[index - 7].active = squareType;
          }
        }
        //Съедание на ходу
        if (index - 1 >= 0) {
          if (
            mass[index - 1].type == "pawn" &&
            mass[index - 1].side != mass[index].side &&
            mass[index - 1].firstMove == "previous" &&
            Math.floor((index - 1) / 8) == Math.floor(index / 8)
          ) {
            mass[index - 9].active = squareType;
            mass[index - 1].attacked = "del";
          }
        }
        if (index + 1 <= 63) {
          if (
            mass[index + 1].type == "pawn" &&
            mass[index + 1].side != mass[index].side &&
            mass[index + 1].firstMove == "previous" &&
            Math.floor((index + 1) / 8) == Math.floor(index / 8)
          ) {
            mass[index - 7].active = squareType;
            mass[index + 1].attacked = "del";
          }
        }
      } else {
        //Черные
        //Передвижение
        if (index + 8 <= 63) {
          if (mass[index + 8].type == "") {
            mass[index + 8].active = squareType;
            if (index + 16 <= 63) {
              if (mass[index + 16].type == "" && mass[index].firstMove == true) {
                mass[index + 16].active = squareType;
              }
            }
          }
        }
        //Съедание
        if (index + 9 <= 63) {
          if (
            mass[index + 9].type != "" &&
            mass[index + 9].type != "king" &&
            mass[index + 9].side != mass[index].side &&
            Math.floor((index + 9) / 8) == Math.floor(index / 8) + 1
          ) {
            mass[index + 9].active = squareType;
          }
        }
        if (index + 7 <= 63) {
          if (
            mass[index + 7].type != "" &&
            mass[index + 7].type != "king" &&
            mass[index + 7].side != mass[index].side &&
            Math.floor((index + 7) / 8) == Math.floor(index / 8) + 1
          ) {
            mass[index + 7].active = squareType;
          }
        }
        //Съедание на ходу
        if (index - 1 >= 0) {
          if (
            mass[index - 1].type == "pawn" &&
            mass[index - 1].side != mass[index].side &&
            mass[index - 1].firstMove == "previous" &&
            Math.floor((index - 1) / 8) == Math.floor(index / 8)
          ) {
            mass[index + 7].active = squareType;
            mass[index - 1].attacked = "del";
          }
        }
        if (index + 1 <= 63) {
          if (
            mass[index + 1].type == "pawn" &&
            mass[index + 1].side != mass[index].side &&
            mass[index + 1].firstMove == "previous" &&
            Math.floor((index + 1) / 8) == Math.floor(index / 8)
          ) {
            mass[index + 9].active = squareType;
            mass[index + 1].attacked = "del";
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
        let cell = castleCells[i];
        while (cell[0] >= 0 && cell[0] <= 64) {
          if (!(cell[0] % 8 == 0 && cell[1] == -1) && !(cell[0] % 8 == 7 && cell[1] == 1)) {
            if (cell[0] + cell[1] <= 63 && cell[0] + cell[1] >= 0) {
              if (mass[cell[0] + cell[1]].type == "") {
                mass[cell[0] + cell[1]].active = squareType;
              } else {
                if (mass[index].side != mass[cell[0] + cell[1]].side && mass[cell[0] + cell[1]].type != "king") {
                  mass[cell[0] + cell[1]].active = squareType;
                }
                break;
              }
            }
          } else {
            break;
          }
          cell[0] += cell[1];
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
        if (index + horseCells[i][0] < 65 && index + horseCells[i][0] >= 0) {
          if (
            Math.floor(index / 8) + horseCells[i][1] == Math.floor((index + horseCells[i][0]) / 8) &&
            mass[index + horseCells[i][0]].side != mass[index].side
          ) {
            if (mass[index + horseCells[i][0]].type == "" && mass[index + horseCells[i][0]].type != "king") {
              mass[index + horseCells[i][0]].active = squareType;
            } else {
              if (mass[index + horseCells[i][0]].type != "king" && mass[index + horseCells[i][0]].side != mass[index].side) {
                mass[index + horseCells[i][0]].active = squareType;
              }
            }
          }
        }
        if (index - horseCells[i][0] < 65 && index - horseCells[i][0] >= 0) {
          if (
            Math.floor(index / 8) - horseCells[i][1] == Math.floor((index - horseCells[i][0]) / 8) &&
            mass[index - horseCells[i][0]].side != mass[index].side
          ) {
            if (mass[index - horseCells[i][0]].type == "" && mass[index - horseCells[i][0]].type != "king") {
              mass[index - horseCells[i][0]].active = squareType;
            } else {
              if (mass[index - horseCells[i][0]].type != "king" && mass[index - horseCells[i][0]].side != mass[index].side) {
                mass[index - horseCells[i][0]].active = squareType;
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
        let cell = bishopCells[j];
        let figureColor = mass[cell[0]].side;
        while (cell[0] + cell[1] <= 63 && cell[0] + cell[1] >= 0) {
          if (mass[cell[0] + cell[1]].type == "") {
            if (Math.floor((cell[0] + cell[1]) / 8) == Math.floor(cell[0] / 8) + 1 || Math.floor((cell[0] + cell[1]) / 8) == Math.floor(cell[0] / 8) - 1) {
              mass[cell[0] + cell[1]].active = squareType;
            } else {
              break;
            }
          } else {
            if (
              mass[cell[0] + cell[1]].side != figureColor &&
              mass[cell[0] + cell[1]].type != "king" &&
              (Math.floor((cell[0] + cell[1]) / 8) == Math.floor(cell[0] / 8) + 1 || Math.floor((cell[0] + cell[1]) / 8) == Math.floor(cell[0] / 8) - 1)
            ) {
              mass[cell[0] + cell[1]].active = squareType;
            }
            break;
          }
          cell[0] += cell[1];
        }
      }
      break;
    case "queen":
      whereCanGo(mass, "castle", index, true);
      whereCanGo(mass, "bishop", index, true);
      break;
    case "king":
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
        const kingCell = kingCells[p];
        console.log(index + kingCell[0] >= 0 && index + kingCell[0] <= 63 && Math.floor(index / 8) + kingCell[1] == Math.floor((index + kingCell[0]) / 8));
        if (index + kingCell[0] >= 0 && index + kingCell[0] <= 63 && Math.floor(index / 8) + kingCell[1] == Math.floor((index + kingCell[0]) / 8)) {
          if (mass[index + kingCell[0]].type != "") {
            mass[index + kingCell[0]].active = true;
          }
        }
      }
  }
}
