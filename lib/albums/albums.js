(function(clientId,clientSecret){
    const request = require('request');
    const baseUrl="	https://api.spotify.com";
    
    const requestSpot = function(requestUrl,method,accToken){
        const options = {
            url:`${baseUrl}${requestUrl}`,
            method:method,
            headers:{
                Authorization:`Bearer ${accToken}`
            }
        };
        return new Promise(function(resolve,reject){
            request(options,(e,r,b)=>{
                if(e){
                    throw Error(e);
                    reject(e);
                }
                resolve(b);
            });
        });
    };
    module.exports.getAlbum=function(accToken,id){
        return new Promise(function(res,rej){
            requestSpot(`/v1/albums/${id}`,"GET",accToken).then(function(resp){
                res(resp);
            }).catch(function(err){
                rej(Error(err));
            });
        });
    };
}());