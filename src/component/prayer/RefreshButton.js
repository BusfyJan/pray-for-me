import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import MaterialButton from "material-ui/Button";
import IconRefresh from "material-ui-icons/Loop";
import { green } from "material-ui/colors";

const MaterialButtonStyled = styled(MaterialButton)`
    && {
        position: fixed !important;
        right: 18px;
        bottom: 75px;
        z-index: 2;
        background: ${green[400]};

        &:hover {
            background: ${green[500]};
        }
    }
`;

const animationKeyframe = keyframes`
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
`;

const IconRefreshRotating = styled(IconRefresh)`
    animation: ${animationKeyframe} 0.75s 0s both;
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
                {this.props.active ? <IconRefreshRotating /> : <IconRefresh />}
            </MaterialButtonStyled>
        );
    }
}

export default RefreshButton;
