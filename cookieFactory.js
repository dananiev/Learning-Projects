function cookieFactory(input) {
    let count = +input.shift();

    for (let i = 1; i <= count; i += 1) {
        let ingredient = input.shift();
        let eggs = false;
        let flour = false;
        let sugar = false;

        while (true) {
            if (ingredient === 'eggs') {
                eggs = true;
            } else if (ingredient === 'flour') {
                flour = true;
            } else if (ingredient === 'sugar') {
                sugar = true;
            } else if (ingredient === 'Bake!') {
                if (eggs && flour && sugar === true) {
                    console.log(`Baking batch number ${i}...`);
                    break;
                } else {
                    console.log('The batter should contain flour, eggs and sugar!');
                }
            }  
            ingredient = input.shift();  
        }    
    }
}

cookieFactory([2, 'flour', 'eggs', 'sugar', 'chocolate', 'Bake!', 'flour', 'eggs', 'sugar', 'caramel', 'peanuts', 'Bake!']);