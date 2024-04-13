import React from "react"
import Shop from "../Components/Shop/Shop"
import "./App.css"

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="app">
                <Shop />
            </div>
        )
    }
}