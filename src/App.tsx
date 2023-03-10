import { FC } from 'react';
import { Header } from './components/header/Header';
import { TaskCards } from './components/task/TaskCards';

export const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <TaskCards />
    </div>
  );
};
