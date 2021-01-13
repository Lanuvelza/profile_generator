const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let answers = [];
rl.question("What's your name? ", (answer) => {
  answers.push(answer);
  rl.question("What's an activity you like doing? ", (answer) => {
    answers.push(answer);
    rl.question("What do you listen to while that? ", (answer) => {
      answers.push(answer);
      rl.question("Which meal is your favourite? ", (answer) => {
        answers.push(answer);
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          answers.push(answer);
          rl.question("Which sport is your abosolute favourite? ", (answer) => {
            answers.push(answer);
            rl.question("what is superpower? ", (answer) => {
              answers.push(answer);
              console.log(answers);
              rl.close();
            });
          });
        });
      });
    });
  });
});







