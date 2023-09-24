import toast from "react-hot-toast";
import { useTasksDispatch } from "../contexts/TasksContext";
import { HiOutlineArrowPath } from "react-icons/hi2";

function ResetButton() {
  const dispatch = useTasksDispatch();

  function handleReset() {
    toast((t) => (
      <div>
        <span>Are you sure you want to reset tasks?</span>
        <div className="pt-2">
          <button
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
          <button
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
            onClick={() => {
              dispatch({
                type: "reset",
              });
              toast.dismiss(t.id);
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    ));
  }

  return (
    <button
      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      onClick={handleReset}
    >
      {<HiOutlineArrowPath />}
    </button>
  );
}

export default ResetButton;
