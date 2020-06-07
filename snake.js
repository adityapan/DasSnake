export const SNAKE_SPEED_PER_SECOND = 2;

const snakeBody = [{ x: 11, y: 11 }];

export function update() {
  console.log("update snake");
}

export function render(gameBoard) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.x;
    snakeElement.style.gridColumnStart = segment.y;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}
