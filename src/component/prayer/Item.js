import React, { Component } from "react";
import styled from "styled-components";
import Card, { CardHeader, CardContent, CardActions } from "material-ui/Card";
import { FormattedMessage } from "react-intl";
import Button from "material-ui/Button";
import AddIcon from "material-ui-icons/Add";
import DoneIcon from "material-ui-icons/Done";
import CircularProgress from "component/util/CircularProgress.js";
import Divider from "material-ui/Divider";
import PrayerIcon from "component/prayer/Icon.js";
import PrayerTitle from "component/prayer/Title.js";
import PrayerDescription from "component/prayer/Description.js";
import DeedsList from "component/deed/List.js";
import { green } from "material-ui/colors";

const CardStyled = styled(Card)`
    margin-bottom: 25px;
`;

const ActionsWrapper = styled.div`
    width: 100%;
    text-align: right;
    margin-right: 5px;
`;

const OwnRequestInfoWrapper = styled.span`
    font-weight: bold;
    color: white;
    padding: 3px 5px;
    margin-left: 5px;
    background: ${green[500]};
    border-radius: 3px;
    font-size: 0.75em;
`;

class Item extends Component {
    constructor() {
        super();

        this.state = {
            isClosing: false
        };
    }

    render() {
        return (
            <CardStyled>
                <CardHeader
                    avatar={<PrayerIcon type={this.props.data.type} />}
                    title={
                        <span>
                            <PrayerTitle type={this.props.data.type} />
                            {this.props.data.isMine ? (
                                <OwnRequestInfoWrapper>
                                    <FormattedMessage
                                        id="component.prayer.item.yours"
                                        defaultMessage="yours"
                                    />
                                </OwnRequestInfoWrapper>
                            ) : null}
                        </span>
                    }
                    subheader={
                        <PrayerDescription type={this.props.data.type} />
                    }
                />
                <Divider />
                <CardContent>
                    <DeedsList items={this.props.data.deeds} />
                </CardContent>
                <Divider />
                <CardActions disableActionSpacing>
                    <ActionsWrapper>
                        {this.props.data.isMine ? (
                            <Button
                                onClick={() => {
                                    if (this.state.isClosing) {
                                        return;
                                    }

                                    this.setState({ isClosing: true }, () => {
                                        this.props
                                            .onCloseRequest()
                                            .catch(() => {
                                                this.setState({
                                                    isClosing: false
                                                });
                                            });
                                    });
                                }}
                                raised
                                dense
                                color="primary"
                            >
                                <FormattedMessage
                                    id="component.prayer.item.closePrayerRequest"
                                    defaultMessage="Close prayer request"
                                />
                                &nbsp;
                                {this.state.isClosing ? (
                                    <CircularProgress
                                        size={20}
                                        thickness={7}
                                        color="white"
                                    />
                                ) : (
                                    <DoneIcon />
                                )}
                            </Button>
                        ) : (
                            <Button
                                onClick={() => {
                                    this.props.onResponseRequest();
                                }}
                                raised
                                dense
                                color="primary"
                            >
                                <FormattedMessage
                                    id="component.prayer.item.addDeedButton"
                                    defaultMessage="Add deed"
                                />
                                &nbsp;
                                <AddIcon />
                            </Button>
                        )}
                    </ActionsWrapper>
                </CardActions>
            </CardStyled>
        );
    }
}

export default Item;
