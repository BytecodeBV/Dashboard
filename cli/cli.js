#!/usr/bin/env node

/* eslint-disable no-alert,no-console */
const chalk = require('chalk');
const program = require('commander');
const { prompt } = require('inquirer');

if (process.argv.length <= 2) {
    console.error(chalk.hex('#ff3333')('Please add at least one argument.'));
    console.info(chalk.cyan('Add the --help flag for help'));
    process.exit();
}

require('dotenv').config();
require('./cli-database-connect');
const createOrganisation = require('./create-organisation');

program.version('0.0.1').description('Dashboard CLI tool');

program
    .command('create-organisation')
    .alias('o')
    .description('Create organisation')
    .action(() => {
        prompt(createOrganisation.questions).then(answers => {
            createOrganisation.createOrganisation(answers);
        });
    });

program.parse(process.argv);
