#! /usr/bin/env node

import inquirer from 'inquirer';

import chalk from 'chalk';

import readline from 'readline';


console.log(chalk.rgb(246,110,255)(`\n\tWELCOME  TO  COUNTDOWN  TIMER\n`));


// Function to prompt user for input

async function getUserInput() {

  try {

    const response = await inquirer.prompt([

      {

        name: 'hours',

        type: 'number',

        message: '\nPLEASE ENTER THE AMOUNT OF HOURS:',

        validate: (value) => {

          if (isNaN(value) || value < 0) {

            return '\nPLEASE ENTER A NON-NEGATIVE NUMBER.\n';

          }

          return true;

        }

      },

      {

        name: 'minutes',

        type: 'number',

        message: '\nPLEASE ENTER THE AMOUNT OF MINUTES:',

        validate: (value) => {

          if (isNaN(value) || value < 0) {

            return '\nPLEASE ENTER A NON-NEGATIVE NUMBER.\n';

          }

          return true;

        }

      },

      {

        name: 'seconds',

        type: 'number',

        message: '\nPLEASE ENTER THE AMOUNT OF SECONDS:',

        validate: (value) => {

          if (isNaN(value) || value < 0) {

            return '\nPLEASE ENTER A NON-NEGATIVE NUMBER.\n';

          }

          return true;

        }

      }

    ]);

    return {

      hours: response.hours,

      minutes: response.minutes,

      seconds: response.seconds,

    };

  } catch (error) {

    console.error(chalk.red('\nERROR GETTING USER INPUT:'), error);

    process.exit(1);

  }

}



// Function to start the countdown timer

function startCountdown(hours: number, minutes: number, seconds: number) {

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  const endTime = Date.now() + totalSeconds * 1000;



  const timerInterval = setInterval(() => {

    const currentTime = Date.now();

    const timeDiffInSeconds = Math.floor((endTime - currentTime) / 1000);



    if (timeDiffInSeconds <= 0) {

      clearInterval(timerInterval);

      console.log(chalk.red('\n\t\tTIME IS UP\n'));

      console.log(chalk.rgb(249,233,14)(`\n\tPRESENTING  BY  ABDUL   REHMAN`));

      process.exit(0);

      

    }



    const remainingHours = Math.floor(timeDiffInSeconds / 3600);

    const remainingMinutes = Math.floor((timeDiffInSeconds % 3600) / 60);

    const remainingSeconds = timeDiffInSeconds % 60;



    readline.cursorTo(process.stdout, 0);

    process.stdout.write(

      chalk.green(

        `${remainingHours.toString().padStart(2, '0')} : ${remainingMinutes

          .toString()

          .padStart(2, '0')} : ${remainingSeconds.toString().padStart(2, '0\n')}`

          )

      );

  }, 1000);

}



// Main function to run the countdown timer

async function main() {

  const { hours, minutes, seconds } = await getUserInput();

  console.log(

    chalk.blue(

      `\nSTARTING COUNTDOWN FOR  ${hours}  HOURS,  ${minutes}  MINUTES, AND  ${seconds}  SECONDS...\n`
      
      )

    );

  startCountdown(hours, minutes, seconds);


}




main();


