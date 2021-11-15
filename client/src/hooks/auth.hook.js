//login and logout

import { useState, useEffect, useCallback } from "react";

export const useAuth = () => {
    //si el login es satisfactorio 
    //se enviarán el userId y el token a esta función
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [isReady, setIsReady] = useState(false)


    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)
        setUserId(id)
        localStorage.setItem('userData', JSON.stringify({
            userId: id,
            token: jwtToken
        }))
    }, [])

    const logout = () => {
        //el userId y el token se convierten a nulo
        setToken(null)
        setUserId(null)
        localStorage.removeItem('userData')
    }

    useEffect(() => {
        //para saber si existe un token
        const data = JSON.parse(localStorage.getItem('userData'))
        if (data && data.token) {
            login(data.token, data.userId)
        }
        setIsReady(true)
    }, [login])

    return {login, logout, token, userId, isReady}
}