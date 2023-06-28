import React, { useState } from "react";

export default function ProgressTracker() {
  const [taskListData, setTaskListData] = useState([]);

  const handleTaskCompletion = (index) => {
    let taskList = [...taskListData];
    taskList[index].completed = true;
    setTaskListData(taskList);
  };

  const isTaskCompleted = (index) => {
    return taskListData[index].completed;
  };

  const calculateProgress = () => {
    if (taskListData.length === 0) {
      return 0;
    }
    const completedTasks = taskListData.filter((task) => task.completed);
    return (completedTasks.length / taskListData.length) * 100;
  };

  const handleDeleteTask = (index) => {
    let taskList = [...taskListData];
    taskList.splice(index, 1);
    setTaskListData(taskList);
  };

  return (
    <div style={{ minWidth: 300 }}>
      <div className="progress-info">
        <p>Progress: {calculateProgress().toFixed(2)}%</p>
        <p>Completed Tasks: {taskListData.length === 0 ? 0 : taskListData.filter((task) => task.completed).length}</p>
        <p>Total Tasks: {taskListData.length}</p>
      </div>
      <div className="task-list" style={{ display: "flex", justifyContent: "space-between", alignItems: "row" }}>
        <p>Task List</p>
        <button
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "15px",
            cursor: "pointer",
          }}
          onClick={() => {
            setTaskListData([...taskListData, {
              title: '',
              completed: false
            }])
          }}
        >+ New</button>
      </div>
      {taskListData?.length > 0 && taskListData.map((task, index) => {
        return (
          <div key={index}
            className={`task ${isTaskCompleted(index) ? "completed" : ""}`}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "row" }}>
              <input className='text-input' value={task.title}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    let taskList = [...taskListData]
                    taskList[index].title = e.target.value
                    setTaskListData([...taskList, {
                      title: '',
                      completed: false
                    }])
                  }
                }}
                onChange={(e) => {
                  let taskList = [...taskListData]
                  taskList[index].title = e.target.value
                  taskList[index].completed = false
                  setTaskListData(taskList)
                }} />
              <button
                onClick={() => { handleTaskCompletion(index) }}
                disabled={isTaskCompleted(index)}
              >Completed</button>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </div>
          </div>
        )
      })}
    </div>
  )
};
