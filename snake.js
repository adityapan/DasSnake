export const SNAKE_SPEED_PER_SECOND = 2;

const snakeBody = [{ x: 10, y: 11 }, { x: 11, y: 11 }, { x: 12, y: 11 }];

export function update() {
  let currentHeadSegment = snakeBody.pop();
  let newHeadSegment = { x: 0, y: 0 };
  newHeadSegment.x = currentHeadSegment.x + 1;
  newHeadSegment.y = currentHeadSegment.y + 0;
  snakeBody.shift();
  snakeBody.push(currentHeadSegment);
  snakeBody.push(newHeadSegment);
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
