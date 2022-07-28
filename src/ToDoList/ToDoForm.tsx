import { useState } from "react"
import todo from "../store/todo"
import styles from './ToDoForm.module.sass'

interface ToDoFormProps {
    setIsOpen: (value: React.SetStateAction<boolean>) => void
}

const ToDoForm = ({setIsOpen}: ToDoFormProps) => {

    const [userInput, setUserInput] = useState('')

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        todo.addTodo(userInput)
        setIsOpen(false)
    }

    return (
        <div className={styles.container}>
            <div className={styles.buttonContainer}>
                <h4>Create new task</h4>
                <button className={styles.closeButton} onClick={() => setIsOpen(false)}>X</button>
            </div>
                <form onSubmit={handleSubmit} className={styles.toDoForm}>
                    <input type='text' onChange={handleChange}></input>
                    <button>new task</button>
                </form>
        </div>
    )
}

export default ToDoForm