import { useState } from "react";
import { useTasksDispatch } from "../contexts/TasksContext";
import {
  HiOutlineBookmarkSquare,
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from "react-icons/hi2";
import { toast } from "react-hot-toast";
import { ITodo } from "../models/todo";

function Task({ task }: { task: ITodo }) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const dispatch = useTasksDispatch();

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={task.text}
          autoFocus
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
      </>
    );
  } else {
    taskContent = <>{task.text}</>;
  }
  return (
    <div className="flex justify-between gap-2 items-center">
      <label className="flex cursor-pointer items-center gap-2">
        <input
          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 shrink-0	"
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                done: e.target.checked,
              },
            });
            if (e.target.checked) {
              toast("Task completed!", {
                icon: "👏",
              });
            }
          }}
        />
        <span className={task.done ? "line-through" : ""}>{taskContent}</span>
      </label>
      <div className="flex items-center gap-2">
        {!isEditing && (
          <button
            className="py-2.5 px-2.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => setIsEditing(true)}
          >
            <HiOutlinePencilSquare />
          </button>
        )}

        {isEditing && (
          <button
            className="py-2.5 px-2.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => setIsEditing(false)}
          >
            <HiOutlineBookmarkSquare />
          </button>
        )}

        <button
          className="py-2.5 px-2.5 text-sm font-medium text-red-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => {
            dispatch({
              type: "deleted",
              id: task.id,
            });

            toast.success("Task successfully deleted!");
          }}
        >
          <HiOutlineTrash />
        </button>
      </div>
    </div>
  );
}

export default Task;
