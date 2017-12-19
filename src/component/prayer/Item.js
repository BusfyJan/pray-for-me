import React, { Component } from "react";
import styled from "styled-components";
import Card, { CardHeader, CardContent, CardActions } from "material-ui/Card";
import IconButton from "material-ui/IconButton";
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
                        <IconButton
                            onClick={() => {
                                this.props.onResponseRequest();
                            }}
                        >
                            <AddIcon />
                        </IconButton>
                    </ActionsWrapper>
                </CardActions>
            </CardStyled>
        );
    }
}

export default Item;
