function solve(input) {

    let people = {};

    for (let line of input) {

        if (line === 'Results') {
            break;
        }

        let tokens = line.split(':');
        let command = tokens[0];

        if (command === 'Add') {
            let [ person, health, energy ] = tokens;
            health = Number(health);
            energy = Number(energy);
            if (!people.hasOwnProperty(person)) {
                people['person'] = person;
                people['health'] = health;
                people['energy'] = energy;
            } else {
                people['health'] += health;
            }
        } else if (command === 'Attack') {
            let [ attackerName, defenderName, damage ] = tokens;
            damage = Number(damage);

            if (people.hasOwnProperty(attackerName) && people.hasOwnProperty(defenderName)) {
                people[defenderName] -= damage;
            }

            if (people[defenderName] <= 0) {
                console.log(`${defenderName} was disqualified!`);
                delete people[defenderName];
            }
        }
    }
}

solve(
    [
        'Add:Mark:1000:5',
        'Add:Clark:1000:3',
        'Attack:Clark:Mark:500',
        'Add:Allison:2500:5',
        'Attack:Clark:Mark:300',
        'Add:Charlie:4000:10',
        'Attack:Clark:Mark:500',
        'Results'
    ]
);