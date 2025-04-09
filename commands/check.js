const cryptoAPI=require("../lib/cryptoApi");
const KeyManager=require("../lib/KeyManager");
const color=require("colors")
const obj={
    async checkPrice(cmd){
    try{
        const keyManager=new KeyManager();
      const crypto=new cryptoAPI(keyManager.getKey());
      let resString=await crypto.getData(cmd.coin,cmd.curr);
      console.log(resString);
    }catch(e){
        console.log(e.message.red);
    }
    }
};

module.exports=obj;