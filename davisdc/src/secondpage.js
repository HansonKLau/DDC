import './secondpage.css'
import { Button, Form, Container, Row, Col} from 'react-bootstrap';
import React, {useState, useEffect} from "react";
import Tercero from "./tercerodc.jpg"
import Segundo from "./segundodc.jpg";
import Latitude from "./latitudedc.jpg";
import Cuarto from "./cuartodc.jpg";


function SecondPage(){
    const [componentOne, displayComponentOne] = useState(true);
    const [componentTwo, displayComponentTwo] = useState(false);
    const [componentThree, displayComponentThree] = useState(true);

    
    const handleToggle = (e) => {
        e.preventDefault();
        console.log(e.currentTarget.id);
        if (e.currentTarget.id === "dc-btn") {
            const dcTable = document.querySelector('#dc-table')
            if (dcTable.hidden) {
                dcTable.hidden = false;
            }
            else {
                dcTable.hidden = true;
            }
        }
        else if (e.currentTarget.id === "allergy-btn") {
            const allergyTable = document.querySelector('#allergy-table')
            if (allergyTable.hidden) {
                allergyTable.hidden = false;
            }
            else {
                allergyTable.hidden = true;
            }
        }
        else {
            const dietTypesTable = document.querySelector('#diet-types-table')
            if (dietTypesTable.hidden) {
                dietTypesTable.hidden = false;
            }
            else {
                dietTypesTable.hidden = true;
            }
        }
    }

    return (
    <div className = "selection">
        { componentOne &&
        <Container className = "allDiningCommons">
            <div className = "diningCommons">
                <Row className = "test">
                    <Col xs = {4}>
                    <div className = "terceroPNG">
                    <img src = {Tercero} width={300} height={150}/>
                    </div>
                    <Button className="tercero" onClick={() => {displayComponentOne(false); displayComponentTwo(true);}}>Tercero</Button>				
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
                            Tercero Menu
                        </div>
                    </Row>
                </Container>
            </div>
        }
        { componentThree && 
        <div id="filter-div">
        <form className="dc-group">
            <button id="dc-btn" onClick={handleToggle}>
                <h3>Dining Commons</h3>
            </button><br/>
            <table id="dc-table" hidden={true}>
                <div className='center'>
                <tbody>
                    <tr>
                        <td>
                            <input type="radio" id="tercero" name="tercero" value="tercero"/>
                            <label htmlFor="tercero"> Tercero</label>
                        </td>
                        <td>
                            <input type="radio" id="latitude" name="latitude" value="latitude"/>
                            <label htmlFor="latitude"> Latitude</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" id="segundo" name="segundo" value="segundo"/>
                            <label htmlFor="segundo"> Segundo</label>
                        </td>
                        <td>
                            <input type="radio" id="cuarto" name="cuarto" value="cuarto"/>
                            <label htmlFor="cuarto"> Cuarto</label>
                        </td>
                    </tr>
                </tbody>
                </div>
            </table>
        </form>
        <h2 className="divider">
            Dietary Restrictions
        </h2>
        <form className="allergy-group">
            <button id='allergy-btn' onClick={handleToggle}>
                <h3>Allergies</h3>
            </button>
            <table id="allergy-table" hidden={true}>
                <div className='center'>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" id="dairy" name="dairy" value="dairy"/>
                            <label htmlFor="dairy"> Dairy</label>
                        </td>
                        <td>
                            <input type="checkbox" id="peanut" name="peanut" value="peanut"/>
                            <label htmlFor="peanut"> Peanut</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" id="egg" name="egg" value="egg"/>
                            <label htmlFor="egg"> Egg</label>
                        </td>
                        <td>
                            <input type="checkbox" id="shellfish" name="shellfish" value="shellfish"/>
                            <label htmlFor="shellfish"> Shellfish</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" id="tree-nuts" name="tree-nuts" value="tree-nuts"/>
                            <label htmlFor="tree-nuts"> Tree nuts</label>
                        </td>
                        <td>
                            <input type="checkbox" id="fish" name="fish" value="fish"/>
                            <label htmlFor="fish"> Fish</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" id="wheat" name="wheat" value="wheat"/>
                            <label htmlFor="wheat"> Wheat</label>
                        </td>
                        <td>
                            <input type="checkbox" id="soybeans" name="soybeans" value="soybeans"/>
                            <label htmlFor="soybeans"> Soybeans</label>
                        </td>
                    </tr>
                </tbody>
                </div>
            </table>
        </form>
        <form className="diet-type-group" style={{borderTop: "none"}}>
            <button id='diet-types-btn' onClick={handleToggle}>
                <h3>Diet Types</h3>
            </button>
            <table id="diet-types-table" hidden={true}>
                <div className='center'>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" id="vegan" name="vegan" value="vegan"/>
                            <label htmlFor="vegan"> Vegan</label>
                        </td>
                        <td>
                            <input type="checkbox" id="vegetarian" name="vegetarian" value="vegetarian"/>
                            <label htmlFor="vegetarian"> Vegetarian</label>
                        </td>
                        
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" id="halal" name="halal" value="halal"/>
                            <label htmlFor="halal"> Halal</label>
                        </td>
                    </tr>
                </tbody>
                </div>
            </table>
        </form>
    </div>
        }
        </div>
    //</div>
    )
}

export default SecondPage;

