import { act } from "react-dom/test-utils";

export let poleSquare = [
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

export function getImage(type, side) {
  switch (type) {
    case "castle":
      if (side == "white") {
        return (
          <svg xmlns="http://www.w3.org/2000/svg">
            <g fill="#fff" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 39h27v-3H9v3zm3-3v-4h21v4H12zm-1-22V9h4v2h5V9h5v2h5V9h4v5" stroke-linecap="butt" />
              <path d="M34 14l-3 3H14l-3-3" />
              <path d="M31 17v12.5H14V17" stroke-linecap="butt" stroke-linejoin="miter" />
              <path d="M31 29.5l1.5 2.5h-20l1.5-2.5" />
              <path d="M11 14h23" fill="none" stroke-linejoin="miter" />
            </g>
          </svg>
        );
      }
      return (
        <svg xmlns="http://www.w3.org/2000/svg">
          <g fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 39h27v-3H9v3zm3.5-7l1.5-2.5h17l1.5 2.5h-20zm-.5 4v-4h21v4H12z" stroke-linecap="butt" />
            <path d="M14 29.5v-13h17v13H14z" stroke-linecap="butt" stroke-linejoin="miter" />
            <path d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z" stroke-linecap="butt" />
            <path d="M12 35.5h21m-20-4h19m-18-2h17m-17-13h17M11 14h23" fill="none" stroke="#ececec" stroke-width="1" stroke-linejoin="miter" />
          </g>
        </svg>
      );
  }
}
export function whereCanGo(mass, type, index) {
  switch (type) {
    case "pawn":
      if (index - 8 >= 0) {
        if (mass[index - 8].type == "") {
          mass[index - 8].active = true;
          if (index - 16 >= 0) {
            if (mass[index - 16].type == "" && mass[index].firstMove) {
              mass[index - 16].active = true;
            }
          }
        }
      }
      break;
    case "castle":
      let i = [index, index, index, index]; //1 - Вверх, 2 - Вниз, 3 - Влево, 4 - Вправо
      while (
        i[0] - 8 >= 0 ||
        i[1] + 8 <= 63 ||
        Math.floor(i[2] / 8) == Math.floor((i[2] - 1) / 8) ||
        (Math.floor(i[3] / 8) == Math.floor((i[3] + 1) / 8) && i[3] + 1 < 64)
      ) {
        //Вверх
        if (i[0] - 8 >= 0) {
          mass[i[0] - 8].type == "" ? (mass[i[0] - 8].active = true) : (i[0] = -1);
          i[0] -= 8;
        }
        //Вниз
        if (i[1] + 8 <= 63) {
          mass[i[1] + 8].type == "" ? (mass[i[1] + 8].active = true) : (i[1] = 64);
          i[1] += 8;
        }
        //Влево
        if (i[2] - 1 >= 0) {
          if (Math.floor(i[2] / 8) == Math.floor((i[2] - 1) / 8) && mass[i[2] - 1].type == "") {
            mass[i[2] - 1].active = true;
          } else {
            i[2] = -7;
          }
          i[2] -= 1;
        }
        //Вправо
        if (i[3] + 1 <= 63) {
          if (Math.floor(i[3] / 8) == Math.floor((i[3] + 1) / 8) && mass[i[3] + 1].type == "") {
            mass[i[3] + 1].active = true;
          } else {
            i[3] = 72;
          }
          i[3] += 1;
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
        if (index + horseCells[i][0] < 65) {
          if (Math.floor(index / 8) + horseCells[i][1] == Math.floor((index + horseCells[i][0]) / 8) && mass[index + horseCells[i][0]].type == "") {
            mass[index + horseCells[i][0]].active = true;
          }
        }
        if (index - horseCells[i][0] < 65) {
          if (Math.floor(index / 8) - horseCells[i][1] == Math.floor((index - horseCells[i][0]) / 8) && mass[index - horseCells[i][0]].type == "") {
            mass[index - horseCells[i][0]].active = true;
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
        while (cell[0] + cell[1] <= 64 && cell[0] + cell[1] >= 0) {
          if (mass[cell[0] + cell[1]].type == "") {
            if (Math.floor((cell[0] + cell[1]) / 8) == Math.floor(cell[0] / 8) + 1 || Math.floor((cell[0] + cell[1]) / 8) == Math.floor(cell[0] / 8) - 1) {
              mass[cell[0] + cell[1]].active = true;
            } else {
              break;
            }
          } else {
            break;
          }
          cell[0] += cell[1];
        }
      }
      break;
    case "queen":
      whereCanGo(mass, "castle", index);
      whereCanGo(mass, "bishop", index);
  }
}
