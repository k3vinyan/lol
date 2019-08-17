import { CONSTANTS } from './constants.js';

//need to refactor getFunction
function getChampionsApi()  {
    var url = CONSTANTS.JSON.CHAMPIONJSON;
 
    return fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            return response.data;
        })
        
        .catch(function(error) {
            console.log("Error in Champion API: ", error)
            return;
        })
}

function getPlayersApi() {
    var url = CONSTANTS.JSON.PLAYERJSON;

    return fetch(url)
        .then(function(response) {
            return response.json()
        })
        .catch(function(error) {
            console.log("Error in Player API: ", error)
        })
}

function getChampionSkinCount() {
    var json = CONSTANTS.JSON.CHAMPIONSKINCOUNTJSON;

    return fetch(json)
        .then(function(response) {
            return response.json()
        })
        .catch(function(error) {
            console.log("Error in Skin Count: ", error)
        })
}

var Api = (function(){

    var allChampions = getChampionsApi();
    var allPlayers   = getPlayersApi();
    var allSkinCount = getChampionSkinCount();

    var getChampions = function(str) {
        allChampions.then(function(response) {
            return response[str]
        })
    }

    var getPlayers = function(str) {
        allPlayers.then(function(response) {
            return response[str]
        })
    }

    var getSkinCount = function(str) {
        allSkinCount.then(function(response) {
            return response[str]
        })
    }



    return {
        getChampions: getChampions,
        getPlayers: getPlayers,
        getSkinCount: getSkinCount
    }

}())



export { Api }

