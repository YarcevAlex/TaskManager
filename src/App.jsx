//Styles
import styles from './App.module.css';

//Components
import {TaskManager} from "./components/TaskManager/TaskManager.jsx";


function App() {

  return (
    <div className={styles.App}>
      <h1 className={styles.title}>My Task Manager</h1>
      <TaskManager/>
    </div>
  )
}

export default App
