//styles
import styles from "./TaskList.module.css";

//Component
import {CompletedTask} from "../CompletedTask/CompletedTask.jsx";


export const TaskList = ({
                           allTask,
                           completedTask,
                           handleTaskDelete,
                           handleTaskCompleted,
                           isCompletedScreen,
                           handleCompletedTaskDelete
                         }) => {
  return (
    <>
      <ul className={styles.taskList}>
        {isCompletedScreen === false &&
          allTask.map((task, index) => {
            return (
              <li className={styles.taskItem} key={index}>
                <div className={styles.text}>
                  <h3 className={styles.title}>{task.title}</h3>
                  <p className={styles.description}>{task.description}</p>
                </div>
                <div className={styles.btn}>
                  <div onClick={() => handleTaskDelete(index)}>&#10060;</div>
                  <div onClick={() => handleTaskCompleted(index)}>&#9989;</div>
                </div>
              </li>
            )
          })
        }
      </ul>
      <CompletedTask
        isCompletedScreen={isCompletedScreen}
        completedTask={completedTask}
        handleCompletedTaskDelete={handleCompletedTaskDelete}
      />
    </>
  )
}