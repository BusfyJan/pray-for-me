import React, { Component } from "react";
import Dialog, { DialogTitle, DialogContent } from "material-ui/Dialog";
import { FormattedMessage } from "react-intl";
import Item from "component/deed/Item.js";
import List, { ListItem } from "material-ui/List";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import styled from "styled-components";

const ListItemStyled = styled(ListItem)`
    margin-top: 10px;
`;

class Info extends Component {
    getInfoText(deedType, count) {
        if (deedType === "mass") {
            return (
                <FormattedMessage
                    id="component.deed.info.textMass"
                    defaultMessage="Mass was sacrificed {count}x for this request"
                    values={{ count }}
                />
            );
        }

        if (deedType === "goodDeed") {
            return (
                <FormattedMessage
                    id="component.deed.info.textGoodDeed"
                    defaultMessage="Good deed was sacrificed {count}x for this request"
                    values={{ count }}
                />
            );
        }

        if (deedType === "prayer") {
            return (
                <FormattedMessage
                    id="component.deed.info.textPrayer"
                    defaultMessage="Prayer was sacrificed {count}x for this request"
                    values={{ count }}
                />
            );
        }
    }

    render() {
        return (
            <Dialog
                open={this.props.isVisible}
                onClose={() => {
                    this.props.onRequestClose();
                }}
            >
                <DialogTitle>
                    <FormattedMessage
                        id="component.deed.info.title"
                        defaultMessage="Deeds for this prayer request"
                    />
                </DialogTitle>
                <Divider />
                <DialogContent>
                    <List>
                        {this.props.data.map(([deedType, deeds], index) => {
                            return (
                                <div key={deedType}>
                                    <ListItemStyled>
                                        <Item
                                            type={deedType}
                                            count={deeds.length}
                                        />
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <Typography>
                                            {this.getInfoText(
                                                deedType,
                                                deeds.length
                                            )}
                                        </Typography>
                                    </ListItemStyled>
                                    <Divider />
                                </div>
                            );
                        })}
                    </List>
                </DialogContent>
            </Dialog>
        );
    }
}

export default Info;
