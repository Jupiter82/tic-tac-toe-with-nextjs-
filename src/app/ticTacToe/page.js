import Square from "@/components/ticTacToe/Square";
import React from "react";

export default function ticTacToe() {
  return (
    <>
      <h3>Play Tic-Tac-Toe</h3>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
