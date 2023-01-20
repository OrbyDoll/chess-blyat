export let poleSquare = [
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
  { type: "pawn", side: "white", firstMove: true, active: false },
  { type: "pawn", side: "white", firstMove: true, active: false },
  { type: "pawn", side: "white", firstMove: true, active: false },
  { type: "pawn", side: "white", firstMove: true, active: false },
  { type: "pawn", side: "white", firstMove: true, active: false },
  { type: "pawn", side: "white", firstMove: true, active: false },
  { type: "pawn", side: "white", firstMove: true, active: false },
  { type: "pawn", side: "white", firstMove: true, active: false },
  { type: "castle", side: "white", firstMove: true, active: false },
  { type: "horse", side: "white", active: false },
  { type: "bishop", side: "white", active: false },
  { type: "queen", side: "white", active: false },
  { type: "king", side: "white", firstMove: true, active: false },
  { type: "bishop", side: "white", active: false },
  { type: "horse", side: "white", active: false },
  { type: "castle", side: "white", firstMove: true, active: false },
];
export function switchType(type) {
  switch (type) {
    case "pawn":
      return "Pawn";
    case "castle":
      return "Castle";
    case "horse":
      return "Horse";
    case "bishop":
      return "Bishop";
    case "king":
      return "King";
    case "queen":
      return "Queen";
  }
}
export function canEatFigure(eatable) {
  if (eatable == "King") {
    return false;
  }
  return true;
}
export function whereCanGo(mass, index) {
  let thisFigure = mass[index];
  switch (thisFigure.type) {
    case "pawn":
      if (index - 8 >= 0) {
        if (mass[index - 8].type == "") {
          mass[index - 8].active = true;
          if (index - 16 >= 0) {
            if (mass[index - 16].type == "" && thisFigure.firstMove) {
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
          mass[i[0] - 8].type == ""
            ? (mass[i[0] - 8].active = true)
            : (i[0] = -1);
          i[0] -= 8;
        }
        //Вниз
        if (i[1] + 8 <= 63) {
          mass[i[1] + 8].type == ""
            ? (mass[i[1] + 8].active = true)
            : (i[1] = 64);
          i[1] += 8;
        }
        //Влево
        if (i[2] - 1 >= 0) {
          if (
            Math.floor(i[2] / 8) == Math.floor((i[2] - 1) / 8) &&
            mass[i[2] - 1].type == ""
          ) {
            mass[i[2] - 1].active = true;
          } else {
            i[2] = -7;
          }
          i[2] -= 1;
        }
        //Вправо
        if (i[3] + 1 <= 63) {
          if (
            Math.floor(i[3] / 8) == Math.floor((i[3] + 1) / 8) &&
            mass[i[3] + 1].type == ""
          ) {
            mass[i[3] + 1].active = true;
          } else {
            i[3] = 72;
          }
          i[3] += 1;
        }
      }
      break;
  }
}
