let num_combatants = 0;
let combatants = [];

function startPage() {
    combatants = JSON.parse(window.localStorage.getItem('combatants'));
    num_combatants = window.localStorage.getItem('num_combatants');
    console.log(num_combatants);
    console.log(combatants);
    for (let i = 0; i < num_combatants; ++i) {
        console.log(combatants[i]);
    }
}