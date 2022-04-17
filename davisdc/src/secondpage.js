import './secondpage.css'
import { Button, Form, Container, Row, Col} from 'react-bootstrap';
import React, {useState, useEffect} from "react";
import Tercero from "./tercerodc.jpg"
import Segundo from "./segundodc.jpg";
import Latitude from "./latitudedc.jpg";
import Cuarto from "./cuartodc.jpg";


function SecondPage(){
    const [componentOne, displayComponentOne] = useState(false);
    const [componentTwo, displayComponentTwo] = useState(false);
    const [componentThree, displayComponentThree] = useState(false);
    const [componentFour, displayComponentFour] = useState(true);
    const [componentFive, displayComponentFive] = useState(false);
    const [componentSix, displayComponentSix] = useState(false);
    const [componentSeven, displayComponentSeven] = useState(false);
    const [componentEight, displayComponentEight] = useState(false);



    
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

    const dcToggleIng = (e) => { 
        e.preventDefault();

        var ingredients = document.getElementsByClassName("ingredient");
        var toggleBtn = document.getElementById('toggle-ingredients');

        for (var i = 0; i < ingredients.length; i++) {
            ingredients[i].hidden = false;
        }
        toggleBtn.innerHTML = "Hide Ingredients";
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
                    <button className="tercero" onClick={() => {displayComponentOne(false); displayComponentTwo(true);  
                    }}>Tercero</button>				
                    <div className = "segundoPNG">
                    <img src = {Segundo} width={300} height={150}/>
                    </div>
                    <button className="segundo" onClick={() => {displayComponentOne(false); displayComponentSeven(true);}}>Segundo</button>				
                    </Col>
                <Col xs = {8}>
                <div className = "LatitudePNG">
                <img src = {Latitude} width={300} height={150}/>
                    </div>
                    <button className="latitude" onClick={() => {displayComponentOne(false); displayComponentFive(true);}}>Latitude</button>				
                     <div className = "CuartoPNG">
                     <img src = {Cuarto} width={300} height={150}/>
                    </div>
                    <button className="cuarto" onClick={() => {displayComponentOne(false); displayComponentSix(true);}}>Cuarto</button>				
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
                                <td style={{verticalAlign: "top"}}>
                                     <table style={{border: 'none', height: "100%"}}>
                                        <p>Breakfast</p>
                                        <tr>
                                        <div className = "food-item">
                                            <p style={{fontSize: "15px", fontWeight: 'bold'}}>Hard Boiled Eggs</p>
                                            <p className = "ingredient" style={{fontSize : "10px"}}>Cage-free, hard boiled eggs</p>
                                        </div>
                                        </tr>
                                        <tr>
                                        <div className = "food-item">
                                            <p style={{fontSize: "15px", fontWeight: 'bold'}}>Ranchero Style Breakfast Quesadilla</p>
                                            <p className = "ingredient" style={{fontSize : "10px"}}>Cheese quesadilla folded in a tomato basil tortilla and topped with a fried egg and Ranchero sauce</p>
                                        </div>
                                        </tr>
                                        <tr>
                                        <div className = "food-item">
                                            <p style={{fontSize: "15px", fontWeight: 'bold'}}>Apple Cinnamon Muffin</p>
                                            <p className = "ingredient" style={{fontSize : "10px"}}>Sugar, wheat flour, modified food starch, soybean oil, dry whey, leavening, salt, vital wheat gluten, corn starch, tricalcium phosphate, soya flour, dry whole eggs, natural and artificial flavor, citric acid, apple, high fructose corn syrup, water, sugar, modified corn starch. lemon juice, apple juice concentrate, cinnamon, potassium sorbate, salt, citric acid, nutmeg, eggs, soybean oil, water, cinnamon. Produced in a facility that also uses dairy, fish, tree nuts, peanuts, wheat, and soy</p>
                                        </div>
                                        </tr>
                                    </table>
                                </td>
                                <td style={{verticalAlign: "top"}}>
                                     <table style={{border: 'none', height: "100%"}}>
                                        <p>Lunch</p>
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>BBQ Beef Roll</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}>Beef tossed with BBQ & sriracha sauce, served on a roll with a coleslaw</p>
                                            </div>
                                        </tr>
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Creamy Butternut pasta with peas</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}>Lentil penne pasta (lentil penne pasta [red lentil flour, white rice, pea protein], canola/olive oil blend, kosher salt), allergy-friendly vegan cream sauce (plant-based vegan cream [lentil milk [water, lentil protein], palm kernel oil, canola oil, palm oil, sugar, modified corn starch,  salt, guar gum, sunflower locust bean gum, beta-carotene], cornstarch, lemon juice, chicken soup base [roasted and cooked chicken meat, salt, sugar, chicken fat, corn, chicken broth, cooked chicken powder, turmeric], kosher salt), butternut squash, peas, tomatoes, yellow onion, canola/olive oil
</p>
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
                                <td style={{verticalAlign: "top"}}>
                                     <table style={{border: 'none', height: "100%"}}>
                                        <p>Dinner</p>
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Herb Roasted Sweet Potatoes</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}>Red potatoes, lemon juice, canola/olive oil blend, kosher salt, fresh Italian parsley, thyme, Mediterranean oregano</p>
                                            </div>
                                        </tr>
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Salami and Mushroom Pizza</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}>Pizza dough (wheat flour, water, yeast. palm oil, buttermilk, salt, sugar, soybean oil, leavening, Cheddar cheese, Mozzarella cheese, whey powder, garlic powder, malted barley flour. May contain egg and soy), house-made pizza sauce (pear tomatoes, garlic, salt, ground black pepper, oregano, Italian seasoning, basil, ground Cayenne pepper, thyme, marjoram), salami (pork, nonfat dry milk, dextrose, salt. wine, granulated garlic, rice flour), whole milk Mozzarella cheese, mushrooms, Parmesan cheese, canola oil, garlic</p>
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
                            <button id="tercero" className="filter-btn"  onClick={(e) => {e.preventDefault(); resetFilters(e); dcToggleIng(e);  displayComponentFive(false);  displayComponentTwo(true); displayComponentSix(false); displayComponentSeven(false);}}> 
                                Tercero
                            </button>
                        </td>
                        <td>
                            <button id="latitude" className="filter-btn"  onClick={(e) => {e.preventDefault();  resetFilters(e); dcToggleIng(e); displayComponentFive(true);  displayComponentTwo(false); displayComponentSix(false); displayComponentSeven(false);}}> 
                                Latitude
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id="segundo" className="filter-btn" onClick={(e) => {e.preventDefault();  resetFilters(e); dcToggleIng(e); displayComponentFive(false);  displayComponentTwo(false); displayComponentSix(false); displayComponentSeven(true);}}> 
                                Segundo
                            </button>
                        </td>
                        <td>
                            <button id="cuarto" className="filter-btn" onClick={(e) => {e.preventDefault();  resetFilters(e); dcToggleIng(e); displayComponentFive(false);  displayComponentTwo(false); displayComponentSix(true); displayComponentSeven(false);}}> 
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
            <button className="start" onClick={() => {displayComponentOne(true); displayComponentFour(false); displayComponentThree(false); displayComponentThree(true);}}>Let's Eat!</button>				
            </div>			
        </div>
        </Container>
        }
                { componentFive &&
            <div>
                <Container>
                    <Row>
                        <div className = "Menu" style={{width: "800px"}}>
                            Latitude Menu
                            <table className='no-border'>
                                <tr>
                                <td style={{verticalAlign: "top"}}>
                                     <table className='no-border'>
                                        <p>Lunch</p>
                                        <tr>
                                        <div className = "food-item">
                                            <p style={{fontSize: "15px", fontWeight: 'bold'}}>Frijoles Sabrosos</p>
                                            <p className = "ingredient" style={{fontSize : "10px"}}>CANNED PINTO BEANS (prepared pinto beans, water, salt, calcium chloride, calcium disodium EDTA);TOMATO;YELLOW ONION;CHIPOTLE PEPPER IN ADOBO SAUCE (water, tomato paste, dried Chipotle peppers, distilled vinegar, corn oil. Contains 2% or less of iodized salt, corn starch, onion powder, garlic powder, spices);CANOLA OIL;GARLIC;KOSHER SALT;Spice, Oregano Leaf, Mexican;</p>
                                        </div>
                                        </tr>
                                        <tr>
                                        <div className = "food-item">
                                            <p style={{fontSize: "15px", fontWeight: 'bold'}}>Carne Asada</p>
                                            <p className = "ingredient" style={{fontSize : "10px"}}>Beef flank steak, fat free Italian dressing (water, distilled vinegar, sugar, salt. garlic juice, garlic, onion, red bell pepper, spices, soybean oil, carrot),  onion, house Argentinian chimichurri (fresh Italian parsley, distilled vinegar, extra virgin olive oil, garlic, Mediterranean oregano, red pepper, kosher salt, ground black pepper), kosher salt, garlic powder, ground black pepper</p>
                                        </div>
                                        </tr>
                                        <tr>
                                        <div className = "food-item">
                                            <p style={{fontSize: "15px", fontWeight: 'bold'}}>Pollo A La Brasa</p>
                                            <p className = "ingredient" style={{fontSize : "10px"}}>Halal boneless skinless chicken thighs, lime juice, Kikkoman soy sauce (water, soybeans, wheat, salt, sodium benzoate), Spanish paprika, ground black pepper, ground cumin, Mexican oregano, extra virgin olive oil</p>
                                        </div>
                                        </tr>
                                    </table>
                                </td>
                                <td style={{verticalAlign: "top"}}>
                                     <table className='no-border'>
                                        <p>Dinner</p>
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Chicken Tikka Masala</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}>Boneless skinless chicken thigh, tomato paste, Tandoori marinade (nonfat plain yogurt, canola oil, spices, lime juice, garlic ginger, tapioca starch, salt, cilantro, jalapeno pepper, annatto, beet powder), heavy whipping cream, clarified butter, ketchup, Indian chili powder blend (paprika, cayenne pepper), garlic, ginger, fresh cilantro, kosher salt, Garam Masala spice, beet sugar</p>
                                            </div>
                                        </tr>
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Tres Leches Cake</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}>Sugar, bleached wheat flour, modified food starch, water, partially hydrogenated soybean oil, sodium bicarbonate, whipping cream, wheat gluten, condensed milk, evaporated milk, vanilla</p>
                                            </div>
                                        </tr>
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Spicy Italian Pork Sausage</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}> Spicy Italian sausage (pork, water, salt, dextrose, spices), canola/olive oil blend
</p>
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
        { componentSix &&
            <div>
                <Container>
                    <Row>
                        <div className = "Menu" style={{width: "800px"}}>
                            Cuarto
                            <table className='no-border'>
                                <tr>
                                <td style={{verticalAlign: "top"}}>
                                     <table className='no-border'>
                                        <p>Breakfast</p>
                                        <tr>
                                        <div className = "food-item">
                                            <p style={{fontSize: "15px", fontWeight: 'bold'}}>Cheese Omelet</p>
                                            <p className = "ingredient" style={{fontSize : "10px"}}>Cage-free eggs, canola/olive oil blend, mild yellow Cheddar cheese (pasteurized milk, cheese culture, salt, enzymes, annatto, potato starch, corn starch, powdered cellulose), Monterey Jack cheese (pasteurized milk, cheese culture, salt, enzymes, potato starch, corn starch and powdered cellulose)</p>
                                        </div>
                                        </tr>
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Scrambled Egg Whites</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}>Cage-free egg whites, canola oil
</p>
                                            </div>
                                        </tr>
                                       
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Barbacoa Omelet</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}>Cage-free eggs, canola/olive oil blend, Barbacoa beef (beef shoulder, yellow onion, apple cider vinegar, dried Anaheim chile, garlic, salt, chili powder, cumin, ground black pepper, cloves, Mediterranean oregano, thyme), smoked Gouda cheese, house-made roasted yellow pepper phesto" (yellow bell pepper, extra virgin olive oil, walnuts, fresh basil, garlic, kosher salt, crushed red pepper), red and green bell peppers, yellow onion"

