import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

class Description extends Component {
    render() {
        if (this.props.type === "guidance") {
            return (
                <FormattedMessage
                    id="component.prayer.description.guidance"
                    defaultMessage="Need for guidance and path"
                />
            );
        }

        if (this.props.type === "health") {
            return (
                <FormattedMessage
                    id="component.prayer.description.health"
                    defaultMessage="Need to be healed physically"
                />
            );
        }

        if (this.props.type === "joy") {
            return (
                <FormattedMessage
                    id="component.prayer.description.joy"
                    defaultMessage="Need for joy"
                />
            );
        }

        if (this.props.type === "money") {
            return (
                <FormattedMessage
                    id="component.prayer.description.money"
                    defaultMessage="Need for money"
                />
            );
        }

        if (this.props.type === "peace") {
            return (
                <FormattedMessage
                    id="component.prayer.description.peace"
                    defaultMessage="Need to feel true peace"
                />
            );
        }

        if (this.props.type === "relationships") {
            return (
                <FormattedMessage
                    id="component.prayer.description.relationships"
                    defaultMessage="Need help in relationships"
                />
            );
        }

        if (this.props.type === "time") {
            return (
                <FormattedMessage
                    id="component.prayer.description.time"
                    defaultMessage="Need more time"
                />
            );
        }

        if (this.props.type === "schoolAndJob") {
            return (
                <FormattedMessage
                    id="component.prayer.description.schoolAndJob"
                    defaultMessage="Need help in school or profession"
                />
            );
        }

        if (this.props.type === "motivation") {
            return (
                <FormattedMessage
                    id="component.prayer.description.motivation"
                    defaultMessage="Need for courage and passion"
                />
            );
        }

        throw new Error(
            "Title for type " + this.props.type + " not supported!"
        );
    }
}

export default Description;
