const input = [
    'Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones' 
];

const bandMembers = new Map();

function saveBandAndMembers(band, members) {
    if (!bandMembers.has(band)) {
        bandMembers.set(band, {
            members: new Set(members)
        });
    } else {
        const currentValue = bandMembers.get(band);
        const currentMembers = Array.from(currentValue.members || []);
        const newMembers = currentMembers.concat(members);

        bandMembers.set(band, {
            ...currentValue,
           members: new Set(newMembers)
        });
    }
}

function addBandTime(band, time) {
    if (bandMembers.has(band)) {
        const value = bandMembers.get(band);
        const members = value.members;
        const currentTime = value.time;

        bandMembers.set(band, {
            time: (currentTime || 0) + time,
            members,
        });
    } else {
        bandMembers.set(band, {
            time
        });
    }
} 

function getTotalTime() {
    let totalTime = 0;

    for (const [,value] of bandMembers.entries()) {
        const { time } = value;

        totalTime += time;
    }

    return totalTime;
}

function sortBandsByTimePlayed() {
    const sortedBands = new Map([...bandMembers.entries()]
        .sort((a, b) => b[1].time - a[1].time) || a[0].localeCompare(b[0]))

    return sortedBands;    
}

function logBandsAndTimePlayed(bands) {
    for (const [band, value] of bands.entries()) {
        console.log(`${band} -> ${value.time}`);
    }
}

function logBandAndMembers(band) {
    const { members } = bandMembers.get(band);

    console.log(band);

    for (const member of members) {
        console.log(`=> ${member}`);
    }
}

function logTotalTime() {
    const totalTime = getTotalTime();

    console.log(`Total time: ${totalTime}`);
}

function processInput(input) {
    const bandToLog = input[input.length - 1];

    for (const line of input) {
        const [command, band, otherParams] = line.split('; ');

        if (command === 'Play') {
            const playTime = parseInt(otherParams);

            addBandTime(band, playTime);
        } else if (command === 'Add') {
            const members = otherParams.split(', ');

            saveBandAndMembers(band, members);
        }
    }

    const sortedBands = sortBandsByTimePlayed();

    logTotalTime();
    logBandsAndTimePlayed(sortedBands);
    logBandAndMembers(bandToLog);

}

processInput(input);