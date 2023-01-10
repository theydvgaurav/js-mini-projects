import React, { useState, useEffect } from "react";
import "./App.css";

export default function Project() {
  const [row, setRow] = useState();
  const [col, setCol] = useState();
  const [showGame, setShowGame] = useState(false);
  const [randomXrobber, setrandomXrobber] = useState(1);
  const [randomYrobber, setrandomYrobber] = useState(2);
  const [randomXPolice, setrandomXPolice] = useState(2);
  const [randomYPolice, setrandomYPolice] = useState(1);

  const grid = [];
  for (let i = 0; i < row; i++) {
    const currentRow = [];
    for (let j = 0; j < col; j++) {
      currentRow.push(j);
    }
    grid.push(currentRow);
  }

  const submitDetails = () => {
    setShowGame(!showGame);
  };

  // Generate random coordinates if robber and police have same row or same column
  useEffect(() => {
    if (randomXrobber === randomXPolice || randomYrobber === randomYPolice) {
      getRandom();
      return;
    }
  }, [randomXrobber, randomXPolice, randomYrobber, randomYPolice]);

  const getRandom = () => {
    setrandomXrobber(Math.ceil((Math.random() * 1000000000) % col) - 1);
    setrandomYrobber(Math.ceil((Math.random() * 1000000000) % row) - 1);
    setrandomXPolice(Math.ceil((Math.random() * 1000000000) % col) - 1);
    setrandomYPolice(Math.ceil((Math.random() * 1000000000) % row) - 1);
  };

  const changePosition = () => {
    getRandom();
  };

  return (
    <div className="App">
      <div>
        <div>Row</div>
        <input type="number" onChange={(e) => setRow(e.target.value)} />
        <br />
        <div>Column</div>
        <input type="number" onChange={(e) => setCol(e.target.value)} />
        <br />
        <button onClick={submitDetails}>Submit</button>
      </div>
      <hr />
      {showGame && row && col ? (
        <div>
          <button onClick={changePosition}>Change Locations</button>
        </div>
      ) : null}
      {showGame && row && col ? (
        <div className="grid">
          {grid.map((row, rowId) => {
            return (
              <div key={rowId}>
                {row.map((node, nodeId) => {
                  console.log(rowId, nodeId);
                  return (
                    <div
                      key={nodeId}
                      className={
                        nodeId == randomXPolice && rowId == randomYPolice
                          ? "police"
                          : nodeId == randomXrobber && rowId == randomYrobber
                          ? "robber"
                          : "node"
                      }
                    ></div>
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
