function biggestOfThreeNumbers(one, two, three) {

    if (one > two && one > three) {
        console.log(one);
    } else if (two > one && two > three) {
        console.log(two);
    } else if (three > one && three > two) {
        console.log(three);
    }

}

biggestOfThreeNumbers(130, 5, 99);