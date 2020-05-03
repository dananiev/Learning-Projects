function maxSequenceOfEqualElements(arr) {

    let array = arr[0].split(' ');
    let longestSequence = [];
    let leftMostIndex = 0;

    for (let i = 0; i < array.length; i += 1) {
        currentEl = +array[i];
        let currentSequence = [currentEl];

        for (let j = i + 1; j < array.length; j += 1) {
            let nextEl = +array[j];

            if (nextEl === currentEl) {
                currentSequence.push(nextEl);
            } else {
                break;
            }
        }

        if (currentSequence.length > longestSequence.length) {
            longestSequence = [];
            for (let j = 0; j < currentSequence.length; j += 1) {
                longestSequence.push(currentSequence[j]);
            }
        } else if (currentSequence.length === longestSequence.length) {
            if (i < leftMostIndex) {
                leftMostIndex = i;
            }
        }
    }

    console.log(longestSequence.join(' '));
}

maxSequenceOfEqualElements(['2 1 1 2 3 3 2 2 2 1']);