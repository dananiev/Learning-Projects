export const createNote = (note) => {
    return {
        type: 'CREATE_NOTE',
        payload: note
        // payload: {
        //     name: note.name
        // }
    }
}

export const deleteNote = (id) => {
    return {
        type: 'DELETE_NOTE',
        payload: id
        // payload: {
        //     id: props.id
        // }
    }
}