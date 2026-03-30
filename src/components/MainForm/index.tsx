import { useRef } from 'react';
import { LuCirclePlay } from 'react-icons/lu';
import { useTaskContext } from '../../contexts/TaskContext';
import type { TaskModel } from '../../models/TaskModel';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import dayjs from 'dayjs';
import { getFormattedSeconds } from '../../utils/getFormattedSeconds';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export const MainForm = () => {
  const taskInputRef = useRef<HTMLInputElement>(null);
  const { setState, state } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(
    nextCycle,
    state.config.cyclesBeforeLongBreak,
  );
  const nextCycleDuration = state.config[nextCycleType];

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const taskValue = taskInputRef.current?.value;

    if (!taskValue) {
      alert('Por favor, preencha o campo de tarefa.');
      return;
    }

    const newTask: TaskModel = {
      id: dayjs().toString(),
      title: taskValue,
      completedDate: null,
      interruptedDate: null,
      type: nextCycleType,
      duration: nextCycleDuration * 60,
      startDate: Date.now(),
    };

    setState(prev => ({
      ...prev,
      activeTask: newTask,
      currentCycle: nextCycle,
      secondsRemaining: newTask.duration,
      formattedSecondsRemaining: getFormattedSeconds(newTask.duration),
      tasks: [...prev.tasks, newTask],
    }));
  };

  return (
    <form className='form' action='' onSubmit={handleSubmit}>
      <div className='formRow'>
        <DefaultInput
          label='Task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
          ref={taskInputRef}
        />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<LuCirclePlay />} type='submit' />
      </div>
    </form>
  );
};
