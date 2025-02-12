// Game state
let currentState = 'start';

// Game story structure
const story = {
    start: {
        question: "Your adventure begins now. Do you want to go left or right?",
        choices: [
            { text: "Go left", nextState: "leftPath" },
            { text: "Go right", nextState: "rightPath" }
        ]
    },
    leftPath: {
        question: "You entered a dark cave. Do you want to pick up a sword or explore further?",
        choices: [
            { text: "Pick up a sword", nextState: "swordPath" },
            { text: "Explore further", nextState: "treasurePath" }
        ]
    },
    rightPath: {
        question: "You are in a swamp. Do you want to swim across or walk through it?",
        choices: [
            { text: "Swim across", nextState: "swimPath" },
            { text: "Walk through", nextState: "walkpath" }
        ]
    },
    swordPath: {
        question: "With the sword in hand, you face an Animal. Do you fight or run?",
        choices: [
            { text: "Fight", nextState: "fight" },
            { text: "Run", nextState: "escapePath" }
        ]
    },
}

function renderQuestion() {
    const current = story[currentState];
    document.getElementById('question').innerText = current.question;
    const answersElement = document.getElementById('answers');
    answersElement.innerHTML = '';
    current.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => {
            currentState = choice.nextState;
            renderQuestion();
        };
        answersElement.appendChild(button);
    });
}

function restartGame() {
    currentState = 'start';
    renderQuestion();
}

renderQuestion();