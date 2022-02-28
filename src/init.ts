import game from "./gameState";
import { initButtons } from "./buttons";
import { TICK_RATE } from "./constants";

const init = async () => {
  console.log("starting game");

  initButtons(game.handleUserAction);

  let nextTimeToTick = Date.now();

  // Taking advantage of CLOSURE - value of nextTimeToTick is remembered in next getNextAnimationFrame calls
  const getNextAnimationFrame = () => {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      game.tick();
      // You're setting the time that needs to pass until there is a time for next tick
      nextTimeToTick = nextTimeToTick + TICK_RATE;
    }

    // If the time to tick hasn't come yet, call the function again in requestAnimationFrame to be sure that the work will get done without interrupting any other processes
    requestAnimationFrame(getNextAnimationFrame);
  };

  // Call the function for the first time (start the game basically)
  getNextAnimationFrame();
};

init();
