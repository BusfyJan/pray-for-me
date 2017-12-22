import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const animationKeyframe = keyframes`
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
`;

const RotatingWrapper = styled.span`
    margin: 0px;
    padding: 0px;
    width: 24px;
    height: 24px;
    animation: ${animationKeyframe} 1s linear infinite;
`;

class Rotating extends Component {
    render() {
        return <RotatingWrapper>{this.props.children}</RotatingWrapper>;
    }
}

export default Rotating;
