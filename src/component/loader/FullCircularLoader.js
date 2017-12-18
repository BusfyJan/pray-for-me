import React, { Component } from "react";
import styled from "styled-components";
import { CircularProgress } from "material-ui/Progress";

const CircularProgressStyled = styled(CircularProgress)`
    position: absolute;
    top: 47%;
    left: 47%;
`;

class FullCircularLoader extends Component {
    render() {
        return <CircularProgressStyled thickness={7} />;
    }
}

export default FullCircularLoader;
