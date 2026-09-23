import { TTaskType } from "./tast.type";
export const TASK_STATUS: TTaskType = ["pending", "in-progress", "done"];

export const STATU_LEVEL: Record<TTaskType, string> = {
  pending: "Pending",
  "in-progress": "In-progress",
  done: "Done",
};
