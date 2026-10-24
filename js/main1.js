const elemntTypes = ["fire", "water", "plant", "earth"];
const directions = [
  [-1, 0], // 0: Lên
  [1, 0], // 1: Xuống
  [0, -1], // 2: Trái
  [0, 1], // 3: Phải
];
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

document.addEventListener("DOMContentLoaded", () => {
  const boardDOM = document.querySelector("#game-board");
  const refreshBtn = document.querySelector("#btn-refresh");
  const helpBtn = document.querySelector("#btn-help");
  const level1 = document.querySelector("#level1");
  const level2 = document.querySelector("#level2");
  const level3 = document.querySelector("#level3");
  const level4 = document.querySelector("#level4");
  const level5 = document.querySelector("#level5");
  const level6 = document.querySelector("#level6");
  let normalSkill = null;
  let fireSkill = null;
  let waterSkill = null;
  let plantSkill = null;
  let earthSkill = null;

  const score = document.querySelector("#score");
  const savedData = localStorage.getItem("playerData");

  // console.log(savedData);
  // const playerData = JSON.parse(savedData);
  // console.log(playerData);
  // console.log(typeof playerData.currentLevel);
  // console.log(playerData.currentLevel);

  const levelManager = new LevelManager();
  const currentLevel =
    savedData !== null
      ? levelManager.getLevelIndex(playerData.currentLevel)
      : levelManager.getCurrentLevel();

  // const data = { currentLevel: 1 };
  // localStorage.setItem("playerData", JSON.stringify(data));
  // Khởi Tạo trang thái game
  const gameState = new GameState();
  gameState.updateRemainingTiles(currentLevel.cols * currentLevel.rows);
  gameState.updateSpecNum(currentLevel.specNum);
  gameState.updateLevel(currentLevel);
  if (currentLevel.id === 4) {
    gameState.initElementCount(currentLevel);
  }
  if (currentLevel.id === 5) {
    // const boss = new Boss();
    // boss.initBoss(currentLevel.boss);
    gameState.initSkill(currentLevel);
    gameState.updateBoss(currentLevel.boss);
    normalSkill = document.querySelector("#normal");
    fireSkill = document.querySelector("#fire");
    waterSkill = document.querySelector("#water");
    plantSkill = document.querySelector("#plant");
    earthSkill = document.querySelector("#earth");
  }
  // console.log(gameState);

  // Khởi tạo bàn cờ
  const board = new Board(
    currentLevel.rows,
    currentLevel.cols,
    gameState.iconsCount,
    currentLevel,
  );
  const renderer = new Renderer(boardDOM);
  board.init();
  //level 4 khởi tạo những element pokemon đặc biệt
  if (currentLevel.id === 4 || currentLevel.id === 5) {
    // board.initElementForLevel4(currentLevel);
    renderer.updateElementCount(gameState);
  }
  if (currentLevel.id === 5) {
    renderer.updateBossInfo(gameState);
  }
  console.log(board.matrix);
  boardDOM.style.gridTemplateColumns = `repeat(${currentLevel.cols},40px)`;
  // console.log(board.matrix);
  renderer.renderBoard(board, (tile, r, c) => {
    handleTileClick(tile, r, c, board, gameState, renderer, score);

    //khởi tạo điều kiện qua màn kiểm tra ngay sau mỗi lần click
    // level1 + level 3
    gameState.updateRemainingTiles(board.countRemainingTiles());
    //level2
    gameState.updateSpecialTilesForConditionWin(
      board.countSpecialTileForWin(currentLevel.specNum),
    );

    //level 3
    let unlockResult = openLockedTiles(board, gameState, currentLevel);
    renderer.removeLock(unlockResult);
    //level 4
    // countElementForLevel4(board, currentLevel);
    if (currentLevel.id === 4 || currentLevel.id === 5) {
      renderer.updateElementCount(gameState);
    }

    // Nếu không còn bất cứ nước đi nào thì trộn
    const hintPair = help(board);
    if (hintPair == null) {
      // alert("Không còn nước đi nào! Hãy xáo lại bàn cờ.");
      // board.refreshBoard();
      // renderer.updateBoardValues(board);
      refresh(board, renderer, gameState);
    }
    // console.log(board);
    // console.log(board.countRemainingTiles());
    // console.log(gameState);
    // console.log(currentLevel);
    checkWin(currentLevel, gameState);
  });

  // Render ô đăc biệt
  if (currentLevel.specNum) {
    // console.log(getLocationMatrix(board, gameState.specNum));
    renderer.specialTiles(getLocationMatrix(board, gameState.specNum));
  }
  // render pokemon nguyeen toos
  if (currentLevel.id === 4 || currentLevel.id === 5) {
    renderer.elementTiles(board);
  }

  // console.log(board);
  // Sự kiện bấm nút Xáo bài
  refreshBtn.addEventListener("click", () => {
    // board.refreshBoard();
    // renderer.updateBoardValues(board);
    refresh(board, renderer, gameState);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "r" || event.key === "R") {
      // board.refreshBoard();
      // renderer.updateBoardValues(board);
      refresh(board, renderer, gameState);
    }
  });
  // help
  helpBtn.addEventListener("click" || "", () => {
    const hintPair = help(board);
    if (hintPair) {
      renderer.help(hintPair);
    } else {
      alert("Không còn nước đi nào! Hãy xáo lại bàn cờ.");
      board.refreshBoard();
      renderer.updateBoardValues(board);
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "h" || event.key === "H") {
      const hintPair = help(board);
      if (hintPair) {
        renderer.help(hintPair);
      } else {
        // alert("Không còn nước đi nào! Hãy xáo lại bàn cờ.");
        // board.refreshBoard();
        // renderer.updateBoardValues(board);
      }
    }
  });

  //skill
  if (currentLevel.id === 5) {
    normalSkill.addEventListener("click", () => {
      const dame = attackBoss(board, "normal", gameState);
      updateEventSkill(renderer, gameState);
      renderer.updateLock(board);
    });
    fireSkill.addEventListener("click", () => {
      const dame = attackBoss(board, "fire", gameState);
      updateEventSkill(renderer, gameState);
      renderer.updateLock(board);
    });
    waterSkill.addEventListener("click", () => {
      const dame = attackBoss(board, "water", gameState);
      updateEventSkill(renderer, gameState);
      renderer.updateLock(board);
    });
    plantSkill.addEventListener("click", () => {
      const dame = attackBoss(board, "plant", gameState);
      updateEventSkill(renderer, gameState);
      renderer.updateLock(board);
    });
    earthSkill.addEventListener("click", () => {
      const dame = attackBoss(board, "earth", gameState);
      updateEventSkill(renderer, gameState);
      renderer.updateLock(board);
    });
  }
  // levels
  level1.addEventListener("click", () => {
    // thay đổi html
    levelManager.updateCurrentLevelIndex(1);
    const playerData = {
      currentLevel: 1,
    };
    localStorage.setItem("playerData", JSON.stringify(playerData));
    goToOtherLevel("index.html");
    // console.log(currentLevel);
  });

  level2.addEventListener("click", () => {
    levelManager.updateCurrentLevelIndex(2);
    const playerData = {
      currentLevel: 2,
    };
    localStorage.setItem("playerData", JSON.stringify(playerData));
    goToOtherLevel("level2.html");
  });
  level3.addEventListener("click", () => {
    levelManager.updateCurrentLevelIndex(3);
    const playerData = {
      currentLevel: 3,
    };
    localStorage.setItem("playerData", JSON.stringify(playerData));
    goToOtherLevel("level3.html");
  });
  level4.addEventListener("click", () => {
    levelManager.updateCurrentLevelIndex(4);
    const playerData = {
      currentLevel: 4,
    };
    localStorage.setItem("playerData", JSON.stringify(playerData));
    goToOtherLevel("level4.html");
  });
  level5.addEventListener("click", () => {
    levelManager.updateCurrentLevelIndex(5);
    const playerData = {
      currentLevel: 5,
    };
    localStorage.setItem("playerData", JSON.stringify(playerData));
    goToOtherLevel("level5.html");
  });
  level6.addEventListener("click", () => {
    levelManager.updateCurrentLevelIndex(6);
    const playerData = {
      currentLevel: 6,
    };
    localStorage.setItem("playerData", JSON.stringify(playerData));
    goToOtherLevel("level6.html");
    // thay đổi html
    // console.log(currentLevel);
  });
});

