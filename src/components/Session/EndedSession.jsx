import React from 'react'
import { Button } from 'react-bootstrap'

const EndedSession = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection:"column",
            alignItems:"center",
            minHeight:"60vh",
            justifyContent:"center"
        }}>
            <h3>Session has ended</h3>
            <Button href="/sessions">Go back home</Button>
        </div>
    )
}


export default EndedSession
