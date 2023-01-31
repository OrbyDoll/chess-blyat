import { act } from "react-dom/test-utils";

export let poleSquare = [
  { type: "", side: "", attacked: false, active: false },
  { type: "", side: "", attacked: false, active: false },
  { type: "bishop", side: "black", attacked: false, active: false },
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
    case "horse":
      if (side == "white") {
        return (
          <svg xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#fff" />
              <path
                d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"
                fill="#fff"
              />
              <path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z" fill="#000" />
            </g>
          </svg>
        );
      }
      return (
        <svg xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#000" />
            <path
              d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"
              fill="#000"
            />
            <path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z" fill="#ececec" stroke="#ececec" />
            <path
              d="M24.55 10.4l-.45 1.45.5.15c3.15 1 5.65 2.49 7.9 6.75S35.75 29.06 35.25 39l-.05.5h2.25l.05-.5c.5-10.06-.88-16.85-3.25-21.34-2.37-4.49-5.79-6.64-9.19-7.16l-.51-.1z"
              fill="#ececec"
              stroke="none"
            />
          </g>
        </svg>
      );
    case "bishop":
      if (side == "white") {
        return (
          <svg xmlns="http://www.w3.org/2000/svg">
            <g fill="white" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z" />
              <path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z" />
              <path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z" />
              <path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke-linejoin="miter" />
            </g>
          </svg>
        );
      }
      return (
        <svg xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <g fill="#000" class="noscale" stroke-linecap="butt">
              <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z" />
              <path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z" />
              <path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z" />
            </g>
            <path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke="#ececec" stroke-linejoin="miter" />
          </g>
        </svg>
      );
    case "pawn":
      if (side == "white") {
        return (
          <svg xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"
              fill="#fff"
              stroke="#000"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        );
      }
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
          <path
            d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"
            stroke="#000"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      );
    case "king":
      if (side == "white") {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
            <g fill="none" fill-rule="evenodd" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22.5 11.63V6M20 8h5" stroke-linejoin="miter" />
              <path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="#fff" stroke-linecap="butt" stroke-linejoin="miter" />
              <path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z" fill="#fff" />
              <path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0" />
            </g>
          </svg>
        );
      }
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
          <path
            d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"
            stroke="#000"
            stroke-width="1.5"
            stroke-linecap="round"
          />
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
