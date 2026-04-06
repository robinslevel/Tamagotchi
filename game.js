// Tamagotchi Game State
const state = {
    hunger: 100,
    happiness: 100,
    energy: 100,
    isAlive: true,
    isSleeping: false,
    age: 0
};

// Pet evolution stages
const petStages = [
    { emoji: '🥚', name: 'Egg', ageRequired: 0 },
    { emoji: '🐣', name: 'Baby', ageRequired: 10 },
    { emoji: '🐥', name: 'Child', ageRequired: 30 },
    { emoji: '🐤', name: 'Teen', ageRequired: 60 },
    { emoji: '🐔', name: 'Adult', ageRequired: 100 }
];

// DOM Elements
const petEl = document.getElementById('pet');
const petNameEl = document.getElementById('petName');
const hungerBar = document.getElementById('hungerBar');
const happinessBar = document.getElementById('happinessBar');
const energyBar = document.getElementById('energyBar');
const hungerValue = document.getElementById('hungerValue');
const happinessValue = document.getElementById('happinessValue');
const energyValue = document.getElementById('energyValue');
const messageEl = document.getElementById('message');
const gameOverEl = document.getElementById('gameOver');
const feedBtn = document.getElementById('feedBtn');
const playBtn = document.getElementById('playBtn');
const sleepBtn = document.getElementById('sleepBtn');

// Update UI
function updateUI() {
    // Update progress bars
    hungerBar.style.width = state.hunger + '%';
    happinessBar.style.width = state.happiness + '%';
    energyBar.style.width = state.energy + '%';
    
    // Update values
    hungerValue.textContent = Math.round(state.hunger);
    happinessValue.textContent = Math.round(state.happiness);
    energyValue.textContent = Math.round(state.energy);
    
    // Update progress bar colors based on value
    updateBarColor(hungerBar, state.hunger);
    updateBarColor(happinessBar, state.happiness);
    updateBarColor(energyBar, state.energy);
    
    // Update pet appearance
    updatePetAppearance();
    
    // Update buttons
    feedBtn.disabled = state.isSleeping;
    playBtn.disabled = state.isSleeping;
}

function updateBarColor(bar, value) {
    if (value > 60) {
        bar.style.background = 'linear-gradient(90deg, #4CAF50, #8BC34A)';
    } else if (value > 30) {
        bar.style.background = 'linear-gradient(90deg, #FFC107, #FF9800)';
    } else {
        bar.style.background = 'linear-gradient(90deg, #f44336, #E91E63)';
    }
}

function updatePetAppearance() {
    // Find current stage based on age
    let currentStage = petStages[0];
    for (let stage of petStages) {
        if (state.age >= stage.ageRequired) {
            currentStage = stage;
        }
    }
    
    petEl.textContent = currentStage.emoji;
    petNameEl.textContent = currentStage.name;
    
    // Update pet class based on state
    petEl.classList.remove('happy', 'sad', 'sleeping');
    
    if (state.isSleeping) {
        petEl.classList.add('sleeping');
    } else if (state.happiness < 30 || state.hunger < 30) {
        petEl.classList.add('sad');
    }
}

// Actions
function feed() {
    if (state.isSleeping || !state.isAlive) return;
    
    state.hunger = Math.min(100, state.hunger + 20);
    state.energy = Math.max(0, state.energy - 5);
    
    showMessage("Yummy! 🍕");
    petEl.classList.add('happy');
    setTimeout(() => petEl.classList.remove('happy'), 500);
    
    updateUI();
}

function play() {
    if (state.isSleeping || !state.isAlive) return;
    
    if (state.energy < 10) {
        showMessage("Too tired to play! 😴");
        return;
    }
    
    state.happiness = Math.min(100, state.happiness + 25);
    state.energy = Math.max(0, state.energy - 15);
    state.hunger = Math.max(0, state.hunger - 10);
    
    showMessage("Wheee! 🎉");
    petEl.classList.add('happy');
    setTimeout(() => petEl.classList.remove('happy'), 500);
    
    updateUI();
}

function sleep() {
    if (!state.isAlive) return;
    
    if (state.isSleeping) {
        // Wake up
        state.isSleeping = false;
        sleepBtn.textContent = '😴 Sleep';
        showMessage("Good morning! ☀️");
    } else {
        // Go to sleep
        state.isSleeping = true;
        sleepBtn.textContent = '☀️ Wake Up';
        showMessage("Zzz... 💤");
    }
    
    updateUI();
}

function showMessage(text) {
    messageEl.textContent = text;
    setTimeout(() => {
        if (messageEl.textContent === text) {
            messageEl.textContent = '';
        }
    }, 2000);
}

// Game loop - runs every second
function gameLoop() {
    if (!state.isAlive) return;
    
    // Age increases
    state.age += 0.1;
    
    if (state.isSleeping) {
        // Sleeping: energy recovers, other stats decrease slowly
        state.energy = Math.min(100, state.energy + 3);
        state.hunger = Math.max(0, state.hunger - 0.5);
        state.happiness = Math.max(0, state.happiness - 0.3);
    } else {
        // Awake: all stats decrease
        state.hunger = Math.max(0, state.hunger - 1);
        state.happiness = Math.max(0, state.happiness - 0.8);
        state.energy = Math.max(0, state.energy - 0.5);
    }
    
    // Check if pet died
    if (state.hunger <= 0 || state.happiness <= 0 || state.energy <= 0) {
        gameOver();
        return;
    }
    
    // Random events
    if (Math.random() < 0.02 && !state.isSleeping) {
        const events = [
            { message: "Your pet found a snack! 🍬", effect: () => state.hunger = Math.min(100, state.hunger + 5) },
            { message: "Your pet did a little dance! 💃", effect: () => state.happiness = Math.min(100, state.happiness + 5) },
            { message: "Your pet took a quick nap! 😊", effect: () => state.energy = Math.min(100, state.energy + 5) }
        ];
        const event = events[Math.floor(Math.random() * events.length)];
        event.effect();
        showMessage(event.message);
    }
    
    updateUI();
}

function gameOver() {
    state.isAlive = false;
    gameOverEl.classList.add('show');
    petEl.textContent = '👻';
}

function resetGame() {
    state.hunger = 100;
    state.happiness = 100;
    state.energy = 100;
    state.isAlive = true;
    state.isSleeping = false;
    state.age = 0;
    
    sleepBtn.textContent = '😴 Sleep';
    gameOverEl.classList.remove('show');
    showMessage("Welcome back! 🎉");
    updateUI();
}

// Initialize
updateUI();
setInterval(gameLoop, 1000);
