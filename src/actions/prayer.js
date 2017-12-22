export const SET_LIST = "SET_LIST";
export const SET_ONLY_MINE = "SET_ONLY_MINE";
export const ADD_REFRESH_REQUEST = "ADD_REFRESH_REQUEST";
export const POP_REFRESH_REQUEST = "POP_REFRESH_REQUEST";

export const setOnlyMine = onlyMine => {
    return {
        type: SET_ONLY_MINE,
        onlyMine: onlyMine
    };
};

export const setList = list => {
    return {
        type: SET_LIST,
        list: list
    };
};

export const addRefreshRequest = () => {
    return {
        type: ADD_REFRESH_REQUEST
    };
};

export const popRefreshRequest = () => {
    return {
        type: POP_REFRESH_REQUEST
    };
};
