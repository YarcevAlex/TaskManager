//styles
import styles from "./TaskList.module.css";

export const TaskList = () => {
  return (
    <ul className={styles.taskList}>
      <li className={styles.taskItem}>
        <div className={styles.text}>
          <h3 className={styles.title}>Tyт задача</h3>
          <p className={styles.description}>описание задачи</p>
        </div>
        <div className={styles.btn}>
          <div>&#10060;</div>
          <div>&#9989;</div>
        </div>
      </li>
    </ul>
  )
}