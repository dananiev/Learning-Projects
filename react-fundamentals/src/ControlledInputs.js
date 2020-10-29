import React, { useState } from 'react'

const ControlledInputs = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && email) {
            const person = { id: new Date().getTime().toString(), firstName, email }
            setPeople((people) => {
                return [...people, person]
            })
            setFirstName('')
            setEmail('')
        } else {
            console.log('empty value')
        }
    }

    return (
        <div>
            <article>
                <form onSubmit={handleSubmit}>
                    <div className='formControl'>
                        <label htmlFor='firstName'>Name :</label>
                        <input 
                            type='text' 
                            id='firstName' 
                            name='firstName' 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className='formControl'>
                        <label htmlFor='email'>Email :</label>
                        <input 
                            type='text' 
                            id='email' 
                            name='email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type='submit'>add person</button>
                </form>
                {people.map((person) => {
                    const { id, firstName, email } = person
                    return (
                        <div key={id}>
                            <h4>{firstName}</h4>
                            <p>{email}</p>
                        </div>
                    )
                })}
            </article>
        </div>
    )
}

export default ControlledInputs;
