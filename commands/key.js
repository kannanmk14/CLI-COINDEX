//import inquirer from 'inquirer';
const inquirer=require("inquirer");
const colors=require("colors");
const KeyManager=require("../lib/KeyManager");
const {isRequired}=require('../utils/validation');
const key={
    async set(){
        const keyManager=new KeyManager();
        const input=await inquirer.prompt([
             {
                type:'input',
                name:'key',
                message:'Enter API Key'.green +'https://min-api.cryptocompare.com',
                validate:isRequired
             }
        ]);
        const key=keyManager.setKey(input.key);
        if(key){
            console.log('API Key Set'.blue);
        }
    },
    show(){
        const keyManager=new KeyManager();
        try{
           const key=keyManager.getKey();
           console.log('Current API Key: ',key.yellow);
        }
        catch(e){
           console.log(e.message.red);
        }



    },
    remove(){
       const keyManager=new KeyManager();
        try{
           keyManager.deleteKey();
           console.log('Key Removed '.blue);
        }
        catch(e){
           console.log(e.message.red);
        }
    }
}
module.exports=key;