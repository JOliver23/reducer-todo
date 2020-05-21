export const initialState = {
    todos: [{
        task: "Sample Task from reducer",
        complete: false,
        id: ""
    }]
};

export const taskReducer = (state, action) => {
    if (action.type === "ADD_TASK") {
        return {
            ...state,
            task: action.payload ? action.payload : state.task
        };
    } else if (action.type === "TOGGLE_COMPLETE") {
        return {
            ...state,
            complete: !state.complete
        };
    }
    return state;
}

