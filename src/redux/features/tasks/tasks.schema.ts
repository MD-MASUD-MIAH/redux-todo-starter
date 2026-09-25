import type { ITaskInput } from "./task.type";

export const taskFormDefaultValue: ITaskInput = {
  title: "",
  description: "",
  status: "pending",
  priority: "medium",
};
