'use strict';
const gToken = require('./lib/getToken');
const album =  require('./lib/albums/albums');
const Main = function(accToken){
    this.accToken=accToken;
}


Main.prototype={
    getAlbum:album.bind(this)()
}


module.exports={
    getToken:gToken,
    Main:Main,
};