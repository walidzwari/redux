import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTask from "./AddTask";
import Task from "./Task";

const TaskList = () => {
  const tab = useSelector((state) => state.tab);
  const [filter, setFilter] = useState(false);
  const handleFilter = () => setFilter(!filter);
  return (
    <div>
      <AddTask filter={filter} handleFilter={handleFilter} />

      <Task tasks={filter ? tab.filter((el) => el.isDone) : tab} />
    </div>
  );
};

export default TaskList;
