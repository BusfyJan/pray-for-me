import React, { Component } from "react";
import DeedIcon from "component/deed/Icon.js";
import Badge from "material-ui/Badge";
import styled from "styled-components";

const BadgeStyled = styled(Badge)`
    & > span {
        width: 18px;
        height: 18px;
    }
`;

class Item extends Component {
    render() {
        return (
            <BadgeStyled badgeContent={this.props.count} color="primary">
                <DeedIcon type={this.props.type} />
            </BadgeStyled>
        );
    }
}

export default Item;
