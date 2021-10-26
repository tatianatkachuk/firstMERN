import React from 'react'

export default function AuthPage() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="auth-page">
                    <h3>Authorization</h3>
                    <form className="form form-login">
                        <div className="row">
                            <div className="input-field col s12">
                                <input 
                                type="email" 
                                name="email"
                                className="validate"
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </React.Fragment>
    )
}
