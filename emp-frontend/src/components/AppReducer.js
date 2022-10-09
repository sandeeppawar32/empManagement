export default (state, action) => {
    switch(action.type) {
        case 'init_state': 
            return {...state, "user": action.payload};
        case 'edit_state': 
            return {...state, "user": action.payload}    
        default: 
            return state;
    }
}
