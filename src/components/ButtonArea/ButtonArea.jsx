//styles
import styles from "./ButtonArea.module.css";

export const ButtonArea = () => {
  return (
    <div className={styles.btnArea}>
      <button className={styles.active}>
        Task
      </button>
      <button>
        Completed
      </button>
    </div>
  )
}