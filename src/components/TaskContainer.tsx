import { Droppable } from "react-beautiful-dnd";
import { useTasks } from "../contexts/TasksContext";
import TaskList from "./TaskList";

export default function TaskContainer() {
  const tasks = useTasks();
  const activeTasks = tasks.filter((t) => !t.done);
  const completedTasks = tasks.filter((t) => t.done);

  return (
    <div className="flex gap-4 justify-between min-h-[50vh] flex-col lg:flex-row">
      <div className="grow shrink-0  basis-half list-none bg-gray-100 dark:bg-gray-700 rounded p-4">
        <h2 className="pb-2 font-bold">Active tasks</h2>
        <Droppable droppableId="ActiveTasks">
          {(provided, snapshot) => (
            <div
              className={`${snapshot.isDraggingOver ? "dragactive" : ""}`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <ul className="flex flex-col gap-2 overflow-scroll list-none">
                <TaskList tasks={activeTasks} />
                {provided.placeholder}
              </ul>
            </div>
          )}
        </Droppable>
      </div>
      <div className="grow shrink-0 basis-half list-none bg-gray-100 dark:bg-gray-700 rounded p-4">
        <h2 className="pb-2 font-bold">Completed tasks</h2>
        <Droppable droppableId="CompletedTasks">
          {(provided, snapshot) => (
            <div
              className={`${snapshot.isDraggingOver ? "dragcomplete" : ""}`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <ul className="flex flex-col gap-2 overflow-scroll list-none">
                <TaskList tasks={completedTasks} />
                {provided.placeholder}
              </ul>
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
}
