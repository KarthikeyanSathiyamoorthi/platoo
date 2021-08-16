import React, { useState, useEffect } from 'react';
import { Button,  Form } from 'react-bootstrap';

export default function TodoLists() {

    const [todos, setTodos] = useState([]);
    const [data, setData] = useState("");
    const [todoEdit, setTodoEdit] = useState(null);
    const [editingText, setEditingText] = useState("");

    const changeData = (event) => {
        event.preventDefault();
        setData(event.target.value);

    }
    console.log("todos", todos);
    const clickHandler = (e) => {

        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            text: data,
            completed: false,
        }
        setTodos([...todos].concat(newTodo));
        setData('');
    }

    const deleteTodo = (id) => {

        const updatedTodos = [...todos].filter((item) => item.id !== id);
        setTodos(updatedTodos);
    }

    const editTodo = (id) => {
        const updatedTodos = [...todos].map((x) => {
            if (x.id === id) {
                x.text = editingText;
            }
            return x;
        })
        setTodos(updatedTodos);
        setTodoEdit(null);
        setEditingText("");

    }
    return (
        <div>

            <Form onSubmit={clickHandler}>
                <Form.Group >

                    <Form.Control type="text" placeholder="Enter text" onChange={changeData} />
                    <Button onClick={clickHandler}>
                        Add Todo
                    </Button>
                </Form.Group>
            </Form>
            {
                todos.map((item) =>
                    <div key={item.id}>
                        {
                            todoEdit === item.id ?
                                (<input
                                    type="text"
                                    onChange={(e) => setEditingText(e.target.value)}
                                    value={editingText}

                                />)
                                :
                                (<div>{item.text}</div>)
                        }


                        <Button onClick={() => deleteTodo(item.id)}>
                            Delete
                        </Button>
                        <Button onClick={() => setTodoEdit(item.id)}>Edit</Button>
                        <Button onClick={() => editTodo(item.id)}>Submit Edit</Button>

                    </div>
                )}

            {
                todos.map((item) =>
                    
                        <li key={item.id}>{item.text}</li>
                    
                )
            }
        </div>

    )
}