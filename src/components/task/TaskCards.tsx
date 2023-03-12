import { FC, useState } from 'react';
import { TaskCard } from './TaskCard';
import { AddTaskCardButton } from './button/AddTaskCardButton';
import { css } from '@emotion/react';
import { TaskCardType } from './Task.type';
import { DragDropContext, Droppable, OnDragEndResponder } from 'react-beautiful-dnd';

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

  const reorder = (taskCardList: Array<TaskCardType>, startIndex: number, endIndex: number) => {
    const newTaskCardList = [...taskCardList];
    const removedTasks = newTaskCardList.splice(startIndex, 1);
    newTaskCardList.splice(endIndex, 0, removedTasks[0]);
    return newTaskCardList;
  };

  const handleDragEnd: OnDragEndResponder = (result) => {
    if (!result.destination) return;
    // タスクカードを並び替える
    const newTaskCardList = reorder(taskCardList, result.source.index, result.destination.index);
    setTaskCardList(newTaskCardList);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div css={styles.taskCardsArea} {...provided.droppableProps} ref={provided.innerRef}>
            {taskCardList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                taskCard={taskCard}
                taskCardList={taskCardList}
                setTaskCardList={setTaskCardList}
                draggableIndex={index}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton taskCardList={taskCardList} setTaskCardList={setTaskCardList} />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
