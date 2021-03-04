import React from 'react'
import {Container} from 'react-bootstrap'
// import {styled} from 'styled-components'
const SessionProgress = ({activeStep}) => {
    return (
        <Container className="session_progress_container">
            <div className="one session_progress_item">
                <div style={{backgroundColor: activeStep >= 0?"green":"#eee"}} className="num">0</div>
                <div style={{color: activeStep >= 0?"green":"rgba(1, 1, 1, .6)"}} className="text">RAA Identification</div>
            </div>
            <div className="one session_progress_item">
                <div style={{backgroundColor: activeStep>=1?"green":"#eee"}} className="num">1</div>
                <div style={{color: activeStep>=1?"green":"rgba(1, 1, 1, .6)"}} className="text">Caller Identification</div>
            </div>
            <div className="one session_progress_item">
                <div style={{backgroundColor: activeStep>=2?"green":"#eee"}} className="num">2</div>
                <div style={{color: activeStep>=2?"green":"rgba(1, 1, 1, .6)"}} className="text">Responsible Party Info</div>
            </div>
            <div className="one session_progress_item">
                <div style={{backgroundColor: activeStep>=3?"green":"#eee"}} className="num">3</div>
                <div style={{color: activeStep>=3?"green":"rgba(1, 1, 1, .6)"}} className="text">Vehicle Identification</div>
            </div>
            <div className="one session_progress_item">
                <div style={{backgroundColor: activeStep>=4?"green":"#eee"}} className="num">4</div>
                <div style={{color: activeStep>=4?"green":"rgba(1, 1, 1, .6)"}} className="text">Immediate Hazard Assessment</div>
            </div>
            <div className="one session_progress_item">
                <div style={{backgroundColor: activeStep>=5?"green":"#eee"}} className="num">5</div>
                <div style={{color: activeStep>=5?"green":"rgba(1, 1, 1, .6)"}} className="text">Vehicle Damage Assessment</div>
            </div>
            <div className="one session_progress_item">
                <div style={{backgroundColor: activeStep>=6?"green":"#eee"}} className="num">6</div>
                <div style={{color: activeStep>=6?"green":"rgba(1, 1, 1, .6)"}} className="text">HV Damage Assessment</div>
            </div>
        </Container>
    )
}


export default SessionProgress
