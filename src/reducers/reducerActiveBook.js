// state arg is not app state. Only the state this reducer
// is responsible for

//Initialize state to null because redux don´t allow to return undefined (initial load case)
export default (state=null, action) => {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
        default:
            return state;
    }
}