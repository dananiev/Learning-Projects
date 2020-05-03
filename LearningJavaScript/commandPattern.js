class AddCommand {
    constructor(valueToAdd) {
        this.valueToAdd = valueToAdd
    }

    execute(currentValue) {
        return currentValue + this.valueToAdd 
    }

    undo(currentValue) {
        return currentValue - this.valueToAdd
    }
}

const addCommand = new AddCommand(10);
const newValue = addCommand.execute(10);
console.log(newValue);
console.log(addCommand.undo(newValue));
