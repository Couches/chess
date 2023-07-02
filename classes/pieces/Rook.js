import Piece from "../Piece.js";

class Rook extends Piece
{
    type = "rook";

    super() {}

    clone()
    {
        return new Rook();
    }
}

export default Rook;