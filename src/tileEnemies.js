import enemyData from './enemies/enemyData';

export function getEnemiesForTile(tile) {
  switch (tile) {
    case 0:
      return [[enemyData.fat_rat]];
    case 1:
      return [[enemyData.goblin]];
    case 2:
      return [
        [enemyData.fat_rat, enemyData.fat_rat, enemyData.fat_rat],
        [enemyData.goblin, enemyData.goblinArcher],
      ];
    case 3:
      return [
        [enemyData.smol],
        [enemyData.smol, enemyData.fat_rat],
        [enemyData.smol, enemyData.fat_rat, enemyData.smol],
        [enemyData.goblinClubber],
      ];
    case 4:
      return [
        [enemyData.rockGolem],
      ];
    case 5:
      return [
        [enemyData.smol, enemyData.beetle, enemyData.fast_rat],
        [enemyData.smol, enemyData.smol, enemyData.smol, enemyData.smol, enemyData.smol, enemyData.spider],
      ];
    case 6:
      return [
        [enemyData.fat_rat, enemyData.squirrol, enemyData.goblinArcher],
        [enemyData.goblin, enemyData.venustrap, enemyData.fast_rat],
      ];
              case 6.1:
                return [
                  [enemyData.goblin, enemyData.goblinArcher, enemyData.goblin],
                  [enemyData.goblinBomb, enemyData.goblin, enemyData.goblinArcher],
                ];
              case 6.2:
                return [
                  [enemyData.goblinClubber, enemyData.goblinArcher, enemyData.goblinArcher],
                  [enemyData.goblinBomb, enemyData.goblinArcher, enemyData.goblinCamp],
                ];
    case 7:
      return [
        [enemyData.squirrol, enemyData.fairy, enemyData.beetle],
      ];
              case 7.1:
                return [
                  [enemyData.spikeTrap],
                ];
              case 7.2:
                return [
                  [enemyData.mimicChest],
                ];
    case 8:
      return [
        [enemyData.smol, enemyData.fairy, enemyData.smol, enemyData.fairy, enemyData.spider],
        [enemyData.goblinArcher, enemyData.fairy, enemyData.goblinArcher, enemyData.fairy, enemyData.goblinClubber],
      ];
    case 9:
      return [
        [enemyData.fat_rat, enemyData.orc, enemyData.fast_rat],
      ];
    case 10:
      return [
        [enemyData.goblinCamp, enemyData.goblinShaman, enemyData.goblin, enemyData.goblinArcher, enemyData.goblin],
      ];
    case 11:
      return [
        [enemyData.goblin, enemyData.ogre, enemyData.goblinArcher],
      ];
              case 11.1:
                return [
                  [enemyData.goblin, enemyData.goblinBomb, enemyData.goblinShaman, enemyData.orc, enemyData.goblin, enemyData.goblin],
                ];
              case 11.2:
                return [
                  [enemyData.goblinShaman, enemyData.orcRenegade, enemyData.goblinClubber],
                ];
              case 11.3:
                return [
                  [enemyData.orcRenegade, enemyData.Mokgut, enemyData.orcRenegade],
                ];
    case 12:
      return [
        [enemyData.goblin, enemyData.goblinShaman, enemyData.ogre, enemyData.goblinHexer, enemyData.goblin],
      ];
    case 13:
      return [
        [enemyData.fast_rat, enemyData.squirrol, enemyData.smol, enemyData.smol, enemyData.venustrap, enemyData.smol, enemyData.spider],
        [enemyData.goblinArcher, enemyData.goblinHexer, enemyData.goblinArcher, enemyData.goblinCamp],
      ];
    case 14:
      return [
        [enemyData.fairy, enemyData.smol, enemyData.beetle, enemyData.fairy, enemyData.smol, enemyData.spider],
        [enemyData.spiderWeb, enemyData.smol2, enemyData.spiderWeb2, enemyData.spider, enemyData.smol2],
      ];
              case 14.1:
                return [
                  [enemyData.spiderWeb2, enemyData.spider, enemyData.broodWeaver, enemyData.spider, enemyData.tangler],
                ];
              case 14.2:
                return [
                  [enemyData.rockGolem, enemyData.tangler, enemyData.broodWeaver, enemyData.rockGolem],
                ];
              case 14.3:
                return [
                  [enemyData.left1Arm, enemyData.left2Arm, enemyData.left3Arm, enemyData.left4Arm, enemyData.broodMother, enemyData.right1Arm, enemyData.right2Arm, enemyData.right3Arm, enemyData.right4Arm],
                ];
    case 15:
      return [
        [enemyData.goblinBomb, enemyData.goblinBomb, enemyData.goblin, enemyData.orcRenegade, enemyData.goblinHexer, enemyData.goblin],
      ];
    case 16:
      return [
        [enemyData.goblinShaman, enemyData.goblinShaman, enemyData.goblinShaman, enemyData.goblinHexer, enemyData.ogre, enemyData.goblinHexer],
      ];
    case 17:
      return [
        [enemyData.goblinBomb, enemyData.goblin, enemyData.goblin, enemyData.goblin],
        [enemyData.goblinBomb, enemyData.goblinArcher, enemyData.goblin, enemyData.goblinClubber, enemyData.goblin, enemyData.goblinArcher],
        [enemyData.goblinShaman, enemyData.goblin, enemyData.goblinBomb, enemyData.orc, enemyData.goblinShaman, enemyData.ogre, enemyData.goblinHexer],
      ];
    case 18:
      return [
        [enemyData.goblinShaman, enemyData.goblinKing, enemyData.goblinHexer],
      ];
    default:
      return [[enemyData.fat_rat]];
  }
}
