import React, { useState } from "react";
import { Player } from "../types";
import { createBoard } from "../utils/gameUtils";

const OpponentBoard = (props: {
    player: Player
}) => {

    const [board, setBoard] = useState(createBoard());
    const [move, setMove] = useState<string>('');

    return (
      <div className="grid grid-cols-2 gap-4">
        <div></div>
        <div className="board">
            {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${cell === 1 ? "ship" : ""}`} // Use 'ship' class for cells with a ship
              >
                  {cell === 'hit' && (
                      <span role="img" aria-label="hit">🎯</span> // Replace with your hit icon
                    )}
                    {cell === 'miss' && (
                      <span role="img" aria-label="miss">💦</span> // Replace with your miss icon
                    )
                  }
              </div>
            ))}
          </div>
        ))}

        </div>
        </div>
    )


}

export default OpponentBoard;