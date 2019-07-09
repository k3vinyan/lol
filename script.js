function readJSONFile(file, callback) {
    const tFile = new XMLHttpRequest();
    tFile.overrideMimeType("application/json");
    tFile.open("GET", file, true);
    
    tFile.onreadystatechange = function() {
        if(tFile.readyState === 4 && tFile.status == "200") {
            callback(tFile.responseText);
        }
    }

    tFile.send(null);
}

readJSONFile("champion.json", function(text) {
    const data = JSON.parse(text);
   console.log(data.data)
   
   return data;
})