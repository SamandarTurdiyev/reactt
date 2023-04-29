import todo from './TodoList.module.scss'
import { useState } from 'react';
const TodoList = () =>{
    const [newTodo, setNewTodo] = useState('');
    const [editingTodo, setEditingTodo] = useState(null); 
    const [buttonEdit, setButtonEdit ] = useState('Submit')


    const [id , setId] = useState('');
    const [lastName , setLastName] = useState('');
    const [userName , setUserName] = useState('');
    const [age , setAge] = useState('');
    const [solary , setSolary] = useState('');

    const [todos, setTodos] = useState(() =>{
        const storedTodo = localStorage.getItem('todos');
        return storedTodo ? JSON.parse(storedTodo) : [];
    })
    const handleNewTodoChange = (e) =>{
        setNewTodo(e.target.value)
    };
    const handleNewIdChange = (e) =>{
        setId(e.target.value)
    };
    const handleLastNameChange = (e) =>{
        setLastName(e.target.value)
    };
    const handleUserNameChange = (e) =>{
        setUserName(e.target.value)
    };
    const handleAgeChange = (e) =>{
        setAge(e.target.value)
    };
    const handleSolaryChange = (e) =>{
        setSolary(e.target.value)
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
                    return{...todo, id: id, text: newTodo, lastName: lastName, userName: userName, age: age , solary: solary,}
                } else{
                    return todo;
                }
            })
            setTodos(updateTodo);
            setEditingTodo(null) ;

            setNewTodo('');
            setButtonEdit('Submit')

        } else{
            setTodos([...todos, {id: id, text: newTodo, lastName: lastName, userName: userName, age: age , solary: solary} ]);
            setNewTodo('');
            setId('');
            setLastName('');
            setUserName('');
            setAge('');
            setSolary('');
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
                 <input placeholder='Id' type="number" value={id} onChange={handleNewIdChange} />
                 <input placeholder='FirstName' type="text"  value={newTodo} onChange={handleNewTodoChange} />
                 <input placeholder='LastName' type="text" value={lastName} onChange={handleLastNameChange}/>
                 <input placeholder='UserName' type="text" value={userName} onChange={handleUserNameChange} />
                 <input placeholder='Age' type="number" value={age} onChange={handleAgeChange} />
                 <input placeholder='Salery' type="number" value={solary} onChange={handleSolaryChange} />
            
           
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
                            <p>{item.id}</p>
                            <p>{item.text}</p>
                            <p>{item.lastName}</p>
                            <p>{item.userName}</p>
                            <p>{item.age}</p>
                            <p>{item.solary}</p>
                            
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