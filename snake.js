import { getInputDirection } from "./input.js";
import { outOfGrid } from "./grid.js";

export const SNAKE_SPEED_PER_SECOND = 7;

const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

export function update() {
  addSegments();

  let currentHeadSegment = snakeBody.pop();
  let newHeadSegment = { x: 0, y: 0 };
  let moveDirection = getInputDirection();

  newHeadSegment.x = currentHeadSegment.x + moveDirection.x;
  newHeadSegment.y = currentHeadSegment.y + moveDirection.y;

  if (outOfGrid(newHeadSegment)) {
    alert("Game Over");
    window.location = window.location;
    return;
  }
  if (onSnake(newHeadSegment)) {
    alert("Game Over");
    window.location = window.location;
    return;
  }

  snakeBody.push(currentHeadSegment);
  snakeBody.push(newHeadSegment);

  snakeBody.shift();
}

export function render(gameBoard) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}

export function expandSnake(growth) {
  newSegments += growth;
}

export function onSnake(position) {
  return snakeBody.some(segment => {
    return segment.x === position.x && segment.y === position.y;
  });
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegments = 0;
}
