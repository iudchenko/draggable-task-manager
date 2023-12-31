import { useState } from "react";
import { useTasksDispatch } from "../contexts/TasksContext";
import { HiOutlinePlus } from "react-icons/hi2";
import { toast } from "react-hot-toast";

export default function AddTask() {
  const [text, setText] = useState<string>("");
  const dispatch = useTasksDispatch();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (text === "") {
      toast.error("Please, add task description");
      return;
    }

    setText("");
    dispatch({
      type: "added",
      id: Date.now(),
      text: text,
    });
    toast.success("Task successfully added!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2 lg:gap-5 mb-5 flex-col lg:flex-row">
        <input
          className="block grow p-4 pl-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="What are you up to today?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="flex gap-2 items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 lg:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <HiOutlinePlus />
          <span>Add task</span>
        </button>
      </div>
    </form>
  );
}
