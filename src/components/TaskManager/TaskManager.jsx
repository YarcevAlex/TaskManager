//Styles
import styles from "./TaskManager.module.css";
import {InputFields} from "../InputFields/InputFields.jsx";
import {ButtonArea} from "../ButtonArea/ButtonArea.jsx";
import {TaskList} from "../TaskList/TaskList.jsx";

export const TaskManager = () => {
  return (
    <div className={styles.container}>
      <div className={styles.taskWrapper}>
        <InputFields/>
        <ButtonArea/>
        <TaskList/>
      </div>
    </div>
  )
}