import React, { Component } from "react";
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import { CircularProgress } from "material-ui/Progress";

class AddFormItem extends Component {
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
                        <CircularProgress size={25} />
                    ) : (
                        this.props.icon
                    )}
                </ListItemIcon>
                <ListItemText primary={this.props.label} />
            </ListItem>
        );
    }
}

export default AddFormItem;
