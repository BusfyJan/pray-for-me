import React, { Component } from "react";
import { CircularProgress as MaterialCircularProgress } from "material-ui/Progress";
import styled from "styled-components";
import { blue } from "material-ui/colors";

class CircularProgress extends Component {
    render() {
        const MaterialCircularProgressStyled = styled(MaterialCircularProgress)`
            margin-right: 0px;
            color: ${this.props.color
                ? this.props.color
                : blue[800]} !important;
        `;

        return (
            <MaterialCircularProgressStyled
                size={this.props.size}
                thickness={this.props.thickness}
            />
        );
    }
}

export default CircularProgress;
