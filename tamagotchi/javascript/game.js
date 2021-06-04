console.log("hello world");

//variabelen
var play = document.querySelector('.bts');
var h2 = document.querySelector('h2');
var textbar = document.querySelector('.textbar');

//status
var status = 90;
var normal = 75;
var low = 40;
var death = 0;
var happy = 90;


//buttons
var food = document.querySelector('.btnf');
var train = document.querySelector('.btnt');
var treat = document.querySelector('.btt');
var meter = document.querySelector('.meter');

//monster
var mon = document.querySelector('.placement>div');

//start button
var action = 1;


function start() {
    play.addEventListener('click', () => {
        play.innerHTML = 'restart';
        status = 90;
        mon.className = "monsterb";

    }, { once: true }
    );
}

//functie om opnieuw te starten en nieuwe naam

play.addEventListener('click', () => {
    document.querySelector(".bts").className = "btsr";
    meter.innerHTML = status;
}, { once: true });


function rando() {
    var restart = document.button('.btsr');
    restart.addEventListener('click', () => {
        //i tried to change names

        // var namen = ["Maaike", "Robin", "Ashwan", "Tim", "Sandro", "Pokemon", "Cyprus", "leraar", "Thomas", "Robert"];
        // var randomn = Math.random() * 9;
        // randomn = Math.floor(randomn);
        // return Math.floor(Math.random() * (max - min)) + min;
        // h2.innerHTML = namen[randomn];
        // console.log("hdoes this work");
    })
}



//random number add for food button does not work

// function randomm(min, max) {
//     min = Math.ceil(2);
//     max = Math.floor(10);
//     return Math.floor(Math.random() * (max - min)) + min;
// };


//check
console.log(mon);

//buttons
food.addEventListener("click", () => {
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

//tried once more...

// var plusplus = [50, 30];
// var randomplus = Math.random() * plusplus.length;
// var plus = Math.floor(randomplus);


treat.addEventListener("click", () => {
    status++;
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




function restarter() {
    restart.addEventListener('click', () => {
        meter.innerHTML = normal;
    })
}
//play button

var t;

function aftellen() {
    status--;
    meter.innerHTML = status;
    stoppen();
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
}
//game functie
function verdertellen() {
    t = setInterval(aftellen, 0550);
    status = 90;
    meter.innerHTML = status;
    h2.innerText = "Pres restart to restart game";
    textbar.innerHTML = "Mijn naam is Max Verstappen";

    mon.className = "monsters";
    play.innerHTML = 'restart';
    if (status == 39) {
        mon.className = "monsterl";
    }
    if (status == 74) {
        mon.className = "monsterb";
    }
    if (status == 0) {
        mon.className = "monsterd";
    }
    if (status == 89) {
        mon.className = "monsters";
    }
}
//stop en game over functie
function stoppen() {
    console.log("running");
    if (status < 1) {
        clearInterval(t);

        if (status == 40) {
            mon.className = "monsterl";
        }
        if (status == 75) {
            mon.className = "monsterb";
        }
        if (status == 0) {
            textbar.innerHTML = "Game over";
            mon.className = "monsterd";
        }
        if (status == 90) {
            mon.className = "monsters";
        }
    }
}


play.addEventListener('click',
    verdertellen
)


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
