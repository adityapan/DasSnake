import { getInputDirection } from "./input.js";

export const SNAKE_SPEED_PER_SECOND = 1;

const snakeBody = [{ x: 11, y: 11 }];

export function update() {
  let currentHeadSegment = snakeBody.pop();
  let newHeadSegment = { x: 0, y: 0 };

  let moveDirection = getInputDirection();

  newHeadSegment.x = currentHeadSegment.x + moveDirection.x;
  newHeadSegment.y = currentHeadSegment.y + moveDirection.y;

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
