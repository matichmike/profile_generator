const readline = require('readline');
let obj = {};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (favActivity) => {
    rl.question("What do you listen to while doing that? ", (favMusic) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (favTypeOfMeal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (favMeal) => {
          rl.question("Which sport is your absolute favourite? ", (favSport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superPower) => {
    obj = {name, favActivity, favMusic, favTypeOfMeal, favMeal, favSport, superPower};
    console.log(obj);

  rl.close();
            });  
          });
        });
      });  
    });
  });
});