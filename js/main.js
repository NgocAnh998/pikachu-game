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
import { kiemTraKetLoiLv4 } from "./logicBaseCtrl.js";
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
  if (currentLevel.id === 4) {
    // board.initElementForLevel4(currentLevel);
    renderer.updateElementCount(gameState);
  }
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
  if (currentLevel.id === 4) {
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
  if (gameState.level.id === 4) {
    renderer.elementTiles(board);
  }
}

// let ROWS = 8;
// let COLS = 10;

// let REAL_ROWS = ROWS + 2;
// let REAL_COLS = COLS + 2;

// let ICONS = [];
// for (let i = 1; i <= 36; i++) {
//   ICONS.push(i);
// }

// let tiles = [];
// let tilesOD = [];

// for (let i = 0; i < (ROWS * COLS) / 2; i++) {
//   let x = i % ICONS.length;
//   tilesOD.push(ICONS[x]);
//   tilesOD.push(ICONS[x]);
// }

// let selectedTile = null;
// let selectedData = null;

// const directions = [
//   [-1, 0], // 0: Lên
//   [1, 0], // 1: Xuống
//   [0, -1], // 2: Trái
//   [0, 1], // 3: Phải
// ];

// let score = 0;

// function buildBoard() {
//   shuffle(tilesOD);
//   // tiles = convert1Dto2D(tilesOD, ROWS, COLS);
//   tiles = createPaddingBoard(tilesOD, ROWS, COLS);
//   renderBoard(tiles);
// }
// // Gắn sự kiện cho nút Refresh
// document.querySelector("#btn-refresh").addEventListener("click", function () {
//   refreshBoard(tiles);
// });

// buildBoard();

// function refreshBoard(board) {
//   let remainingTiles = [];

//   for (let r = 1; r <= ROWS; r++) {
//     for (let c = 1; c <= COLS; c++) {
//       if (board[r][c] !== "") {
//         remainingTiles.push(board[r][c]);
//       }
//     }
//   }

//   if (remainingTiles.length === 0) return;

//   shuffle(remainingTiles);

//   let index = 0;
//   for (let r = 1; r <= ROWS; r++) {
//     for (let c = 1; c <= COLS; c++) {
//       if (board[r][c] !== "") {
//         board[r][c] = remainingTiles[index];
//         index++;
//       }
//     }
//   }

//   const tilesDOM = document.querySelectorAll("#game-board .tile");
//   tilesDOM.forEach((tile) => {
//     const r = parseInt(tile.dataset.row);
//     const c = parseInt(tile.dataset.col);

//     tile.textContent = board[r][c];
//   });

//   console.log("Đã xáo lại bàn cờ!");
// }

// function createPaddingBoard(arr1D, rows, cols) {
//   let board = [];
//   for (let r = 0; r < REAL_ROWS; r++) {
//     let row = [];
//     for (let c = 0; c < REAL_COLS; c++) {
//       if (r === 0 || r === REAL_ROWS - 1 || c === 0 || c === REAL_COLS - 1) {
//         row.push("");
//       } else {
//         let index = (r - 1) * cols + (c - 1);
//         row.push(arr1D[index]);
//       }
//     }
//     board.push(row);
//     console.log(row);
//   }
//   return board;
// }

// function checkPathBFS(p1, p2, board, ROWS, COLS) {
//   const r1 = parseInt(p1.row),
//     c1 = parseInt(p1.col);
//   const r2 = parseInt(p2.row),
//     c2 = parseInt(p2.col);

//   if (board[r1][c1] !== board[r2][c2]) return false;
//   if (r1 === r2 && c1 === c2) return false;

//   let queue = [];
//   let visited = [];

//   for (let r = 0; r < REAL_ROWS; r++) {
//     let row = [];
//     for (let c = 0; c < REAL_COLS; c++) {
//       row.push([Infinity, Infinity, Infinity, Infinity]);
//     }
//     visited.push(row);
//   }

