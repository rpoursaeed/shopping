import React from 'react'


const Products = props=>{
  const productitems= props.products.map((product)=>{
   return(
    <div className="col-md-4" key={product.id}>
    <div>
      <img src={`/images/0${product.id}.jpg`}></img>
      {product.title}
      <button  onClick={()=>props.handeladdtocart(product)}  >add to cart</button>
</div>
</div>
   )
  })

  return(
    <div>
{productitems}
    </div>
  )

  }

    export default Products