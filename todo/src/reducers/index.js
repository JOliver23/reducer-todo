export const initialState = [
    {
        task: "practice reducer",
        complete: false,
        id:666
    }
];

export const taskReducer = (state, action) => {
    // console.log("state: ", state.todos);
    // console.log("action.payload: ", action.payload);
    switch (action.type) {
        case 'ADD_TASK':
            console.log(action);
            return [
                ...state,
                {
                    task: action.payload,
                    complete: false,
                    id: Date.now()
                }
            ];

        case 'TOGGLE_COMPLETE':
            console.log(action)
            return state.map(todo => {
                if (todo.id === action.payload){
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                } else {
                    return todo
                }
            })
                // state.map(newTask =>
                // newTask.id === action.payload.id ? {...newTask, complete: !newTask.complete} : newTask);
                
                // 
        case 'CLEAR_COMPLETE':
            return state.filter(task =>
                !task.complete);
        default: return state;
    };
    // if (action.type === "ADD_TASK") {
    //     const newTodo = {
    //         task: action.payload,
    //         complete:false,
    //         id: Date.now()
    //     }
    //     console.log("newToDo in taskReducer index.js: ", newTodo);

    //     return {
    //         ...state,
    //         todos: [...state.todos, newTodo]
    //     };
    // } else if (action.type === "TOGGLE_COMPLETE") {
    //     return {
    //         ...state,
    //         complete: !state.complete
    //     };
    // } 
    // return state;
}

