function solution(num) {
    return function (x) {
        return num + (x * 1);
    }
}

let add5 = solution(5);

console.log(
    solution(5),
    add5(2),
    add5(3),
);