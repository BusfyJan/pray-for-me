import React, { Component } from "react";
import MassIcon from "material-ui-icons/Home";
import PrayerIcon from "material-ui-icons/RecordVoiceOver";
import GoodDeedIcon from "material-ui-icons/FormatPaint";
import { green, blue, red } from "material-ui/colors";
import styled from "styled-components";

class Icon extends Component {
    render() {
        let Icon = null;
        let color = null;

        if (this.props.type === "prayer") {
            Icon = PrayerIcon;
            color = red[500];
        }

        if (this.props.type === "mass") {
            Icon = MassIcon;
            color = blue[500];
        }

        if (this.props.type === "goodDeed") {
            Icon = GoodDeedIcon;
            color = green[500];
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
