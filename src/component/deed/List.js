import React, { Component } from "react";
import Item from "component/deed/Item.js";

class List extends Component {
    groupItemsByDeedType() {
        const grouped = {};

        this.props.items.forEach(deed => {
            if (grouped[deed.type] === undefined) {
                grouped[deed.type] = [];
            }

            grouped[deed.type].push(deed);
        });

        return grouped;
    }

    render() {
        return Object.entries(this.groupItemsByDeedType()).map(
            ([deedType, deeds], index) => {
                return (
                    <Item key={deedType} type={deedType} count={deeds.length} />
                );
            }
        );
    }
}

export default List;
