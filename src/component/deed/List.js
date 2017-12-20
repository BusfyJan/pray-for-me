import React, { Component } from "react";
import Item from "component/deed/Item.js";
import MaterialList, { ListItem as MaterialListItem } from "material-ui/List";
import ListSubheader from "material-ui/List/ListSubheader";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

const MaterialListStyled = styled(MaterialList)`
    && {
        padding: 0px;
    }
`;

const ItemWrapper = styled.span`
    padding-right: 10px;
`;

const NoItemsTextWrapper = styled.div`
    margin-bottom: 4px;
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
                        {this.props.items.length === 0 ? (
                            <NoItemsTextWrapper>
                                <FormattedMessage
                                    id="component.deed.list.deedsTitleEmpty"
                                    defaultMessage="No deeds for this prayer were added yet"
                                />
                            </NoItemsTextWrapper>
                        ) : null}
                    </ListSubheader>
                }
            >
                {this.props.items.length > 0 ? (
                    <MaterialListItem>
                        {Object.entries(this.groupItemsByDeedType()).map(
                            ([deedType, deeds], index) => {
                                return (
                                    <ItemWrapper key={deedType}>
                                        <Item
                                            type={deedType}
                                            count={deeds.length}
                                        />
                                    </ItemWrapper>
                                );
                            }
                        )}
                    </MaterialListItem>
                ) : null}
            </MaterialListStyled>
        );
    }
}

export default List;
