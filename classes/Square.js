class Square {
    element;
    image;
    piece;

    constructor(element, image, piece)
    {
        this.element = element;
        this.image = image;
        this.piece = piece;

        this.element.square = this;
    }
}

export default Square;