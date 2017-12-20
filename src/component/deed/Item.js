import React, { Component } from "react";
import DeedIcon from "component/deed/Icon.js";
import Badge from "material-ui/Badge";

class Item extends Component {
    render() {
        return (
            <Badge badgeContent={this.props.count} color="primary">
                <DeedIcon type={this.props.type} />
            </Badge>
        );
    }
}

export default Item;
