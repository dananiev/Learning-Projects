export const increment = (addNumberTen) => {
    return {
        type: 'INCREMENT',
        payload: addNumberTen
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}