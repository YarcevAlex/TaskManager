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


  //Функция добавляет новый Task , с проверкой на пустой value
  const handleAddNewTask = () => {
    if (newTaskTitle.trim() === "" || newDescription.trim() === "") {
      return alert("Заполните поля ввода данных")
    }
    let newTaskOgj = {
      title: newTaskTitle,
      description: newDescription,
    };

    let updatedTaskArray = [...allTask];
    updatedTaskArray.push(newTaskOgj);
    setAllTask(updatedTaskArray);

    localStorage.setItem('taskList', JSON.stringify(updatedTaskArray));

    setNewTaskTitle('');
    setNewDescription('');
    //Лютый костыль ))))
    location.reload()
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

//Функция отвечающая за отслеживание времени выполнения Task
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
    setCompletedTask(updatedCompletedList);
    localStorage.setItem(
      'completedTask',
      JSON.stringify(updatedCompletedList)
    );
    handleTaskDelete(index);
  };

  //Функция для удаления Task из общего списка
  const handleTaskDelete = index => {
    let reducedTask = [...allTask];
    reducedTask.splice(index, 1);
    localStorage.setItem('taskList', JSON.stringify(reducedTask));
    setAllTask(reducedTask);
  };

//Функция по удалению Task из списка выполненых тасков
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
                     setNewTaskTitle={setNewTaskTitle}
                     setNewDescription={setNewDescription}
        />
        <ButtonArea isCompletedScreen={isCompletedScreen}
                    setIsCompletedScreen={setIsCompletedScreen}
        />
        <TaskList allTask={allTask}
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