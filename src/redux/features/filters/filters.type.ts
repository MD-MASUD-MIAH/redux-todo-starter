import type { TPriorityType, TTaskStatus } from "../tasks";

export type TPriorityFilter = 'all' | TPriorityType
export type TStatusFilter = 'all' | TTaskStatus
export type TSortMode = 'all' | 'oldest'


export interface IFilterStatus {
  query:string,
  priority: TPriorityFilter,
  status: TStatusFilter,
  sort: TSortMode,
};
