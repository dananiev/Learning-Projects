function moving(input) {
   let widthFree = +input.shift();
   let lengthFree = +input.shift();
   let heightFree = +input.shift();
   let freeHouseVolume = widthFree * lengthFree * heightFree;
   let sumCubics = 0;
   let command = input.shift();

   while (command !== 'Done') {
       let currentCubic = +command;
       sumCubics += currentCubic;
       if (freeHouseVolume < sumCubics) {
           let neededCubics = sumCubics - freeHouseVolume;
           console.log(`No more free space! You need ${neededCubics} Cubic meters more.`);
           break;
       }
       command = input.shift();
   }
   if (command === 'Done') {
       let freeCubics = freeHouseVolume - sumCubics;
       console.log(`${freeCubics} Cubic meters left.`); 
   }
}

moving([10, 1, 2, 4, 6, 'Done']);