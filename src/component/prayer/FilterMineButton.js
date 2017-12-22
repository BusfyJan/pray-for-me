import React, { Component } from "react";
import styled from "styled-components";
import MaterialButton from "material-ui/Button";
import IconActive from "material-ui-icons/Face";
import IconInactive from "material-ui-icons/SupervisorAccount";
import { blue } from "material-ui/colors";

const MaterialButtonStyled = styled(MaterialButton)`
    && {
        position: fixed !important;
        right: 7px;
        top: 55px;
        z-index: 2;
        background: ${blue[400]};

        &:hover {
            background: ${blue[500]};
        }
    }
`;

class FilterMineButton extends Component {
    render() {
        return (
            <MaterialButtonStyled
                onClick={() => {
                    this.props.onClick();
                }}
                fab
                mini
                color="primary"
            >
                {this.props.active ? <IconActive /> : <IconInactive />}
            </MaterialButtonStyled>
        );
    }
}

export default FilterMineButton;
