import './style.css';
import NoteManager from './NoteManager';

const noteManager = new NoteManager({
    el: document.getElementById('notesWrapper'),
    notes: [
        {
            title: 'aaa',
            body: 'bbb'
        },
        {
            title: 'ccc',
            body: 'ddd'
        }
    ]
});

noteManager.onNoteAdd = (note) => {
    console.log('Note added ', note);
};

noteManager.onNoteChange = (note) => {
    console.log('Note changed', note);
};

noteManager.onNoteRemove = (note) => {
    console.log('Note removed', note);
};

const newNoteBtn = document.querySelector('.new-note-btn');
newNoteBtn.onclick = () => {
    noteManager.prependNote({
        title: '',
        body: ''
    });
};