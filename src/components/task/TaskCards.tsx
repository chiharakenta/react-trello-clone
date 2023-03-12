import { FC } from 'react';
import { TaskCard } from './TaskCard';
import { AddTaskCardButton } from './button/AddTaskCardButton';
import { css } from '@emotion/react';

const styles = {
  taskCardsArea: css`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  `
};

export const TaskCards: FC = () => {
  return (
    <div css={styles.taskCardsArea}>
      <TaskCard />
      <AddTaskCardButton />
    </div>
  );
};
