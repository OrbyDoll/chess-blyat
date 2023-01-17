let poleSquare = [
  { type: "castle", side: "black" },
  { type: "horse", side: "black" },
  { type: "bishop", side: "black" },
  { type: "queen", side: "black" },
  { type: "king", side: "black" },
  { type: "bishop", side: "black" },
  { type: "horse", side: "black" },
  { type: "castle", side: "black" },
  { type: "pawn", side: "black" },
  { type: "pawn", side: "black" },
  { type: "pawn", side: "black" },
  { type: "pawn", side: "black" },
  { type: "pawn", side: "black" },
  { type: "pawn", side: "black" },
  { type: "pawn", side: "black" },
  { type: "pawn", side: "black" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
  { type: "", side: "" },
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
export function canEatFigure(eatable){
  if (eatable == 'King'){
    return false
  } 
  return true
}
export function whereCanGo(mass, index){
  let thisFigure = mass[index]
  switch(thisFigure.type){
    case 'pawn':
      if(thisFigure.side == 'black'){
        //Писать
      }
  }
}

export { poleSquare };
