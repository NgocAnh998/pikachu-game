// js/input.js
import { kiemTraKetLoi } from "./logicBaseCtrl.js";
import { openLockedTiles } from "./logicBaseCtrl.js";

export function handleTileClick(tile, r, c, board, gameState, renderer, score) {
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

    const success = kiemTraKetLoi(firstTile, tile, board);
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
