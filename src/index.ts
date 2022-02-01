#!/usr/bin/env node

import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner'
import figlet from 'figlet';
import gradient from 'gradient-string';
import { listOfQuestions } from './questions.js';
const sleep = (ms=2000) => new Promise(resolve => setTimeout(resolve, ms));

async function welcome(){
    const pulsse = chalkAnimation.pulse( chalk.yellow('Hello, welcome to the world of TypeScript!'));
    await sleep(1000);
    pulsse.stop();
    
    const rainbow = chalkAnimation.rainbow('Let\'s get started!');
    await sleep(4000);
    rainbow.stop();
}

async function askNumOfQustions(): Promise<string>{  
    const answer:any = await inquirer.prompt({
        name: 'numOfQuestions',
        type: 'list',
        message: 'How many questions do you want to answer?\n',
        choices: [
            '5',
            '10',
            '15',
            '20'
        ]
    })

    return answer.numOfQuestions
}

async function main(){
    figArt("Quizzy");
    await welcome();
    await askNumOfQustions();
    const spinner = createSpinner('Loading...').start();
    await sleep()
    spinner.success({text: 'Done!'});
    const tempQ=listOfQuestions.map((question, indx) => {
        return{
            name: 'question'+indx,
            type: 'list',
            message: question.getQuestion(),
            choices: question.getOptions()
        }
    })

    inquirer.prompt(tempQ).then(answers => {
        const result = checkAnswers(listOfQuestions, answers);
        console.log(chalk.green(`You got ${result*100}% correct!`));
        figArt(`${result*100}%`);
    })


}
function figArt(msg:string){
    // console.clear();
    figlet(msg, (_, data) =>{
        console.log(gradient.pastel.multiline(data));
    })
}
function checkAnswers(questions:any[], answers:any):number{
    let correctAnswers = 0;
    questions.forEach((question, indx) => {
        if(question.getAnswer() == answers['question'+indx]){
            correctAnswers++;
        }
    })
    console.log(chalk.green(`You got ${correctAnswers} out of ${questions.length} correct!`));
    return correctAnswers/questions.length;
}


main();