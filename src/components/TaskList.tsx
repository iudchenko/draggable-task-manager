import { Draggable } from "react-beautiful-dnd";
import { ITodo } from "../models/todo";
import Task from "./Task";

interface TaskListProps {
  tasks: ITodo[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <>
      {tasks?.length > 0 &&
        tasks.map((task: ITodo, index) => (
          <Draggable
            draggableId={task.id.toString()}
            index={index}
            key={task.id}
          >
            {(provided) => (
              <li
                className="py-2 px-5 bg-slate-200 dark:bg-slate-600 rounded-lg"
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                <Task task={task} />
              </li>
            )}
          </Draggable>
        ))}
    </>
  );
}
