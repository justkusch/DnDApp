let num_combatants = 0;
let combatants = [];

function submitPage() {
    for (let i = 0; i < num_combatants; ++i) {
        let name = $(`#name${i}`).val();
        let HP = $(`#HP${i}`).val();
        let AC = $(`#AC${i}`).val();
        let init = $(`#init${i}`).val();
        combatants.push({name: name, HP: HP, AC: AC, init: init});
    }

    window.localStorage.setItem('num_combatants', num_combatants);
    window.localStorage.setItem('combatants', JSON.stringify(combatants));
    window.location.replace('./app.html');
}

function addCombatants() {
    num_combatants = $("#num_combatants").val();
    $("#combatant_table").append('<table id="combat_table"><tr><th>Name</th><th>HP</th><th>AC</th><th>Initiative</th></tr>');
    for (let i = 0; i < num_combatants; ++i) {
        $("#combatant_table").append(`<tr><td><input id="name${i}"/></td><td><input type="number" id="HP${i}"/></td><td><input type="number" id="AC${i}"/></td><td><input type="number" id="init${i}"</td></tr>`);
    }
    $("#combatant_table").append('</table>');
}