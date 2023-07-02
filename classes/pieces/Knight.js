import Piece from "../Piece.js";

class Knight extends Piece
{
    type = "knight";

    super()
    {

    }

    clone()
    {
        return new Knight();
    }
}

export default Knight;