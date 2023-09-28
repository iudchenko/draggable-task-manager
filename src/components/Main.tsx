import toast, { Toaster } from "react-hot-toast";
import AddTask from "../components/AddTask";
import TaskContainer from "../components/TaskContainer";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useTasks, useTasksDispatch } from "../contexts/TasksContext";
import { ITodo } from "../models/todo";

const Main = () => {
  const tasks = useTasks();

  const dispatch = useTasksDispatch();

  function onDragEnd(result: DropResult) {
    // console.log(result);
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // Reordering of tasks
    let add;
    let active = tasks.filter((t) => !t.done);
    let complete = tasks.filter((t) => t.done);

    // Source Logic
    if (source.droppableId === "ActiveTasks") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "ActiveTasks") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    if (destination.droppableId === source.droppableId) {
      // Reorder
      dispatch({
        type: "reorder",
        tasks: [...active, ...complete],
      });
    } else {
      // Reorder
      dispatch({
        type: "reorder",
        tasks: [...active, ...complete],
      });

      // Find completed task
      const completed = tasks.find((t: ITodo) => t.id === Number(draggableId));

      // Toggle tasks complete/active
      if (completed) {
        dispatch({
          type: "changed",
          task: {
            ...completed,
            done: !completed.done,
          },
        });
      }

      if (destination.droppableId === "CompletedTasks") {
        toast("Task completed!", {
          icon: "👏",
        });
      }
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <main className="flex flex-col px-5 pt-5 pb-20 max-w-4xl mx-auto">
        <AddTask />
        <TaskContainer />
        <Toaster position="top-center" reverseOrder={false} />
      </main>
    </DragDropContext>
  );
};

export default Main;
