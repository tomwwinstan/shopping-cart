import React from 'react';

export default function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const discount = applyDiscount(cartItems);
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    const finalPrice = totalPrice - discount;

    function applyDiscount(cartItems) {
        let discountOff = 0;
        cartItems.map((item) => {
            if (item.qty >= item.discount.qtyForDiscount) {
                discountOff += workoutDiscount(item, item.discount.qtyForDiscount, item.discount.discountGiven);
            }
            return discountOff;
        })
        return discountOff;
    }

    function workoutDiscount(item, amountForDiscount, discount) {
        let price = item.price * amountForDiscount;
        return price * discount;
    }

    return (
        <aside className="basket block col-1">
            <h2 className="panel-title">Cart Items</h2>
            <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className="items row">
                    <div className={"carted-" + item.name + " col-2"}>{item.name}</div>
                    <div className="col-2">
                        <button onClick={() => onAdd(item)} className={item.name + '-add add'}>+</button>
                        <button onClick={() => onRemove(item)} className={item.name + "-remove remove"}>-</button>
                    </div>
                    <div className={"quantity-" + item.name + " col-2 text-right"}>
                        {item.qty} x £{item.price.toFixed(2) }
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr/>
                    <div className="itemsPriceRow row">
                        <div className="col-2">Items Price</div>
                        <div className="itemsPrice col-1 text-right">£{itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Tax Price</div>
                        <div className="col-1 text-right">£{taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Shipping Price</div>
                        <div className="col-1 text-right">£{shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className="discount">{discount > 0 &&
                        <>
                            <div className="discountRow row">
                                <div className="col-2 text-red"><strong>Discount</strong></div>
                                <div className="discountOff col-1 text-right text-red">-£{discount}</div>
                            </div>
                            <div className="row">
                                <div className="col-2"><strong>Total Price</strong></div>
                                <div className="col-1 text-right">£{finalPrice.toFixed(2)}</div>
                            </div>
                        </>
                    }</div>

                    <div>{discount === 0 &&
                        <div className="row">
                            <div className="col-2"><strong>Total Price</strong></div>
                            <div className="col-1 text-right">£{totalPrice.toFixed(2)}</div>
                        </div>
                    }</div>
                </>
            )}
        </aside>
    )
}
