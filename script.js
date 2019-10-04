// Får åtkomst till element i HTML-filen:
let bodye = document.getElementById('body-1');
let ulLander = document.getElementById('ul-Lander');
let navb = document.getElementById('nav1');

// Hämtar JSON data för länder:
fetch('land.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(lander) {

        // Lagrar JOSN data för länder i en array:
        let arrayLander = [];
        for (a=0; a<lander.length; a++) {
            arrayLander.push(lander[a].id);
        }
        // Lagrar länder i en lista för meny:
        liLander = "";
        for (i=0; i<lander.length; i++) {
            liLander += '<li id=\"li-' + lander[i].id + '\"> ' + lander[i].countryname + ' (TRYCK HÄR FÖR ATT SE LISTA) </li>';
        }
        ulLander.innerHTML = liLander;

        return arrayLander;
    })
    .then(function(arrayLander) {

        // Får åtkomst till de skapade elementen med länder:
        li11 = document.getElementById('li-1');
        li22 = document.getElementById('li-2');
        li33 = document.getElementById('li-3');

        // Hämtar data för städer:
        fetch('stad.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(stader) {

            // Sorterar JSON data efter befolkningsmängd:
            stader.sort(function (a, b) {
                return b.population - a.population;
            });

            // Skapar en click funktion för första elementet som innehåller länder:
            li11.addEventListener('click', function() {

                // Skapar en undermeny med lista att lagra städer i:
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

            // Skapar en click funktion för andra elementet som innehåller länder:
            li22.addEventListener('click', function() {

                // Skapar en undermeny med lista att lagra städer i:
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

            // Skapar en click funktion för tredje elementet som innehåller länder:
            li33.addEventListener('click', function() {

                // Skapar en undermeny med lista att lagra städer i:
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
    // Catch funktion som fångar upp fel om data inte hämtas korrekt:
    .catch(function(err) {
        console.log(JSON.stringify(err));
    });

    // Funktion som hanterar click för elementen som innehåller städer:
    function display(x) {

        // Hämtar data för länder:
        fetch('land.json') 
            .then(function(response) {
                return response.json();
            })
            .then(function(lander2) {

                // Lagrar data för länder i en array:
                let arrayLandid = [];
                for (c=0; c<lander2.length; c++) {
                    arrayLandid.push(lander2[c].id);
                }

                return arrayLandid;
            })
            .then(function(arrayLandid) {

                // Hämtar data för städer:
                fetch('stad.json')
                    .then(function(response) {
                    return response.json();
                })
                .then(function(stader) {

                    // Sorterar JSON data efter befolkningsmängd:
                    stader.sort(function (a, b) {
                    return b.population - a.population;
                    });

                    // Lagrar fakta om städerna tillhörande första landet i paragrafer i HTML-filen:
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

                    // Lagrar fakta om städerna tillhörande andra landet i paragrafer i HTML-filen:
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

                    // Lagrar fakta om städerna tillhörande tredje landet i paragrafer i HTML-filen:
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
            // Catch funktion som fångar upp fel om data inte hämtas korrekt:
            .catch(function(err) {
                console.log(JSON.stringify(err));
            });
    }

// Får åtkomst till paragrafer och knapp i HTML-filen:
let besokt = document.getElementById('btn-besokt');
let inv = document.getElementById('inv');
let paragr = document.getElementById('para');

// Skapar en tom array att lagra data i för länder som användaren besökt:
let arrayBesokt = [];

// Skapar en click funktion för "besökt" knappen:
besokt.addEventListener('click', function() {

    // Hämtar data för städer:
    fetch('stad.json')
    .then(response => response.json())
    .then(function(staderbkn) {
        
        /* Jämför om invånarantalet i pargrafen med invånarantal 
        överrensstämmer med invånarantaler för nogot land i JSON datan:*/
        let inve = inv.innerHTML;
    
        // Överrensstämmer invånarantalet, lagras datan i en array:
        for (s=0; s<staderbkn.length; s++) {

            let invj = JSON.stringify(staderbkn[s].population)

            if (invj === inve) {

                let value = JSON.stringify(staderbkn[s].id);

                arrayBesokt.push(value);
                
                // Informerar användaren att data lagras:
                alert('Landet du besökt sparas');
                
            } // Slut på if
        }
        return arrayBesokt;
    })
    // Catch funktion som fångar upp fel om data inte hämtas korrekt:
    .catch(err => console.log(JSON.stringify(err)));
    
}) // Slut på eventlistener

/* Får åtkomst till ytterligare element, och ett 
element som man ska klicka på för att komma tille 
en sida med lagrade städer som användaren besökt:*/
let liBes = document.getElementById('li-Bes');
let sect1 = document.getElementById('sect');

    /* Skapar en click funtion för elementet som tar 
    användaren till en sida med lagrade städer som användaren besökt:*/
    liBes.addEventListener('click', function() {

        /* Får åtkomst till <div>, rubriker och paragrafer i HTML-filen. 
        Dessa innehåller data för städer som användaren beökt:*/
        let dive = document.getElementById('div-E');
        let paragr = document.getElementById('p-E');
        let paragr2 = document.getElementById('p-E2');
        let btntb = document.getElementById('B-tb');
        let btnmod = document.getElementById('Rd-B');

        /* Modifierar dokumentet när användaren trycker på elementet 
        som tar användaren till en sida, som innehåller information om städer
        användarenn besökt:*/
        dive.style.display = 'block';

        navb.style.display = 'none';
        sect1.style.display = 'none';

        // Hämtar data för städer:
        fetch('stad.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(stadermod) {

                // Sorterar JSON data efter befolkningsmängd:
                stadermod.sort(function (a, b) {
                return b.population - a.population;
                });

                // Lagrar besökta städer i en array:
                let Cities = [];

                for (u=0; u<stadermod.length; u++) {
                    for (p=0; p<arrayBesokt.length; p++) {
                    
                        if (arrayBesokt[p] === JSON.stringify(stadermod[u].id)) {
                            Cities.push(stadermod[u].stadname);
                        } // Slut på if
                    } // Slut på loop
                } // SLut på loop

                // Lagrar besökta städer i localStorage:
                let Cityn = 'Cityname';
        
                if (Cities[0] !== undefined ) {
                    localStorage.setItem(Cityn, JSON.stringify(Cities));
                
                } // Slut på if

                let Cities1 = localStorage.key(0);
                let Cities2 = localStorage.getItem(Cities1);
                let paragrx = document.getElementById('p-E');
                paragrx.innerHTML += 'Besökt stad: ' + Cities2 + ' <br />';
                
                // Lagrar summan, d.v.s. det totala invånarantalet i de baesökta städerna, i en array:
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
                    }
                
                    let Sum3 = 'InvTotalt';
        
                    // Lagrar summan av invånarantalet i localStorage:
                    if (Cities[0] !== undefined ) {
                        localStorage.setItem(Sum3, JSON.stringify(sum2));
                    
                    } // Slut på if
    
                    let Tot1 = localStorage.key(1);
                    let Tot2 = localStorage.getItem(Tot1);
                    let paragrx2 = document.getElementById('p-E2');
                    paragrx2.innerHTML += + Tot2 + ' <br />';
            
            })

            /* Skapar en click funktion för knappen som tar tillbaka 
            användaren till sidan där man kan välja städer och länder*/
            btntb.addEventListener('click', function() {
                navb.style.display = 'block';
                sect1.style.display = 'block';
                dive.style.display = 'none';

                paragr.innerHTML = '';
                paragr2.innerHTML = '';
            })

            // Skapar en click funktion som raderar historik och sparad användardata:
            btnmod.addEventListener('click', function() {
                localStorage.clear();
                location.reload();
            })
            
    }) // Slut på eventlistener
