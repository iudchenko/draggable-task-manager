import { ITodo } from "../models/todo";
import { TaskAction } from "../models/actions";

export function tasksReducer(tasks: ITodo[], action: TaskAction) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t: ITodo) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "reorder": {
      return action.tasks;
    }
    case "reset": {
      return [];
    }
    case "deleted": {
      return tasks.filter((t: ITodo) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action");
    }
  }
}
