const {Command}=require('commander');
const checkApi=require("../commands/check");
const program=new Command();

program
  .command('price')
  .description('check prices of crypto currencies')
  .option('--coin <type>','set the needed coin','BTC,ETH')
  .option('--curr <currency>','set the currency to be converted','USD')
  .action((cmd)=>checkApi.checkPrice(cmd));
program.parse(process.argv);
