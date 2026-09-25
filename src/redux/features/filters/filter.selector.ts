import { RootState } from "@/redux/store"; 


export const selectFilter  = (state:RootState) => state.filters
export const selectPriority  = (state:RootState) => state.filters.priority
export const selectQuery  = (state:RootState) => state.filters.query
export const selectStatus  = (state:RootState) => state.filters.status