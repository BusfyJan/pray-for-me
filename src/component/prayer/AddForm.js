import React, { Component } from "react";
import Item from "component/prayer/AddFormItem.js";
import Drawer from "material-ui/Drawer";
import Divider from "material-ui/Divider";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import HealthIcon from "material-ui-icons/Accessibility";
import MoneyIcon from "material-ui-icons/AttachMoney";
import RelationshipsIcon from "material-ui-icons/Favorite";
import TimeIcon from "material-ui-icons/HourglassEmpty";
import GuidanceIcon from "material-ui-icons/Gesture";
import JoyIcon from "material-ui-icons/InsertEmoticon";
import PeaceIcon from "material-ui-icons/FilterVintage";
import CancelIcon from "material-ui-icons/Cancel";
import { FormattedMessage } from "react-intl";

const prayers = [
    {
        type: "guidance",
        label: (
            <FormattedMessage
                id="component.prayer.addForm.prayerGuidance"
                defaultMessage="Guidance"
            />
        ),
        icon: <GuidanceIcon />
    },
    {
        type: "school",
        label: (
            <FormattedMessage
                id="component.prayer.addForm.prayerHealth"
                defaultMessage="Health"
            />
        ),
        icon: <HealthIcon />
    },
    {
        type: "joy",
        label: (
            <FormattedMessage
                id="component.prayer.addForm.prayerJoy"
                defaultMessage="Joy"
            />
        ),
        icon: <JoyIcon />
    },
    {
        type: "money",
        label: (
            <FormattedMessage
                id="component.prayer.addForm.prayerMoney"
                defaultMessage="Money"
            />
        ),
        icon: <MoneyIcon />
    },
    {
        type: "peace",
        label: (
            <FormattedMessage
                id="component.prayer.addForm.prayerPeace"
                defaultMessage="Peace"
            />
        ),
        icon: <PeaceIcon />
    },
    {
        type: "relationships",
        label: (
            <FormattedMessage
                id="component.prayer.addForm.prayerRelationships"
                defaultMessage="Relationships"
            />
        ),
        icon: <RelationshipsIcon />
    },
    {
        type: "time",
        label: (
            <FormattedMessage
                id="component.prayer.addForm.prayerTime"
                defaultMessage="Time"
            />
        ),
        icon: <TimeIcon />
    }
];

class AddForm extends Component {
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
                    {prayers.map(prayer => {
                        return (
                            <Item
                                key={prayer.type}
                                icon={prayer.icon}
                                label={prayer.label}
                                disabled={this.state.isLoading}
                                onClick={() => {
                                    return this.onItemClick(prayer.type);
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
                            <CancelIcon />
                        </ListItemIcon>
                        <ListItemText
                            secondary={
                                <FormattedMessage
                                    id="component.prayer.addForm.cancel"
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

export default AddForm;
