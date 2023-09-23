import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  Dispatch,
} from "react";
import { tasksReducer } from "../reducers/tasksReducer";
import { useLocalStorage } from "../hooks/useStorage";
import { ITodo } from "../models/todo";
import { TaskAction } from "../models/actions";

const TasksContext = createContext<ITodo[]>([]);

const TasksDispatchContext = createContext<Dispatch<TaskAction>>(() => null);

export function TasksProvider({ children }: { children: ReactNode }) {
  const [tasksLocal, setTasksLocal] = useLocalStorage(
    "tasksLocal",
    JSON.stringify([])
  );
  const initialTasks = tasksLocal ? JSON.parse(tasksLocal) : [];
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  useEffect(
    function () {
      setTasksLocal(JSON.stringify(tasks));
    },
    [tasks, setTasksLocal]
  );

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error("TasksContext was used outside of TasksProvider");
  }
  return context;
}

export function useTasksDispatch() {
  const context = useContext(TasksDispatchContext);
  if (context === undefined) {
    throw new Error(
      "TasksDispatchContext was used outside of TasksDispatchContextProvider"
    );
  }
  return context;
}
