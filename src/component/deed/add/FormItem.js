import React, { Component } from "react";
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import { CircularProgress } from "material-ui/Progress";
import DeedIcon from "component/deed/Icon.js";
import DeedTitle from "component/deed/Title.js";

class FormItem extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: false
        };
    }

    onClick() {
        if (this.props.disabled) {
            return;
        }

        this.setState({ isLoading: true });
        this.props
            .onClick()
            .then(() => {
                this.setState({ isLoading: false });
            })
            .catch(() => {
                this.setState({ isLoading: false });
            });
    }

    render() {
        return (
            <ListItem
                button
                onClick={() => {
                    this.onClick();
                }}
            >
                <ListItemIcon>
                    {this.state.isLoading ? (
                        <CircularProgress size={24} thickness={7} />
                    ) : (
                        <DeedIcon type={this.props.type} />
                    )}
                </ListItemIcon>
                <ListItemText primary={<DeedTitle type={this.props.type} />} />
            </ListItem>
        );
    }
}

export default FormItem;
