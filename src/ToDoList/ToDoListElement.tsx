import { observer } from "mobx-react-lite";
import { ITask } from "../ITaskInterface";
import todo from "../store/todo";
import styles from './ToDoListElement.module.sass'

const TodoListElement = observer(({el}: {el: ITask}) => {
                return (
                    <div key={el.id} className={styles.container} onClick={() => todo.toggleComplete(el)}>
                        <input type="checkBox" checked={el.complete}/>
                        {el.title}
                        <button onClick={() => todo.removeTodo(el.id)} >X</button>
                    </div>
                )
})

export default TodoListElement