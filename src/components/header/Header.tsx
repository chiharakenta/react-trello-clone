import { css } from '@emotion/react';
import { FC } from 'react';

const styles = {
  header: css`
    text-align: center;
    padding: 4px 10%;
    margin-bottom: 50px;
    background-color: rgb(102, 94, 74);
  `,
  h1: css`
    font-size: 45px;
    color: aliceblue;
    font-weight: 600;
    text-shadow: 2px 2px 2px #000;
  `
};

export const Header: FC = () => {
  return (
    <div>
      <header css={styles.header}>
        <h1 css={styles.h1}>Simple Trello</h1>
      </header>
    </div>
  );
};
