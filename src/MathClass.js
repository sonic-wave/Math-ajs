import Character from './Character';

export default class MathClass extends Character {
  constructor(name, type, distance) {
    super(name, type);
    this.distance = distance;
  }

  get attack() {
    let attack = (this.setAttack * (11 - this.distance)) / 10;
    if (this.setStoned) {
      attack -= Math.log2(this.distance) * 5;
    }
    return Math.round(attack);
  }

  set attack(damage) {
    this.setAttack = damage;
  }

  get stoned() {
    return this.setStoned;
  }

  set stoned(value) {
    this.setStoned = value;
  }
}
