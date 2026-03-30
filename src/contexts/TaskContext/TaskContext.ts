import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';

export interface TaskContextProps {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

export const TaskContext = createContext<TaskContextProps | null>(null);
