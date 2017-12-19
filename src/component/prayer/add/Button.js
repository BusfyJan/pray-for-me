import React, { Component } from "react";
import styled from "styled-components";
import MaterialButton from "material-ui/Button";
import IconAdd from "material-ui-icons/Add";

const MaterialButtonStyled = styled(MaterialButton)`
    position: fixed !important;
    right: 10px;
    bottom: 10px;
    z-index: 1;
`;

class Button extends Component {
    render() {
        return (
            <MaterialButtonStyled
                onClick={() => {
                    this.props.onClick();
                }}
                fab
                color="primary"
            >
                <IconAdd />
            </MaterialButtonStyled>
        );
    }
}

export default Button;
