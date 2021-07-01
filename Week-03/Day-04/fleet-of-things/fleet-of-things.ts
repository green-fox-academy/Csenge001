import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Download those, use those

//  Crete a fleet of things to have this output:
// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

fleet.add(new Thing ("Get milk"));
fleet.add(new Thing ("Remove the obstacles"));
fleet.add(new Thing ("Stand up"));
fleet.add(new Thing ("Eat lunch"));


let completedTasks = fleet.getThings();
completedTasks[2].complete();
completedTasks[3].complete();


console.log(fleet.toString());