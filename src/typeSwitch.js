function switchType(type) {
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
export default switchType;
