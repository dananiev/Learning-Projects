import React from 'react'
import ListItem from './ListItem'

export default function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => 
        <ListItem key={number.toString()}
            value={number * 4} />
    );
    return (
        <ul>{listItems}</ul>
    );
}