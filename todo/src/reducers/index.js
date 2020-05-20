export const initialState = {
    task: "Sample Task from reducer",
    complete: false,
    id: ""
};

export const taskReducer = (state, action) => {
    if (action.type === "ADD_TASK") {
        return {
            ...state,
            task: action.payload 
        };
    } else if (action.type === "TOGGLE_COMPLETE") {
        return {
            ...state,
            complete: !state.complete
        };
    }
    return state;
}

