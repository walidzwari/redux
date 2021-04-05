/* eslint-disable default-case */
import { ADDTASK, DELETETASK, EDITTASK, COMPLETTASK } from "../actiontypes";

const initialState = {
  tab: [{ id: Math.random(), task: "tasks", isDone: false }],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDTASK:
      return { ...state, tab: [...state.tab, payload] };
    case DELETETASK:
      return { ...state, tab: state.tab.filter((el) => el.id !== payload) };
    case COMPLETTASK:
      return {
        ...state,
        tab: state.tab.map((task) =>
          task.id === payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case EDITTASK:
      return {
        ...state,
        tab: state.tab.map((el) => (el.id === payload.id ? payload : el)),
      };
    default:
      return state;
  }
};
export default reducer;
