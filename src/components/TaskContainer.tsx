import { Droppable } from "react-beautiful-dnd";
import { useTasks } from "../contexts/TasksContext";
import TaskList from "./TaskList";

export default function TaskContainer() {
  const tasks = useTasks();
  const activeTasks = tasks.filter((t) => !t.done);
  const completedTasks = tasks.filter((t) => t.done);

  return (
    <div className="flex gap-4 justify-between">
      <div className="grow shrink-0 basis-1/2 list-none bg-gray-100 dark:bg-gray-700 rounded p-4">
        <h2 className="pb-2 font-bold">Active tasks</h2>
        <Droppable droppableId="ActiveTasks">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <TaskList tasks={activeTasks} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
      <div className="grow shrink-0 basis-1/2 list-none bg-gray-100 dark:bg-gray-700 rounded p-4">
        <h2 className="pb-2 font-bold">Completed tasks</h2>
        <Droppable droppableId="CompletedTasks">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <TaskList tasks={completedTasks} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
}
