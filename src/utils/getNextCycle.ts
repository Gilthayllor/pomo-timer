export const getNextCycle = (currentCycle: number) => {
  return currentCycle === 0 ? 1 : currentCycle + 1;
};
