let num_combatants = 0;
let combatants = [];
let turn_counter = 1;
let current_combatant = 0;

function startPage() {
    $('#turn_num').html(`Turn ${turn_counter}`);
    combatants = JSON.parse(window.localStorage.getItem('combatants'));
    num_combatants = window.localStorage.getItem('num_combatants');
    combatants = combatants.sort(function(com1, com2) {
        if (com1.init > com2.init) {
            return -1;
        } else if (com1.init < com2.init) {
            return 1;
        } else {
            return 0;
        }
    });

    for(let i = 0; i < num_combatants; ++i) {
        $("#combat_order").append(`<div id="combat${i}"><p><strong>${combatants[i].name}\tInitiative: </strong>${combatants[i].init}</p></div>`);
    }

    $("#combat0").css("color", "red");

    $("#current_combatant").html(`<strong>${combatants[0].name}</strong><br/><strong>HP: </strong>${combatants[0].HP}<br/><strong>AC: </strong>${combatants[0].AC}`);
}

function nextTurn() {
    $(`#combat${current_combatant}`).css("color", "black");

    current_combatant++;
    if (current_combatant >= num_combatants) {
        current_combatant = 0;
        turn_counter++;
        $('#turn_num').html(`Turn ${turn_counter}`);
    }

    $(`#combat${current_combatant}`).css("color", "red");
    $("#current_combatant").html(`<strong>${combatants[current_combatant].name}</strong><br/><strong>HP: </strong>${combatants[current_combatant].HP}<br/><strong>AC: </strong>${combatants[current_combatant].AC}`);
}

function endFight() {
    if(window.confirm("Would you like to end the fight?")) {
        window.location.replace("./home.html");
    }
}