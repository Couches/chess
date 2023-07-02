import Piece from "../Piece.js";

class Queen extends Piece
{
    type = "queen";

    super() {}

    clone()
    {
        return new Queen();
    }
}

export default Queen;