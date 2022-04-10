import React from 'react'
import { MyProductProvider } from './ProductContext'
import ProductsList from './ProductsList'

const WithContextApp = () => {
  return (
    <MyProductProvider>
        <ProductsList/>
    </MyProductProvider>
  )
}

export default WithContextApp