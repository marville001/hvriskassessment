import React from 'react'
import { Button } from 'react-bootstrap'

const PausedSession = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection:"column",
            alignItems:"center",
            minHeight:"60vh",
            justifyContent:"center"
        }}>
            <h3>Session paused temporarily</h3>
            <Button>Resume</Button>
        </div>
    )
}


export default PausedSession
