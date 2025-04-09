#!/usr/bin/env node



const {Command}=require('commander');
const pkg=require('../package.json');
const program=new Command();

program
        .version(pkg.version)
        .command('key','Manage API Key -- https://min-api.cryptocompare.com')
        .command('check','Check Crypto Currency prices')
        .parse(process.argv);

// console.log("Hello from coindex");

//console.log(process.argv[2]);
// output:
//Hello from coindex
//key
//coindex key set here to access key and set proccess.argv give a array there path of coindex in first two index then next whatever you pause after coindex