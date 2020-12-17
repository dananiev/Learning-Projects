const initialState = ['Mike Tyson'];

const nameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NAME':
            return state.name
        default:
            return state;
    }
}

export default nameReducer;