import { FC, useState } from 'react';
import { TaskCard } from './TaskCard';
import { AddTaskCardButton } from './button/AddTaskCardButton';
import { css } from '@emotion/react';
import { TaskCardType } from './Task.type';

const styles = {
  taskCardsArea: css`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  `
};

export const TaskCards: FC = () => {
  const [taskCardList, setTaskCardList] = useState<Array<TaskCardType>>([
    {
      id: '0',
      draggableId: 'item0'
    }
  ]);

  return (
    <div css={styles.taskCardsArea}>
      {taskCardList.map((taskCard) => (
        <TaskCard
          key={taskCard.id}
          taskCardId={taskCard.id}
          taskCardList={taskCardList}
          setTaskCardList={setTaskCardList}
        />
      ))}
      <AddTaskCardButton taskCardList={taskCardList} setTaskCardList={setTaskCardList} />
    </div>
  );
};
