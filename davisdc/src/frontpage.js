import "./frontpage.css"
import { Button, Form, Container, Row, Col} from 'react-bootstrap';
import React, {useState, useEffect} from "react";


function FrontPage(){
    return (
    <Container className = "logo">
        <div className = "front">
            <Row>
                <Col xs = {10}>
            <div className = "DInDavis">
                D
                <div className = "AvisInDavis">
                    avis
                </div>
            </div>
                </Col>
            </Row>
            <Row>
            <Col xs = {11}>
            <div className = "DInDining">
                D
                <div className = "IningInDining">
                    ining
                </div>
            </div>
            </Col>
            </Row>
            <Row>
            <Col xs = {14}>
            <div className = "CInCommons">
                C
                <div className = "OmmonsInCommon">
                    ommons
                </div>
            </div>
            </Col>
            </Row>
        </div>  
        <div className = "description">
            DDC, a 2022 Hackathon project that is centered around the goal of social good. This particular project focuses
            on improving the navigation and usage of the Dining Commons situated around Davis.
            <div className = "button">
            </div>			
        </div>
        </Container>
    )
}

export default FrontPage;