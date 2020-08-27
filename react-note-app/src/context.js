import React from 'react';

const NotesContext = React.createContext({
    currentNote: null,
    notes: [
        { id: 1, text: 'Play guitar scales'},
        { id: 2, text: 'Play guitar chords' },
        { id: 3, text: 'Try to create a melody' }
    ]
});

export default NotesContext;