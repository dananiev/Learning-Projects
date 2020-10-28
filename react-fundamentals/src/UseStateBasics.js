import React, { useState } from 'react'
import people from './people'

function UseStateBasics() {
    const [ text, setText ] = useState('random title');
    const [ human, setHuman ] = useState(people);
    const [ cars, setCars ] = useState({
        brand: 'Mercedes',
        message: 'Too Fast'
    })

    const handleClick = () => {
        if (text === 'random title') {
            setText('hello react');
        } else {
            setText('random title');
        }
    }

    const removeItem = (id) => {
        let copyArr = [...human];
        let newPeople = copyArr.filter((humanRemove) => humanRemove.id !== id);
        setHuman(newPeople);

        console.log(copyArr)
        console.log(newPeople)
    }

    const changeBrand = () => {
        setCars({...cars, brand: 'BMW', message: 'Too Luxurious'})
    }

    return (
        <React.Fragment>
           <h1>{text}</h1>
           <button 
                className='btn'
                onClick={handleClick}
            >
                change title
            </button>
            {human.map((man) => {
                const { id, name } = man
                return (
                    <div key={id}>
                        <h4>{man.name}</h4>
                        <button onClick={() => removeItem(id)}>remove</button>
                    </div>
                )
            })}
            <button onClick={() => setHuman([])}>Clear People</button>
            <h2>{cars.brand}</h2>
            <h2>{cars.message}</h2>
            <button onClick={changeBrand}>Change Brand</button>
        </React.Fragment>
    )
}

export default UseStateBasics;
