export function getRewardsForTile(tile) {
  switch (tile) {
    case 0:
      return ['Skull'];
    case 1:
      return ['Hide'];
    case 2:
      return ['Broken Hand Totem'];
    case 3:
      return ['Scroll of Switchroo'];
    case 4:
      return ['50 Coins'];
    case 5:
      return ['100 Coins', 'Village SOS'];
    case 6:
      return ['Placeholder'];
    case 6.1:
      return ['100 Coins'];
    case 6.2:
      return ['1000 Coins', 'Helping Hand Totem'];
    case 7: 
      return ['100 Coins']
    case 7.1: 
      return ['100 Coins']
    case 7.2:
      return ['Gauntlet', 'Shield', 'TwinBlade'];
    case 8:
      return ['100 Coins']
    case 9:
      return ['100 Coins']
    case 10:
      return ['100 Coins']
    case 11:
      return ['100 Coins', 'Hunt the Rebel'];
    case 11.1:
      return ['100 Coins'];
    case 11.2:
      return ['100 Coins'];
    case 11.3:
      return ['1000 Coins', 'Severing Hand Totem'];
    case 12:
      return ['100 Coins'];
    case 13:
      return ['100 Coins'];
    case 14:
      return ['100 Coins'];
    case 14.1:
      return ['100 Coins'];
    case 14.2:
      return ['100 Coins'];
    case 14.3:
      return ['100 Coins'];
    case 15:
        return ['100 Coins'];
    case 16:
        return ['100 Coins'];
    case 17:
        return ['100 Coins'];
    case 18:
        return ['100 Coins'];
    default:
      return [];
  }
}
