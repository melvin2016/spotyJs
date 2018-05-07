const token = require('./lib/getToken');
const keys = require('./spotKeys')||{};
let token1 = token(keys.clientId,keys.clientSecret).getToken().then(function(res){
    console.log(res);
})
.catch(function(err){
    console.log(err);
});;

    
