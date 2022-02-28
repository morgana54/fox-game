import { ICONS } from "./constants";
const gameState = {
  current: "INIT",
  clock: 1,
  tick() {
    this.clock++;
    console.log(this.clock);
    return this.clock;
  },
  handleUserAction(icon: typeof ICONS) {
    console.log(icon);
  },
};

export default gameState;
