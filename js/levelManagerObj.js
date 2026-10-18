const elemntTypes = ["fire", "water", "plant", "earth"];
const level1 = {
  id: 1,
  name: "Mầm Non",
  rows: 2,
  cols: 4,
};
const level2 = {
  id: 2,
  name: "Ấu Liên",
  rows: 9,
  cols: 16,
  // specTiles: 2,
  specNum: 10,
  walls: [
    { row: 1, col: 4 },
    { row: 2, col: 4 },
    { row: 3, col: 4 },
    { row: 4, col: 4 },
    { row: 5, col: 4 },

    { row: 3, col: 7 },
    { row: 3, col: 8 },
    { row: 3, col: 9 },
    { row: 3, col: 10 },

    { row: 7, col: 7 },
    { row: 7, col: 8 },
    { row: 7, col: 9 },
    { row: 7, col: 10 },

    { row: 5, col: 13 },
    { row: 6, col: 13 },
    { row: 7, col: 13 },
    { row: 8, col: 13 },
    { row: 9, col: 13 },
  ],
};
const level3 = {
  id: 3,
  name: "Thanh Niên",
  rows: 9,
  cols: 16,
  keyTiles: [
    { id: 1, quantity: 2, unlock: 9 },
    { id: 2, quantity: 2, unlock: 9 },
    { id: 3, quantity: 4, unlock: 9 },
    { id: 4, quantity: 4, unlock: 9 },
    { id: 5, quantity: 2, unlock: 9 },
    { id: 6, quantity: 2, unlock: 9 },
  ],
  lockedTiles: [
    // walls: [
    { row: 1, col: 1 },
    { row: 2, col: 1 },
    { row: 3, col: 1 },
    { row: 1, col: 2 },
    { row: 2, col: 2 },
    { row: 3, col: 2 },
    { row: 1, col: 3 },
    { row: 2, col: 3 },
    { row: 3, col: 3 },

    { row: 1, col: 14 },
    { row: 2, col: 14 },
    { row: 3, col: 14 },
    { row: 1, col: 15 },
    { row: 2, col: 15 },
    { row: 3, col: 15 },
    { row: 1, col: 16 },
    { row: 2, col: 16 },
    { row: 3, col: 16 },

    { row: 4, col: 6 },
    { row: 5, col: 6 },
    { row: 6, col: 6 },
    { row: 4, col: 7 },
    { row: 5, col: 7 },
    { row: 6, col: 7 },
    { row: 4, col: 8 },
    { row: 5, col: 8 },
    { row: 6, col: 8 },
    { row: 4, col: 9 },
    { row: 5, col: 9 },
    { row: 6, col: 9 },
    { row: 4, col: 10 },
    { row: 5, col: 10 },
    { row: 6, col: 10 },
    { row: 4, col: 11 },
    { row: 5, col: 11 },
    { row: 6, col: 11 },

    { row: 7, col: 1 },
    { row: 8, col: 1 },
    { row: 9, col: 1 },
    { row: 7, col: 2 },
    { row: 8, col: 2 },
    { row: 9, col: 2 },
    { row: 7, col: 3 },
    { row: 8, col: 3 },
    { row: 9, col: 3 },

    { row: 7, col: 14 },
    { row: 8, col: 14 },
    { row: 9, col: 14 },
    { row: 7, col: 15 },
    { row: 8, col: 15 },
    { row: 9, col: 15 },
    { row: 7, col: 16 },
    { row: 8, col: 16 },
    { row: 9, col: 16 },
  ],
};

