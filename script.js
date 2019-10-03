
let ulLander = document.getElementById('ul-Lander');
let navb = document.getElementById('nav1');

fetch('land.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(lander) {

        console.log(lander);

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
                alert('1!');

                ul111 = document.createElement('ul');
                navb.appendChild(ul111);

                for (j=0; j<stader.length; j++) {

                    if (stader[j].countryid === arrayLander[0]) {
    
                        liStader1 = "";
                        liStader1 += '<li class="li-stad" onclick=\"display(' + j + ')\">' + stader[j].stadname + ' (Click) </li>';
    
                        ul111.innerHTML += liStader1;

                        console.log(ul111);
                        console.log(j);

                    } // Slut på if
                } // Slut på loop
            }); // Slut på eventlistener

            li22.addEventListener('click', function() {
                alert('2!');

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
                alert('3!');

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

                    console.log(arrayLandid[0]);
                    console.log(stader[x].countryid);

                    // Sorterar JSON data efter befolkningsmängd:
                    stader.sort(function (a, b) {
                    return b.population - a.population;
                    });

                    if (stader[x].countryid === arrayLandid[0]) {
                    document.getElementById('fakta').innerHTML = '' + stader[x].stadname + ' är en stad i ';
                    document.getElementById('inv').innerHTML = stader[x].population;
                    //console.log(x);
                    }

                    if (stader[x].countryid === arrayLandid[0]) {
                        fetch('land.json')
                        .then(response => response.json())
                        .then(function(land1) {
                            console.log(land1[0].countryname)
                            document.getElementById('fakta').innerHTML += ''+ land1[0].countryname + '.';
                            //console.log(x);
                        })
                        }

                    if (stader[x].countryid === arrayLandid[1]) {
                        document.getElementById('fakta').innerHTML = '' + stader[x].stadname + ' är en stad i ';
                        document.getElementById('inv').innerHTML = stader[x].population;
                        //console.log(x);
                        }

                    if (stader[x].countryid === arrayLandid[1]) {
                        fetch('land.json')
                        .then(response => response.json())
                        .then(function(land2) {
                            console.log(land2[1].countryname)
                            document.getElementById('fakta').innerHTML += ''+ land2[1].countryname + '.';
                            //console.log(x);
                        })
                        }

                    if (stader[x].countryid === arrayLandid[2]) {
                        document.getElementById('fakta').innerHTML = '' + stader[x].stadname + ' är en stad i ';
                        document.getElementById('inv').innerHTML = stader[x].population;
                        //console.log(x);
                        }

                    if (stader[x].countryid === arrayLandid[2]) {
                        fetch('land.json')
                        .then(response => response.json())
                        .then(function(land3) {
                            console.log(land3[2].countryname)
                            document.getElementById('fakta').innerHTML += ''+ land3[2].countryname + '.';
                            //console.log(x);
                        })
                        }
                })       
            })
            .catch(function(err) {
                console.log(JSON.stringify(err));
            });
    }
    