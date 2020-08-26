import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState(null);
  const [form, setForm] = useState({ title: '', description: ''});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);


  const fetchNotes = async () => {
    setIsSubmitting(true);
    const res = await fetch('/notes')
    const data = await res.json();
    setIsSubmitting(false);
    setNotes(data);
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const validate = () => {
    let err = {};
    if (!form.title) {
      err.title = 'Title is required'
    }
    if (!form.description) {
      err.description = 'Description is required'
    }
    return err;
  }

  const showEror = (errorObj) => {
    let errMsg = '';
    for (let err in errorObj) {
      errMsg += `${errorObj[err]}. `;
    }

    alert(`Errors ${errMsg}`);
  }


  const postNotes = async (data) => {
    await fetch('/notes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(data)
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();

    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);
      await postNotes(form);
      setIsSubmitting(false);
      setForm({ title: '', description: '' })
      fetchNotes();
    } else {
      showEror(errs);
    }
  }

  return (
    <div className='App'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">React Form</a>
      </nav>

      {isSubmitting ? (
        <div className='spinner-border'>
          <span className='sr-only'>Loading...</span>
        </div>
      ) : (
        ''
      )}

      <div className='container' style={{ width: 400, marginTop: 20 }}>
        <form action='' onSubmit={handleSubmit}>
          <fieldset>
            <div className="form-group">
              <label for="exTitle">Title</label>
              <input 
                type="text"
                className="form-control" 
                id="exTitle"
                name="title"
                value={form.title}
                placeholder="Title"
                onChange={handleChange} 
              />
            </div>
            <div class="form-group">
              <label for="exampleTextarea">Description</label>
              <textarea 
                class="form-control" 
                id="exampleTextarea" 
                rows="3"
                name="description"
                value={form.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type='submit' class='btn btn-primary'>Submit</button>
          </fieldset>
        </form>
        <div style={{ width: 400, marginTop: 20 }}>
          {JSON.stringify(notes, null, 8)}
        </div>
      </div>
    </div>
  );
}

export default App;
