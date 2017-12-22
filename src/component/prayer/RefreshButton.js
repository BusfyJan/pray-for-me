import React, { Component } from "react";
import styled from "styled-components";
import MaterialButton from "material-ui/Button";
import IconRefresh from "material-ui-icons/Loop";
import { green } from "material-ui/colors";
import Rotating from "component/util/Rotating.js";

const MaterialButtonStyled = styled(MaterialButton)`
    && {
        position: fixed !important;
        right: 7px;
        top: 7px;
        z-index: 2;
        background: ${green[400]};

        &:hover {
            background: ${green[500]};
        }
    }
`;

class RefreshButton extends Component {
    render() {
        return (
            <MaterialButtonStyled
                onClick={() => {
                    if (!this.props.active) {
                        this.props.onClick();
                    }
                }}
                fab
                mini
                color="primary"
            >
                {this.props.active ? (
                    <Rotating>
                        <IconRefresh />
                    </Rotating>
                ) : (
                    <IconRefresh />
                )}
            </MaterialButtonStyled>
        );
    }
}

export default RefreshButton;
