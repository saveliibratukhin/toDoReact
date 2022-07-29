import {  makeAutoObservable } from "mobx"
import { ITask } from "../ITaskInterface"

class Todo {
    todos: ITask[] = [
        {id: 1, title: 'To do toDo app', complete: false},
        {id: 2, title: 'To do toDo app', complete: false},
        {id: 3, title: 'To do toDo app', complete: false},
        {id: 4, title: 'To do toDo app', complete: false}
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(title: string) {
        let newTask: ITask = {
            id: this.todos.length+1,
            title: title,
            complete: false
        }
        this.todos.push(newTask)
    }

    removeTodo(idTodo: number) {
        console.log(this.todos)
        this.todos = this.todos.filter(todo => todo.id !== idTodo)
        console.log(this.todos)
    }

    toggleComplete(todo: ITask) {
        todo.complete = !todo.complete    
    }
}

export default new Todo()