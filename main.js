(function(){
    const gToken = require('./lib/getToken');
    const album = require('./lib/albums/albums');
    let accToken;
    module.exports={
        keys:function(clientId,clientSecret){
            return new Promise(function(resolve,reject){
                gToken(clientId,clientSecret).getToken().then(function(res){
                    accToken=JSON.parse(res);
                    console.log(accToken);
                    resolve({clientId:clientId,clientSecret:clientSecret,accToken:JSON.parse(res)});
                }).catch(function(err){
                    reject(err);
                    throw Error(err);
                }); 
            });
        },
        getAlbum:function(id,accToken){
            return (album.getAlbum.bind(null,accToken))(id);
        }
    }   
}());