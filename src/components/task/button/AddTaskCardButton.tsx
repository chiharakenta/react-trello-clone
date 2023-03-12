import { css } from '@emotion/react';
import { Dispatch, FC, SetStateAction } from 'react';
import { TaskCardType } from '../Task.type';
import { v4 as uuidv4 } from 'uuid';

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

interface Props {
  taskCardList: Array<TaskCardType>;
  setTaskCardList: Dispatch<SetStateAction<Array<TaskCardType>>>;
}

export const AddTaskCardButton: FC<Props> = ({ taskCardList, setTaskCardList }) => {
  const addTaskCard = () => {
    /* タスクカードを追加する */
    const uuid = uuidv4();
    setTaskCardList([
      ...taskCardList,
      {
        id: uuid,
        draggableId: `item${uuid}`
      }
    ]);
  };

  return (
    <div css={styles.addTaskCardButtonArea}>
      <button css={styles.addTaskCardButton} onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};
