const {Command}=require('commander');
const key=require("../commands/key");

const program=new Command();

program
    .command('set')
    .description('Set API Key -- Get at https://min-api.cryptocompare.com/')
    .action(()=>key.set());

program
    .command('show')
    .description('show API Key')
    .action(()=>key.show());

program
    .command('remove')
    .description('remove API Key')
    .action(()=>key.remove());
program.parse(process.argv);