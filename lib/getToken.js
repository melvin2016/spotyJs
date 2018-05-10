/*
 Module Deals with getting access token.

*/
const request = require('request'),
        base64 = require('base-64');

//Exporting the module.
module.exports=function(clientId,clientSecret){
    return  new Promise(function(resolve,reject){
        //checks for client id and client secret
        if(clientId  && clientSecret ){
            //encoding in base64 format.
            const encoded = base64.encode(`${clientId}:${clientSecret}`);
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
            //requesting on spotify access token endpoint
                request(options, (e,r,b)=>{
                if(e){
                    reject(Error(e));
                }
                resolve(JSON.parse(b).access_token);
            });
            
        }else{
            //throws error if not provided clientid and secret.
            throw Error("Provide Client Id And Client Secret !");
            return;
        }
    });
};