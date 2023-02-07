import { act } from "react-dom/test-utils";

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

export function getImage(type, side) {
  switch (type) {
    case "castle":
      if (side == "white") {
        return (
          <svg xmlns="http://www.w3.org/2000/svg">
            <g fill="#fff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 39h27v-3H9v3zm3-3v-4h21v4H12zm-1-22V9h4v2h5V9h5v2h5V9h4v5" strokeLinecap="butt" />
              <path d="M34 14l-3 3H14l-3-3" />
              <path d="M31 17v12.5H14V17" strokeLinecap="butt" strokeLinejoin="miter" />
              <path d="M31 29.5l1.5 2.5h-20l1.5-2.5" />
              <path d="M11 14h23" fill="none" strokeLinejoin="miter" />
            </g>
          </svg>
        );
      }
      return (
        <svg xmlns="http://www.w3.org/2000/svg">
          <g stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 39h27v-3H9v3zm3.5-7l1.5-2.5h17l1.5 2.5h-20zm-.5 4v-4h21v4H12z" strokeLinecap="butt" />
            <path d="M14 29.5v-13h17v13H14z" strokeLinecap="butt" strokeLinejoin="miter" />
            <path d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z" strokeLinecap="butt" />
            <path d="M12 35.5h21m-20-4h19m-18-2h17m-17-13h17M11 14h23" fill="none" stroke="#ececec" strokeWidth="1" strokeLinejoin="miter" />
          </g>
        </svg>
      );
    case "horse":
      if (side == "white") {
        return (
          <svg xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
          <g fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
            <g fill="white" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z" />
              <path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z" />
              <path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z" />
              <path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" strokeLinejoin="miter" />
            </g>
          </svg>
        );
      }
      return (
        <svg xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <g fill="#000" strokeLinecap="butt">
              <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z" />
              <path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z" />
              <path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z" />
            </g>
            <path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke="#ececec" strokeLinejoin="miter" />
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
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        );
      }
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
          <path
            d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"
            stroke="#000"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "king":
      if (side == "white") {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
            <g fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.5 11.63V6M20 8h5" strokeLinejoin="miter" />
              <path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="#fff" strokeLinecap="butt" strokeLinejoin="miter" />
              <path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z" fill="#fff" />
              <path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0" />
            </g>
          </svg>
        );
      }
      return (
        <svg xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22.5 11.63V6" strokeLinejoin="miter" />
            <path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="#000" strokeLinecap="butt" strokeLinejoin="miter" />
            <path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z" fill="#000" />
            <path d="M20 8h5" strokeLinejoin="miter" />
            <path
              d="M32 29.5s8.5-4 6.03-9.65C34.15 14 25 18 22.5 24.5l.01 2.1-.01-2.1C20 18 9.906 14 6.997 19.85c-2.497 5.65 4.853 9 4.853 9"
              stroke="#ececec"
            />
            <path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0" stroke="#ececec" />
          </g>
        </svg>
      );
    case "queen":
      if (side == "white") {
        return (
          <svg xmlns="http://www.w3.org/2000/svg">
            <g fill="#fff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zm16.5-4.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0z" />
              <path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-14V25L7 14l2 12z" strokeLinecap="butt" />
              <path
                d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"
                strokeLinecap="butt"
              />
              <path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" fill="none" />
            </g>
          </svg>
        );
      }
      return (
        <svg xmlns="http://www.w3.org/2000/svg">
          <g stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <g stroke="none">
              <circle cx="6" cy="12" r="2.75" />
              <circle cx="14" cy="9" r="2.75" />
              <circle cx="22.5" cy="8" r="2.75" />
              <circle cx="31" cy="9" r="2.75" />
              <circle cx="39" cy="12" r="2.75" />
            </g>
            <path d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z" strokeLinecap="butt" />
            <path
              d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"
              strokeLinecap="butt"
            />
            <path d="M11 38.5a35 35 1 0 0 23 0" fill="none" strokeLinecap="butt" />
            <path d="M11 29a35 35 1 0 1 23 0m-21.5 2.5h20m-21 3a35 35 1 0 0 22 0m-23 3a35 35 1 0 0 24 0" fill="none" stroke="#ececec" />
          </g>
        </svg>
      );
  }
}
export function whereCanGo(mass, type, index) {
  switch (type) {
    case "pawn":
      if (mass[index].side == "white") {
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
        if (index - 9 >= 0) {
          if (
            mass[index - 9].type != "" &&
            mass[index - 9].type != "king" &&
            mass[index - 9].side != mass[index].side &&
            Math.floor((index - 9) / 8) == Math.floor(index / 8) - 1
          ) {
            mass[index - 9].active = true;
          }
        }
        if (index - 7 >= 0) {
          if (
            mass[index - 7].type != "" &&
            mass[index - 7].type != "king" &&
            mass[index - 7].side != mass[index].side &&
            Math.floor((index - 7) / 8) == Math.floor(index / 8) - 1
          ) {
            mass[index - 7].active = true;
          }
        }
      } else {
        if (index + 8 <= 63) {
          if (mass[index + 8].type == "") {
            mass[index + 8].active = true;
            if (index + 16 <= 63) {
              if (mass[index + 16].type == "" && mass[index].firstMove) {
                mass[index + 16].active = true;
              }
            }
          }
        }
        if (index + 9 >= 0) {
          if (
            mass[index + 9].type != "" &&
            mass[index + 9].type != "king" &&
            mass[index + 9].side != mass[index].side &&
            Math.floor((index + 9) / 8) == Math.floor(index / 8) + 1
          ) {
            mass[index + 9].active = true;
          }
        }
        if (index + 7 >= 0) {
          if (
            mass[index + 7].type != "" &&
            mass[index + 7].type != "king" &&
            mass[index + 7].side != mass[index].side &&
            Math.floor((index + 7) / 8) == Math.floor(index / 8) + 1
          ) {
            mass[index + 7].active = true;
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
                mass[cell[0] + cell[1]].active = true;
              } else {
                if (mass[index].side != mass[cell[0] + cell[1]].side && mass[cell[0] + cell[1]].type != "king") {
                  mass[cell[0] + cell[1]].active = true;
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
            if (mass[index + horseCells[i][0]].type == "") {
              mass[index + horseCells[i][0]].active = true;
            } else {
              if (mass[index + horseCells[i][0]].type != "king" && mass[index + horseCells[i][0]].side != mass[index].side) {
                mass[index + horseCells[i][0]].active = true;
              }
            }
          }
        }
        if (index - horseCells[i][0] < 65 && index - horseCells[i][0] >= 0) {
          if (
            Math.floor(index / 8) - horseCells[i][1] == Math.floor((index - horseCells[i][0]) / 8) &&
            mass[index - horseCells[i][0]].side != mass[index].side
          ) {
            if (mass[index - horseCells[i][0]].type == "") {
              mass[index - horseCells[i][0]].active = true;
            } else {
              if (mass[index - horseCells[i][0]].type != "king" && mass[index - horseCells[i][0]].side != mass[index].side) {
                mass[index - horseCells[i][0]].active = true;
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
              mass[cell[0] + cell[1]].active = true;
            } else {
              break;
            }
          } else {
            if (
              mass[cell[0] + cell[1]].side != figureColor &&
              (Math.floor((cell[0] + cell[1]) / 8) == Math.floor(cell[0] / 8) + 1 || Math.floor((cell[0] + cell[1]) / 8) == Math.floor(cell[0] / 8) - 1)
            ) {
              mass[cell[0] + cell[1]].active = true;
              console.log(1);
            }
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