const level4 = {
  id: 4,
  name: "Trưởng Thành",
  rows: 9,
  cols: 16,
  elemntTypes: ["fire", "water", "plant", "earth"],
  elemntTileCounts: 96,
  ballCount: 6,
  // keyTiles: [
  //   { id: 1, quantity: 2, unlock: 9 },
  //   { id: 2, quantity: 2, unlock: 9 },
  //   { id: 3, quantity: 4, unlock: 9 },
  //   { id: 4, quantity: 4, unlock: 9 },
  //   { id: 5, quantity: 2, unlock: 9 },
  //   { id: 6, quantity: 2, unlock: 9 },
  // ],
  // lockedTiles: [
  //   // walls: [
  //   { row: 1, col: 1 },
  //   { row: 2, col: 1 },
  //   { row: 3, col: 1 },
  //   { row: 1, col: 2 },
  //   { row: 2, col: 2 },
  //   { row: 3, col: 2 },
  //   { row: 1, col: 3 },
  //   { row: 2, col: 3 },
  //   { row: 3, col: 3 },

  //   { row: 1, col: 14 },
  //   { row: 2, col: 14 },
  //   { row: 3, col: 14 },
  //   { row: 1, col: 15 },
  //   { row: 2, col: 15 },
  //   { row: 3, col: 15 },
  //   { row: 1, col: 16 },
  //   { row: 2, col: 16 },
  //   { row: 3, col: 16 },

  //   { row: 4, col: 6 },
  //   { row: 5, col: 6 },
  //   { row: 6, col: 6 },
  //   { row: 4, col: 7 },
  //   { row: 5, col: 7 },
  //   { row: 6, col: 7 },
  //   { row: 4, col: 8 },
  //   { row: 5, col: 8 },
  //   { row: 6, col: 8 },
  //   { row: 4, col: 9 },
  //   { row: 5, col: 9 },
  //   { row: 6, col: 9 },
  //   { row: 4, col: 10 },
  //   { row: 5, col: 10 },
  //   { row: 6, col: 10 },
  //   { row: 4, col: 11 },
  //   { row: 5, col: 11 },
  //   { row: 6, col: 11 },

  //   { row: 7, col: 1 },
  //   { row: 8, col: 1 },
  //   { row: 9, col: 1 },
  //   { row: 7, col: 2 },
  //   { row: 8, col: 2 },
  //   { row: 9, col: 2 },
  //   { row: 7, col: 3 },
  //   { row: 8, col: 3 },
  //   { row: 9, col: 3 },

  //   { row: 7, col: 14 },
  //   { row: 8, col: 14 },
  //   { row: 9, col: 14 },
  //   { row: 7, col: 15 },
  //   { row: 8, col: 15 },
  //   { row: 9, col: 15 },
  //   { row: 7, col: 16 },
  //   { row: 8, col: 16 },
  //   { row: 9, col: 16 },
  // ],
};
const level5 = {
  id: 5,
  name: "Trung Niên",
  rows: 12,
  cols: 18,
  elemntTypes: ["fire", "water", "plant", "earth"],
  elemntTileCounts: 144,
  ballCount: 0,
  attackTiles: [
    // walls: [
    { row: 1, col: 1 },
    { row: 2, col: 1 },
    { row: 3, col: 1 },
    { row: 1, col: 2 },
    { row: 2, col: 2 },
    { row: 3, col: 2 },
    { row: 1, col: 3 },
    { row: 2, col: 3 },
    { row: 3, col: 3 },

    { row: 1, col: 14 },
    { row: 2, col: 14 },
    { row: 3, col: 14 },
    { row: 1, col: 15 },
    { row: 2, col: 15 },
    { row: 3, col: 15 },
    { row: 1, col: 16 },
    { row: 2, col: 16 },
    { row: 3, col: 16 },

    { row: 4, col: 6 },
    { row: 5, col: 6 },
    { row: 6, col: 6 },
    { row: 4, col: 7 },
    { row: 5, col: 7 },
    { row: 6, col: 7 },
    { row: 4, col: 8 },
    { row: 5, col: 8 },
    { row: 6, col: 8 },
    { row: 4, col: 9 },
    { row: 5, col: 9 },
    { row: 6, col: 9 },
    { row: 4, col: 10 },
    { row: 5, col: 10 },
    { row: 6, col: 10 },
    { row: 4, col: 11 },
    { row: 5, col: 11 },
    { row: 6, col: 11 },

    { row: 7, col: 1 },
    { row: 8, col: 1 },
    { row: 9, col: 1 },
    { row: 7, col: 2 },
    { row: 8, col: 2 },
    { row: 9, col: 2 },
    { row: 7, col: 3 },
    { row: 8, col: 3 },
    { row: 9, col: 3 },

    { row: 7, col: 14 },
    { row: 8, col: 14 },
    { row: 9, col: 14 },
    { row: 7, col: 15 },
    { row: 8, col: 15 },
    { row: 9, col: 15 },
    { row: 7, col: 16 },
    { row: 8, col: 16 },
    { row: 9, col: 16 },
  ],
  keyTiles: [
    { id: 1, quantity: 2, unlock: 9 },
    { id: 2, quantity: 2, unlock: 9 },
    { id: 3, quantity: 4, unlock: 9 },
    { id: 4, quantity: 4, unlock: 9 },
    { id: 5, quantity: 2, unlock: 9 },
    { id: 6, quantity: 2, unlock: 9 },
  ],

  boss: {
    name: "Goudon",
    hp: 60,
    shield: 20,
    elementShield: elemntTypes[Math.floor(Math.random() * elemntTypes.length)],
    shieldReduction: 2,
    attack: 2,
  },
};
const level6 = {
  id: 6,
  name: "Mầm Non",
  rows: 2,
  cols: 4,
};
// console.log(level2.walls);
// console.log(level2.walls[0].row);
// console.log(level2.walls.length);

export class LevelManager {
  constructor() {
    this.levels = [level1, level2, level3, level4, level5, level6];
    this.currentLevelIndex = 0;
  }
  getCurrentLevel() {
    return this.levels[this.currentLevelIndex];
  }
  updateCurrentLevelIndex(newIndex) {
    // Chỉ cần nhập màn 1 2 3 4 5 6
    this.currentLevelIndex = newIndex - 1;
  }
  getLevelIndex(level) {
    return this.levels[level - 1];
  }
  getElementList() {
    return elemntTypes;
  }
}
