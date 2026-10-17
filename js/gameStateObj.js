// js/game-state.js
export class GameState {
  constructor() {
    this.selectedTile = null; //  element, row, col
    this.score = 0;
    this.score1Pair = 100;
    this.iconsCount = 12;
    this.remainingTiles = 0;
    this.specNum = null;
    this.specialTilesForConditionWin = null;
    this.unlockKeyTiles = [];
    this.unlockTiles = [];
    this.level = null;
    this.hasElement = [];
    this.hasBall = 0;
  }

  resetSelection() {
    if (this.selectedTile && this.selectedTile.element) {
      this.selectedTile.element.classList.remove("selected");
    }
    this.selectedTile = null;
  }
  addScore() {
    this.score += this.score1Pair;
  }
  updateRemainingTiles(newTiles) {
    this.remainingTiles = newTiles;
  }
  updateSpecialTilesForConditionWin(newTiles) {
    this.specialTilesForConditionWin = newTiles;
  }
  updateSpecNum(newNum) {
    this.specNum = newNum;
  }
  updateLevel(level) {
    this.level = level;
  }
  initElementCount(level) {
    const elementTypes = level.elemntTypes || [];
    for (let i = 0; i < elementTypes.length; i++) {
      this.hasElement.push({ element: elementTypes[i], count: 0 });
    }
    this.hasBall = level.ballCount || 0;
    // console.log(this.hasElement);
  }
  getElementCount(elementType) {
    for (let i = 0; i < this.hasElement.length; i++) {
      if (this.hasElement[i].element === elementType) {
        console.log(
          "Gia tri cua " + elementType + ": " + this.hasElement[i].count,
        );
        return this.hasElement[i].count;
      }
    }
    return 0;
  }
  updateElementCount(elementType, count) {
    for (let i = 0; i < this.hasElement.length; i++) {
      if (this.hasElement[i].element === elementType) {
        this.hasElement[i].count = count;
        return;
      }
    }
  }
  getAllElementCounts() {
    return this.hasElement.map((el) => ({
      element: el.element,
      count: el.count,
    }));
  }
}
