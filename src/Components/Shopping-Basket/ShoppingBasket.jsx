import React from "react";
import ProductCardInBasket from "../ProductCardInBasket/ProductCardInBasket"
import { AiOutlineShopping } from "react-icons/ai"
import { BsCartCheck } from "react-icons/bs"
import "./ShoppingBasket.css"

export default class ShoppingBasket extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="shopping-basket">
                <div className="basket-title">
                    <AiOutlineShopping className="icon" />
                    <span>Your Shopping Basket</span>
                </div>
                <div className="basket-product-list">
                    {this.props.data.map((product) => (
                        <ProductCardInBasket
                            id={product.id}
                            key={product.id}
                            image_src={product.image}
                            title={product.name} price={product.price}
                            handleOnRemove={this.props.handleRemoveProduct}
                        />
                    ))}
                </div>
                <div className="checkout">
                    <div className="total-price">
                        <p>Total Price:</p>
                        <div className="price">
                            <span>$</span>
                            <span>{this.props.total}</span>
                        </div>
                    </div>
                    <div className="payment">
                        <div className="checkout-button">
                            <span>Checkout</span>
                            <BsCartCheck />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}