import { css } from '@emotion/react';
import { ChangeEventHandler, Dispatch, FC, FormEventHandler, SetStateAction } from 'react';
import { Task } from '../Task.type';

const styles = {
  taskAddInput: css`
    width: 100%;
    font-size: 1.3rem;
    padding: 10px 15px;
    border-radius: 3px;
    border: none;
    outline: none;
  `
};

interface Props {
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  taskList: Array<Task>;
  setTaskList: Dispatch<SetStateAction<Array<Task>>>;
}

export const TaskAddInput: FC<Props> = ({ inputText, setInputText, taskList, setTaskList }) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // カードを追加する
    setTaskList([
      ...taskList,
      {
        text: inputText
      }
    ]);
    setInputText('');
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          css={styles.taskAddInput}
          type="text"
          placeholder="add a task"
          value={inputText}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
