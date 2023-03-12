import { css } from '@emotion/react';
import { Dispatch, FC, SetStateAction, useState } from 'react';
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
  taskCardId: TaskCardType['id'];
  taskCardList: Array<TaskCardType>;
  setTaskCardList: Dispatch<SetStateAction<Array<TaskCardType>>>;
}

export const TaskCard: FC<Props> = ({ taskCardId, taskCardList, setTaskCardList }) => {
  const [inputText, setInputText] = useState('');
  const [taskList, setTaskList] = useState<Array<TaskType>>([]);

  return (
    <div css={styles.taskCard}>
      <div css={styles.taskCardTitleAndTaskCardDeleteButtonArea}>
        <TaskCardTitle />
        <TaskCardDeleteButton
          taskCardId={taskCardId}
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
  );
};
