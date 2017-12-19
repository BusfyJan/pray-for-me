import React, { Component } from "react";
import DeedIcon from "component/deed/Icon.js";
import DeedTitle from "component/deed/Title.js";
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Badge from "material-ui/Badge";
import styled from "styled-components";

const ListItemStyled = styled(ListItem)`
    && {
        padding: 10px;
    }
`;

class Item extends Component {
    render() {
        return (
            <ListItemStyled>
                <ListItemIcon>
                    <Badge badgeContent={this.props.count} color="primary">
                        <DeedIcon type={this.props.type} />
                    </Badge>
                </ListItemIcon>
                <ListItemText primary={<DeedTitle type={this.props.type} />} />
            </ListItemStyled>
        );
    }
}

export default Item;
