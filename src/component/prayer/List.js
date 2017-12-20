import React, { Component } from "react";
import Item from "component/prayer/Item.js";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import styled from "styled-components";

const PaperStyled = styled(Paper)`
    && {
        padding: 15px;
    }
`;

class List extends Component {
    render() {
        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <PaperStyled>
                        <Typography type="headline" component="h3">
                            Prayer requests
                        </Typography>
                        <Typography component="p">
                            Here you can see all prayer requests which need
                            deeds to be added to them
                        </Typography>
                        <Typography component="p">
                            You can add deed by clicking the button on the
                            bottom of each prayer request
                        </Typography>
                    </PaperStyled>
                </Grid>
                {this.props.items.map(prayer => {
                    return (
                        <Grid key={prayer.id} item xs={12} sm={6} md={4} lg={3}>
                            <Item
                                data={prayer}
                                onResponseRequest={() => {
                                    this.props.onItemResponseRequest(prayer.id);
                                }}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        );
    }
}

export default List;
