import { v4 as uuidv4 } from 'uuid';

const initialState = [{
    id: 1,
    scale: 'Ionian'
}]

const scaleReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case 'CREATE_NOTE': 
            return [ ...state, {
                id: uuidv4(),
                name: payload.name
            }]
            case 'DELETE_NOTE':
                const copyState = [...state];
                const i = copyState.findIndex(x => x.id === payload.id);
                copyState.splice(i, 1);
                return [...copyState];
        default: 
            return state

    }
    return state;
}

export default scaleReducer;