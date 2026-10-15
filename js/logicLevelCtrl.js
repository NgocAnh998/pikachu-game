export function checkWin(level, gameState) {
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
    // default:
    //   // Code chạy khi không trùng với case nào ở trên
    //   break;
  }
  //   console.log("Bạn đã win");
}
