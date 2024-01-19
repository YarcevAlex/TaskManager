//styles
import styles from "./InputFields.module.css";


export const InputFields = (props) => {

  return (
    <div className={styles.taskInputs}>
      <div className={styles.inputItem}>
        <label>Название задания:</label>
        <input
          type="text"
          placeholder="Как называется ваше задание"
        />
      </div>
      <div className={styles.inputItem}>
        <label>Описание:</label>
        <input
          type="text"
          placeholder="Описание вашего задания"
        />
      </div>
      <div className={styles.btnItem}>
        <button
          className={styles.addTask}
          type="button"
          onClick={props.handleAddNewTask}
        >
          Add
        </button>
      </div>
    </div>
  )
}