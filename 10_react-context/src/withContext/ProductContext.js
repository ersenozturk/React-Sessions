import { createContext, useState } from "react";

export const MyProductContext = createContext();

const initialValueofProducts = [
  { id: 0, productName: "Basketball", price: 12 },
  { id: 1, productName: "Baseball", price: 9 },
  { id: 2, productName: "Tennis Racquet", price: 89 }
]

export const MyProductProvider = (props) => {
  const [products, setProducts] = useState(initialValueofProducts)

  const increasePrice = (id) => {
    console.log("increasePrice", id);
    const newProducts = [...products];
    newProducts[id].price += 1;
    setProducts(newProducts);
  };

  const decreasePrice = (id) => {
    console.log("decreasePrice");
    const newProducts = [...products];
    newProducts[id].price -= 1;
    setProducts(newProducts);
  };


  return(
    <MyProductContext.Provider value={{products, increasePrice, decreasePrice}}>
      {props.children}
    </MyProductContext.Provider>
  )
}