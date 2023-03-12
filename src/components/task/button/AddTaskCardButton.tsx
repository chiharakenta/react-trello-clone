import { css } from '@emotion/react';
import { FC } from 'react';

const styles = {
  addTaskCardButtonArea: css`
    margin-left: 1%;
    margin-top: 25px;
  `,
  addTaskCardButton: css`
    padding: 10px 18px;
    border-radius: 9999px;
    font-size: 30px;
    background-color: rgb(221, 194, 162);
    box-shadow: 3px 3px 6px 1px #000;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      box-shadow: none;
      transform: translate(3px, 3px);
    }
  `
};

export const AddTaskCardButton: FC = () => {
  return (
    <div css={styles.addTaskCardButtonArea}>
      <button css={styles.addTaskCardButton}>+</button>
    </div>
  );
};
