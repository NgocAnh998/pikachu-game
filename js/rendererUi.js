// js/renderer.js

export class Renderer {
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
