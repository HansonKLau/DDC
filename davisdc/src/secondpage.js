import './secondpage.css'
import { Button, Form, Container, Row, Col} from 'react-bootstrap';
import React, {useState, useEffect} from "react";
import Tecero from "./tecerodc.jpg"
import Segundo from "./segundodc.jpg";
import Latitude from "./latitudedc.jpg";
import Cuarto from "./cuartodc.jpg";


function SecondPage(){
    const [componentOne, displayComponentOne] = useState(true);
    const [componentTwo, displayComponentTwo] = useState(false);



    return (
    <div className = "selection">
        { componentOne &&
        <Container className = "allDiningCommons">
            <div className = "diningCommons">
                <Row className = "test">
                    <Col xs = {4}>
                    <div className = "teceroPNG">
                    <img src = {Tecero} width={300} height={150}/>
                    </div>
                    <Button className="tecero" onClick={() => {displayComponentOne(false); displayComponentTwo(true);}}>Tecero</Button>				
                    <div className = "segundoPNG">
                    <img src = {Segundo} width={300} height={150}/>
                    </div>
                    <Button className="segundo">Segundo</Button>				
                    </Col>
                <Col xs = {8}>
                <div className = "LatitudePNG">
                <img src = {Latitude} width={300} height={150}/>
                    </div>
                    <Button className="latitude">Latitude</Button>				
                     <div className = "CuartoPNG">
                     <img src = {Cuarto} width={300} height={150}/>
                    </div>
                    <Button className="cuarto">Cuarto</Button>				
                    </Col>
                </Row>
            </div>
     </Container>
        }
        { componentTwo &&
            <div>
                <Container>
                    <Row>
                        <div className = "Menu">
                            Tecero Menu
                        </div>
                    </Row>
                </Container>
            </div>
        }
        </div>
    //</div>
    )
}

export default SecondPage;

