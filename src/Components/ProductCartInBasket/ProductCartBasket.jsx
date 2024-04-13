import React from "react";
import { BsFillTrashFill } from "react-icons/bs"
import "./ProductCardInBasket.css"

export default class ProductCardInBasket extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    HandleTrashButtonOnClick(){
        this.props.handleOnRemove(this.props.id)
    }
    render() {
        return (
            <div className="product-card-in-basket">
                <div className="thumbnails">
                    <img src={this.props.image_src} alt={this.props.title + " thumbnails"} />
                </div>
                <div className="details">
                    <div className="title">
                        <h4>{this.props.title}</h4>
                    </div>
                    <div className="price">
                        <span>$</span>
                        <span>{this.props.price}</span>
                    </div>
                </div>
                <div className="count">
                    <input type="number" className="counter-input" min={0} value={1} />
                </div>
                <div className="remove-button" role="button" onClick={this.HandleTrashButtonOnClick.bind(this)}>
                    <BsFillTrashFill className="icon" />
                </div>
            </div>
        )
    }

}