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

    const applyAllergyFilter = (e) => {
        e.preventDefault();
        console.log(e.currentTarget.id);

        var foodItems = document.querySelectorAll(".food-item");
        var ingredients = document.getElementsByClassName("ingredient");
        
        for (var i = 0; i < foodItems.length; i++) {
            if (e.currentTarget.id == 'dairy') {
                var milkProducts = [
                    "milk",
                    "cheese",
                    "cream",
                    "butter"
                ]
                for (var j = 0; j < milkProducts.length; j++) {
                    if (ingredients[i].innerHTML.toLowerCase().includes(milkProducts[j])) {
                        foodItems[i].hidden = true;
                    }
                }
            }
            if (ingredients[i].innerHTML.toLowerCase().includes(e.currentTarget.id)) {
                foodItems[i].hidden = true;
            }
        }

        // Invert color
        const clickedBtn = document.querySelector('#' + e.currentTarget.id);
        clickedBtn.style.backgroundColor = "#022851";
        clickedBtn.style.color = "#ffc519";
    }

    const applyDietTypeFilter = (e) => {
        e.preventDefault();

        var foodItems = document.querySelectorAll(".food-item");
        var ingredients = document.getElementsByClassName("ingredient");
        var meats = [
            "pork",
            "fish",
            "beef",
            "chicken",
            "lamb",
            "ham",
            "tuna",
            "salmon",
            "albacore",
            "shrimp",
            "steak",
            "pepperoni",
            "sausage",
            "bacon",
            "gelatin"
        ];
        var animalProducts = [
            "cheese",
            "dairy",
            "egg",
            "butter",
            "cream",
            "mayonnaise",
            "honey",
            "gelatin",
            "milk"
        ];

        var excludedProducts;
        if (e.currentTarget.id == 'vegan') {
            excludedProducts = meats.concat(animalProducts);
        }
        else if (e.currentTarget.id == 'vegetarian') {
            excludedProducts = meats;
        }

        if (e.currentTarget.id !== 'halal') {
            for (var i = 0; i < ingredients.length; i++) {
                for (var j = 0; j < excludedProducts.length; j++) {
                    if (ingredients[i].innerHTML.toLowerCase().includes(excludedProducts[j])) {
                        foodItems[i].hidden = true;
                    }
                }
            }
        }

        // Invert color
        const clickedBtn = document.querySelector('#' + e.currentTarget.id);
        clickedBtn.style.backgroundColor = "#022851";
        clickedBtn.style.color = "#ffc519";
    }

    const applyDCFilter = (e) => {
        e.preventDefault();

        // TODO: add way to switch DC's
        resetFilters(e);
    }

    const toggleIng = (e) => {
        e.preventDefault();

        var ingredients = document.getElementsByClassName("ingredient");
        var toggleBtn = document.getElementById('toggle-ingredients');
        
        if (toggleBtn.innerHTML == "Hide Ingredients") {
            for (var i = 0; i < ingredients.length; i++) {
                ingredients[i].hidden = true;
            }
            toggleBtn.innerHTML = "Show Ingredients";
        } else {
            for (var i = 0; i < ingredients.length; i++) {
                ingredients[i].hidden = false;
            }
            toggleBtn.innerHTML = "Hide Ingredients";
        }
        
    }

    const resetFilters = (e) => {
        e.preventDefault();

        var foodItems = document.querySelectorAll(".food-item");
        for (var i = 0; i < foodItems.length; i++) {
            foodItems[i].hidden = false;
        }

        // Reset color
        var filterBtns = document.querySelectorAll('.filter-btn');
        for (var i = 0; i < filterBtns.length; i++) {
            filterBtns[i].style.backgroundColor = "#ffc519";
            filterBtns[i].style.color = "#022851";
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
                        <div className = "Menu" style={{width: "800px"}}>
                            Tercero Menu
                            <table className='no-border'>
                                <tr>
                                <td>
                                     <table className='no-border'>
                                        <p>Breakfast</p>
                                        <tr>
                                        <div className = "food-item">
                                            <p style={{fontSize: "15px", fontWeight: 'bold'}}>Chocolate Cake</p>
                                            <p className = "ingredient" style={{fontSize : "10px"}}>Chocolate, peanuts, and milk.</p>
                                        </div>
                                        </tr>
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Chocolate Cake</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}>Chocolate, peanuts, and milk.</p>
                                            </div>
                                        </tr>
                                    </table>
                                </td>
                                <td className='no-border'>
                                     <table className='no-border'>
                                        <p>Lunch</p>
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Chocolate Cake</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}>Chocolate, peanuts, and milk.</p>
                                            </div>
                                        </tr>
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Chocolate Cake</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}>Chocolate, peanuts, and milk.</p>
                                            </div>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                     <table className='no-border'>
                                        <p>Dinner</p>
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Chocolate Cake</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}>Chocolate, peanuts, and milk.</p>
                                            </div>
                                        </tr>
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Chocolate Cake</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}>Chocolate, peanuts, and milk.</p>
                                            </div>
                                        </tr>
                                        
                                    </table>
                                </td>
                                </tr>
                            </table>
                        </div>
                    </Row>
                </Container>
            </div>
        }
        { componentThree && 
        <div id="filter-div">
        <form className="dc-group" style={{borderBottom : "none"}}>
            <button id="dc-btn" onClick={handleToggle}>
                <h3>Dining Commons</h3>
            </button><br/>
            <table id="dc-table" hidden={true}>
                <div className='center'>
                <tbody>
                    <tr>
                        <td>
                            <button id="tercero" className="filter-btn" onClick={applyDCFilter}> 
                                Tercero
                            </button>
                        </td>
                        <td>
                            <button id="latitude" className="filter-btn" onClick={applyDCFilter}> 
                                Latitude
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id="segundo" className="filter-btn" onClick={applyDCFilter}> 
                                Segundo
                            </button>
                        </td>
                        <td>
                            <button id="cuarto" className="filter-btn" onClick={applyDCFilter}> 
                                Cuarto
                            </button>
                        </td>
                    </tr>
                </tbody>
                </div>
            </table>
        </form>
        <form className="allergy-group">
            <button id='allergy-btn' onClick={handleToggle}>
                <h3>Allergies</h3>
            </button>
            <table id="allergy-table" hidden={true}>
                <div className='center'>
                <tbody>
                    <tr>
                        <td>
                            <button id="dairy" className="filter-btn" onClick={applyAllergyFilter}> 
                                Dairy
                            </button>
                        </td>
                        <td>
                            <button id="peanut" className="filter-btn" onClick={applyAllergyFilter} >
                                Peanut
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id="egg" className="filter-btn" onClick={applyAllergyFilter} >
                                Egg
                            </button>
                        </td>
                        <td>
                            <button id="shellfish" className="filter-btn" onClick={applyAllergyFilter} >
                                Shellfish
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id="tree-nuts" className="filter-btn" onClick={applyAllergyFilter} >
                                Tree nuts
                            </button>
                        </td>
                        <td>
                            <button id="fish" className="filter-btn" onClick={applyAllergyFilter}> 
                                Fish
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id="wheat" className="filter-btn" onClick={applyAllergyFilter}>
                                Wheat
                            </button>
                        </td>
                        <td>
                            <button id="soybeans" className="filter-btn" onClick={applyAllergyFilter}>
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
                            <button id="vegetarian" className="filter-btn" onClick={applyDietTypeFilter}>
                                Vegetarian
                            </button>
                        </td>
                        <td>
                            <button id="vegan" className="filter-btn" onClick={applyDietTypeFilter}>
                                Vegan
                            </button>
                        </td>
                        
                    </tr>
                    <tr>
                        <td>
                            <button id="halal" className="filter-btn" onClick={applyDietTypeFilter}>
                                Halal
                            </button>
                        </td>
                    </tr>
                </tbody>
                </div>
            </table>
        </form>
        <div className = "bottom-btns"> 
            <button id="reset-btn" onClick={resetFilters}>
                Reset Filters
            </button>
            <button id="toggle-ingredients" onClick={toggleIng}>
                Hide Ingredients
            </button>
        </div>
    </div>
        }
        </div>
    //</div>
    )
}

export default SecondPage;

