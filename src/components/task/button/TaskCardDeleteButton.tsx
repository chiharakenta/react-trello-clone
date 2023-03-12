import { css } from '@emotion/react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, FC, SetStateAction } from 'react';
import { TaskCardType } from '../Task.type';

const styles = {
  TaskCardDeleteButton: css`
    border: none;
    background-color: rgb(228, 228, 228);
    cursor: pointer;
    font-size: 16px;
    color: rgb(158, 46, 46);
  `
};

interface Props {
  taskCardId: TaskCardType['id'];
  taskCardList: Array<TaskCardType>;
  setTaskCardList: Dispatch<SetStateAction<Array<TaskCardType>>>;
}

export const TaskCardDeleteButton: FC<Props> = ({ taskCardId, taskCardList, setTaskCardList }) => {
  const handleDelete = (id: TaskCardType['id']) => {
    const newTaskCardList = taskCardList.filter((taskCard) => taskCard.id !== id);
    setTaskCardList(newTaskCardList);
  };

  return (
    <div>
      <button css={styles.TaskCardDeleteButton} onClick={() => handleDelete(taskCardId)}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};
