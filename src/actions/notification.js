export const ADD = "ADD";
export const POP = "POP";

export const add = message => {
    return {
        type: ADD,
        message: message
    };
};

export const pop = message => {
    return {
        type: POP
    };
};
