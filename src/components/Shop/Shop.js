import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'

export default function Shop() {

    const [products, setProducts] = useState([]);
    // cart a product rakhar jonno
    const [cart, setCart] = useState([]);
    // jekhanei state shekhanei event handler dklare korbo

    const handleAddProduct = (product) => {

        const newCart = [...cart , product]
        setCart(newCart)
    }

    useEffect(()=> {
        fetch('/productsData.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

  return (
    <div>
        <div className='row'>
            <div className='col-md-9'>
                <div className='row'>
                    {
                        products.map(product=> <Product
                            product={product}
                            handleAddProduct={handleAddProduct}
                        >

                        </Product>)
                    }
                </div>
                {/* Products Area */}
                
            </div>
            <div className='col-md-3'>
                {/* cart Calculation area */}
                <Cart
                    cart={cart}
                >

                </Cart>
            </div>
        </div>
    </div>
  )
}
