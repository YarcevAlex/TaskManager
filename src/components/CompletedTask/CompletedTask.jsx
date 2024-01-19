import styles from "./CompletedTask.module.css";


export const CompletedTask = ({isCompletedScreen, completedTask, handleCompletedTaskDelete}) => {
  return (
    <ul>
      {isCompletedScreen === true &&
        completedTask.map((item, index) => (
          <li className={styles.taskItem} key={index}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p><i>Выполнено : {item.completedOn}</i></p>
            </div>
            <div className={styles.btn}>
              <div onClick={() => handleCompletedTaskDelete(index)}>&#10060;</div>
            </div>
          </li>
        ))
      }
    </ul>
  )
}