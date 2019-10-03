
let ulLander = document.getElementById('ul-Lander');
let sect1 = document.getElementById('sect');

fetch('land.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(lander) {

        liLander = "";
        for (i=0; i<lander.length; i++) {
            liLander += '<li id=\"li-' + lander[i].id + '\"> ' + lander[i].countryname + ' (Click) </li>';
        }
        ulLander.innerHTML = liLander;
    })
    .then(function(lander) {

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
                sect1.appendChild(ul111);

                for (j=0; j<stader.length; j++) {

                    console.log(lander);

                    if (stader[j].countryid === 1) {
    
                        liStader1 = "";
                        liStader1 += '<li onclick=\"display(' + j + ')\">' + stader[j].stadname + ' (Click) </li>';
    
                        ul111.innerHTML += liStader1;

                        console.log(ul111);
                        console.log(j);

                    } // Slut på if
                } // Slut på loop
            }); // Slut på eventlistener

            li22.addEventListener('click', function() {
                alert('2!');

                ul222 = document.createElement('ul');
                sect1.appendChild(ul222);

                for (j=0; j<stader.length; j++) {

                    if (stader[j].countryid === 2) {
    
                        liStader2 = "";
                        liStader2 += '<li onclick=\"display(' + j + ')\">' + stader[j].stadname + ' (Click) </li>';
    
                        ul222.innerHTML += liStader2;
                    } // Slut på if
                } // Slut på loop
            }); // Slut på eventlistener

            li33.addEventListener('click', function() {
                alert('3!');

                ul333 = document.createElement('ul');
                sect1.appendChild(ul333);

                for (j=0; j<stader.length; j++) {

                    if (stader[j].countryid === 3) {
    
                        liStader3 = "";
                        liStader3 += '<li onclick=\"display(' + j + ')\">' + stader[j].stadname + ' (Click) </li>';
    
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

        fetch('stad.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(stader) {

                // Sorterar JSON data efter befolkningsmängd:
                stader.sort(function (a, b) {
                return b.population - a.population;
                });

                console.log(stader);
                document.getElementById('fakta').innerHTML = 'Fakta om ' + stader[x].stadname + '';
                document.getElementById('inv').innerHTML = stader[x].population;
                console.log(x);
            })
            .catch(function(err) {
                console.log(JSON.stringify(err));
            })
    };
    