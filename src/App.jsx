import { useState } from 'react';
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"
import { useEffect } from "react";

const LOCAL_STORAGE_KEY = "todo:savedTasks";

function App() {
  const [tasks, setTasks] = useState([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved){
      setTasks(JSON.parse(saved)); //json.parse will convert the string into an array
    }
  }
function addTask(taskTitle){
  const newTasks = [
    ...tasks,
    {
      id: crypto.randomUUID(),  
      title: taskTitle,
      isCompleted: false,
    },
  ];
  setTasksAndSave(newTasks);
};


  function setTasksAndSave(newTasks){
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks)); //json.stringify will convert the array into a string
  }

  useEffect( () => {
    loadSavedTasks();
  }, [])

  function addTask(taskTitle){
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),  
        title: taskTitle,
        isCompleted: false,
      },
    ]);
    
  };

  function toggleTaskCompletedById(taskId){
    const newTasks = tasks.map(task =>{
      if(task.id === taskId){
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  function deleteTaskById(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  

  return (
    <>
      <Header onAddTask={addTask} />
      
      <Tasks 
        tasks={tasks} 
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      /> 

    </>
  )
}

export default App
