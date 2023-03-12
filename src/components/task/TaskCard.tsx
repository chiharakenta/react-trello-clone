import { css } from '@emotion/react';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton';
import { TaskAddInput } from './input/TaskAddInput';
import { TaskCardType, TaskType } from './Task.type';
import { TaskCardTitle } from './TaskCardTitle';
import { Tasks } from './Tasks';

const styles = {
  taskCard: css`
    width: 250px;
    padding: 10px 25px;
    margin: 10px 1%;
    background-color: rgb(228, 228, 228);
    border-radius: 5px;
  `,
  taskCardTitleAndTaskCardDeleteButtonArea: css`
    display: flex;
    justify-content: space-between;
  `
};

interface Props {
  taskCard: TaskCardType;
  taskCardList: Array<TaskCardType>;
  setTaskCardList: Dispatch<SetStateAction<Array<TaskCardType>>>;
  draggableIndex: number;
}

export const TaskCard: FC<Props> = ({
  taskCard,
  taskCardList,
  setTaskCardList,
  draggableIndex
}) => {
  const [inputText, setInputText] = useState('');
  const [taskList, setTaskList] = useState<Array<TaskType>>([]);

  return (
    <Draggable index={draggableIndex} draggableId={taskCard.draggableId}>
      {(provided) => (
        <div css={styles.taskCard} ref={provided.innerRef} {...provided.draggableProps}>
          <div css={styles.taskCardTitleAndTaskCardDeleteButtonArea} {...provided.dragHandleProps}>
            <TaskCardTitle />
            <TaskCardDeleteButton
              taskCardId={taskCard.id}
              taskCardList={taskCardList}
              setTaskCardList={setTaskCardList}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <Tasks taskList={taskList} setTaskList={setTaskList} />
        </div>
      )}
    </Draggable>
  );
};
