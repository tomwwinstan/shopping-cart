import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";
import {useState} from "react";

function App() {
    const products = data;
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
        const exists = cartItems.find((x) => x.id === product.id);
        if (exists) {
            setCartItems(cartItems.map((x) =>
                x.id  === product.id ? {...exists, qty: exists.qty+1} : x))
        } else {
            setCartItems([...cartItems, {...product, qty: 1}])
        }
    }

    const onRemove = (product) => {
        const exists = cartItems.find((x) => x.id === product.id);
        if (exists.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? {...exists, qty: exists.qty - 1} : x
                )
            )
        }
    }

    return (
    <div className="App">
      <Header/>
        <div className="row">
            <Main onAdd={onAdd} products={products}/>
            <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
        </div>
    </div>
  );
}

export default App;
