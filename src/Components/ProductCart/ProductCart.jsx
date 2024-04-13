import React from "react";
import "./ProductCart.css"
import{FiShoppingCart} from "react-icons/fi"

export default class ProductCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

    }
    render() {
        return (
            <div className="product-cart">
                <div className="thumbnails">
                    <img src={this.props.image_src} alt={this.props.name + " Thumbnails"} />
                </div>
                <div className="names">
                    <h2>{this.props.name}</h2>
                </div>
                <div className="actions">
                    <div className="price">
                        <span>$</span>
                        <span>{this.props.price}</span>
                    </div>
                    <div className="button" role="button" onClick={this.props.onClick}>
                        <span>Add To </span>
                        <FiShoppingCart className="icon"/>
                    </div>
                </div>
            </div>
        )

    }
}