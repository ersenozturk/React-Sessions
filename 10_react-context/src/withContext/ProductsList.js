import React, { useContext } from 'react'
import Product from './Product'
import { MyProductContext } from './ProductContext'

const ProductsList = () => {

    const {products} = useContext(MyProductContext)
    // console.log(products);


  return (
    <div>
        {
           products.map((each,index) => (
               <div>
                   <Product key={each.id} myProduct={each} />
                    {/* <h5 key={each.id}> {each.productName} </h5> */}
               </div>

           ) 
         ) 
        }
    </div>
  )
}

export default ProductsList