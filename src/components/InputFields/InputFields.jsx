//styles
import styles from "./InputFields.module.css";

export const InputFields = () => {
  return(
    <div className={styles.taskInputs}>
      <div className={styles.inputItem}>
        <label>Exercise:</label>
        <input
          type="text"
          placeholder="Как называется ваше задание"
        />
      </div>
      <div className={styles.inputItem}>
        <label>Description:</label>
        <input
          type="text"
          placeholder="Описание вашего задания"
        />
      </div>
      <div className={styles.btnItem}>
        <button
          className={styles.addTask}
          type="button"
        >
          Add
        </button>
      </div>
    </div>
  )
}