import { Board } from "./boardObj.js";
import { GameState } from "./gameStateObj.js";
import { Renderer } from "./rendererUi.js";
import { LevelManager } from "./levelManagerObj.js";
import { handleTileClick } from "./inputCtrl.js";
import { help } from "./logicBaseCtrl.js";
import { checkWin } from "./logicLevelCtrl.js";
import { getLocationMatrix } from "./logicBaseCtrl.js";
import { openLockedTiles } from "./logicBaseCtrl.js";
// import { initElementForLevel4 } from "./logicLevelCtrl.js";
// import { kiemTraKetLoiLv4 } from "./logicBaseCtrl.js";
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

  const score = document.querySelector("#score");
  const savedData = localStorage.getItem("playerData");

  // console.log(savedData);
  const playerData = JSON.parse(savedData);
  // console.log(playerData);
  // console.log(typeof playerData.currentLevel);
  // console.log(playerData.currentLevel);

  const levelManager = new LevelManager();
  const currentLevel =
    savedData !== null
      ? levelManager.getLevelIndex(playerData.currentLevel)
      : levelManager.getCurrentLevel();

  // Khởi Tạo trang thái game
  const gameState = new GameState();
  gameState.updateRemainingTiles(currentLevel.cols * currentLevel.rows);
  gameState.updateSpecNum(currentLevel.specNum);
  gameState.updateLevel(currentLevel);
  gameState.initElementCount(currentLevel);
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
    renderer.updateElementCount(gameState);

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
