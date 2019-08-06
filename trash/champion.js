const LEAGUEVAR = {
    CHAMPJSON: './champion.json',
    IMGURL: "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/"
};


//insert Champion
(function() {

    const champions = {
        champions: [],
        init: function() {
            this.getChampions(LEAGUEVAR.CHAMPJSON).then(response => {
               this.champions = response;
               this.cacheDOM();
               this.render();
            }).catch( err => {
                console.log(err)
            })
        },

        getChampions: function(url) {
            const promise = new Promise( function(resolve, reject) {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url, true);
                xhr.responseType = 'json';
                xhr.onload = function() {
                    const status = xhr.status;

                    if(status === 200) {
                        console.log("success!")
                        resolve(xhr.response.data)
                    } else {
                        reject("Error: " + status)
                    }
                }
                xhr.send()
            })
            return promise;
        },

        cacheDOM: function() {
            this.app = document.getElementById('app')
        },

        createCard: function(champ) {
            const champCard = document.createElement('div')
            const champImg = document.createElement('img')
            const champName = document.createElement('p')
            
            champImg.src = LEAGUEVAR.IMGURL + champ.image.full;
            champName.innerHTML = champ.id;
            
            champCard.appendChild(champImg);
            champCard.appendChild(champName);
            
            champCard.classList.add('champion-card')
            return champCard;
        },

        render: function() {
            const champs = this.champions;

            const champsWrapper = document.createElement('div');
            champsWrapper.classList.add('champions-wrapper');

            for (let champ in champs) {
                const c = champs[champ]
                const div = this.createCard(c)
                champsWrapper.appendChild(div)
            }
            this.app.appendChild(champsWrapper)
        }
    }

    champions.init();
});