function goToOtherLevel(page) {
  window.location.href = page;
}

function refresh(board, renderer, gameState) {
  board.refreshBoard(gameState);
  renderer.updateBoardValues(board);
  renderer.specialTiles(getLocationMatrix(board, gameState.specNum));
  if (gameState.level.id === 4 || gameState.level.id === 5) {
    renderer.elementTiles(board);
  }
}

function updateEventSkill(renderer, gameState) {
  renderer.updateBossInfo(gameState);
  renderer.updateElementCount(gameState);
}

class Board {
  constructor(rows, cols, iconsCount, level) {
    this.rows = rows;
    this.cols = cols;
    this.realRows = rows + 2;
    this.realCols = cols + 2;
    this.iconsCount = iconsCount;
    this.matrix = [];
    this.level = level;
    this.eatenTiles = [];
  }
  init() {
    // Tạo danh sách cặp pokemon
    let tilesOD = [];
    this.matrix = [];
    let tileIndex = 0;
    const walls = this.level.walls || [];
    const lockedTiles = this.level.lockedTiles || [];
    const listEle = this.level.elemntTypes || [];
    let elemntTileCounts = this.level.elemntTileCounts || 0;
    const totalPairs = walls
      ? (this.cols * this.rows - walls.length) / 2
      : (this.cols * this.rows) / 2;
    for (let i = 0; i < totalPairs; i++) {
      // Bắt đầu từ 1 là vì các pokemon được đánh số từ 1 đến 36, số 0 dùng làm giá trị event
      let iconId = (i % this.iconsCount) + 1;

      if (elemntTileCounts > 0) {
        tilesOD.push(
          {
            type: "pokemon",
            id: iconId,
            state: "unlock",
            element: listEle[iconId % listEle.length] || "normal",
          },
          {
            type: "pokemon",
            id: iconId,
            state: "unlock",
            element: listEle[iconId % listEle.length] || "normal",
          },
        );
        elemntTileCounts--;
        elemntTileCounts--;
      } else {
        tilesOD.push(
          {
            type: "pokemon",
            id: iconId,
            state: "unlock",
            element: "normal",
          },
          {
            type: "pokemon",
            id: iconId,
            state: "unlock",
            element: "normal",
          },
        );
      }
    }
    // console.log(pokemonDefinitions);
    // console.log(pokemonDefinitions[0]);
    // console.log(pokemonDefinitions[0]?.element);

    // console.log(tilesOD);

    // Hàm xáo trộn cho mảng 1D
    this.shuffle(tilesOD);

    for (let r = 0; r < this.realRows; r++) {
      let row = [];
      for (let c = 0; c < this.realCols; c++) {
        // các cạnh ngoài gán null
        if (
          r === 0 ||
          r === this.realRows - 1 ||
          c === 0 ||
          c === this.realCols - 1
        ) {
          row.push(null);
        } else {
          let isWall = false;
          // console.log(walls);

          for (let i = 0; i < walls.length; i++) {
            if (r === walls[i].row && c === walls[i].col) {
              isWall = true;
              break;
            }
          }

          let isLocked = this.checkLockedTaiViTriChiDinh(r, c, lockedTiles);

          if (isWall) {
            row.push({ type: "wall" });
          } else {
            // giá trị chỉ được gán bắt đầu từ row = 1 đến max row - 1
            // let idx = (r - 1) * this.cols + (c - 1);
            let tile = tilesOD[tileIndex];
            if (isLocked) {
              tile.state = "locked";
            }
            row.push(tile);
            tileIndex++;
          }
        }
      }
      // console.log("row: " + row);
      this.matrix.push(row);
    }
  }

