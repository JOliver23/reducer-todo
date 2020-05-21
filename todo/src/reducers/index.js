export const initialState = {
    todos: [{
        task: "Sample Task from reducer",
        complete: false,
        id: 666
    }]
};

export const taskReducer = (state, action) => {
    if (action.type === "ADD_TASK") {
        const newTodo ={
            task: "",
            complete:false,
            id: Date.now()
        }
        return {
            ...state,
            todo: [...state.todos, newTodo]
        };
    } else if (action.type === "TOGGLE_COMPLETE") {
        return {
            ...state,
            complete: !state.complete
        };
    }
    return state;
}

