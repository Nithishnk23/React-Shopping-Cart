import React from "react";
import ProductList from "../Product-List/ProductList"
import ShoppingBasket from "../Shopping-Basket/ShoppingBasket"
import db from "../../Data/products"
import "./Shop.css"

export default class Shop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product_database: db,
            shopping_basket: [],
            total_price: 0,
        }
    }
    // Update Shopping basket state with new product object
    UpdateState(new_product) {
        this.setState((prevState) => ({
            shopping_basket: [...prevState.shopping_basket, new_product]
        }))
        // Update Total Price when add new product to basket
        setTimeout(() => {
            this.UpdateTotalPriceState()
        }, 0)
        // -----------------------------------------------
    }

    // Update Total Price state
    UpdateTotalPriceState() {
        let product_list = this.state.shopping_basket
        let calculatedTotalPrice = 0
        product_list.forEach((product) => {
            calculatedTotalPrice += product.price

        })

        this.setState({ total_price: calculatedTotalPrice })

    }
    // Remove Porduct from state 
    RemoveProductFromState(productID) {
        let confirmResult = window.confirm(`Are You Sure To Remove Product ${productID}`)
        if (confirmResult) {
            let product_list = this.state.shopping_basket
            let newShoppingList = product_list.filter((p) => {
                return p.id !== productID

            })
            // update new product list
            this.setState({ shopping_basket: newShoppingList })
            // update total price
            setTimeout(() => {
                this.UpdateTotalPriceState()
            }, 0)

        } else (
            console.log("You are cancel remove of", productID)
        )
    }
    render() {
        return (
            <div className="shop">
                <div className="sidebar">
                    <ShoppingBasket
                        data={this.state.shopping_basket}
                        total={this.state.total_price}
                        handleRemoveProduct={this.RemoveProductFromState.bind(this)}
                    />
                </div>
                <div className="main">
                    <ProductList data={this.state.product_database} UpdateBasketState={this.UpdateState.bind(this)} />
                </div>
            </div>
        )
    }

}