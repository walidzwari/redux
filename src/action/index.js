import { ADDTASK, DELETETASK, EDITTASK, COMPLETTASK } from "../actiontypes";

export const addTask = (Newtask) => ({
  type: ADDTASK,
  payload: Newtask,
});

export const editTask = (editedTask) => ({
  type: EDITTASK,
  payload: editedTask,
});

export const deletetask = (ID) => ({
  type: DELETETASK,
  payload: ID,
});

export const completTask = (ID) => ({
  type: COMPLETTASK,
  payload: ID,
});
