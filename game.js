let lastRenderTime = 0;
const SNAKE_SPEED_PER_SECOND = 2;

function gameLoop(currentTime) {
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  window.requestAnimationFrame(gameLoop);
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(gameLoop);

function update() {}

function draw() {}
