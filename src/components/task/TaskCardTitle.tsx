import { css } from '@emotion/react';
import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  FormEventHandler,
  MouseEventHandler,
  useState
} from 'react';

const styles = {
  inputArea: css`
    margin-bottom: 10px;
    width: 30%;
    cursor: pointer;
  `,
  input: css`
    width: 80px;
    font-size: 1.1rem;
    padding: 4px 6px;
    border-radius: 3px;
    border: none;
    outline: none;
  `
};

export const TaskCardTitle: FC = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState('Today');

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsClick(true);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputCardTitle(event.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setIsClick(false);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = () => {
    setIsClick(false);
  };

  return (
    <div onClick={handleClick} css={styles.inputArea}>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            css={styles.input}
            autoFocus
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
            maxLength={10}
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};
