import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

class Title extends Component {
    render() {
        if (this.props.type === "guidance") {
            return (
                <FormattedMessage
                    id="component.prayer.title.guidance"
                    defaultMessage="Guidance"
                />
            );
        }

        if (this.props.type === "health") {
            return (
                <FormattedMessage
                    id="component.prayer.title.health"
                    defaultMessage="Health"
                />
            );
        }

        if (this.props.type === "joy") {
            return (
                <FormattedMessage
                    id="component.prayer.title.joy"
                    defaultMessage="Joy"
                />
            );
        }

        if (this.props.type === "money") {
            return (
                <FormattedMessage
                    id="component.prayer.title.money"
                    defaultMessage="Money"
                />
            );
        }

        if (this.props.type === "peace") {
            return (
                <FormattedMessage
                    id="component.prayer.title.peace"
                    defaultMessage="Peace"
                />
            );
        }

        if (this.props.type === "relationships") {
            return (
                <FormattedMessage
                    id="component.prayer.title.relationships"
                    defaultMessage="Relationships"
                />
            );
        }

        if (this.props.type === "time") {
            return (
                <FormattedMessage
                    id="component.prayer.title.time"
                    defaultMessage="Time"
                />
            );
        }

        if (this.props.type === "schoolAndJob") {
            return (
                <FormattedMessage
                    id="component.prayer.title.schoolAndJob"
                    defaultMessage="School & job"
                />
            );
        }

        if (this.props.type === "motivation") {
            return (
                <FormattedMessage
                    id="component.prayer.title.motivation"
                    defaultMessage="Motivation"
                />
            );
        }

        throw new Error(
            "Title for type " + this.props.type + " not supported!"
        );
    }
}

export default Title;
