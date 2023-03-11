import { css } from '@emotion/react';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { TaskType } from './Task.type';

const styles = {
  taskBox: css``,
  taskText: css``,
  taskTrashButton: css``
};
interface Props {
  task: TaskType;
}

export const Task: FC<Props> = ({ task }) => {
  return (
    <div css={styles.taskBox}>
      <p css={styles.taskText}>{task.text}</p>
      <button css={styles.taskTrashButton}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};
