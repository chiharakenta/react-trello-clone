import { css } from '@emotion/react';
import { FC } from 'react';
import { Header } from './components/header/Header';
import { TaskCards } from './components/task/TaskCards';
import backgroundImage from './images/mountain.jpg';

const styles = {
  app: css`
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    height: 100vh;
  `
};

export const App: FC = () => {
  return (
    <div css={styles.app}>
      <Header />
      <TaskCards />
    </div>
  );
};