  // addwalls(walls = []) {}

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // chọn ngẫuc nhiên j từ 0 đén i
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  refreshBoard(gameState) {
    // Lấy danh sách các pair còn lại
    let remainingTiles = [];
    for (let r = 1; r <= this.rows; r++) {
      for (let c = 1; c <= this.cols; c++) {
        const tile = this.matrix[r][c];
        if (tile?.type === "pokemon") {
          tile.state = "unlock";
          remainingTiles.push(tile);
        }
      }
    }

    if (remainingTiles.length === 0) return;

    // Xáo trộn lại arr1D
    this.shuffle(remainingTiles);

    // Điền lại mảng ở các chưa chọn cặp
    let index = 0;
    const lockedTiles = this.level.lockedTiles || [];
    for (let r = 1; r <= this.rows; r++) {
      for (let c = 1; c <= this.cols; c++) {
        const tile = this.matrix[r][c];
        if (tile?.type === "pokemon") {
          // Dùng gameState để lấy ra danh sách đã unlock
          let unlock = this.oNayDaMoChua(r, c, gameState.unlockTiles);

          //
          let locked = this.checkLockedTaiViTriChiDinh(r, c, lockedTiles);
          if (locked) {
            if (!unlock) {
              remainingTiles[index].state = "locked";
            }
          }
          this.matrix[r][c] = remainingTiles[index];
          index++;
        }
      }
    }

    // console.log(this.matrix);
  }
  countRemainingTiles() {
    let count = 0;

    // Lặp qua từng hàng
    for (let r = 1; r <= this.rows; r++) {
      // Lặp qua từng cột
      for (let c = 1; c <= this.cols; c++) {
        // Nếu ô không rỗng (chưa bị ăn)
        if (this.matrix[r][c]?.type === "pokemon") {
          count++;
        }
      }
    }

    return count;
  }

  countSpecialTileForWin(specNum) {
    let count = 0;

    // Lặp qua từng hàng
    for (let r = 1; r <= this.rows; r++) {
      // Lặp qua từng cột
      for (let c = 1; c <= this.cols; c++) {
        // Nếu ô không rỗng
        if (
          this.matrix[r][c].id === specNum &&
          this.matrix[r][c]?.type === "pokemon"
        ) {
          count++;
        }
      }
    }

    return count;
  }

