import { onSnake, expandSnake } from "./snake.js";
let food = { x: 10, y: 1 };
const FOOD_GROWTH_RATE = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(FOOD_GROWTH_RATE);
    food = { x: 20, y: 10 };
  }
}

export function render(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}
