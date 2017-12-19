import React, { Component } from "react";
import Item from "component/prayer/add/FormItem.js";
import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import { FormattedMessage } from "react-intl";
import CancelIcon from "material-ui-icons/Cancel";
import styled from "styled-components";
import { red } from "material-ui/colors";

const prayerTypes = [
    "guidance",
    "health",
    "joy",
    "money",
    "peace",
    "relationships",
    "time"
];

const CancelIconStyled = styled(CancelIcon)`
    && {
        color: ${red[500]};
        margin-right: 0px;
    }
`;

class Form extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: false
        };
    }

    onItemClick(prayerType) {
        this.setState({ isLoading: true });
        return this.props.onSubmit(prayerType).then(() => {
            this.setState({
                isLoading: false
            }).catch(() => {
                this.setState({
                    isLoading: true
                });
            });
        });
    }

    render() {
        return (
            <Drawer
                anchor="bottom"
                open={this.props.isOpen}
                onClose={() => {
                    this.props.onCancel();
                }}
            >
                <List>
                    <ListItem>
                        <ListItemText
                            primary={
                                <FormattedMessage
                                    id="component.prayer.add.form.title"
                                    defaultMessage="What do you need others to pray about?"
                                />
                            }
                        />
                    </ListItem>
                    <Divider />
                    {prayerTypes.map(prayerType => {
                        return (
                            <Item
                                key={prayerType}
                                type={prayerType}
                                disabled={this.state.isLoading}
                                onClick={() => {
                                    return this.onItemClick(prayerType);
                                }}
                            />
                        );
                    })}
                    <Divider />
                    <ListItem
                        button
                        onClick={() => {
                            this.props.onCancel();
                        }}
                    >
                        <ListItemIcon>
                            <CancelIconStyled />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <FormattedMessage
                                    id="component.prayer.add.form.cancel"
                                    defaultMessage="cancel"
                                />
                            }
                        />
                    </ListItem>
                </List>
            </Drawer>
        );
    }
}

export default Form;
