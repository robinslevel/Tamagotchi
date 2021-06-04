console.log("hello world");

//variabelen
var play = document.querySelector('.bts');
var h2 = document.querySelector('h2');
var textbar = document.querySelector('.textbar');

//start button
var action = 1;


function start() {
    play.addEventListener('click', () => {
        play.innerHTML = 'restart';
        h2.innerHTML = 'Pres restart to restart game';
        textbar.innerHTML = 'Name = Max Verstappen';
        status = 90;
        mon.className = "monsterb";

    }, { once: true }
    );
}

//functie om opnieuw te starten en nieuwe naam

play.addEventListener('click', () => {
    document.querySelector(".bts").className = "btsr";
}, { once: true });


function rando() {
    var restart = document.button('.btsr');
    restart.addEventListener('click', () => {
        //i tried to change names
        var namen = ["Maaike", "Robin", "Ashwan", "Tim", "Sandro", "Pokemon", "Cyprus", "leraar", "Thomas", "Robert"];
        var randomn = Math.random() * 9;
        randomn = Math.floor(randomn);
        return Math.floor(Math.random() * (max - min)) + min;
        h2.innerHTML = namen[randomn];
        console.log("hello");
    })
}

//status en buttons
var status = 0;
var normal = 75;
var low = 40;
var death = 0;
var happy = 90;
console.log(status);

var food = document.querySelector('.btnf');
var train = document.querySelector('.btnt');
var treat = document.querySelector('.btt');
var meter = document.querySelector('.meter');

//random number add for food button does not work
function randomm(min, max) {
    min = Math.ceil(2);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min)) + min;
};

var mon = document.querySelector('.placement>div');
//check
console.log(mon);

//buttons
food.addEventListener("click", () => {
    updated();
    status++;
    if (status == 30) {
        mon.className = "monsterl";
    }
    if (status == 75) {
        mon.className = "monsterb";
    }
    if (status == 0) {
        mon.className = "monsterd";
    }
    if (status == 90) {
        mon.className = "monsters";
    }
})

train.addEventListener("click", () => {
    status++;
    updated();
    if (status == 40) {
        mon.className = "monsterl";
    }
    if (status == 75) {
        mon.className = "monsterb";
    }
    if (status == 0) {
        mon.className = "monsterd";
    }
    if (status == 90) {
        mon.className = "monsters";
    }
})

treat.addEventListener("click", () => {
    status--;
    updated();
    if (status == 40) {
        mon.className = "monsterl";
    }
    if (status == 75) {
        mon.className = "monsterb";
    }
    if (status == 0) {
        mon.className = "monsterd";
    }
    if (status == 90) {
        mon.className = "monsters";
    }
})

function updated() {
    meter.innerHTML = status;
    if (meter.innerHTML == 0) {
        return;
    }
}
function nback(max) {
    return Math.floor(Math.random() * 9);
}

function update() {
    console.log('status');
    updated();
}


console.log(status);

if (meter.innerHTML == 40) {
    console.log("40");
}

function restarter() {
    restart.addEventListener('click', () => {
        meter.innerHTML = normal;
    })
}
//play button extra changes en steeds levens omlaag krijgen


var t;

function aftellen() {
        status--;
    }

function verdertellen() {
setInterval(aftellen, 0150);
status = 90;
        meter.innerHTML = status;
        mon.className = "monsters";
        play.innerHTML = 'restart';
}

function stoppen() {
if (status < 0) {
clearInterval(t);
}
}


    play.addEventListener('click', 
        verdertellen
    
    )


stoppen();
//de updater en game aanzetter


// var interval = setInterval(function () {
//     updated();
//     if (status < 0) {
//         textbar.innerHTML = "You died";
//         clearInterval;
//     } else {
//         textbar.innerHTML = "Make sure above does not hit 0";
//     }
// }, 0050);

// function stop() {
//     if (status < 0) {
//         clearInterval(interval)
//     }

// }
// stop();
