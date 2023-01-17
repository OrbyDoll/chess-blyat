export let poleSquare = [
  { type: "castle", side: "black", active: false },
  { type: "horse", side: "black", active: false },
  { type: "bishop", side: "black", active: false },
  { type: "queen", side: "black", active: false },
  { type: "king", side: "black", active: false },
  { type: "bishop", side: "black", active: false },
  { type: "horse", side: "black", active: false },
  { type: "castle", side: "black", active: false },
  { type: "pawn", side: "black", firstMove: true, active: false },
  { type: "pawn", side: "black", firstMove: true, active: false },
  { type: "pawn", side: "black", firstMove: true, active: false },
  { type: "pawn", side: "black", firstMove: true, active: false },
  { type: "pawn", side: "black", firstMove: true, active: false },
  { type: "pawn", side: "black", firstMove: true, active: false },
  { type: "pawn", side: "black", firstMove: true, active: false },
  { type: "pawn", side: "black", firstMove: true, active: false },
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
  { type: "", side: "", active: false },
  { type: "", side: "", active: false },
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
      if (thisFigure.side == "black") {
        if (mass[index + 8].type == "") {
          mass[index + 8].active = true;
          if (mass[index + 16].type == "" && thisFigure.firstMove) {
            thisFigure.firstMove = false;
            mass[index + 16].active = true;
            console.log(mass);
          }
        }
      }
  }
}
