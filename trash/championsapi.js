import { CONSTANTS } from '../constants.js';

function getChampionsApi()  {
    const url = CONSTANTS.CHAMPIONJSON;

    const promise = new Promise( function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
            const status = xhr.status;

            if(status === 200) {
                console.log("get champions success!")
                resolve(xhr.response.data)
            } else {
                reject("Error: " + status)
            }
        }

        xhr.send()
    })

    return promise;
}



function getPlayersApi() {
    const url = CONSTANTS.PLAYERJSON;
    const promise = new Promise( function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
            const status = xhr.status;

            if(status === 200) {
                console.log("get champions success!")
                resolve(xhr.response)
            } else {
                reject("Error: " + status)
            }
        }

        xhr.send()
    })

    return promise;
}



export { getChampionsApi, getPlayersApi };