//styles
import styles from "./InputFields.module.css";


export const InputFields = ({handleAddNewTask, setNewDescription, setNewTaskTitle}) => {

  return (
    <div className={styles.taskInputs}>
      <div className={styles.inputItem}>
        <label>Название задания:</label>
        <input
          onChange={e => setNewTaskTitle(e.target.value)}
          type="text"
          placeholder="Как называется ваше задание"
        />
      </div>
      <div className={styles.inputItem}>
        <label>Описание:</label>
        <input
          onChange={e => setNewDescription(e.target.value)}
          type="text"
          placeholder="Описание вашего задания"
        />
      </div>
      <div className={styles.btnItem}>
        <button
          className={styles.addTask}
          type="button"
          onClick={handleAddNewTask}
        >
          Add
        </button>
      </div>
    </div>
  )
}