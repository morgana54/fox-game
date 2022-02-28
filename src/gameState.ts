import { Icon, STATE } from "./constants";
const gameState = {
  current: STATE.INIT,
  clock: 1,
  // Negative means that it's awake
  wakeTime: -1,
  tick() {
    this.clock++;

    if (this.clock === this.wakeTime) {
      this.wake();
    }

    console.log(this.clock);

    return this.clock;
  },
  startGame() {
    console.log("hatching");
    this.current = STATE.HATCHING;
    // After 3 ticks so 9 seconds
    this.wakeTime = this.clock + 3;
  },
  wake() {
    console.log("hatched");
    this.current = STATE.IDLING;
    this.wakeTime = -1;
  },
  handleUserAction(icon: Icon) {
    console.log(icon);
    // can't do actions if the current state is one of these states
    if (
      [
        STATE.SLEEPING,
        STATE.FEEDING,
        STATE.CELEBRATING,
        STATE.HATCHING,
      ].includes(this.current)
    ) {
      // do nothing
      return;
    }

    if (this.current === STATE.INIT || this.current === STATE.DEAD) {
      this.startGame();
      return;
    }

    // execute the currently selected action
    switch (icon) {
      case "weather":
        this.changeWeather();
        break;
      case "poop":
        this.cleanUpPoop();
        break;
      case "fish":
        this.feed();
        break;
    }

    return;
  },
  changeWeather() {
    console.log("changeWeather");
  },
  cleanUpPoop() {
    console.log("cleanUpPoop");
  },
  feed() {
    console.log("feed");
  },
};

// Function will be called in other ctx so you have to make sure it's binded to gameState ctx
export const handleUserAction = gameState.handleUserAction.bind(gameState);

export default gameState;
