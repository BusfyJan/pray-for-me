import React, { Component } from "react";
import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import ListSubheader from "material-ui/List/ListSubheader";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import InboxIcon from "material-ui-icons/Inbox";
import DraftsIcon from "material-ui-icons/Drafts";
import CancelIcon from "material-ui-icons/Cancel";

class AddForm extends Component {
    render() {
        return (
            <Drawer
                anchor="bottom"
                open={this.props.isOpen}
                onClose={() => {
                    this.props.onCancel();
                }}
            >
                <List
                    subheader={
                        <ListSubheader>Add new prayer request</ListSubheader>
                    }
                >
                    <ListItem
                        button
                        onClick={() => {
                            this.props.onSubmit(1);
                        }}
                    >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Health" />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => {
                            this.props.onSubmit(2);
                        }}
                    >
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="School" />
                    </ListItem>
                    <Divider />
                    <ListItem
                        button
                        onClick={() => {
                            this.props.onCancel();
                        }}
                    >
                        <ListItemIcon>
                            <CancelIcon />
                        </ListItemIcon>
                        <ListItemText secondary="cancel" />
                    </ListItem>
                </List>
            </Drawer>
        );
    }
}

export default AddForm;
