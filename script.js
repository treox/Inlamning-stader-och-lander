
let ulLander = document.getElementById('ul-Lander');
console.log(ulLander);

fetch('land.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(lander) {

        liLander = "";
        for (i=0; i<lander.length; i++) {
            liLander += '<li> ' + lander[i].countryname + ' </li>';
        }
        ulLander.innerHTML = liLander;
    })
    .catch(function(err) {
        console.log(JSON.stringify(err));
    });