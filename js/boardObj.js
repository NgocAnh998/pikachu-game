const pokemonDefinitions = {
  pikachu: {
    type: "pokemon",
    id: 1,
    name: "Pikachu",
    image: "type1.png",
    element: "electric",
  },
  charmander: {
    type: "pokemon",
    id: 2,
    name: "Charmander",
    image: "type2.png",
    element: "fire",
  },
  squirtle: {
    type: "pokemon",
    id: 3,
    name: "Squirtle",
    image: "type3.png",
    element: "water",
  },
  bulbasaur: {
    type: "pokemon",
    id: 4,
    name: "Bulbasaur",
    image: "type4.png",
    element: "grass",
  },
  eevee: {
    type: "pokemon",
    id: 5,
    name: "Eevee",
    image: "type5.png",
    element: "normal",
  },
  jigglypuff: {
    type: "pokemon",
    id: 6,
    name: "Jigglypuff",
    image: "type6.png",
    element: "fairy",
  },
  meowth: {
    type: "pokemon",
    id: 7,
    name: "Meowth",
    image: "type7.png",
    element: "normal",
  },
  psyduck: {
    type: "pokemon",
    id: 8,
    name: "Psyduck",
    image: "type8.png",
    element: "water",
  },
  snorlax: {
    type: "pokemon",
    id: 9,
    name: "Snorlax",
    image: "type9.png",
    element: "normal",
  },
  gengar: {
    type: "pokemon",
    id: 10,
    name: "Gengar",
    image: "type10.png",
    element: "ghost",
  },
  mewtwo: {
    type: "pokemon",
    id: 11,
    name: "Mewtwo",
    image: "type11.png",
    element: "psychic",
  },
  gyarados: {
    type: "pokemon",
    id: 12,
    name: "Gyarados",
    image: "type12.png",
    element: "water",
  },
  dragonite: {
    type: "pokemon",
    id: 13,
    name: "Dragonite",
    image: "type13.png",
    element: "dragon",
  },
  lucario: {
    type: "pokemon",
    id: 14,
    name: "Lucario",
    image: "type14.png",
    element: "fighting",
  },
  gardevoir: {
    type: "pokemon",
    id: 15,
    name: "Gardevoir",
    image: "type15.png",
    element: "psychic",
  },
  charizard: {
    type: "pokemon",
    id: 16,
    name: "Charizard",
    image: "type16.png",
    element: "fire",
  },
  blastoise: {
    type: "pokemon",
    id: 17,
    name: "Blastoise",
    image: "type17.png",
    element: "water",
  },
  venusaur: {
    type: "pokemon",
    id: 18,
    name: "Venusaur",
    image: "type18.png",
    element: "grass",
  },
  machamp: {
    type: "pokemon",
    id: 19,
    name: "Machamp",
    image: "type19.png",
    element: "fighting",
  },
  alakazam: {
    type: "pokemon",
    id: 20,
    name: "Alakazam",
    image: "type20.png",
    element: "psychic",
  },
  haunter: {
    type: "pokemon",
    id: 21,
    name: "Haunter",
    image: "type21.png",
    element: "ghost",
  },
  onix: {
    type: "pokemon",
    id: 22,
    name: "Onix",
    image: "type22.png",
    element: "rock",
  },
  lapras: {
    type: "pokemon",
    id: 23,
    name: "Lapras",
    image: "type23.png",
    element: "water",
  },
  vaporeon: {
    type: "pokemon",
    id: 24,
    name: "Vaporeon",
    image: "type24.png",
    element: "water",
  },
  jolteon: {
    type: "pokemon",
    id: 25,
    name: "Jolteon",
    image: "type25.png",
    element: "electric",
  },
  flareon: {
    type: "pokemon",
    id: 26,
    name: "Flareon",
    image: "type26.png",
    element: "fire",
  },
  espeon: {
    type: "pokemon",
    id: 27,
    name: "Espeon",
    image: "type27.png",
    element: "psychic",
  },
  umbreon: {
    type: "pokemon",
    id: 28,
    name: "Umbreon",
    image: "type28.png",
    element: "dark",
  },
  tyranitar: {
    type: "pokemon",
    id: 29,
    name: "Tyranitar",
    image: "type29.png",
    element: "rock",
  },
  salamence: {
    type: "pokemon",
    id: 30,
    name: "Salamence",
    image: "type30.png",
    element: "dragon",
  },
  metagross: {
    type: "pokemon",
    id: 31,
    name: "Metagross",
    image: "type31.png",
    element: "steel",
  },
  rayquaza: {
    type: "pokemon",
    id: 32,
    name: "Rayquaza",
    image: "type32.png",
    element: "dragon",
  },
  garchomp: {
    type: "pokemon",
    id: 33,
    name: "Garchomp",
    image: "type33.png",
    element: "dragon",
  },
  greninja: {
    type: "pokemon",
    id: 34,
    name: "Greninja",
    image: "type34.png",
    element: "water",
  },
  sylveon: {
    type: "pokemon",
    id: 35,
    name: "Sylveon",
    image: "type35.png",
    element: "fairy",
  },
  mimikyu: {
    type: "pokemon",
    id: 36,
    name: "Mimikyu",
    image: "type36.png",
    element: "ghost",
  },
};

// const pokemonTile = {
//   type: "pokemon",
//   id: "pikachu",
// };
// console.log(pokemonDefinitions);
// const tiles = {};
// for (let i = 1; i <= pokemonDefinitions.length; i++) {
//   tiles.push({ type: "pokemon", id: i });
// }
// console.log(tiles);

const emptyTile = null;

export class Board {
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

    const totalPairs = walls
      ? (this.cols * this.rows - walls.length) / 2
      : (this.cols * this.rows) / 2;
    for (let i = 0; i < totalPairs; i++) {
      // Bắt đầu từ 1 là vì các pokemon được đánh số từ 1 đến 36, số 0 dùng làm giá trị event
      let iconId = (i % this.iconsCount) + 1;

      tilesOD.push(
        { type: "pokemon", id: iconId, state: "unlock" },
        { type: "pokemon", id: iconId, state: "unlock" },
      );
    }

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

    console.log(this.matrix);
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

    console.log("unlockKeyTiles:", unlockKeyTiles);

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
}
