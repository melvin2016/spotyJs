const spotKeys=require('./spotKeys');
const SpotyJs = require('./main');
var accToken;
SpotyJs.keys(spotKeys.clientId,spotKeys.clientSecret).then(function(res){
    accToken=res.accToken.access_token;
});
console.log(accToken);
SpotyJs.getAlbum("0sNOF9WDwhWunNAHPD3Baj",accToken).then((res)=>{
    console.log(res);
});