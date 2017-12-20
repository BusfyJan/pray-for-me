import React, { Component } from "react";
import styled from "styled-components";
import Card, { CardHeader, CardContent, CardActions } from "material-ui/Card";
import { FormattedMessage } from "react-intl";
import Button from "material-ui/Button";
import AddIcon from "material-ui-icons/Add";
import Divider from "material-ui/Divider";
import PrayerIcon from "component/prayer/Icon.js";
import PrayerTitle from "component/prayer/Title.js";
import PrayerDescription from "component/prayer/Description.js";
import DeedsList from "component/deed/List.js";

const CardStyled = styled(Card)`
    margin-bottom: 25px;
`;

const ActionsWrapper = styled.div`
    width: 100%;
    text-align: right;
    margin-right: 5px;
`;

class Item extends Component {
    render() {
        return (
            <CardStyled>
                <CardHeader
                    avatar={<PrayerIcon type={this.props.data.type} />}
                    title={<PrayerTitle type={this.props.data.type} />}
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
                        <Button
                            onClick={() => {
                                this.props.onResponseRequest();
                            }}
                            raised
                            color="primary"
                        >
                            <FormattedMessage
                                id="component.prayer.item.addDeedButton"
                                defaultMessage="Add deed"
                            />
                            &nbsp;
                            <AddIcon />
                        </Button>
                    </ActionsWrapper>
                </CardActions>
            </CardStyled>
        );
    }
}

export default Item;
