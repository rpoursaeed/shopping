import React from 'react'
import Products from './components/Products'
import Cart from './components/Cart'



//------سبد خرید= cartitems
class App extends React.Component{
state={products:[],cartitems:[]}

async componentDidMount() {
    const response = await axios.get("http://localhost:8000/products");
    this.setState({ products: response.data });
  }
//-----
//if(localStorage.getItem('cartitems')){
 // this.setState({
 //   cartitems :JSON.parse(localStorage.getItem('cartitems'))
 // })
//}


}

//-----------آپدیت سبد خرید- یک تابع برگشتی است که در پروداکت صدا زده می شود و اینجا نمایش داده می شود
//product=محصولی است که می خواهد به سبد خرید اضافه شود ولی قبل از اضافه کردن آی دی آن چک می شود که قبلا وجود نداشته باشد
handeladdtocart =(product)=>{
this.setState(state=>{
  
  let productexist =false
  state.cartitems.forEach(item =>{
    if(item.id ===product.id){
      productexist =true
      

    }
  })
if (!productexist){
  state.cartitems.push({...product})
}

return state.cartitems
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