function rotateArray(input) {

    let rotation = +input.pop();
    rotation %= input.length;

    for (let i = 0; i < rotation; i += 1) {
        input.unshift(input.pop());
    }
    console.log(input.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);