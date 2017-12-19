import React, { Component } from "react";
import HealthIcon from "material-ui-icons/Accessibility";
import MoneyIcon from "material-ui-icons/AttachMoney";
import RelationshipsIcon from "material-ui-icons/Favorite";
import TimeIcon from "material-ui-icons/HourglassEmpty";
import GuidanceIcon from "material-ui-icons/Gesture";
import JoyIcon from "material-ui-icons/InsertEmoticon";
import PeaceIcon from "material-ui-icons/FilterVintage";
import {
    green,
    blue,
    red,
    yellow,
    orange,
    deepPurple,
    pink
} from "material-ui/colors";
import styled from "styled-components";

class Icon extends Component {
    render() {
        let Icon = null;
        let color = null;

        if (this.props.type === "guidance") {
            Icon = GuidanceIcon;
            color = blue[500];
        }

        if (this.props.type === "health") {
            Icon = HealthIcon;
            color = pink[500];
        }

        if (this.props.type === "joy") {
            Icon = JoyIcon;
            color = yellow[500];
        }

        if (this.props.type === "money") {
            Icon = MoneyIcon;
            color = green[500];
        }

        if (this.props.type === "peace") {
            Icon = PeaceIcon;
            color = deepPurple[500];
        }

        if (this.props.type === "relationships") {
            Icon = RelationshipsIcon;
            color = red[500];
        }

        if (this.props.type === "time") {
            Icon = TimeIcon;
            color = orange[500];
        }

        if (Icon === null) {
            throw new Error("Icon type " + this.props.type + " not supported!");
        }

        Icon = styled(Icon)`
            color: ${color};
        `;

        return <Icon />;
    }
}

export default Icon;
