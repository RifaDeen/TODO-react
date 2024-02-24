import styles from './header.module.css'
import Logo from '../../assets/Logo.svg'
import { CiCirclePlus } from "react-icons/ci";  /*plus icon from react-icons library */
import { useState } from 'react';

export function Header({onAddTask}){

    const [title, setTitle] = useState('');

    function handleSubmit(event){
        event.preventDefault(); // prevent the default behavior of the form
        onAddTask(title);
        setTitle('');
    }

    function onChangeTitle(event){
        setTitle(event.target.value);
    }

    return(
        <header className={styles.header}>
            <img src={Logo} />

            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input type="text" placeholder="Add a new task for today " value={title} onChange={onChangeTitle}/>
                <button>
                    Create
                    <CiCirclePlus size={20} />   
                </button>
            </form>

        </header>
    )
}