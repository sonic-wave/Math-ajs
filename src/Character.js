export default class Character {
  constructor(name, type, health = 100, level = 1) {
    const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (name.length < 2 || name.length > 10 || typeof name !== 'string') {
      throw new Error('Имя должно быть строкой и от 2-х до 10-ти символов в длину');
    }
    if (!types.includes(type)) {
      throw new Error(`Тип должен быть равен одному из следующих типов: ${types.join(', ')}`);
    }
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = undefined;
    this.defence = undefined;
  }
}
