import "./TodoList.css";
import { TodoItem } from "./TodoItem";
import React, { useEffect, useState } from "react";

const TODO_LIST = [
    {
        id: 1,
        name: "Task 1",
        completed: false
    },

    {
        id: 2,
        name: "Task 2",
        completed: false
    },

    {
        id: 3,
        name: "Task 3",
        completed: false
    },

    {
        id: 4,
        name: "Task 4",
        completed: false
    },

];   

export function TodoList(){
    const [todoList, setTodoList] = useState(TODO_LIST);
    function handleOnCompleteTask(todo){
        const updateTodoList = todoList.map((item) => item.id == todo.id 
        ? ({...item, completed: !item.completed}) 
        :item);
        
        setTodoList(updateTodoList);
    }

    console.log(todoList);
    
    return(
      <section classeName="todo-list">
        {todoList.map((item) => <TodoItem todo={item} onComplete={handleOnCompleteTask}/>)}
      </section>
    )
}