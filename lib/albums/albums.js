const request = require('request');
const baseUrl="	https://api.spotify.com";
const requestSpot = function(requestUrl,method,accToken,callback){
    console.log(accToken);
    const options = {
        url:`${baseUrl}${requestUrl}`,
        method:method,
        headers:{
            Authorization:`Bearer ${accToken}`
        }
    };
    request(options,(e,r,b)=>{
        if(e){
            throw Error(e);
           return callback(e,null);
        }
        return callback(null,b);
    });
};
    

module.exports=function(){
         return function(id,callback){
             console.log("heh",this);
            requestSpot(`/v1/albums/${id}`,"GET",this.accToken,function(err,resp){
                if(err){
                    callback(err,null);
                }
                callback(null,resp);
            }.bind(this));
         }
            
    };


        


