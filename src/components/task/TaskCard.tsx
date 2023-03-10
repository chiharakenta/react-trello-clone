import { css } from '@emotion/react';
import { FC } from 'react';
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton';
import { TaskAddInput } from './input/TaskAddInput';
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
  return (
    <div css={styles.taskCard}>
      <TaskCardTitle />
      <TaskCardDeleteButton />
      <TaskAddInput />
      <Tasks />
    </div>
  );
};
