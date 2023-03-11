import { css } from '@emotion/react';
import { FC, useState } from 'react';
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton';
import { TaskAddInput } from './input/TaskAddInput';
import { Task } from './Task.type';
import { TaskCardTitle } from './TaskCardTitle';
import { Tasks } from './Tasks';

const styles = {
  taskCard: css`
    width: 250px;
    padding: 10px 25px;
    margin: 10px 1%;
    background-color: rgb(228, 228, 228);
    border-radius: 5px;
  `
};

export const TaskCard: FC = () => {
  const [inputText, setInputText] = useState('');
  const [taskList, setTaskList] = useState<Array<Task>>([]);

  return (
    <div css={styles.taskCard}>
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Tasks inputText={inputText} taskList={taskList} />
    </div>
  );
};
