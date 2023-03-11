import { FC } from 'react';
import { Task } from './Task';
import { TaskType } from './Task.type';

interface Props {
  inputText: string;
  taskList: Array<TaskType>;
}

export const Tasks: FC<Props> = ({ inputText, taskList }) => {
  return (
    <div>
      {taskList.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </div>
  );
};
