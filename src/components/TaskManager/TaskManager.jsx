//Styles
import styles from "./TaskManager.module.css";

//Components
import {InputFields} from "../InputFields/InputFields.jsx";
import {ButtonArea} from "../ButtonArea/ButtonArea.jsx";
import {TaskList} from "../TaskList/TaskList.jsx";
//hooks
import {useEffect, useState} from "react";

export const TaskManager = () => {
  const [allTask, setAllTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);

  const handleAddNewTask = () => {
    let newTaskOgj = {
      title: newTaskTitle,
      description: newDescription,
    };

    let updatedTaskArray = [...allTask];
    updatedTaskArray.push(newTaskOgj);
    setAllTask(updatedTaskArray);

    localStorage.setItem('taskList', JSON.stringify(updatedTaskArray));
    setNewDescription('');
    setNewTaskTitle('');
  }

  useEffect(() => {
    let savedTasks = JSON.parse(localStorage.getItem('taskList'));
    let savedCompletedTask = JSON.parse(
      localStorage.getItem('completedTask')
    );
    if (savedTasks) {
      setAllTask(savedTasks);
    }

    if (savedCompletedTask) {
      setCompletedTask(savedCompletedTask);
    }
  }, []);


  const handleTaskComplete = index => {
    const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    const hh = date.getHours();
    const minutes = date.getMinutes();
    const ss = date.getSeconds();
    const finalDate =
      dd + '-' + mm + '-' + yyyy + ' at ' + hh + ':' + minutes + ':' + ss;

    let filteredTask = {
      ...allTask[index],
      completedOn: finalDate,
    };

    let updatedCompletedList = [...completedTask, filteredTask];
    console.log(updatedCompletedList);
    setCompletedTask(updatedCompletedList);
    localStorage.setItem(
      'completedTask',
      JSON.stringify(updatedCompletedList)
    );
    handleTaskDelete(index);
  };

  const handleTaskDelete = index => {
    let reducedTask = [...allTask];
    reducedTask.splice(index, 1);
    localStorage.setItem('taskList', JSON.stringify(reducedTask));
    setAllTask(reducedTask);
  };


  const handleCompletedTaskDelete = index => {
    let reducedCompletedTask = [...completedTask];
    reducedCompletedTask.splice(index, 1);
    localStorage.setItem(
      'completedTask',
      JSON.stringify(reducedCompletedTask)
    );
    setCompletedTask(reducedCompletedTask);
  };


  return (
    <div className={styles.container}>
      <div className={styles.taskWrapper}>
        <InputFields allTask={allTask}
                     handleAddNewTask={handleAddNewTask}
        />
        <ButtonArea isCompletedScreen={isCompletedScreen}
                    setIsCompletedScreen={setIsCompletedScreen}
        />
        <TaskList allTask={allTask}
                  setAllTask={setAllTask}
                  isCompletedScreen={isCompletedScreen}
                  completedTask={completedTask}
                  handleTaskDelete={handleTaskDelete}
                  handleTaskCompleted={handleTaskComplete}
                  handleCompletedTaskDelete={handleCompletedTaskDelete}

        />
      </div>
    </div>
  )
}