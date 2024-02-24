import styles from './tasks.module.css';
import { Task } from '../Task';
import { FaTasks } from "react-icons/fa";

export function Tasks({tasks, onComplete, onDelete}) {

    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Created tasks</p>
                    <span>{tasksQuantity}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Completed</p>
                    <span>{completedTasks} of {tasksQuantity}</span>
                </div>

            </header>

            {tasksQuantity === 0 ?
            
                <div className={styles.noRecs}>
                    <br></br>
                    <FaTasks size={20} />
                    <h2>You have no tasks registered yet</h2>
                    <p>Create tasks and organize your to-do items</p>
                </div> :

                <div className={styles.list}>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete}/>
                ))}
                </div> 
            }
            
        </section>
    )
}