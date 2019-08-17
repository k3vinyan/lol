import {} from './helpers/helpers.js';
import { allChampions } from './api.js';


var game = (function(){

    var getChampions = function(str) {
        allChampions.then(function(result) {
            console.log(result[str])
        })
    }


    return {
        getChampions: getChampions
    }

}())

game.getChampions("Annie")

// var game = game || {};

//  game.init = (function(){
     
//     var getChampions = function(str) {
//         let test = str;
//         allChampions.then(function(result) {
//             var champ = result[test]
//             return champ;
//         })
//     }

    

//     var mPublic = {
//         getChampions: getChampions
//     }

//     return mPublic;
//  }());

//  const g = game.init;

// const champ = g.getChampions("Annie")

// console.log(champ)