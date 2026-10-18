// js/game-state.js
const elemntTypes = ["fire", "water", "plant", "earth"];

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
    //level 5
    this.queueSkills = [];
    this.limitSkillCount = 3;
    this.queueRefresh = 0;
    this.queueRecovery = 0;
    this.boss = null;
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
  updateBoss(boss) {
    this.boss = boss;
  }
  initElementCount(level) {
    const elementTypes = level.elemntTypes || [];
    for (let i = 0; i < elementTypes.length; i++) {
      this.hasElement.push({ element: elementTypes[i], count: 0 });
    }
    this.hasElement.push({ element: "normal", count: 0 });
    this.hasBall = level.ballCount || 0;
    // console.log(this.hasElement);
  }
  getElementCount(elementType) {
    for (let i = 0; i < this.hasElement.length; i++) {
      if (this.hasElement[i].element === elementType) {
        // console.log(
        //   "Gia tri cua " + elementType + ": " + this.hasElement[i].count,
        // );
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
  initSkill(level) {
    const elementTypes = level.elemntTypes || [];
    for (let i = 0; i < elementTypes.length; i++) {
      this.queueSkills.push({ element: elementTypes[i], count: 0 });
    }
    this.queueSkills.push({ element: "normal", count: 0 });
    console.log(this.queueSkills);
    // this.hasBall = level.ballCount || 0;
  }
  getQueueSkills(name) {
    for (let i = 0; i < this.queueSkills.length; i++) {
      if (this.queueSkills[i]?.element === name) {
        return this.queueSkills[i];
      }
    }
  }
  updateQueueSkills(element, count) {
    for (let i = 0; i < this.queueSkills.length; i++) {
      if (this.queueSkills[i].element === element) {
        this.queueSkills[i].count = count;
        return;
      }
    }
  }
  getLevel() {
    return this.level;
  }
  getElementList() {
    return elemntTypes;
  }

  updateBossHp(newHp) {
    this.boss.hp = newHp;
  }
  updateBossShield(newShield) {
    this.boss.shield = newShield;
  }
  updateBossElementShield(newElement) {
    this.boss.elementShield = newElement;
  }
  updateBossShieldReduction(newReduction) {
    this.boss.shieldReduction = newReduction;
  }
  bossAttack(board, level) {
    if (level.attackTiles && level.attackTiles.length > 0) {
      // Laay het  danh con lai
      let remainingTiles = [];
      for (let r = 1; r <= level.rows; r++) {
        for (let c = 1; c <= level.cols; c++) {
          const tile = board.matrix[r][c];
          if (tile?.type === "pokemon") {
            tile.state = "unlock";
            remainingTiles.push(tile);
          }
        }
      }
      // Theem thuoc tinh lock cho cac tiles
      //  Gan tro lai ban co cu
      // Điền lại mảng ở các chưa chọn cặp
      let index = 0;
      const lockedTiles = level.attackTiles || [];
      for (let r = 1; r <= level.rows; r++) {
        for (let c = 1; c <= level.cols; c++) {
          const tile = board.matrix[r][c];
          if (tile?.type === "pokemon") {
            // Dùng gameState để lấy ra danh sách đã unlock
            let unlock = board.oNayDaMoChua(r, c, this.unlockTiles);

            //
            let locked = board.checkLockedTaiViTriChiDinh(r, c, lockedTiles);
            if (locked) {
              if (!unlock) {
                remainingTiles[index].state = "locked";
              }
            }
            board.matrix[r][c] = remainingTiles[index];
            index++;
          }
        }
      }
    }
  }
}