//   queue.push({ r: r1, c: c1, dir: -1, turns: 0 });

//   while (queue.length > 0) {
//     const current = queue.shift();

//     for (let i = 0; i < 4; i++) {
//       const nextR = current.r + directions[i][0];
//       const nextC = current.c + directions[i][1];

//       // 1. Kiểm tra ranh giới
//       if (nextR < 0 || nextR >= REAL_ROWS || nextC < 0 || nextC >= REAL_COLS)
//         continue;

//       // 2. Tính số lần rẽ
//       let newTurns = current.turns;
//       if (current.dir !== -1 && current.dir !== i) {
//         newTurns++;
//       }

//       // 3. Vượt quá 2 lần rẽ (tối đa 3 đoạn thẳng) -> Bỏ qua
//       if (newTurns > 2) continue;

//       // 4. Đến ĐÍCH -> Thành công
//       if (nextR === r2 && nextC === c2) {
//         return true;
//       }

//       // 5. Gặp ô có vật cản -> Bỏ qua
//       if (board[nextR][nextC] !== "") continue;

//       // 6. Cập nhật visited và queue
//       if (newTurns < visited[nextR][nextC][i]) {
//         visited[nextR][nextC][i] = newTurns;
//         queue.push({
//           r: nextR,
//           c: nextC,
//           dir: i,
//           turns: newTurns,
//         });
//       }
//     }
//   }

//   return false;
// }

// function renderBoard(board) {
//   const gameBoard = document.querySelector("#game-board");
//   gameBoard.innerHTML = "";

//   for (let row = 1; row <= ROWS; row++) {
//     for (let col = 1; col <= COLS; col++) {
//       const tile = document.createElement("div");
//       tile.classList.add("tile");
//       tile.textContent = board[row][col];

//       tile.dataset.row = row;
//       tile.dataset.col = col;

//       tile.addEventListener("click", function () {
//         handleTileClick(board, tile, row, col);
//       });

//       gameBoard.appendChild(tile);
//     }
//   }
// }

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// function convert1Dto2D(arr1D, rows, cols) {
//   let array2D = [];
//   for (let i = 0; i < rows; i++) {
//     let start = i * cols;
//     let end = start + cols;
//     array2D.push(arr1D.slice(start, end));
//   }
//   return array2D;
// }

// function handleTileClick(board, tile, r, c) {
//   // Bỏ qua nếu click vào ô đã bị xóa
//   if (board[r][c] === "") return;

//   // 1. Click lại ô đang chọn -> Hủy chọn
//   if (selectedData === tile) {
//     tile.classList.remove("selected");
//     selectedData = null;
//     return;
//   }

//   // 2. LẦN CLICK ĐẦU TIÊN
//   if (selectedData === null) {
//     selectedData = tile;
//     selectedData.classList.add("selected");
//     console.log(
//       "Lần 1 - " + r + ":" + c + "| Dataset : " + selectedData.dataset,
//     );
//   }
//   // 3. LẦN CLICK THỨ HAII
//   else {
//     const checkPath = checkPathBFS(
//       selectedData.dataset,
//       tile.dataset,
//       board,
//       ROWS,
//       COLS,
//     );
//     console.log("Lần 2 - " + r + ":" + c + "| Dataset : " + tile.dataset);

//     if (checkPath) {
//       const r1 = selectedData.dataset.row;
//       const c1 = selectedData.dataset.col;

//       // Khớp thành công: Xóa ô trên bàn cờ
//       board[r1][c1] = "";
//       board[r][c] = "";

//       selectedData.classList.remove("selected");
//       selectedData.classList.add("matched", "hind");
//       tile.classList.add("matched", "hind");

//       selectedData = null;
//     } else {
//       // Không khớp: Bỏ highlight ô cũ, chọn ô mới
//       selectedData.classList.remove("selected");
//       selectedData = tile;
//       selectedData.classList.add("selected");
//       console.log("Không khớp");
//     }
//   }
