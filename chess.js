import Square from './classes/Square.js';
import Bishop from "./classes/pieces/Bishop.js";
import King from "./classes/pieces/King.js";
import Knight from "./classes/pieces/Knight.js";
import Pawn from "./classes/pieces/Pawn.js";
import Queen from "./classes/pieces/Queen.js";
import Rook from "./classes/pieces/Rook.js";

const boardElement = document.getElementById("chess-board");

var selecting = false;
var selectedSquare;

var squares = [[],[],[],[],[],[],[],[]];
var startingBoard = [
    [ "bR","bN","bB","bQ","bK","bB","bN","bR"],
    [ "bP","bP","bP","bP","bP","bP","bP","bP"],
    [ "","","","","","","",""],
    [ "","","","","","","",""],
    [ "","","","","","","",""],
    [ "","","","","","","",""],
    [ "wP","wP","wP","wP","wP","wP","wP","wP"],
    [ "wR","wN","wB","wQ","wK","wB","wN","wR"],
];

const pieceMap = new Map();
pieceMap.set("P", new Pawn);
pieceMap.set("N", new Knight);
pieceMap.set("B", new Bishop);
pieceMap.set("R", new Rook);
pieceMap.set("K", new King);
pieceMap.set("Q", new Queen);

generateBoard();


// Generate board element and assign squares to board squares
function generateBoard()
{
    for (let i = 0; i < 8; i++)
    {
        let rowElement = document.createElement("div");
        rowElement.classList.add(`row-${(i % 2 == 0) ? "even" : "odd"}`);
        rowElement.classList.add("row");
    
        for (let j = 0; j < 8; j++)
        {
            let square;
            let squareElement = document.createElement("div");
            let squareImage = document.createElement("img");
            let piece = getPieceFromNotation(startingBoard[i][j], square, pieceMap);

            // Assign square element variables
            squareElement.appendChild(squareImage);
            squareElement.classList.add("square");

            // Assign square image variables
            squareImage.classList.add("square-image");
            squareImage.src = (piece != null) ? `assets/${piece.SVG}` : "";
        
            // Assign fields to square class
            square = new Square(squareElement, squareImage, piece);
            squares[i][j] = square;

            squareImage.square = square;
            squareElement.square = square;
            

            rowElement.appendChild(squareElement);
        }
        
        boardElement.appendChild(rowElement)
    }
}

// Returns a piece with set fields based on the 2 letter string fed into str
function getPieceFromNotation(str, boardSquare, pieceMap)
{
   if (str.length == 0) return null;
   
   let piece = pieceMap.get(str[1]).clone();
   piece.color = (str[0] == "w") ? "white" : "black";
   piece.SVG = str + ".svg";
   piece.square = boardSquare;
   
   return piece;
}

// Handle picking up and selecting target points
document.addEventListener("mousedown", function(e)
{
    let targetSquare;
    if (e.target.square != null) targetSquare = e.target.square;
    else
    {
        selectedSquare = null;
        return;
    }

    if (!selecting)
    {
        selectedSquare = targetSquare;
        selecting = true;
    }
    
    else
    {
        targetSquare.piece = selectedSquare.piece;
        selectedSquare.piece = null;

        updateSquare(targetSquare);
        updateSquare(selectedSquare);
        
        selectedSquare = null;
        selecting = false;
        
    }
});

function pickUp(square)
{
    if (selecting) return;
    selecting = true;
    
    console.log("picked up", square.piece);

    document.addEventListener("mousedown", function(e) {
        let targetSquare = e.target.square;

        targetSquare.piece = square.piece;
        updateSquare(targetSquare);
        selecting = false;
    }, {once: true});
}

function updateSquare(square)
{
    square.image.src = (square.piece != null) ? `assets/${square.piece.SVG}` : "";
}