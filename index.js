let readlineSync = require('readline-sync');

//list to store quiz highscores
let highscores = [ 0, 0, 0];

let questionList = [
  {
    question : 'What is my favourite color in clothing?',
    answer : 'black'
  },
  {
    question : 'Which song genre I listen the most?',
    answer : 'pop'
  },
  {
    question : 'What is my favourite animal?',
    answer : 'wolf'
  },
  {
    question : 'What is my favourite outdoor sport?',
    answer : 'cricket'
  },
  {
    question : 'Which bikes do I like more, cruiser or sports?',
    answer : 'cruiser'
  },
  {
    question : 'Which is my favourite indoor game?',
    answer : 'chess'
  },{
    question : 'I am really bad in which activity, sports or dance?',
    answer : 'dance'
  }
];
//it takes user input for questions given in parameter list and match them against correct answers given in parameter list and shows up user score and highscores
function quiz(quesList) {
  console.log('Welcome to the quiz about 90s video games')
  let ans = '';
  let score = 0;
  for(let i = 0; i < quesList.length; i++) {
    ans = readlineSync.question(quesList[i].question + ": ");
    if(ans.toUpperCase() === quesList[i].answer.toUpperCase()) {
      score += 1;
      console.log('correct answer');
    } else {
      console.log('incorrect!');
    }
  }
  console.log(`Your score is: ${score}`);
  console.log('The previous highscores are: ');
  for(let i = 0; i < highscores.length; i++) {
    console.log(highscores[i]);
  }
  for( let i = 0; i < highscores.length; i++) {
    if(score >= highscores[i]) {
      console.log('Hurray!, You are a highscorer. Send a screenshort to get your score updated in list of high scores');
      break;
    }
  }

}

quiz(questionList);