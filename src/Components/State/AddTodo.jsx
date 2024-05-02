import React, { useState } from 'react';

export default function AddTodo(){
    let initialTodos = [
        {id: 0, task: "Buy milk", completed: true},
        {id: 1, task: "Eat tacos", completed: false},
        {id: 2, task: "Brew tea", completed: false},
    ]

    let nextId = 3

    const [todos, setTodos] = useState(initialTodos)
    const [task, setTask] = useState('')

    return(
        <div>
            <input type="text" placeholder='Add todo' onChange={
                (e) => {
                    setTask(e.target.value)
                }
            }/>
            <button onClick={
                () => {
                    setTodos([...todos, {id:nextId++, task:task, completed: false}])
                }
            }>Add</button>

            <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id}>
                            <label><input type='checkbox' checked={todo.completed} onChange={
                                () => {
                                   
                                }
                            }/> {todo.task}
                            <button className='ring-1 ring-slate-300 p-2 m-2 rounded-md'>Edit</button>
                            <button className='ring-1 ring-slate-300 p-2 m-2 rounded-md' onClick={
                                () => {
                                    setTodos(todos.filter(a => a.id !== todo.id))
                                }
                            }>Delete</button>
                            </label>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}