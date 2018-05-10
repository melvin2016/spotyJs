const spotKeys=require('./spotKeys');
const Config = require('./main');
const SpotyJs = new Config.Main('BQDVzOL79wOVE73oFoutQ5bCiTNhgEWy3pe0jKC7zDzool35cnyyX0XMsh9CgJuEBS13Ylts1mXjDKciXG0');
SpotyJs.getAlbum('4aawyAB9vmqN3uQ7FjRGTy',function(e,res){
    console.log(res);
});
