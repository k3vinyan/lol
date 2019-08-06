import { CONSTANTS } from './constants.js';

function getChampionsApi()  {
    const url = CONSTANTS.CHAMPIONJSON;

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
    const url = CONSTANTS.PLAYERJSON;

    return fetch(url)
        .then(function(response) {
            return response.json()
        })
        .catch(function(error) {
            console.log("Error in Player API: ", error)
        })
    // const url = CONSTANTS.PLAYERJSON;
    // const promise = new Promise( function(resolve, reject) {
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('GET', url, true);
    //     xhr.responseType = 'json';
    //     xhr.onload = function() {
    //         const status = xhr.status;

    //         if(status === 200) {
    //             console.log("get champions success!")
    //             resolve(xhr.response)
    //         } else {
    //             reject("Error: " + status)
    //         }
    //     }

    //     xhr.send()
    // })

    // return promise;
}

export { getChampionsApi, getPlayersApi };