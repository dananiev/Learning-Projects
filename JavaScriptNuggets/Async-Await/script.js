const getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
}


console.log('one');
console.log('two');

getTodos()
    .then(data => console.log(data))
    .catch(err => console.log('error'))
    
console.log('three');
console.log('four');