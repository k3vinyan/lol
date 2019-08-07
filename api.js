import { CONSTANTS } from './constants.js';

function getChampionsApi()  {
    const url = CONSTANTS.JSON.CHAMPIONJSON;
 
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
    const url = CONSTANTS.JSON.PLAYERJSON;

    return fetch(url)
        .then(function(response) {
            return response.json()
        })
        .catch(function(error) {
            console.log("Error in Player API: ", error)
        })
}

function getChampionSkinCount() {
    const json = CONSTANTS.JSON.CHAMPIONSKINCOUNTJSON;

    return fetch(json)
        .then(function(response) {
            return response.json()
        })
        .catch(function(error) {
            console.log("Error in Skin Count: ", error)
        })
}


function getChampionSplashUrl(champ, count) {
    let url = CONSTANTS.URL.SPLASH + champ + "_" + count + ".jpg";
    return url;

}
const allChampions = getChampionsApi();
const allPlayers   = getPlayersApi();
const allskinsCount = getChampionSkinCount();

export { allChampions, allPlayers, allskinsCount }

