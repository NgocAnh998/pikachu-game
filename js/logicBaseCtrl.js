const directions = [
  [-1, 0], // 0: Lên
  [1, 0], // 1: Xuống
  [0, -1], // 2: Trái
  [0, 1], // 3: Phải
];

export function checkPathBFS(p1, p2, board, realRows, realCols) {
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

export function kiemTraKetLoi(tile1, tile2, board) {
  const p1 = { row: tile1.dataset.row, col: tile1.dataset.col };
  const p2 = { row: tile2.dataset.row, col: tile2.dataset.col };

  const isMatched = checkPathBFS(
    p1,
    p2,
    board.matrix,
    board.realRows,
    board.realCols,
  );
  console.log(isMatched);
  if (isMatched) {
    board.eatenTiles.push(board.matrix[p1.row][p1.col]);
    board.eatenTiles.push(board.matrix[p2.row][p2.col]);

    // Xóa dữ liệu trong mảng dưa liẹu
    board.matrix[p1.row][p1.col] = "";
    board.matrix[p2.row][p2.col] = "";
    return true;
  }

  return false;
}

export function help(board) {
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
export function getLocationMatrix(board, num) {
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

export function openLockedTiles(board, gameState, level) {
  let unlockKeyTiles = board.unlockKeyTiles();
  let unlockResult = [];

  if (unlockKeyTiles.length === 0) {
    return;
  }

  for (let i = 0; i < unlockKeyTiles.length; i++) {
    let isExist = false;

    for (let j = 0; j < gameState.unlockKeyTiles.length; j++) {
      if (unlockKeyTiles[i].id === gameState.unlockKeyTiles[j].id) {
        isExist = true;
        break;
      }
    }

    if (isExist === false) {
      gameState.unlockKeyTiles.push(unlockKeyTiles[i]);

      let unlockQuantity = unlockKeyTiles[i].id;
      let lockLocation = level.lockedTiles || [];
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
