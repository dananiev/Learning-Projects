function solve(input) {

    class cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
          console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }    

    input
    .map(line => line.split(' '))
    .map(([name, age]) => new cat(name, age))
    .forEach(cat => cat.meow());

}

solve(['Mellow 2', 'Tom 5']);