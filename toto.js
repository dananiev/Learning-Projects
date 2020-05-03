function generate(size, lowest, highest) {

	let numbers = [];

	for (let i = 0; i < size; i++) {
		let add = true;
		let randomNumber = Math.floor(Math.random() * highest) + 1;

		for(let y = 0; y < highest; y++) {
			if(numbers[y] === randomNumber) {
				add = false;
			}
		}

		if (add) {
			numbers.push(randomNumber);
		} else {
			i--;
		}
	}
  
	let highestNumber = 0;

	for(let m = 0; m < numbers.length; m++) {
		for(let n = m + 1; n < numbers.length; n++) {
			if(numbers[n] < numbers[m]) {
				highestNumber = numbers[m];
				numbers[m] = numbers[n];
				numbers[n] = highestNumber;
			}
		}
	}

	return numbers;
}

console.log(generate(6, 1, 49));