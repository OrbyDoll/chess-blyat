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
  { type: "castle", side: "white", active: false },
  { type: "horse", side: "white", active: false },
  { type: "bishop", side: "white", active: false },
  { type: "queen", side: "white", active: false },
  { type: "king", side: "white", active: false },
  { type: "bishop", side: "white", active: false },
  { type: "horse", side: "white", active: false },
  { type: "castle", side: "white", active: false },
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
      if (index - 8 > 0) {
        if (mass[index - 8].type == "") {
          mass[index - 8].active = true;
          if (index - 16 > 0) {
            if (mass[index - 16].type == "" && thisFigure.firstMove) {
              mass[index - 16].active = true;
            }
          }
        }
      }
  }
}
