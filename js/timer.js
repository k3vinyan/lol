const timeHeader = document.getElementById('header-time');

let count =  timeHeader.children[0].innerHTML

var interval = setInterval(function() {
    let value = timeHeader.children[0].innerHTML;
    count--;
    timeHeader.children[0].innerHTML = count;

    if(count === 0) {
        clearInterval(interval)
    }

}, 1000)


function timer() {
    let value = timeHeader.children[0].innerHTML;

    setInterval(function() {
        value--;
        timeHeader.children[0].innerHTML = value;
    }, 1000)
}


function stopTimer(timer) {
    clearInterval(timer)
}
//helpers


let event = new Event('build');



timeHeader.addEventListener('stopTimer', function(e) {

}, false)


timeHeader.dispatchEvent(event)

