import React from 'react'
import Products from './components/Products'
import Cart from './components/Cart'



//------سبد خرید= cartitems
class App extends React.Component{
state={products:[],cartitems:[]}

componentWillMount(){
fetch("http://localhost:8001/products")
.then(res=>res.json())
.then(data => this.setState({
  products:data
}))
//-----
//if(localStorage.getItem('cartitems')){
 // this.setState({
 //   cartitems :JSON.parse(localStorage.getItem('cartitems'))
 // })
//}


}

//-----------آپدیت سبد خرید- یک تابع برگشتی است که در پروداکت صدا زده می شود و اینجا نمایش داده می شود
handeladdtocart =(product)=>{
this.setState(state=>{
  const cartitems =state.cartitems
  let productexist =false
  cartitems.forEach(item =>{
    if(item.id ===product.id){
      productexist =true
      item.count++

    }
  })
if (!productexist){
  cartitems.push({...product,count:1})
}
localStorage.setItem('cartitems',JSON.stringify(cartitems))
return cartitems
})

}
//-------------------
handleremove =(item)=>{
this.setState (state =>{
const cartitems = state.cartitems.filter(p=>p.id !== item.id)
localStorage.setItem('cartitems',cartitems)
return {cartitems}
})
}





  render(){
    return(
      <div>
        <Products    products={this.state.products}  handeladdtocart={this.handeladdtocart} />
        <Cart cartitems={this.state.cartitems} handleremove={this.handleremove} />
   

      </div>
    )
  }
}







export default App;