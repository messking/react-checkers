import React from "react";
import styled from "styled-components";
import { Hero } from "./Hero";
import { replaceBoardElements } from "../utils/Utils";
export const Floor = ({
  floorColor,
  row,
  cell,
  rowIndex,
  cellIndex,
  set_current_hero_loc,
  current_hero_loc,
  board,
  red_turn,
  set_red_turn,
  set_all_moves,
  all_moves
}) => {
  const currentBoard = board;

  const toFloorHandler = () => {
    if (cell === "E" && current_hero_loc.cellIndex < 8) {
      if (
        red_turn &&
        current_hero_loc.type === "B" &&
        current_hero_loc.rowIndex + 1 === rowIndex
      ) {
        //Basic movement for the red team -- >
        replaceBoardElements(
          board,
          current_hero_loc.rowIndex,
          current_hero_loc.cellIndex,
          rowIndex,
          cellIndex
        );
        set_current_hero_loc({
          row,
          cell
        });
        set_red_turn(!red_turn);
        set_all_moves([...all_moves, {currentBoard}]);
      }

      //Basic movement for the green team -- >
      if (
        !red_turn &&
        current_hero_loc.type === "W" &&
        current_hero_loc.rowIndex - 1 === rowIndex
      ) {
        replaceBoardElements(
          board,
          current_hero_loc.rowIndex,
          current_hero_loc.cellIndex,
          rowIndex,
          cellIndex
        );
        set_current_hero_loc({
          row,
          cell
        });
        set_red_turn(!red_turn);
        set_all_moves([...all_moves, {currentBoard}]);
      }
    }
  };

  //Forces the user to jump and eat the enemy.

  const JumpToHandler = () => {
    if (
      !red_turn &&
      board[rowIndex][cellIndex] === "W" &&
      board[rowIndex - 1][cellIndex - 1] === "B" &&
      board[rowIndex - 2][cellIndex - 2] === "E"
    ) {
      console.log("TEST", board[rowIndex][cellIndex]);
      replaceBoardElements(
        board,
        rowIndex,
        cellIndex,
        rowIndex - 2,
        cellIndex - 2
      );
      board[rowIndex - 1][cellIndex - 1] = "E";
      set_red_turn(!red_turn);

    }

    if (
      !red_turn &&
      board[rowIndex][cellIndex] === "W" &&
      board[rowIndex - 1][cellIndex + 1] === "B" &&
      board[rowIndex - 2][cellIndex + 2] === "E"
    ) {
      console.log("TEST", board[rowIndex][cellIndex]);
      replaceBoardElements(
        board,
        rowIndex,
        cellIndex,
        rowIndex - 2,
        cellIndex + 2
      );

      board[rowIndex - 1][cellIndex + 1] = "E";
      set_red_turn(!red_turn);

    }

    if (board[rowIndex][cellIndex] === "B") {
      if (
        red_turn &&
        board[rowIndex][cellIndex] === "B" &&
        board[rowIndex + 1][cellIndex + 1] === "W" &&
        board[rowIndex + 2][cellIndex + 2] === "E"
      ) {
        replaceBoardElements(
          board,
          rowIndex,
          cellIndex,
          rowIndex + 2,
          cellIndex + 2
        );
        board[rowIndex + 1][cellIndex + 1] = "E";
          set_red_turn(!red_turn);
      }
      if (
        red_turn &&
        board[rowIndex][cellIndex] === "B" &&
        board[rowIndex + 1][cellIndex - 1] === "W" &&
        board[rowIndex + 2][cellIndex - 2] === "E"
      ) {
        replaceBoardElements(
          board,
          rowIndex,
          cellIndex,
          rowIndex + 2,
          cellIndex - 2
        );
        board[rowIndex + 1][cellIndex - 1] = "E";
          set_red_turn(!red_turn);
      }
    }
  };

  return (
    <StyledFloor
      onClick={() => {
        JumpToHandler();
        toFloorHandler();
      }}
      style={{ background: floorColor }}
    >
      {cell === "W" && (
        <Hero
          cell={cell}
          heroColor={"#408000"}
          set_current_hero_loc={set_current_hero_loc}
          rowIndex={rowIndex}
          cellIndex={cellIndex}
          current_hero_loc={current_hero_loc}
        ></Hero>
      )}
      {cell === "B" && (
        <Hero
          cell={cell}
          heroColor={"#5F021F"}
          set_current_hero_loc={set_current_hero_loc}
          rowIndex={rowIndex}
          cellIndex={cellIndex}
          current_hero_loc={current_hero_loc}
        ></Hero>
      )}
    </StyledFloor>
  );
};

const StyledFloor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;
