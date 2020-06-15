import React from "react";

const Cart = (props) => {
  const cartitems = props.cartitems;
  //--------------
  if (cartitems.length === 0) {
    return <div className="cart">سبد خرید خالی است</div>;
  }
  //------------------==
  const items = cartitems.map((item) => {
    return (
      <div className="box-buying">
        <div className="col-md-4">{item.title}</div>
        <div className="col-md-4">{`تعداد ${item.count}`}</div>
        <div className="col-md-4">
          <button onClick={() => props.handleremove(item)}>delete</button>
        </div>
      </div>
    );
  });
  //------------------
  const totalprice = cartitems.reduce((a, b) => a + b.price * b.count, 0);

  return (
    <div className="cart">
      <div className="box-heading">
        <h2>سبد خرید</h2>
      </div>
      <div> {items}</div>
      <div className="total-price">مجموع خرید : {totalprice}</div>
    </div>
  );
};
export default Cart;
