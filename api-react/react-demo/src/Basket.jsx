import { useState } from 'react';
import Shoppinglist from './Shoppinglist';

function Basket () {
  const [items, setItems] = useState (['milk','eggs','bread']);
  const [search, setSearch] = useState('');
  const [newItem, setNewItem] = useState('');
};
  
  const addNewItem = (event) => {
    event.preventDefault();
    setItems((currentItems) => [...currentItems, newItem]);
    setNewItem('');
  };

  const removeItem = (index) => {
    debugger;
    const cloneItems = [...items];
    cloneItems.splice(index, 1);
    setItems(cloneItems);
  };

  return (
    <div>
      <form onSubmit={addNewItem}>
        <label htmlFor="newItem">
          New Item:
          <input type="text" id="newItem" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
        </label>
        <button type="submit">Add New</button>
      </form>
      <br />
      <basket text={search} changeHandler={(e) => setSearch(e.target.value)} />
      {
            items
              .filter((item) => item.toLowerCase().startsWith(search.toLowerCase()))
              .map((item, i) => (
                <p>
                  {`${item} `}
                  <button type="button" onClick={() => removeItem(i)}>X</button>
                </p>
              ))
        }
    </div>
  );

export default Basket;


















//import { useState } from "react";
//import AddItems from "./AddItems";
//import ShoppingList from "./shoppinglist";

//const Basket = () => {
  //  const [Items, setItems] = useState("");
    //const [Price, setPrice] = useState([]);

//const addItem = ({target}) => {
  //  setItems(target.value);
//}

//const submitForm = (event) => {
 //   event.preventDefault();
   
//};

//const handleAdd = () => {
  //   setItems((CurrentItems) => [...CurrentItems,Items]);
//};

// try and do it in a single component before you go for a solution like this

//return(
  //  <>
 //   <AddItems Items={Items} submitHandler={submitForm} handleAdd={handleAdd}/>
   // <ShoppingList Items={Items}/>
  //  </>
//);
//}

//export default Basket