import React, { Component } from "react";
import DeedIcon from "component/deed/Icon.js";

class Item extends Component {
    render() {
        return (
            <div>
                {Array(this.props.count)
                    .fill(true)
                    .map((item, index) => {
                        return <DeedIcon key={index} type={this.props.type} />;
                    })}
            </div>
        );
    }
}

export default Item;
