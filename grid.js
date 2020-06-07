import { onSnake } from "./snake.js";
const GRID_SIZE = 21;

export function randomEmptyGridPosition() {
  let emptyPositions = [];
  for (let x = 1; x <= GRID_SIZE; x++) {
    for (let y = 1; y <= GRID_SIZE; y++) {
      if (!onSnake({ x, y })) emptyPositions.push({ x, y });
    }
  }
  return emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
}

export function outOfGrid(position) {
  return (
    position.x < 1 ||
    position.x > GRID_SIZE ||
    position.y < 1 ||
    position.y > GRID_SIZE
  );
}