  checkLockedTaiViTriChiDinh(r, c, lockedTiles) {
    let isLock = false;
    for (let i = 0; i < lockedTiles.length; i++) {
      if (r === lockedTiles[i].row && c === lockedTiles[i].col) {
        isLock = true;
        break;
      }
    }
    return isLock;
  }

  // Đếm cái số lượng key đã đạt yêu cầu
  unlockKeyTiles() {
    let keyTiles = this.level.keyTiles || [];
    let eatenTiles = this.eatenTiles;
    let unlockKeyTiles = [];

    for (let i = 0; i < keyTiles.length; i++) {
      let count = 0;

      for (let j = 0; j < eatenTiles.length; j++) {
        if (eatenTiles[j].id === keyTiles[i].id) {
          count++;
        }
      }

      if (count >= keyTiles[i].quantity) {
        unlockKeyTiles.push(keyTiles[i]);
      }
    }

    // console.log("unlockKeyTiles:", unlockKeyTiles);

    return unlockKeyTiles;
  }
  oNayDaMoChua(r, c, unlockTiles) {
    for (let i = 0; i < unlockTiles.length; i++) {
      if (unlockTiles[i].row === r && unlockTiles[i].col === c) {
        return true;
      }
    }
    return false;
  }

  getEatenTiles() {
    return this.eatenTiles;
  }
}

class LevelManager {
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

class GameState {
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

class Renderer {
  constructor(boardElement) {
    this.boardElement = boardElement;
  }

  renderBoard(board, onTileClick) {
    // vẽ bàn cờ + thêm luôn sự kiện
    this.boardElement.innerHTML = "";
    for (let r = 1; r <= board.rows; r++) {
      for (let c = 1; c <= board.cols; c++) {
        const cell = board.matrix[r][c];
        if (cell?.type === "pokemon") {
          const tile = document.createElement("div");
          tile.classList.add("tile");
          if (cell?.state === "locked") {
            tile.classList.add("locked");
          }

          tile.textContent = board.matrix[r][c].id;
          tile.dataset.row = r;
          tile.dataset.col = c;

          tile.addEventListener("click", () => onTileClick(tile, r, c));
          this.boardElement.appendChild(tile);
        } else if (cell?.type === "wall") {
          const tile = document.createElement("div");
          tile.classList.add("wall");
          tile.dataset.row = r;
          tile.dataset.col = c;
          this.boardElement.appendChild(tile);
        }
      }
    }
  }

  updateBoardValues(board) {
    const tiles = this.boardElement.querySelectorAll(".tile");
    for (let i = 0; i < tiles.length; i++) {
      const tile = tiles[i];

      const r = parseInt(tile.dataset.row);
      const c = parseInt(tile.dataset.col);
      tile.textContent = board.matrix[r][c].id;

      // Nếu ô đã bị xóa nhưng chưa gắn class hidden
      if (board.matrix[r][c] === "") {
        tile.classList.add("matched", "hind");
      }

      tile.classList.remove("fire", "water", "plant", "earth");
      tile.classList.remove("special");
      tile.classList.remove("angel");
    }
  }

  markMatched(tile1, tile2) {
    tile1.classList.remove("selected");
    tile2.classList.remove("selected");
    tile1.classList.add("matched", "hind");
    tile2.classList.add("matched", "hind");
  }

  help(pair) {
    if (!pair) return;

    const [p1, p2] = pair;
    const tile1 = this.boardElement.querySelector(
      `.tile[data-row="${p1.row}"][data-col="${p1.col}"]`,
    );
    const tile2 = this.boardElement.querySelector(
      `.tile[data-row="${p2.row}"][data-col="${p2.col}"]`,
    );

    if (tile1 && tile2) {
      // Thêm class 'hint' để làm nổi bật (ví dụ: đổi màu viền, nhấp nháy)
      tile1.classList.add("hint");
      tile2.classList.add("hint");

      // Tự động gỡ hiệu ứng gợi ý sau 2 giây
      setTimeout(() => {
        tile1.classList.remove("hint");
        tile2.classList.remove("hint");
      }, 2000);
    }
  }

  specialTiles(array) {
    if (!array) return;
    // console.log(array);
    for (let i = 0; i < array.length; i++) {
      const tile = this.boardElement.querySelector(
        `.tile[data-row="${array[i].row}"][data-col="${array[i].col}"]`,
      );
      // console.log(tile);
      tile.classList.add("special");
      tile.classList.add("angel");
    }
  }
  removeLock(array) {
    if (!array) return;
    console.log(array);
    for (let i = 0; i < array.length; i++) {
      const tile = this.boardElement.querySelector(
        `.tile[data-row="${array[i].row}"][data-col="${array[i].col}"]`,
      );
      // console.log(tile);
      tile.classList.remove("locked");
      tile.classList.add("unlock");
    }
  }

