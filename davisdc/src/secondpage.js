import './secondpage.css'
import { Button, Form, Container, Row, Col} from 'react-bootstrap';
import React, {useState, useEffect} from "react";
import Tercero from "./tercerodc.jpg"
import Segundo from "./segundodc.jpg";
import Latitude from "./latitudedc.jpg";
import Cuarto from "./cuartodc.jpg";
import UCDavis from "./ucdavis.jpg";



function SecondPage(){
    const [componentOne, displayComponentOne] = useState(false);
    const [componentTwo, displayComponentTwo] = useState(false);
    const [componentThree, displayComponentThree] = useState(false);
    const [componentFour, displayComponentFour] = useState(true);
    
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

    const applyFilter = (e) => {
        e.preventDefault();
        console.log(e.currentTarget.id);

        var foodItems = document.querySelectorAll(".food-item");
        var ingredients = document.getElementsByClassName("ingredient");
        
        for (var i = 0; i < foodItems.length; i++) {
            if (ingredients[i].innerHTML.toLowerCase().includes(e.currentTarget.id)) {
                foodItems[i].hidden = true;
            }
        }
    }

    const resetFilters = (e) => {
        e.preventDefault();

        var foodItems = document.querySelectorAll(".food-item");
        for (var i = 0; i < foodItems.length; i++) {
            foodItems[i].hidden = false;
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
                    <Button className="tercero" onClick={() => {displayComponentOne(false); displayComponentTwo(true); displayComponentThree(true)}}>Tercero</Button>				
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
                        <div className = "Menu" style={{width: "60%"}}>
                            Tercero Menu
                            <div className = "food-item"> 
                                <h1 style={{fontSize : "60%"}}>Chocolate Cake</h1>
                                <p className = "ingredient" style={{fontSize : "40%"}}>Chocolate, peanuts, and milk.</p>
                            </div>
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
                            <button id="dairy" className="filter-btn" onClick={applyFilter}> 
                                Dairy
                            </button>
                        </td>
                        <td>
                            <button id="peanut" className="filter-btn" onClick={applyFilter} >
                                Peanut
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id="egg" className="filter-btn" onClick={applyFilter} >
                                Egg
                            </button>
                        </td>
                        <td>
                            <button id="shellfish" className="filter-btn" onClick={applyFilter} >
                                Shellfish
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id="tree-nuts" className="filter-btn" onClick={applyFilter} >
                                Tree nuts
                            </button>
                        </td>
                        <td>
                            <button id="fish" className="filter-btn" onClick={applyFilter}> 
                                Fish
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id="wheat" className="filter-btn" onClick={applyFilter}>
                                Wheat
                            </button>
                        </td>
                        <td>
                            <button id="soybeans" className="filter-btn" onClick={applyFilter} >
                                Soybeans
                            </button>
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
        <button id="reset-btn" onClick={resetFilters}>
            Reset Filters
        </button>
    </div>
        }
        { componentFour &&
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
            <Button className="start" onClick={() => {displayComponentOne(true); displayComponentFour(false); displayComponentThree(false); displayComponentThree(true);}}>Let's Eat!</Button>				
            </div>			
        </div>
        </Container>
        }
        </div>
    //</div>
    )
}

export default SecondPage;