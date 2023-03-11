import { css } from '@emotion/react';
import { FC } from 'react';
import { TaskType } from './Task.type';

interface Props {
  task: TaskType;
}

const styles = {
  taskBox: css``,
  taskText: css``
};

export const Task: FC<Props> = ({ task }) => {
  return (
    <div css={styles.taskBox}>
      <p css={styles.taskText}>{task.text}</p>
    </div>
  );
};
