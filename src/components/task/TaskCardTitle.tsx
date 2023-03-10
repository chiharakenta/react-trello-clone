import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  FormEventHandler,
  MouseEventHandler,
  useState
} from 'react';

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
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className="taskCardTitleInput"
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
