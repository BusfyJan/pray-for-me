import React, { Component } from "react";
import Item from "component/deed/Item.js";
import MaterialList from "material-ui/List";
import ListSubheader from "material-ui/List/ListSubheader";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

const MaterialListStyled = styled(MaterialList)`
    && {
        padding: 0px;
    }
`;

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
        return (
            <MaterialListStyled
                subheader={
                    <ListSubheader>
                        <FormattedMessage
                            id="component.deed.list.deedsTitle"
                            defaultMessage="Deeds for this prayer"
                        />
                    </ListSubheader>
                }
            >
                {Object.entries(this.groupItemsByDeedType()).map(
                    ([deedType, deeds], index) => {
                        return (
                            <Item
                                key={deedType}
                                type={deedType}
                                count={deeds.length}
                            />
                        );
                    }
                )}
            </MaterialListStyled>
        );
    }
}

export default List;
