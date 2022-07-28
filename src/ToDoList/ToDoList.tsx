import { observer } from "mobx-react-lite";
import { ReactEventHandler, useState } from "react";
import todo from "../store/todo";
import TodoListElement from "./ToDoListElement";
import styles from './ToDoList.module.sass'
import ReactModal from 'react-modal'
import ToDoForm from './ToDoForm'

const TodoList = observer(() => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [filter, setFilter] = useState('')

    const selectOption = (event: React.SyntheticEvent<HTMLSelectElement>) => {
        event.preventDefault()
        setFilter(event.currentTarget.value)
    }


    return (
        <div className={styles.container}>
            <ReactModal
                className={styles.reactModal}
                isOpen={modalIsOpen}
            >
                <div className={styles.container}>
                    <ToDoForm setIsOpen={setIsOpen} />
                </div>
            </ReactModal>
            <div className={styles.newAndFilter}>

                <select onChange={selectOption}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>

                <button onClick={() => setIsOpen(!modalIsOpen)}>New task</button>


                
            </div>
            {todo.todos.filter(el => {
                return filter === 'completed'? el.complete :
                filter === 'uncompleted'? !el.complete :
                el
            }).map((el) => {
                return (
                    <TodoListElement el={el} />
                )
            })}
        </div>
    )

})

export default TodoList