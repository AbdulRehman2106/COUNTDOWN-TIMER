#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const readline_1 = __importDefault(require("readline"));
console.log(chalk_1.default.rgb(246, 110, 255)(`\n\tWELCOME  TO  COUNTDOWN  TIMER\n`));
// Function to prompt user for input
function getUserInput() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield inquirer_1.default.prompt([
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
        }
        catch (error) {
            console.error(chalk_1.default.red('\nERROR GETTING USER INPUT:'), error);
            process.exit(1);
        }
    });
}
// Function to start the countdown timer
function startCountdown(hours, minutes, seconds) {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    const endTime = Date.now() + totalSeconds * 1000;
    const timerInterval = setInterval(() => {
        const currentTime = Date.now();
        const timeDiffInSeconds = Math.floor((endTime - currentTime) / 1000);
        if (timeDiffInSeconds <= 0) {
            clearInterval(timerInterval);
            console.log(chalk_1.default.red('\n\t\tTIME IS UP\n'));
            console.log(chalk_1.default.rgb(249, 233, 14)(`\n\tPRESENTING  BY  ABDUL   REHMAN`));
            process.exit(0);
        }
        const remainingHours = Math.floor(timeDiffInSeconds / 3600);
        const remainingMinutes = Math.floor((timeDiffInSeconds % 3600) / 60);
        const remainingSeconds = timeDiffInSeconds % 60;
        readline_1.default.cursorTo(process.stdout, 0);
        process.stdout.write(chalk_1.default.green(`${remainingHours.toString().padStart(2, '0')} : ${remainingMinutes
            .toString()
            .padStart(2, '0')} : ${remainingSeconds.toString().padStart(2, '0\n')}`));
    }, 1000);
}
// Main function to run the countdown timer
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const { hours, minutes, seconds } = yield getUserInput();
        console.log(chalk_1.default.blue(`\nSTARTING COUNTDOWN FOR  ${hours}  HOURS,  ${minutes}  MINUTES, AND  ${seconds}  SECONDS...\n`));
        startCountdown(hours, minutes, seconds);
    });
}
main();
