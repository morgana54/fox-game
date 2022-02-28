import { Icon, ICONS } from "./constants";

const toggleHighlighted = (iconIndex: number, show: boolean) =>
  document
    .querySelector(`.${ICONS[iconIndex]}-icon`)
    ?.classList.toggle("highlighted", show);

export const initButtons = (handleUserAction: (icon: Icon) => void) => {
  let selectedIconIndex = 0;

  const buttonClick = ({ target }: Event) => {
    if ((target as HTMLElement).classList.contains("left-btn")) {
      // Turn off currently highlighted icon
      toggleHighlighted(selectedIconIndex, false);
      // Move selected icon the the left
      selectedIconIndex = (2 + selectedIconIndex) % ICONS.length;
      // Turn on highlighting on the newly selecton icon
      toggleHighlighted(selectedIconIndex, true);
    } else if ((target as HTMLElement).classList.contains("right-btn")) {
      toggleHighlighted(selectedIconIndex, false);
      selectedIconIndex = (1 + selectedIconIndex) % ICONS.length;
      toggleHighlighted(selectedIconIndex, true);
    } else {
      handleUserAction(ICONS[selectedIconIndex]);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  document.querySelector(".buttons")?.addEventListener("click", buttonClick);
};