  updateElementCount(gameState) {
    const ballCount = document.getElementById("ball");
    const normalCount = document.getElementById("normal");
    const fireCount = document.getElementById("fire");
    const waterCount = document.getElementById("water");
    const plantCount = document.getElementById("plant");
    const earthCount = document.getElementById("earth");

    if (gameState.level.id === 4) {
      ballCount.textContent = gameState.hasBall || 0;
      fireCount.textContent = gameState.getElementCount("fire") || 0;
      waterCount.textContent = gameState.getElementCount("water") || 0;
      plantCount.textContent = gameState.getElementCount("plant") || 0;
      earthCount.textContent = gameState.getElementCount("earth") || 0;
    }
    if (gameState.level.id === 5) {
      normalCount.textContent = gameState.getQueueSkills("normal")?.count || 0;
      fireCount.textContent = gameState.getQueueSkills("fire")?.count || 0;
      waterCount.textContent = gameState.getQueueSkills("water")?.count || 0;
      plantCount.textContent = gameState.getQueueSkills("plant")?.count || 0;
      earthCount.textContent = gameState.getQueueSkills("earth")?.count || 0;
    }
  }
  updateBossInfo(gameState) {
    const name = document.getElementById("name");
    const hp = document.getElementById("hp");
    const shield = document.getElementById("shield");
    const elementShield = document.getElementById("elementShield");

    const boss = gameState.boss;
    name.textContent = boss.name;
    hp.textContent = boss.hp;
    shield.textContent = boss.shield;
    elementShield.textContent = boss.elementShield;
  }
  elementTiles(board) {
    // console.log(array);
    for (let i = 1; i <= board.rows; i++) {
      for (let j = 1; j <= board.cols; j++) {
        const tile = this.boardElement.querySelector(
          `.tile[data-row="${i}"][data-col="${j}"]`,
        );
        // console.log(tile);
        tile.classList.add(board.matrix[i][j].element);
      }
    }
  }
  updateLock(board) {
    const tiles = this.boardElement.querySelectorAll(".tile");
    for (let i = 0; i < tiles.length; i++) {
      const tile = tiles[i];

      const r = parseInt(tile.dataset.row);
      const c = parseInt(tile.dataset.col);

      // Nếu ô đã bị xóa nhưng chưa gắn class hidden
      if (board.matrix[r][c]?.state === "locked") {
        tile.classList.add("locked");
      }

      // tile.classList.remove("fire", "water", "plant", "earth");
      // tile.classList.remove("special");
      // tile.classList.remove("angel");
    }
  }
}

function checkPathBFS(p1, p2, board, realRows, realCols) {
  const r1 = parseInt(p1.row),
    c1 = parseInt(p1.col);
  const r2 = parseInt(p2.row),
    c2 = parseInt(p2.col);

  if (board[r1][c1]?.state === "locked" || board[r2][c2]?.state === "locked") {
    // console.log("Ô đang bị khóa");
    return false;
  }
  if (board[r1][c1].id !== board[r2][c2].id) return false;
  if (r1 === r2 && c1 === c2) return false;

  let queue = [];
  let visited = [];

  for (let r = 0; r < realRows; r++) {
    let row = [];
    for (let c = 0; c < realCols; c++) {
      row.push([Infinity, Infinity, Infinity, Infinity]);
    }
    visited.push(row);
  }

  queue.push({ r: r1, c: c1, dir: -1, turns: 0 });

  while (queue.length > 0) {
    const current = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nextR = current.r + directions[i][0];
      const nextC = current.c + directions[i][1];

      // Kiểm tra ranh giới
      if (nextR < 0 || nextR >= realRows || nextC < 0 || nextC >= realCols)
        continue;

      // Tính số lần rẽ
      let newTurns = current.turns;
      if (current.dir !== -1 && current.dir !== i) {
        newTurns++;
      }

      // Vượt quá 2 lần rẽ
      if (newTurns > 2) continue;

      // Đến Đích
      if (nextR === r2 && nextC === c2) {
        return true;
      }

      // Gặp ô có vật cản
      // if (
      //   board[nextR][nextC] === "pokemon" ||
      //   (board[nextR][nextC] === "wall" && board[nextR][nextC] === "locked")
      // )
      //   continue;
      if (board[nextR][nextC] !== null && board[nextR][nextC] !== "") continue;

      // Cập nhật visited và queue
      if (newTurns < visited[nextR][nextC][i]) {
        visited[nextR][nextC][i] = newTurns;
        queue.push({
          r: nextR,
          c: nextC,
          dir: i,
          turns: newTurns,
        });
      }
    }
  }

