const menu = [
    {
        name: 'pasta',
        category: 'dinner'
    },
    {
        name: 'eggs',
        category: 'breakfast'
    },
    {
        name: 'potatoes',
        category: 'dinner'
    },
    {
        name: 'pizza',
        category: 'lunch'
    },
    {
        name: 'yogurt',
        category: 'breakfast'
    }
];

const categories = [...new Set(menu.map((item) => item.category))];
console.log(categories);

const result = document.getElementById('result');
result.innerHTML = categories
    .map((category) => {
        return `<button>${category}</button>`
    })
    .join('');