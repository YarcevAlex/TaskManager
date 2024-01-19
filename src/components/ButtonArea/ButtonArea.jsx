//styles
import styles from "./ButtonArea.module.css";

export const ButtonArea = ({isCompletedScreen, setIsCompletedScreen}) => {
  return (
    <div className={styles.btnArea}>
      <button
        className={isCompletedScreen === false ? `${styles.active}` : ''}
        onClick={() => setIsCompletedScreen(false)}>
        Task
      </button>
      <button
        className={isCompletedScreen === true ? `${styles.active}` : ''}
        onClick={() => setIsCompletedScreen(true)}>
        Completed
      </button>
    </div>
  )
}