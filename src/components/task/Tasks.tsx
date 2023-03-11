import { Dispatch, FC, SetStateAction } from 'react';
import { Task } from './Task';
import { TaskType } from './Task.type';

interface Props {
  taskList: Array<TaskType>;
  setTaskList: Dispatch<SetStateAction<Array<TaskType>>>;
}

export const Tasks: FC<Props> = ({ taskList, setTaskList }) => {
  return (
    <div>
      {taskList.map((task) => (
        <Task key={task.id} task={task} taskList={taskList} setTaskList={setTaskList} />
      ))}
    </div>
  );
};
