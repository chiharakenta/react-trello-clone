import { css } from '@emotion/react';
import { ChangeEventHandler, Dispatch, FC, FormEvent, SetStateAction, useState } from 'react';
import { TaskType } from './Task.type';

const styles = {
  taskTextArea: css`
    margin-left: 12px;
  `,
  taskText: css`
    cursor: pointer;
  `
};

interface Props {
  task: TaskType;
  taskList: Array<TaskType>;
  setTaskList: Dispatch<SetStateAction<Array<TaskType>>>;
}

export const TaskText: FC<Props> = ({ task, taskList, setTaskList }) => {
  const [clicked, setClicked] = useState(false);
  const [inputTaskText, setInputTaskText] = useState(task.text);

  const handleClick = () => {
    setClicked(true);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputTaskText(event.target.value);
  };

  const updateTaskText = (id: TaskType['id'], text: TaskType['text']) => {
    const newTaskList = taskList.map((task) =>
      task.id === id ? { id, draggableId: task.draggableId, text } : task
    );
    return newTaskList;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>, id: TaskType['id']) => {
    event.preventDefault();
    const newTaskList = updateTaskText(id, inputTaskText);
    setTaskList(newTaskList);
    setClicked(false);
  };

  const handleBlur = (id: TaskType['id']) => {
    const newTaskList = updateTaskText(id, inputTaskText);
    setTaskList(newTaskList);
    setClicked(false);
  };

  return (
    <div css={styles.taskTextArea}>
      {clicked ? (
        <form onSubmit={(event) => handleSubmit(event, task.id)}>
          <input
            autoFocus
            type="text"
            value={inputTaskText}
            onChange={handleChange}
            onBlur={() => handleBlur(task.id)}
          />
        </form>
      ) : (
        <p css={styles.taskText} onClick={handleClick}>
          {task.text}
        </p>
      )}
    </div>
  );
};
