import { css } from '@emotion/react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

const styles = {
  TaskCardDeleteButton: css`
    border: none;
    background-color: rgb(228, 228, 228);
    cursor: pointer;
    font-size: 16px;
    color: rgb(158, 46, 46);
  `
};

export const TaskCardDeleteButton: FC = () => {
  return (
    <div>
      <button css={styles.TaskCardDeleteButton}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
};
