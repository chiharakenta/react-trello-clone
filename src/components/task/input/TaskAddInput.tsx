import { css } from '@emotion/react';
import { FC, FormEventHandler } from 'react';

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

export const TaskAddInput: FC = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    console.log(event);
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input css={styles.taskAddInput} type="text" placeholder="add a task" />
      </form>
    </div>
  );
};
