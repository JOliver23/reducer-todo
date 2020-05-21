export const initialState = {
    todos: [{
        task: "Sample Task from reducer",
        complete: false,
        id: 666
    }]
};

export const taskReducer = (state, action) => {
    console.log("state: ", state.todos);
    console.log("action.payload: ", action.payload);
    if (action.type === "ADD_TASK") {
        const newTodo = {
            task: action.payload,
            complete:false,
            id: Date.now()
        }
        console.log("newToDo in taskReducer index.js: ", newTodo);

        return {
            ...state,
            todos: [...state.todos, newTodo]
        };
    } else if (action.type === "TOGGLE_COMPLETE") {
        return {
            ...state,
            complete: !state.complete
        };
    } 
    return state;
}

