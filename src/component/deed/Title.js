import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

class Title extends Component {
    render() {
        if (this.props.type === "prayer") {
            return (
                <FormattedMessage
                    id="component.deed.title.guidance"
                    defaultMessage="Prayer"
                />
            );
        }

        if (this.props.type === "mass") {
            return (
                <FormattedMessage
                    id="component.deed.title.health"
                    defaultMessage="Mass"
                />
            );
        }

        if (this.props.type === "goodDeed") {
            return (
                <FormattedMessage
                    id="component.deed.title.goodDeed"
                    defaultMessage="Good deed"
                />
            );
        }

        throw new Error(
            "Title for type " + this.props.type + " not supported!"
        );
    }
}

export default Title;
