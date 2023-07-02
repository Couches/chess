import Piece from "../Piece.js";

class Pawn extends Piece
{
    type = "pawn";

    super() {}

    clone()
    {
        return new Pawn();
    }
}

export default Pawn;