export const initialState = {
    task: "Sample Task from reducer",
    note: "we have a todo",
    complete: false,
    id: ""
};

export const taskReducer = (state, action) => {
    if (action.type === "ADD_TASK") {
        return {
            ...state,
            task: action.payload 
        };
    } else if (action.type === "ADD_NOTE") {
        return {
            ...state,
            note: action.payload
        };
    } else if (action.type === "TOGGLE_COMPLETE") {
        return {
            ...state,
            complete: !state.complete
        };
    }
    return state;
}

