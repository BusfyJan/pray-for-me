import React, { Component } from "react";
import Item from "component/deed/Item.js";
import MaterialList, { ListItem as MaterialListItem } from "material-ui/List";
import ListSubheader from "material-ui/List/ListSubheader";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import Info from "component/deed/Info.js";

const MaterialListStyled = styled(MaterialList)`
    && {
        padding: 0px;
    }
`;

const MaterialListItemStyled = styled(MaterialListItem)`
    && {
        padding-bottom: 0px;
    }
`;

const ItemWrapper = styled.span`
    padding-right: 10px;
    cursor: pointer;
`;

const NoItemsTextWrapper = styled.div`
    margin-bottom: 4px;
`;

class List extends Component {
    constructor() {
        super();

        this.state = {
            infoOpen: false
        };
    }

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
            <div>
                <MaterialListStyled
                    subheader={
                        <ListSubheader>
                            {this.props.items.length === 0 ? (
                                <NoItemsTextWrapper>
                                    <FormattedMessage
                                        id="component.deed.list.deedsTitleEmpty"
                                        defaultMessage="No deeds for this prayer yet"
                                    />
                                </NoItemsTextWrapper>
                            ) : null}
                        </ListSubheader>
                    }
                >
                    {this.props.items.length > 0 ? (
                        <MaterialListItemStyled>
                            {Object.entries(this.groupItemsByDeedType()).map(
                                ([deedType, deeds], index) => {
                                    return (
                                        <ItemWrapper key={deedType}>
                                            <Item
                                                type={deedType}
                                                count={deeds.length}
                                                onClick={() => {
                                                    this.setState({
                                                        infoOpen: true
                                                    });
                                                }}
                                            />
                                        </ItemWrapper>
                                    );
                                }
                            )}
                        </MaterialListItemStyled>
                    ) : null}
                </MaterialListStyled>
                <Info
                    data={Object.entries(this.groupItemsByDeedType())}
                    isVisible={this.state.infoOpen}
                    onRequestClose={() => {
                        this.setState({ infoOpen: false });
                    }}
                />
            </div>
        );
    }
}

export default List;
