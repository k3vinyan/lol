const CONSTANTS = {
    JSON: {
        CHAMPIONJSON: './json/champion.json',
        PLAYERJSON: './json/playersdata.json',
        CHAMPIONSKINCOUNTJSON: './json/skinCount.json'
    },
    URL: {
        IMG: "https://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/",
        SPLASH: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/",
        LOADING: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"
    },
    HEADER: {
        MESSAGE: {
            PRESELECT: "CHOOSE YOUR CHAMPION!",
            SELECT: "CHOOSE YOUR SKIN!",
            START: "LET THE BATTLE BEGIN!"
        },
        CLASSNAME: {
            
        },
        ID: {
            TIMER: 'header-time'
        },
        TIMER : {
            PHASE1: 10,
            PHASE2: 20,
            PHASE3: 30,
            TIMEOUT1: 11000,
            TIMEOUT1: 20000
        }
    },
    GAMELOGIC: {
        DEFAULTCHAMP: 'Ahri'
    }
}

export { CONSTANTS };