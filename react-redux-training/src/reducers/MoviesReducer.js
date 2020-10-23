import { v4 as uuidv4 } from 'uuid';

const initialState = [
    { title: 'Spider-Man', releaseDate: '05-07-2017', rating: '7.4' },
    // { title: 'Batman', releaseDate: '08-02-2013', rating: '8.9' },
    // { title: 'Godzilla', releaseDate: '03-09-2012', rating: '5.3' },
    // { title: 'Iron Man', releaseDate: '08-01-2007', rating: '9.8' },
    // { title: 'Fantastic Four', releaseDate: '06-04-2019', rating: '6.5' }
];

const moviesReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case 'CREATE_MOVIE':
            return [...state, {
                id: uuidv4(),
                title: payload.title,
                releaseDate: payload.releaseDate
            }]
        case 'DELETE_MOVIE':
            const copyState = [...state];
            // find id of object to remove
            const i = copyState.findIndex(x => x.id === payload.id)
            copyState.splice(i, 1);
            return [...copyState]
        default:
            return state
    }

    return state;
}

export default moviesReducer;