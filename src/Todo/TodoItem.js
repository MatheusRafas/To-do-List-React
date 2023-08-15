export function TodoItem({todo, onComplete}){
    return(
        <div className="todo-list-item">
            <label htmlFor={`complete-item-${todo.id}`}>
                <input type="checkbox" 
                checked={todo.completed} 
                name={`complete-item-${todo.id}`} 
                id={`complete-item-${todo.id}`} 
                onChange={() => onComplete(todo)}
                /> {todo.name}

            </label>

        </div>
    )
}