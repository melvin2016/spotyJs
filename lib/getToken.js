/*
 Module Deals with getting access token.

*/
(function(){
    const request = require('request'),
          base64 = require('base-64');
    //Config Constructor
    const Config = function(clientId=" ",clientSecret=" "){
        this.clientId=clientId;
        this.clientSecret=clientSecret;
    };
    //config functions which is exposed globalyy in which could instantiate the process.
    const config=function(clientId,clientSecret){
        return new Config(clientId,clientSecret);
    };
    //Prototype functions in Config Object.
    Config.prototype={
        //Used to get access token from spotify if provide client Secret and Client Key.
        getToken:function(){
            //checks for client id and client secret
            if(this.clientId !==" " && this.clientSecret !== " "){
                //encoding in base64 format.
                const encoded = base64.encode(`${this.clientId}:${this.clientSecret}`);
                //Options for the request
                const options = {
                    url:"https://accounts.spotify.com/api/token",
                    method:'POST',
                    form:{
                        grant_type:'client_credentials'
                    },
                    headers:{
                        Authorization:`Basic ${encoded}`
                    }
                };
                //returns a Promise Object with resolved and rejected values on request completion.
                return new Promise(function(resolve,reject){
                    //requesting on spotify access token endpoint
                    request(options,(e,r,b)=>{
                        if(e){
                            throw Error(e);
                            reject(e);
                        }
                        resolve(b);
                    });
                });
            }else{
                //throws error if not provided clientid and secret.
                throw Error("Provide Client Id And Client Secret !");
                return;
            }
        }
    }
    //Exporting the module.
    module.exports=config;  
}());