import Piece from "../Piece.js";

class King extends Piece
{
    type = "king";

    super()
    {

    }

    clone()
    {
        return new King();
    }
}

export default King;