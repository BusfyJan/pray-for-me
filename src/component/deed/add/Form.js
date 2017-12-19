import React, { Component } from "react";
import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import { FormattedMessage } from "react-intl";
import CancelIcon from "material-ui-icons/Cancel";
import Item from "component/deed/add/FormItem";
import styled from "styled-components";
import { red } from "material-ui/colors";

const deedTypes = ["prayer", "mass"];

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

    onItemClick(deedType) {
        this.setState({ isLoading: true });
        return this.props.onSubmit(deedType).then(() => {
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
                                    id="component.deed.add.form.title"
                                    defaultMessage="What deed do have you done for this request?"
                                />
                            }
                        />
                    </ListItem>
                    <Divider />
                    {deedTypes.map(deedType => {
                        return (
                            <Item
                                key={deedType}
                                type={deedType}
                                disabled={this.state.isLoading}
                                onClick={() => {
                                    return this.onItemClick(deedType);
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
                                    id="component.deed.add.form.cancel"
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
