
let bodye = document.getElementById('body-1');
let ulLander = document.getElementById('ul-Lander');
let navb = document.getElementById('nav1');

fetch('land.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(lander) {

        let arrayLander = [];
        for (a=0; a<lander.length; a++) {
            arrayLander.push(lander[a].id);
        }

        liLander = "";
        for (i=0; i<lander.length; i++) {
            liLander += '<li id=\"li-' + lander[i].id + '\"> ' + lander[i].countryname + ' (Click) </li>';
        }
        ulLander.innerHTML = liLander;

        return arrayLander;
    })
    .then(function(arrayLander) {

        li11 = document.getElementById('li-1');
        li22 = document.getElementById('li-2');
        li33 = document.getElementById('li-3');

        fetch('stad.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(stader) {

            // Sorterar JSON data efter befolkningsmängd:
            stader.sort(function (a, b) {
                return b.population - a.population;
            });

            li11.addEventListener('click', function() {

                ul111 = document.createElement('ul');
                navb.appendChild(ul111);

                for (j=0; j<stader.length; j++) {

                    if (stader[j].countryid === arrayLander[0]) {
    
                        liStader1 = "";
                        liStader1 += '<li class="li-stad" onclick=\"display(' + j + ')\">' + stader[j].stadname + ' (Click) </li>';
    
                        ul111.innerHTML += liStader1;
                    } // Slut på if
                } // Slut på loop
            }); // Slut på eventlistener

            li22.addEventListener('click', function() {

                ul222 = document.createElement('ul');
                navb.appendChild(ul222);

                for (j=0; j<stader.length; j++) {

                    if (stader[j].countryid === arrayLander[1]) {
    
                        liStader2 = "";
                        liStader2 += '<li class="li-stad" onclick=\"display(' + j + ')\">' + stader[j].stadname + ' (Click) </li>';
    
                        ul222.innerHTML += liStader2;
                    } // Slut på if
                } // Slut på loop
            }); // Slut på eventlistener

            li33.addEventListener('click', function() {

                ul333 = document.createElement('ul');
                navb.appendChild(ul333);

                for (j=0; j<stader.length; j++) {

                    if (stader[j].countryid === arrayLander[2]) {
    
                        liStader3 = "";
                        liStader3 += '<li class="li-stad" onclick=\"display(' + j + ')\">' + stader[j].stadname + ' (Click) </li>';
    
                        ul333.innerHTML += liStader3;
                    } // Slut på if
                } // Slut på loop
            }); // Slut på eventlistener
        })
    })
    .catch(function(err) {
        console.log(JSON.stringify(err));
    });

    function display(x) {

        fetch('land.json') 
            .then(function(response) {
                return response.json();
            })
            .then(function(lander2) {

                let arrayLandid = [];
                for (c=0; c<lander2.length; c++) {
                    arrayLandid.push(lander2[c].id);
                }

                return arrayLandid;
            })
            .then(function(arrayLandid) {

                fetch('stad.json')
                    .then(function(response) {
                    return response.json();
                })
                .then(function(stader) {

                    // Sorterar JSON data efter befolkningsmängd:
                    stader.sort(function (a, b) {
                    return b.population - a.population;
                    });

                    if (stader[x].countryid === arrayLandid[0]) {
                    document.getElementById('fakta').innerHTML = '' + stader[x].stadname + ' är en stad i ';
                    document.getElementById('inv').innerHTML = stader[x].population;
                    
                    } // Slut på if

                    if (stader[x].countryid === arrayLandid[0]) {
                        fetch('land.json')
                        .then(response => response.json())
                        .then(function(land1) {
                            document.getElementById('fakta').innerHTML += ''+ land1[0].countryname + '.';
                            
                        })
                    } // Slut på if

                    if (stader[x].countryid === arrayLandid[1]) {
                        document.getElementById('fakta').innerHTML = '' + stader[x].stadname + ' är en stad i ';
                        document.getElementById('inv').innerHTML = stader[x].population;
                        
                    } // Slut på if

                    if (stader[x].countryid === arrayLandid[1]) {
                        fetch('land.json')
                        .then(response => response.json())
                        .then(function(land2) {
                            document.getElementById('fakta').innerHTML += ''+ land2[1].countryname + '.';
                            
                        })
                    } // Slut på if

                    if (stader[x].countryid === arrayLandid[2]) {
                        document.getElementById('fakta').innerHTML = '' + stader[x].stadname + ' är en stad i ';
                        document.getElementById('inv').innerHTML = stader[x].population;
                        
                    } // Slut på if

                    if (stader[x].countryid === arrayLandid[2]) {
                        fetch('land.json')
                        .then(response => response.json())
                        .then(function(land3) {
                            document.getElementById('fakta').innerHTML += ''+ land3[2].countryname + '.';
                        
                        })
                    } // Slut på if
                })       
            })
            .catch(function(err) {
                console.log(JSON.stringify(err));
            });
    }

