import {
  update as updateSnake,
  render as renderSnake,
  SNAKE_SPEED_PER_SECOND
} from "./snake.js";

let lastRenderTime = 0;

function gameLoop(currentTime) {
  window.requestAnimationFrame(gameLoop);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED_PER_SECOND) return;

  lastRenderTime = currentTime;

  console.log(SNAKE_SPEED_PER_SECOND);
  update();
  draw();
}

window.requestAnimationFrame(gameLoop);

function update() {
  updateSnake();
}

function draw() {
  renderSnake();
}
