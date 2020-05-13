import React from 'react'

const Cart = props=>{
  const cartitems = props.cartitems
//--------------
if(cartitems.length === 0){
  return<div>سبد خرید خالی است</div>
}
//------------------==
const items =cartitems.map((item)=>{
  return (
  <div>
    {item.title}
   <button onClick={()=>props.handleremove(item)}>delete</button>
  </div>
  )
})
//------------------
const totalprice = cartitems.reduce((a,b)=>a + b.price * b.count,0)

return(
<div>
    <h2>
      سبد خرید
    </h2>
    <div>تعداد  خرید : {cartitems.length}</div>  
    <div> {items}</div> 
    <div>مجموع خرید : {totalprice}</div> 

</div>
)
}
export default Cart