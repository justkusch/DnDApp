export default class Combatant {
    constructor(name, hp, ac, init) {
        this.name = name;
        this.hp = hp;
        this.max_hp = hp;
        this.ac = ac;
        this.init = init;
    }

    changeHp(hp) {
        if (hp <= this.max_hp) {
            this.hp = hp;
        } else {
            this.hp = this.max_hp;
        }
    }
}