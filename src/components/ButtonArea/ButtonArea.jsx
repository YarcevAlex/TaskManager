//styles
import styles from "./ButtonArea.module.css";

export const ButtonArea = (props) => {
  return (
    <div className={styles.btnArea}>
      <button
        className={props.isCompletedScreen === false ? `${styles.active}` : ''}
        onClick={() => props.setIsCompletedScreen(false)}>
        Task
      </button>
      <button
        className={props.isCompletedScreen === true ? `${styles.active}` : ''}
        onClick={() => props.setIsCompletedScreen(true)}>
        Completed
      </button>
    </div>
  )
}