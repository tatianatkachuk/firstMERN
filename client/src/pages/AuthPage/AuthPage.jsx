import React, { useState } from 'react'
import './AuthPage.scss'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'

export default function AuthPage() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (event) => {
        setForm({
            ...form, [event.target.name]: event.target.value
        })
        console.log(form)
    }

    const registerHandler = async () => {
        try {
            await axios.post('/api/auth/registration', { ...form }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => console.log(response))
        } catch (error) {
            console.log(error)
        }
    }

    const loginHandler = async () => {
        try {
            await axios.post('/api/auth/login', { ...form }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => console.log(response))
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <BrowserRouter>
            <Switch>
                <React.Fragment>
                    <div className="container">
                        <div className="auth-page">
                            <Route path="/login">
                                <h3>Authorization</h3>

                                <form
                                    className="form form-login"
                                    onSubmit={e => e.preventDefault()}>
                                    <div className="row">

                                        <div className="input-field col s12">
                                            <input
                                                type="email"
                                                name="email"
                                                className="validate"
                                                onChange={changeHandler}
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>

                                        <div className="input-field col s12">
                                            <input
                                                type="password"
                                                name="password"
                                                className="validate"
                                                onChange={changeHandler}
                                            />
                                            <label htmlFor="password">Password</label>
                                        </div>

                                    </div>
                                    <div className="row">

                                        <button
                                            className="wawes-effect wawes-light btn btn-blue"
                                            onClick={loginHandler}>
                                            Enter
                                        </button>
                                        <Link to="/registration" className="btn-outline btn-reg">
                                            Don't have an account yet?
                                        </Link>
                                    </div>
                                </form>
                            </Route>

                            <Route path="/registration">
                                <h3>Registration</h3>

                                <form
                                    className="form form-login"
                                    onSubmit={e => e.preventDefault()}>
                                    <div className="row">

                                        <div className="input-field col s12">
                                            <input
                                                type="email"
                                                name="email"
                                                className="validate"
                                                onChange={changeHandler}
                                            />
                                            <label htmlFor="email">Email</label>
                                        </div>

                                        <div className="input-field col s12">
                                            <input
                                                type="password"
                                                name="password"
                                                className="validate"
                                                onChange={changeHandler}
                                            />
                                            <label htmlFor="password">Password</label>
                                        </div>

                                    </div>
                                    <div className="row">

                                        <button
                                            className="wawes-effect wawes-light btn btn-blue"
                                            onClick={registerHandler}>
                                            Registrate
                                        </button>
                                        <Link to="/login" className="btn-outline btn-reg">
                                            Do you have an account?
                                        </Link>
                                    </div>
                                </form>
                            </Route>

                        </div>
                    </div>

                </React.Fragment>
            </Switch>
        </BrowserRouter>
    )
}
