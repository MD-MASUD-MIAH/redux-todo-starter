import type { TPriorityType, TTaskStatus } from "./task.type";

export const TASK_STATUS: TTaskStatus[] = ["pending", "in-progress", "done"];
export const TASK_PRIORITY: TPriorityType[] = ["low", "medium", "high"];

export const STATUS_LEVEL: Record<TTaskStatus, string> = {
  pending: "Pending",
  "in-progress": "In-progress",
  done: "Done",
};
export const PRIORITY_LEVEL: Record<TPriorityType, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
};
