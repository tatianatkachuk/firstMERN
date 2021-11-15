import React, { useState, useContext, useCallback } from 'react'
import './MainPage.scss'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'

const MainPage = () => {
    const [text, setText] = useState('')
    const { userId } = useContext(AuthContext)
    const { todos, setTodos } = useState([])


    const getTodo = useCallback(async () => {
        try {
            await axios.get('/api/todo', {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: { userId }
            })
                .then(response => {
                    const todos = response.data;
                    this.setState({ todos });
                })
                //.then((response) => setTodos(response.data))
        } catch (error) {
            console.log(error)
        }
    }, [userId])

    const createTodo = useCallback(async () => {
        if (!text) return null
        try {
            await axios.post('/api/todo/add', { text, userId }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    setText('')
                    setTodos([...todos], response.data)
                    getTodo()
                })
        } catch (error) {
            console.log(error)
        }
    }, [text, userId, todos, setTodos, getTodo])

    return (
        <div className="container">
            <div className="main-page">
                <h4>Add a task</h4>

                <form
                    className="fomr form-login"
                    onSubmit={e => e.preventDefault()}>

                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                type="text"
                                id="text"
                                name="input"
                                className="validate"
                                value={text}
                                onChange={e => setText(e.target.value)}
                            />
                            <label htmlFor="input">Name of Task</label>
                        </div>
                    </div>

                    <div className="row">
                        <button
                            className="wawes-effect wawes-light btn btn-blue"
                            onClick={createTodo}>
                            Add
                        </button>
                    </div>

                </form>

                <h3>Tasks active</h3>
                <div className="todos">
                    {
                        !!todos && todos.map((todo, index) => {
                            return (
                                <div className="row flex todos-item" key={index}>
                                    <div className="col todos-num">{index+1}</div>
                                    <div className="col todos-text">{todo.text}</div>
                                    <div className="col todos-buttons">
                                        <i className="material-icons blue-text">check</i>
                                        <i className="material-icons orange-text">warning</i>
                                        <i className="material-icons red-text">delete</i>
                                    </div>
                                </div>
                            )
                        })
                    } 
                </div>
            </div>
        </div>
    )
}

export default MainPage