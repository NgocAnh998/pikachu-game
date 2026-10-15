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
}
