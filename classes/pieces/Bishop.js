import Piece from "../Piece.js";

class Bishop extends Piece
{
    type = "bishop";

    super()
    {

    }

    clone()
    {
        return new Bishop();
    }
}

export default Bishop;