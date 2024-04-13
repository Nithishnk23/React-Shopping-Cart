import React from "react";
import ProductCart from "../ProductCart/ProductCart";
import "./ProductList.css"

export default class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { product_database: this.props.data }
    }
    handleAddToBasket(productID) {
        let products = this.state.product_database
        let clickedProduct = products.filter((p) => {
            return p.id === productID
        })
        // [
        //     {
        //         "id": 1,
        //         "name": "Laptop",
        //         "price": 799,
        //         "image": "/products/laptop.png"
        //     }
        // ]
        // It's a Array we want just a object | for this return index 0 of array
        this.props.UpdateBasketState(clickedProduct[0])
        
    }
    render() {
        return (
            <div className="product-list">
                {this.state.product_database.map((product) => (
                    <ProductCart
                        key={product.id}
                        image_src={product.image}
                        name={product.name} price={product.price}
                        onClick={this.handleAddToBasket.bind(this, product.id)}

                    />
                ))}
            </div>
        )
    }

}