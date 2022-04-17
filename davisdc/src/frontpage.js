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
        <div className = "side">
            <div className = "Tecero">
                Tecero
            </div>
            <div className = "Latitude">
                Latitude
            </div>
            <div className = "Segundo">
                Segundo
            </div>
            <div className = "Cuarto">
                Cuarto
            </div>
        </div>
        </Container>
)
}

export default FrontPage;