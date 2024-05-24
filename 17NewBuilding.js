function displayBuilding(numFloors, numRoomsPerFloor) {

  
    for (let floor = numFloors; floor >= 1; floor--) {
      if (floor === numFloors) {
    
        console.log(`L${floor}L`);
      } else if (floor % 2 === 0) {
    
        for (let room = 0; room < numRoomsPerFloor; room++) {
          console.log(`O${floor}${room}`);
        }
      } else {
        
        for (let room = 0; room < numRoomsPerFloor; room++) {
          console.log(`A${floor}${room}`);
        }
      }
    }
  }
  

  displayBuilding(5, 3); 
  