let besokt = document.getElementById('btn-besokt');
let inv = document.getElementById('inv');
let paragr = document.getElementById('para');

let arrayBesokt = [];

besokt.addEventListener('click', function() {

    fetch('stad.json')
    .then(response => response.json())
    .then(function(staderbkn) {

        let inve = inv.innerHTML;
    
        for (s=0; s<staderbkn.length; s++) {

            let invj = JSON.stringify(staderbkn[s].population)

            if (invj === inve) {

                let key = 'id';
                let value = JSON.stringify(staderbkn[s].id);

                if (key && value) {
                    localStorage.setItem(key, value);
                } // SLut på if

                for (t=0; t<localStorage.length; t++) {
                    const key = localStorage.key(t);
                    const value = localStorage.getItem(key);

                    arrayBesokt.push(value);
                } // Slut på loop
            
                alert('Hurra');
                
            } // Slut på if
        }
        return arrayBesokt;
    })
    .catch(err => console.log(JSON.stringify(err)));
    
}) // Slut på eventlistener

let liBes = document.getElementById('li-Bes');
let sect1 = document.getElementById('sect');

if (arrayBesokt && localStorage) {

    liBes.addEventListener('click', function() {

        let dive = document.createElement('div');
        let header = document.createElement('h2');
        let header2 = document.createElement('h2');
        let paragr = document.createElement('p');
        let paragr2 = document.createElement('p');

        let btnmod = document.createElement('button');
        btnmod.innerHTML = '<--Rensa data';
        header.innerHTML = 'Städer jag besökt: ';
        header2.innerHTML = 'Totalt antal människor jag kan ha träffat under mina besök: ';

        dive.appendChild(header);
        dive.appendChild(paragr);
        dive.appendChild(header2);
        dive.appendChild(paragr2);
        bodye.appendChild(dive);
        bodye.appendChild(btnmod);

        bodye.removeChild(navb);
        bodye.removeChild(sect1);

        fetch('stad.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(stadermod) {

                // Sorterar JSON data efter befolkningsmängd:
                stadermod.sort(function (a, b) {
                return b.population - a.population;
                });

                for (u=0; u<stadermod.length; u++) {
                    for (p=0; p<arrayBesokt.length; p++) {
                    
                        if (arrayBesokt[p] === JSON.stringify(stadermod[u].id)) {
                        paragr.innerHTML += 'Besökt stad: ' + stadermod[u].stadname + ' <br />';
                        } // Slut på if
                    } // Slut på loop
                } // SLut på loop
                
                let sum = [];
                for (v=0; v<stadermod.length; v++) {
                    for (q=0; q<arrayBesokt.length; q++) {
                    
                        if (arrayBesokt[q] === JSON.stringify(stadermod[v].id)) {
                            sum.push(stadermod[v].population);
                        } // Slut på if
                    } // Slut på loop
                } // SLut på loop

                    var sum2 = 0;
                    var numbers = sum;
                    numbers.forEach(myFunction);

                    function myFunction(item) {
                    sum2 += item;
                    paragr2.innerHTML = sum2;
                    }

            })

            btnmod.addEventListener('click', function() {
                localStorage.clear();
                location.reload();
            })
            
    }) // Slut på eventlistener
} // Slut på if
