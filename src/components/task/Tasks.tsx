import { FC } from 'react';
import { Task } from './Task.type';

interface Props {
  inputText: string;
  taskList: Array<Task>;
}

export const Tasks: FC<Props> = ({ inputText, taskList }) => {
  return (
    <div>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};
