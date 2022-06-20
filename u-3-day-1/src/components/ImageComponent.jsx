
import React from "react"
import { Component } from "react"




class ImageComponent extends Component {
    render() {
        return <img src={this.props.image} style={{ height: this.props.imgheight, width: this.props.imgwidth }}></img>
    }
}

export default ImageComponent