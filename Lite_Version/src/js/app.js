let num_combatants = 0;
let combatants = [];
let turn_counter = 1;
let current_combatant = 0;

function startPage() {
    $('#turn_num').html(`Turn ${turn_counter}`);
    combatants = JSON.parse(window.localStorage.getItem('combatants'));
    num_combatants = window.localStorage.getItem('num_combatants');
    combatants = combatants.sort(function(com1, com2) {
        if (parseInt(com1.init) > parseInt(com2.init)) {
            return -1;
        } else if (parseInt(com1.init) < parseInt(com2.init)) {
            return 1;
        } else {
            return 0;
        }
    });

    for(let i = 0; i < num_combatants; ++i) {
        $("#combat_order").append(`<div id="combat${i}"><p><strong>${combatants[i].name}</strong> &nbsp;&nbsp HP:<span id="hp${i}">${combatants[i].HP}</span><strong>\tInitiative: </strong>${combatants[i].init}</p></div>`);
    }

    $("#combat0").css("color", "rgb(36, 109, 143)");

    $("#current_combatant").html(`<strong>${combatants[0].name}</strong><br/><strong>HP: </strong><input type="number" id="currentHP" value=${combatants[0].HP} /><br/><strong>AC: </strong>${combatants[0].AC}`);
}

function applyDamage() {
    combatants[current_combatant].HP = $("#currentHP").val();
    $(`#hp${current_combatant}`).html($("#currentHP").val());
}

function nextTurn() {
    $(`#combat${current_combatant}`).css("color", "rgb(49, 190, 255)");

    current_combatant++;
    if (current_combatant >= num_combatants) {
        current_combatant = 0;
        turn_counter++;
        $('#turn_num').html(`Turn ${turn_counter}`);
    }

    $(`#combat${current_combatant}`).css("color", "rgb(36, 109, 143)");
    $("#current_combatant").html(`<strong>${combatants[current_combatant].name}</strong><br/><strong>HP: </strong><input type="number" id="currentHP" value=${combatants[current_combatant].HP} /><br/><strong>AC: </strong>${combatants[current_combatant].AC}`);
}

function endFight() {
    if(window.confirm("Would you like to end the fight?")) {
        window.location.replace("./home.html");
    }
}