const axios=require('axios');
const colors=require('colors');
class ApiManager{
    constructor(key){
        this.baseUrl="https://min-api.cryptocompare.com/data/pricemultifull";
        this.apiKey=key;
    }
    
    async getData(coinOption,curOption){
        try{
        const res=await axios.get(`${this.baseUrl}?fsyms=${coinOption}&tsyms=${curOption}&api_key=${this.apiKey}`);
        // const formatter=Intl.NumberFormat('en-US',{
        //     style:'currency',
        //     currency:curOption
        // });
        let result=res.data.DISPLAY;
        let result1=res.data.RAW
        let Output='';
       for(let coin in result){
        
        for (let currency in result[coin]){
            let conversionInfo=result[coin][currency];
            let rawconversionInfo=result1[coin][currency];
            Output+=`Coin ${rawconversionInfo.FROMSYMBOL.yellow} ${conversionInfo.FROMSYMBOL.yellow} | Price:${String(conversionInfo.PRICE).green} | Currency:${conversionInfo.TOSYMBOL} ${rawconversionInfo.TOSYMBOL}\n`
        }
       }
       return Output;
    }catch(e){
        if(e.response.status==401){
            throw new Error('Your API Key is Invalid - Go to https://min-api.cryptocompare.com')
        }else if(e.response.status==404){
            throw new Error('Your API is Not Responding');
        }else{
            throw new Error('Something is Not working');
        }
    }
}
}
module.exports=ApiManager;