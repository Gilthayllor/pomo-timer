import type { TaskModel } from '../models/TaskModel';

export const getNextCycleType = (
  currentCycle: number,
  cyclesBeforeLongBreak: number,
): TaskModel['type'] => {
  if (currentCycle % cyclesBeforeLongBreak === 0) {
    return 'longBreakTime';
  } else if (currentCycle % 2 === 1) {
    return 'workTime';
  } else {
    return 'shortBreakTime';
  }
};
