import todo from './TodoList.module.scss'
import { useState } from 'react';
const TodoList = () =>{
    const [newTodo, setNewTodo] = useState('');

    const [editingTodo, setEditingTodo] = useState(null);
    
    const [buttonEdit, setButtonEdit ] = useState('Submit')

    const [todos, setTodos] = useState(() =>{
        const storedTodo = localStorage.getItem('todos');
        return storedTodo ? JSON.parse(storedTodo) : [];
    })

    const handleNewTodoChange = (e) =>{
        setNewTodo(e.target.value)
    };
    const handleEditingTodo = (id) =>{
         const toDoEdit = todos.find((todo) => todo.id === id);
         setEditingTodo(id);
         setNewTodo(toDoEdit.text);
         setButtonEdit('Save')
    };

    const handleNewTodoSubmit = (e) => {
        e.preventDefault();

        if (!newTodo.trim())  return ;

        if (editingTodo !== null ) {
            const updateTodo = todos.map((todo) => {
                if (todo.id === editingTodo) {
                    return{...todo, text: newTodo}
                } else{
                    return todo;
                }
            })
            setTodos(updateTodo);
            setEditingTodo(null) ;

            setNewTodo('');
            setButtonEdit('Submit')

        } else{
            setTodos([...todos, {id:new Date(), text: newTodo}]);
            setNewTodo('');
        }
    }
   

    localStorage.setItem('todos' , JSON.stringify(todos));


    const handleDeleteClick = (id) =>{
        const updateTodos = todos.filter((item) => item.id != id);
        setTodos(updateTodos)
    }


    return(
        <div className={todo.container}>
            <form onSubmit={handleNewTodoSubmit}>
            <label>
                Name:
                <input type="text" value={newTodo} onChange={handleNewTodoChange} />
            </label>
            <button type='submit'>{buttonEdit}</button>
            {
                editingTodo !== null && (
                    <button type='button' onClick={() => setNewTodo('')}>cancel</button>
                )
            }
            </form>

            <ul>
                {
                    todos.map((item) => (
                        <li key={item.id}>
                            <span>{item.text}</span>
                            <button onClick={() => handleDeleteClick(item.id)}>delete</button>
                            <button onClick={() => handleEditingTodo(item.id)}>edit</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default TodoList;