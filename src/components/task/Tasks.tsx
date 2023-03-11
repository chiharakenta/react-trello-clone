import { Dispatch, FC, SetStateAction } from 'react';
import { DragDropContext, Droppable, OnDragEndResponder } from 'react-beautiful-dnd';
import { Task } from './Task';
import { TaskType } from './Task.type';

interface Props {
  taskList: Array<TaskType>;
  setTaskList: Dispatch<SetStateAction<Array<TaskType>>>;
}

export const Tasks: FC<Props> = ({ taskList, setTaskList }) => {
  const reorder = (taskList: Array<TaskType>, startIndex: number, endIndex: number) => {
    const newTaskList = [...taskList];
    const removedTasks = newTaskList.splice(startIndex, 1);
    newTaskList.splice(endIndex, 0, removedTasks[0]);
    return newTaskList;
  };

  const handleDragEnd: OnDragEndResponder = (result) => {
    if (!result.destination) return;
    // タスクを並び替える
    const newTaskList = reorder(taskList, result.source.index, result.destination.index);
    setTaskList(newTaskList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                    draggableIndex={index}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
