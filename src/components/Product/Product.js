import React from 'react'

export default function Product(props) {
    const {name, img, category, price, stock} = props.product || {}
    console.log(props.product)
  return (
    <div className='col-md-6'>
        <div className="card mb-3" style={{"max-width": "540px"}}>
            <div className="row g-0">
                <div className="col-md-5">
                <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-7">
                <div className="card-body">
                    <h5 className="card-title"><small>{name}</small></h5>
                    <p className="card-text"><small>$ {price}</small></p>
                    <p className="card-text"><small> {stock} Left</small>
                    </p>
                    <button 
                    onClick={()=>props.handleAddProduct(props.product)}
                    className='btn btn-primary'>Add Product</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
