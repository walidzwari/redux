import { useDispatch } from "react-redux";
import { completTask, deletetask } from "../action";
import EditTask from "./EditTask";

const Task = ({ tasks }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "90%",
        margin: "auto",
      }}
    >
      {tasks.map((el) => (
        <div style={{ display: "flex", justifyContent: "spacearound" }}>
          <h1 id={el.isDone ? "done" : ""}> {el.task} </h1>
          <button onClick={() => dispatch(completTask(el.id))}>
            {el.isDone ? "Undo" : "Complete"}
          </button>
          <EditTask oldTask={el} />
          <button id="del" onClick={() => dispatch(deletetask(el.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Task;
