import {
  update as updateSnake,
  render as renderSnake,
  SNAKE_SPEED_PER_SECOND,
  isSnakeDead
} from "./snake.js";

import { update as updateFood, render as renderFood } from "./food.js";

let lastRenderTime = 0;
const gameBoard = document.getElementById("gameBoard");

function gameLoop(currentTime) {
  if (isSnakeDead()) {
    alert("Game Over!");
    window.location = window.location;
    return;
  }
  window.requestAnimationFrame(gameLoop);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED_PER_SECOND) return;

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(gameLoop);

function update() {
  updateFood();
  updateSnake();
}

function draw() {
  gameBoard.innerHTML = "";
  renderFood(gameBoard);
  renderSnake(gameBoard);
}
