import logo from './logo.svg';
import './app.css';
import products from './mycomponents';
import parent from './parent';




function app() {

    const heading = () => <h1> Hello World!</h1>
    return(
        <div className= "app">
            <products/>12
            <products
            name= "Hamburger"
            price= {2.00}
            description="hamburger grilled to perfection also comes as vegan option"
            />
            <products/>
            <products
            name= "Cheese Burger"
            price= {2.30}
            description="Cheese burger grilled to perfection also comes as vegan option"
            />
            <products/>
            <products
            name= "Fries"
            price= {1.00}
            description="Chunky chips cutto perfection"
            />
            <products/>
            <products
            name= "Drinks"
            price= {1.00}
            description="Coke, Fanta, Sprite, Ice Tea, Tea, Coffee, Water"
            />
            <parent/>
        </div>
    );
}

export default App;