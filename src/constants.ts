export const TICK_RATE = 3000;

export const ICONS = ["fish", "poop", "weather"] as const;
export type Icon = typeof ICONS[number];

export const enum STATE {
  INIT = "INIT",
  HATCHING = "HATCHING",
  IDLING = "IDLING",
  SLEEPING = "SLEEPING",
  FEEDING = "FEEDING",
  POOPING = "POOPING",
  HUNGRY = "HUNGRY",
  CELEBRATING = "CELEBRATING",
  DEAD = "DEAD",
}
