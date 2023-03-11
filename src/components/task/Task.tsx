import { css } from '@emotion/react';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, FC, SetStateAction } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TaskType } from './Task.type';

const styles = {
  taskBox: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    margin-top: 10px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px rgb(75, 75, 75);
  `,
  taskText: css`
    margin-left: 12px;
  `,
  taskTrashButton: css`
    margin-right: 8px;
    border: none;
    cursor: pointer;
  `
};

interface Props {
  task: TaskType;
  taskList: Array<TaskType>;
  setTaskList: Dispatch<SetStateAction<Array<TaskType>>>;
  draggableIndex: number;
}

export const Task: FC<Props> = ({ task, taskList, setTaskList, draggableIndex }) => {
  const handleDelete = (id: TaskType['id']) => {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  };

  return (
    <Draggable index={draggableIndex} draggableId={task.draggableId}>
      {(provided) => (
        <div
          css={styles.taskBox}
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p css={styles.taskText}>{task.text}</p>
          <button css={styles.taskTrashButton} onClick={() => handleDelete(task.id)}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      )}
    </Draggable>
  );
};
