let people = [
      {
            slot: 0,
            name: "Arnold"
      },
      {
            slot: 1,
            name: "Sly"
      },
      {
            slot: 2,
            name: "Dwayne"
      },
      {
            slot: 3,
            name: "Vin"
      },
      {
            slot: 4,
            name: "JVCD"
      },
      {
            slot: 5,
            name: "Steven"
      }
]

let playagain = 'y';
let slot_number = null;
let name = null;
let msg = null;

let entire_list = prompt('Would you like to see the entire Contacts list? Enter (y/n)');

if (entire_list == null) {  //error handling on invalid characters at inquiry on showing list
      console.log("You've entered invalid characters. Exiting program");
}
else if (entire_list === 'n') {    //don't show entire list
      while (playagain.toLowerCase() === 'y') {  //get user's input
            console.log('\nPlease provide a Slot Number associated with a Name.');
            slot_number = prompt('Slot Number: ');
            name = prompt('Name: ');
            console.log("Slot Number: " + slot_number);
            console.log("Name: " + name);
            //while loop to search for name - I tried; see bottom code
            if (name.toLowerCase() === people[slot_number].name.toLowerCase()) {
                  msg = "\nYou selected " + people[slot_number].name;
                  console.log(msg);
                  //break;
            } else {
                  msg = "\nName was not found."
                  console.log(msg);

            }
            playagain = prompt('Would you like to play again? Enter (y/n)');
      }
} else {                   //show entire list
      while (playagain.toLowerCase() === 'y') {
            if (entire_list.toLowerCase() == null)
                  break;
            else if (entire_list.toLowerCase() === 'n') {
                  break;
            } else if (entire_list.toLowerCase() === 'y') {
                  console.log("Slot Number\t", "Number");

                  for (let i = 0; i < people.length; i++) {
                        console.log(people[i].slot + "\t" + people[i].name);
                  }
            }
            else {
                  console.log("You entered an invalid input.  Exiting program");
                  break;
            }
            //get user's input
            console.log('\nPlease provide a Slot Number associated with a Name.');
            slot_number = prompt('Slot Number: ');
            name = prompt('Name: ');
            console.log("Slot Number: " + slot_number);
            console.log("Name: " + name);
            //while loop to search for name - ok, it's not a while loop but commented code 
            //went infinity and I'm tired.  I need to move on with other classes.
            if (name.toLowerCase() === people[slot_number].name.toLowerCase()) {
                  msg = "\nYou selected " + people[slot_number].name;
                  console.log(msg);
                  //let i =0;
                  //while (i < 6){
                  //      console.log(i);
                  //      console.log(slot_number);
                  //      console.log(name.toLowerCase());
                  //      console.log(people[slot_number].name.toLowerCase());
                  //      if ((name.toLowerCase() === people[slot_number].name.toLowerCase()) && (i === slot_number)){
                  //            msg = "\nYou selected " + people[slot_number].name;
                  //            console.log(msg);
                  //            ++i;
                  //         } else { 
                  //            msg = "\nName was not found.";
                  //            console.log(msg);
                  //      }
                  //}
            } else {
                  msg = "\nName was not found.";
                  console.log(msg);

            }
            playagain = prompt('Would you like to play again? Enter (y/n)');
      }

}