</p>
                                            </div>
                                        </tr>
                                    </table>
                                </td>
                                <td style={{verticalAlign: "top"}}>
                                     <table className='no-border'>
                                        <p>Lunch</p>
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Classic California Pasta Salad</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}>Cage-free eggs, canola/olive oil blend, mild yellow Cheddar cheese (pasteurized milk, cheese culture, salt, enzymes, annatto, potato starch, corn starch, powdered cellulose), Monterey Jack cheese (pasteurized milk, cheese culture, salt, enzymes, potato starch, corn starch and powdered cellulose)</p>
                                            </div>
                                        </tr>
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Seasoned Roasted Chicken</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}> Halal boneless skinless chicken breast, kosher salt, garlic powder, onion powder, paprika, thyme, ground black pepper </p>
                                            </div>
                                        </tr>
                                        
                                    </table>
                                </td>
                                <td style={{verticalAlign: "top"}}>
                                     <table className='no-border'>
                                        <p>Dinner</p>
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Mushroom Street Tacos</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}>Corn tortillas, Portobello mushrooms, green bell pepper, house Pico de Gallo (tomato, red onion, Jalapeno pepper, salt, lemon juice, fresh cilantro), house cilantro-cashew sauce (contains tree nuts), corn, red onion, Tamari (contains soy and alcohol), fresh cilantro, canola/olive oil blend, salt, ground black pepper</p>
                                            </div>
                                        </tr>
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Napa Cabbage Saute</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}> Napa cabbage, bok choy, red cabbage, canola oil, Asian chili oil (soybean oil, chili), sesame oil, kosher salt, ground black pepper
</p>
                                            </div>
                                        </tr>       
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Vegan Oatmeal Raisin Cookie</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}> Oatmeal, organic evaporated cane sugar, California raisins, unbleached wheat flour, sustainable RSPO palm oil shortening, grape juice, rice dextrins, pure vanilla extract, cinnamon, sea salt, baking soda </p>
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
                 { componentSeven &&
            <div>
                <Container>
                    <Row>
                        <div className = "Menu" style={{width: "800px"}}>
                            Segundo
                            <table className='no-border'>
                                <tr>
                                <td style={{verticalAlign: "top"}}>
                                     <table className='no-border'>
                                        <p>Breakfast</p>
                                        <tr>
                                        <div className = "food-item">
                                            <p style={{fontSize: "15px", fontWeight: 'bold'}}>Oatmeal</p>
                                            <p className = "ingredient" style={{fontSize : "10px"}}>Whole grain oats (per manufacturer, may contain wheat/gluten) cooked in water and a pinch of salt.</p>
                                        </div>
                                        </tr>
                                        <tr>
                                        <div className = "food-item">
                                            <p style={{fontSize: "15px", fontWeight: 'bold'}}>Pork Link Sausage</p>
                                            <p className = "ingredient" style={{fontSize : "10px"}}> Pork sausage link (pork, water. Contains 2% or less of salt, sugar, spices, chili pepper, flavoring, smoke flavor. Packed in collagen casing)</p>
                                        </div>
                                        </tr>
                                        <tr>
                                        <div className = "food-item">
                                            <p style={{fontSize: "15px", fontWeight: 'bold'}}>Tater Tots</p>
                                            <p className = "ingredient" style={{fontSize : "10px"}}>Tater tot potatoes (potatoes, vegetable oil [soybean, canola, cottonseed, and/or sunflower], Contains less than 2% of dextrose, sea salt, disodium dihydrogen pyrophosphate), canola fryer oil</p>
                                        </div>
                                        </tr>
                                    </table>
                                </td>
                                <td style={{verticalAlign: "top"}}>
                                     <table className='no-border'>
                                        <p>Lunch</p>
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Lemon Za'atar Chicken</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}>Halal chicken drumsticks, lemon juice, canola/olive oil blend, house za’atar seasoning (ground sumac, ground coriander, ground cumin, thyme, crushed red pepper), fresh Italian parsley, garlic, kosher salt</p>
                                            </div>
                                        </tr>
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Chocolate Cake</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}>Chocolate, peanuts, and milk.</p>
                                            </div>
                                        </tr>
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Meatball Sub</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}> Hoagie roll (contains wheat/gluten and soy), house-made marinara sauce (contains alcohol and mushroom), beef meatballs (contains wheat/gluten, dairy, egg, and soy)</p>
                                            </div>
                                        </tr>
                                    </table>
                                </td>
                                <td style={{verticalAlign: "top"}}>
                                     <table className='no-border'>
                                        <p>Dinner</p>
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Vegan Lemon Drop Cookie</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}>Unbleached wheat flour, organic evaporated cane sugar, sustainable RSPO palm oil shortening, pure lemon extract, grape juice, rice dextrins, sea salt, baking powder</p>
                                            </div>
                                        </tr>
                                        <tr>
                                            <div className = "food-item">
                                                <p style={{fontSize: "15px", fontWeight: 'bold'}}>Sweet & Sour Tofu</p>
                                                <p className = "ingredient" style={{fontSize : "10px"}}>Firm tofu, sweet and sour sauce (rice vinegar, beet sugar, ketchup [red tomatoes, distilled vinegar, high fructose corn syrup, corn syrup, salt, spice, onion powder, natural flavoring], cornstarch, lime juice, green bell peppers, carrots,  onion,  beet sugar, soy sauce [water, soybeans, wheat, salt, ], pineapple, canola oil, pure vanilla extract, red food coloring [water,  benzoate of soda], Tabasco hot sauce [distilled vinegar, red pepper, salt]), canola oil, cornstarch
</p>
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
        </div>
    //</div>
    )
}

export default SecondPage;