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

// export function kiemTraKetLoi(tile1, tile2, board) {
//   const p1 = { row: tile1.dataset.row, col: tile1.dataset.col };
//   const p2 = { row: tile2.dataset.row, col: tile2.dataset.col };

//   const tileA = board.matrix[p1.row][p1.col];
//   const tileB = board.matrix[p2.row][p2.col];

//   const isMatched = checkPathBFS(
//     p1,
//     p2,
//     board.matrix,
//     board.realRows,
//     board.realCols,
//   );
//   // console.log(isMatched);
//   if (isMatched) {
//     board.eatenTiles.push(board.matrix[p1.row][p1.col]);
//     board.eatenTiles.push(board.matrix[p2.row][p2.col]);

//     // Xóa dữ liệu trong mảng dưa liẹu
//     board.matrix[p1.row][p1.col] = "";
//     board.matrix[p2.row][p2.col] = "";
//     return true;
//   }

//   return false;
// }
export function kiemTraKetLoi(tile1, tile2, board, gameState) {
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

export function checkConditionLv4(element, gameState) {
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
export function checkConditionLv5(element, gameState) {
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

export function attackBoss(board, element, gameState) {
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
