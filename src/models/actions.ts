import { ITodo } from "./todo";

export type TaskAction =
  | { type: "added"; id: number; text: string }
  | { type: "changed"; task: ITodo }
  | { type: "deleted"; id: number }
  | { type: "reorder"; tasks: ITodo[] }
  | { type: "reset" };
