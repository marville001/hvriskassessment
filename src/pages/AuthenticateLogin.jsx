/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const AuthenticateLogin = (props) => {
    const {user} = useSelector(state => state.userReducer)
    useEffect(() => {
        if(!user._id){
            window.location.href = "/login"
        }
    }, [user])
    return (
        <>
           {props.children} 
        </>
    )
}

export default AuthenticateLogin