  return false;
}

function kiemTraKetLoi(tile1, tile2, board, gameState) {
  const p1 = { row: tile1.dataset.row, col: tile1.dataset.col };
  const p2 = { row: tile2.dataset.row, col: tile2.dataset.col };

  const tileA = board.matrix[p1.row][p1.col];
  const tileB = board.matrix[p2.row][p2.col];

  if (gameState.hasBall < 0) {
    return false;
  }
  const element = tileA.element;
  // const elementB = tileB.element;
  const isMatched = checkPathBFS(
    p1,
    p2,
    board.matrix,
    board.realRows,
    board.realCols,
  );
  let removetile = true;
  if (
    tileA?.element === tileB?.element &&
    isMatched &&
    gameState.level.id === 4
  ) {
    removetile = false;
    removetile = checkConditionLv4(element, gameState);
  }
  if (
    tileA?.element === tileB?.element &&
    isMatched &&
    gameState.level.id === 5
  ) {
    removetile = false;
    removetile = checkConditionLv5(element, gameState);
    console.log(gameState.queueSkills);
  } else if (isMatched && gameState.level.id === 5) {
    gameState.updateQueueSkills(
      "normal",
      gameState.getQueueSkills("normal").count + 1,
    );
    removetile = true;
  }
  // console.log(isMatched);
  if (isMatched && removetile) {
    board.eatenTiles.push(board.matrix[p1.row][p1.col]);
    board.eatenTiles.push(board.matrix[p2.row][p2.col]);

    // Xóa dữ liệu trong mảng dưa liẹu
    board.matrix[p1.row][p1.col] = "";
    board.matrix[p2.row][p2.col] = "";
    return true;
  }

  return false;
}

function checkConditionLv4(element, gameState) {
  let removetile = false;
  switch (element) {
    case "fire":
      if (gameState.hasBall > 0) {
        gameState.hasBall--;
        gameState.updateElementCount(
          "fire",
          gameState.getElementCount("fire") + 1,
        );
        console.log("Da cap nhap file" + gameState.hasElement[0].element);
        removetile = true;
      } else if (gameState.getElementCount("water") > 0) {
        gameState.updateElementCount(
          "water",
          gameState.getElementCount("water") - 1,
        );
        gameState.updateElementCount(
          "fire",
          gameState.getElementCount("fire") + 1,
        );
        removetile = true;
      }
      break;
    case "water":
      if (gameState.hasBall > 0) {
        gameState.hasBall--;
        gameState.updateElementCount(
          "water",
          gameState.getElementCount("water") + 1,
        );
        removetile = true;
      } else if (gameState.getElementCount("earth") > 0) {
        gameState.updateElementCount(
          "water",
          gameState.getElementCount("water") + 1,
        );
        gameState.updateElementCount(
          "earth",
          gameState.getElementCount("earth") - 1,
        );
        removetile = true;
      }
      break;
    case "plant":
      if (gameState.hasBall > 0) {
        gameState.hasBall--;
        gameState.updateElementCount(
          "plant",
          gameState.getElementCount("plant") + 1,
        );
        removetile = true;
      } else if (gameState.getElementCount("fire") > 0) {
        gameState.updateElementCount(
          "fire",
          gameState.getElementCount("fire") - 1,
        );
        gameState.updateElementCount(
          "plant",
          gameState.getElementCount("plant") + 1,
        );
        removetile = true;
      }
      break;
    case "earth":
      if (gameState.hasBall > 0) {
        gameState.hasBall--;
        gameState.updateElementCount(
          "earth",
          gameState.getElementCount("earth") + 1,
        );
        removetile = true;
      } else if (gameState.getElementCount("plant") > 0) {
        gameState.updateElementCount(
          "plant",
          gameState.getElementCount("plant") - 1,
        );
        gameState.updateElementCount(
          "earth",
          gameState.getElementCount("earth") + 1,
        );
        removetile = true;
      }
      break;
    case "normal":
      removetile = true;
      break;
    // Thêm các trường hợp khác nếu cần
  }
  return removetile;
}
function checkConditionLv5(element, gameState) {
  let removetile = false;
  switch (element) {
    case "fire":
      gameState.updateQueueSkills(
        "fire",
        gameState.getQueueSkills("fire").count + 1,
      );
      removetile = true;
      break;
    case "water":
      gameState.updateQueueSkills(
        "water",
        gameState.getQueueSkills("water").count + 1,
      );
      removetile = true;
      break;
    case "plant":
      gameState.updateQueueSkills(
        "plant",
        gameState.getQueueSkills("plant").count + 1,
      );
      removetile = true;
      break;
    case "earth":
      gameState.updateQueueSkills(
        "earth",
        gameState.getQueueSkills("earth").count + 1,
      );
      removetile = true;
      break;
    case "normal":
      gameState.updateQueueSkills(
        "normal",
        gameState.getQueueSkills("normal").count + 1,
      );
      removetile = true;
      break;

    // Thêm các trường hợp khác nếu cần
  }
  return removetile;
}
function help(board) {
  let activeTiles = [];
  // Lấy tọa độ các quân chưa được lolois
  for (let r = 1; r <= board.rows; r++) {
    for (let c = 1; c <= board.cols; c++) {
      if (board.matrix[r][c]?.type === "pokemon") {
        activeTiles.push({ row: r, col: c, value: board.matrix[r][c].id });
      }
    }
  }

  for (let i = 0; i < activeTiles.length; i++) {
    for (let j = i + 1; j < activeTiles.length; j++) {
      let tileA = activeTiles[i];
      let tileB = activeTiles[j];

      if (tileA.value === tileB.value) {
        let check = checkPathBFS(
          tileA,
          tileB,
          board.matrix,
          board.realRows,
          board.realCols,
        );
        if (check) {
          return [tileA, tileB];
        }
      }
    }
  }
  return null;
}
function getLocationMatrix(board, num) {
  let specTiles = [];
  // Lấy tọa độ các quân chưa được lolois
  for (let r = 1; r <= board.rows; r++) {
    for (let c = 1; c <= board.cols; c++) {
      const cell = board.matrix[r][c];
      if (cell?.type === "pokemon" && board.matrix[r][c].id === num) {
        specTiles.push({ row: r, col: c, value: board.matrix[r][c] });
      }
    }
  }
  return specTiles;
}

function openLockedTiles(board, gameState, level) {
  let unlockKeyTiles = board.unlockKeyTiles();
  let unlockResult = [];

  if (unlockKeyTiles.length === 0) {
    return;
  }

  for (let i = 0; i < unlockKeyTiles.length; i++) {
    let isExist = false;

    // Kiểm tra có tồn tại không
    for (let j = 0; j < gameState.unlockKeyTiles.length; j++) {
      if (unlockKeyTiles[i].id === gameState.unlockKeyTiles[j].id) {
        isExist = true;
        break;
      }
    }

    if (isExist === false) {
      gameState.unlockKeyTiles.push(unlockKeyTiles[i]);

      let unlockQuantity = unlockKeyTiles[i].id;
      let lockLocation = level.lockedTiles || level.attackTiles || [];
      let from = 9 * (unlockQuantity - 1);
      let to = 9 * unlockQuantity;
      // console.log(from);
      // console.log(to);
      // console.log("lockLocation: " + lockLocation);
      // console.log(lockLocation[0]);
      for (let x = from; x < to && x < lockLocation.length; x++) {
        let r = lockLocation[x].row;
        let c = lockLocation[x].col;
        console.log("r: " + r + " c: " + c);
        if (
          board.matrix[r][c]?.type === "pokemon" &&
          board.matrix[r][c].state === "locked"
        ) {
          gameState.unlockTiles.push({ row: r, col: c });
          board.matrix[r][c].state = "unlock";
          unlockResult.push({ row: r, col: c });
          // console.log(board.matrix[r][c]);
          // console.log(unlockQuantity);
        }
      }
      // for (let r = 1; r <= board.rows; r++) {
      //   for (let c = 1; c <= board.cols; c++) {
      //     if (unlockQuantity === 0) {
      //       break;
      //     }

      //     if (
      //       board.matrix[r][c]?.type === "pokemon" &&
      //       board.matrix[r][c].state === "locked"
      //     ) {
      //       gameState.unlockTiles.push({ row: r, col: c });
      //       board.matrix[r][c].state = "unlock";
      //       console.log(board.matrix[r][c]);
      //       console.log(unlockQuantity);
      //       unlockQuantity--;
      //     }
      //   }

      //   if (unlockQuantity === 0) {
      //     break;
      //   }
      // }
    }
  }
  return unlockResult;
}

function attackBoss(board, element, gameState) {
  //Kiểm tra khiên ? Phá khiên : dame boss;
  let boss = gameState.boss;
  let elementShield = boss.elementShield;
  let elementCount = gameState.getQueueSkills(element).count;
  const limitSkillCount = gameState.limitSkillCount;
  const passLimit = elementCount >= limitSkillCount ? true : false;
  let shieldReduction = boss.shieldReduction;
  let attack = boss.attack;

  if (boss.hp <= 0) {
    alert("Ban da chien thang");
    return;
  }
  if (boss.shield >= 0) {
    // Tan cong khien
    //const elemntTypes = ["fire", "water", "plant", "earth"];
    // 1 > 0, 3 > 1, 2 > 3, 0 > 2

    switch (elementShield) {
      case "fire":
        if (element === "water" && passLimit) {
          // Giam Element Skill Count
          gameState.updateQueueSkills(element, elementCount - 3);
          // Giam Shield
          gameState.updateBossShield(boss.shield - 30);
        }
        break;
      case "water":
        if (element === "earth" && passLimit) {
          // Giam Element Skill Count
          gameState.updateQueueSkills(element, elementCount - 3);
          // Giam Shield
          gameState.updateBossShield(boss.shield - 30);
        }
        break;
      case "plant":
        if (element === "fire" && passLimit) {
          // Giam Element Skill Count
          gameState.updateQueueSkills(element, elementCount - 3);
          // Giam Shield
          gameState.updateBossShield(boss.shield - 30);
        }
        break;
      case "earth":
        if (element === "plant" && passLimit) {
          // Giam Element Skill Count
          gameState.updateQueueSkills(element, elementCount - 3);
          // Giam Shield
          gameState.updateBossShield(boss.shield - 30);
        }
        break;
    }
  } else {
    // tan cong boss
    if (passLimit) {
      // Giam Element Skill Count
      gameState.updateQueueSkills(element, elementCount - 3);
      // Giam Boss Hp
      gameState.updateBossHp(boss.hp - 30);
      if (boss.hp <= 50 && attack === 2) {
        gameState.bossAttack(board, gameState.level);
      }
      if (boss.hp <= 75 && shieldReduction === 2) {
        // Thay đổi khiên của boss
        const elemntTypes = ["fire", "water", "plant", "earth"];
        const newElementShield =
          elemntTypes[Math.floor(Math.random() * elemntTypes.length)];
        gameState.updateBossElementShield(newElementShield);
        // console.log(gameState.level.boss.shield);
        gameState.updateBossShield(150);
        gameState.updateBossShieldReduction(shieldReduction - 1);
        alert("Boss đã thay đổi khiên sang " + newElementShield);
      } else if (boss.hp <= 25 && shieldReduction === 1) {
        // Thay đổi khiên của boss
        const elemntTypes = ["fire", "water", "plant", "earth"];
        const newElementShield =
          elemntTypes[Math.floor(Math.random() * elemntTypes.length)];
        gameState.updateBossElementShield(newElementShield);
        // console.log(gameState.level.boss.shield);
        gameState.updateBossShield(150);
        gameState.updateBossShieldReduction(shieldReduction - 1);
        alert("Boss đã thay đổi khiên sang " + newElementShield);
      }
    }
  }
}

function checkWin(level, gameState) {
  // console.log(level);
  switch (level.id) {
    case 1:
      if (gameState.remainingTiles == 0) {
        alert("Bạn đã win màn 1");
        console.log("Bạn đã win");
      }
      break;
    case 2:
      // console.log(gameState.specialTilesForConditionWin);
      if (gameState.specialTilesForConditionWin == 0) {
        alert("Bạn đã win màn 2");
      }
      break;
    case 3:
      // console.log(gameState.specialTilesForConditionWin);
      if (gameState.remainingTiles == 0) {
        alert("Bạn đã win màn 3");
      }
      break;
    case 4:
      // console.log(gameState.specialTilesForConditionWin);
      if (gameState.remainingTiles == 0) {
        alert("Bạn đã win màn 4");
      }
      break;
    // default:
    //   // Code chạy khi không trùng với case nào ở trên
    //   break;
  }
  //   console.log("Bạn đã win");
}
// function countElementForLevel4(board, level, gameState) {
//   const elementTypes = level.elementTypes;
//   const elementTileCounts = level.elementTileCounts;
//   let eatenTiles = board.getEatenTiles();

//   // const specialTiles = [];
// }

function handleTileClick(tile, r, c, board, gameState, renderer, score) {
  if (board.matrix[r][c]?.type !== "pokemon") return;

  // 1. Click lại ô đang chọn
  if (gameState.selectedTile && gameState.selectedTile.element === tile) {
    gameState.resetSelection();
    return;
  }

  // 2. Click ô thứ 1
  if (!gameState.selectedTile) {
    gameState.selectedTile = { element: tile, r, c };
    tile.classList.add("selected");
  }
  // 3. Click ô thứ 2
  else {
    const firstTile = gameState.selectedTile.element;
    tile.classList.add("selected");
    let success = false;
    // if (gameState.level.id === 4) {
    success = kiemTraKetLoi(firstTile, tile, board, gameState);
    // } else {
    //   success = kiemTraKetLoi(firstTile, tile, board);
    // }
    // console.log(success);
    if (success) {
      renderer.markMatched(firstTile, tile);

      gameState.selectedTile = null;
      // Thêm điểm khi ăn 1 cặp
      gameState.addScore();
      // console.log(gameState.score);
      score.innerHTML = gameState.score;
    } else {
      // Không khớp  Đổi sang chọn ô mới
      firstTile.classList.remove("selected");
      gameState.selectedTile = { element: tile, r, c };
    }
  }
}
