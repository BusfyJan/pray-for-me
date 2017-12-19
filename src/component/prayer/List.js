import React, { Component } from "react";
import Item from "component/prayer/Item.js";
import Grid from "material-ui/Grid";

class List extends Component {
    render() {
        return (
            <Grid container spacing={24}>
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
