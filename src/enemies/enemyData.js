import { AbilityTypes } from '../ability/AbilityTypes';

const enemyData = {
  fat_rat: {
    image: "fat_rat.png",
    name: 'Fat Rat',
    animation: "enemyFlip",
    hp: 20,
    plays: 1,
    movement: 'static',
    moves: [
      {
        name: 'Gnaw',
        type: AbilityTypes.SCISSOR,
        damage: 10,
        description: "Scissor Traited.",
        chance: 1,
      },
    ],
  },
  fast_rat: {
    image: "fast_rat.png",
    name: 'Fast Rat',
    animation: "enemyFlip",
    hp: 30,
    plays: 1,
    movement: 'movement',
    fill: 'none',
    moves: [
      {
        name: 'Gnaw',
        type: AbilityTypes.SCISSOR,
        damage: 10,
        description: "Scissor Traited.",
        chance: 1,
      },
    ],
  },

  goblin: {
    image: "goblin.png",
    name: 'Goblin',
    animation: "enemyFlip", 
    hp: 30,
    plays: 'continuous',
    movement: 'static',
    moves: [
      {
        name: 'Gnaw',
        type: AbilityTypes.SCISSOR,
        damage: 10,
        description: "Scissor Traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 1,
      },
      {
        name: 'Hide',
        type: AbilityTypes.HIDE,
        description: "Hides from any attack.",
        chance: 1,
        firstplay: 1,
        cooldown: 2,
      },
    ],
  },
  goblinSpawn: {
    image: "goblin.png",
    name: 'Groggy Goblin',
    animation: "enemyFlip", 
    hp: 30,
    plays: 'continuous',
    movement: 'static',
    moves: [
      {
        name: 'Gnaw',
        type: AbilityTypes.SCISSOR,
        damage: 10,
        description: "Scissor Traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 1,
      },
    ],
  },
  goblinClubber: {
    image: "goblinClub.png",
    name: 'Goblin Clubber',
    animation: "enemyJump",
    hp: 30,
    plays: 4,
    movement: 'random',
    moves: [
      {
        name: 'Hide',
        id: 'hide1',
        type: AbilityTypes.HIDE,
        
        description: "Hides from any attack.",
        chance: 1,
      },
      {
        name: 'Gnaw',
        type: AbilityTypes.SCISSOR,
        damage: 10,
        description: "Scissor Traited.",
        chance: 1,
      },
      {
        name: 'Club-Force Trauma',
        type: AbilityTypes.CLUB,
        damage: 30,
        description: "Jokes going over everyone's head. Rock traited but still beats Rock.",
        chance: 1,
        locked: 'yes',
      },
      {
        name: 'Hide',
        id: 'hide2',
        type: AbilityTypes.HIDE,
        
        description: "Hides from any attack.",
        chance: 1,
      },
    ],
  },
  goblinArcher: {
    image: "goblinBow.png",
    name: 'Goblin Archer',
    animation: "enemyFlip",
    hp: 10,
    plays: 'continuous',
    movement: 'random',
    moves: [
     {
        name: 'Arrow',
        type: AbilityTypes.PAPER,
        damage: 10,
        description: "Paper Traited (Technically it should be Scissors, but Paper bribed the devs.)",
        chance: 1,
        firstplay: 1,
        cooldown: 1,
      },
      {
        name: 'Hide',
        type: AbilityTypes.HIDE,
        description: "Hides from any attack.",
        chance: 1,
        firstplay: 1,
        cooldown: 2,
      },
    ],
  },
  goblinBomb: {
    image: "goblinBomb.png",
    name: 'Goblin Demolitionist',
    animation: "enemyFlip",
    hp: 20,
    plays: 1,
    movement: 'random',
    death: 'bomb',
    moves: [
      {
        name: 'Gnaw',
        type: AbilityTypes.SCISSOR,
        damage: 10,
        description: "Scissor Traited.",
        chance: 1,
      },
    ],
  },
  goblinCamp: {
    image: "goblinCamp.png",
    name: 'Goblin Camp',
    animation: 'none',
    hp: 100,
    plays: 1,
    movement: 'random',
    moves: [
      {
        name: 'Summon Goblin',
        type: ['Summon', "Lose"],
        summons: 
        [ 
          ["goblinSpawn", 1],
        ],
        
        damageSelf: 20,
        description: "Summon a Groggy Goblin and take 20 damage.",
        chance: 1,
        firstplay: 1,
        cooldown: 3,
      },
    ],
  },
  orc: {
    image: "orc.png",
    name: 'Orc',
    animation: "enemyFlip",
    hp: 200,
    weakness: [
      {
        name: "Blade Traited",
        type: "Blade",
        debuff: 2,
      }
    ],
    strength: [
      {
        name: "Shield Resistance",
        type: "Shield",
        buff: 2,
      }
    ],
    plays: 2,
    movement: 'random',
    moves: [
      {
        name: 'Body Slam',
        type: "Rock",
        damage: 50,
        description: "Big body power. Rock traited.",
        chance: 1,
      },
      {
        name: 'Heavy Slap',
        type: "Paper",
        damage: 50,
        description: "This is going to hurt. Paper traited.",
        chance: 1,
      },
    ],
  },
  goblinShaman: {
    image: "goblinShaman.png",
    name: 'Goblin Shaman',
    animation: "enemyFlip",
    hp: 100,
    weakness: [
      {
        name: "Blade Traited",
        type: "Blade",
        debuff: 2,
      }
    ],
    plays: 1,
    movement: 'random',
    moves: [
      {
        name: 'Scroll of Healing',
        id: 'Scroll of Healing 1',
        type: ['Heal', 'Paper'],
        damage: 30,
        heal: 'right',
        description: "Restores health to all adjacent allies positioned to the right. Paper Traited",
        firstplay: 2,
        cooldown: 2,
        chance: 1,
      },
    ],
  },
  ogre: {
    image: "ogre.png",
    name: 'Ogre',
    animation: "enemyFlip",
    hp: 500,
    weakness: [
      {
        name: "Blade Traited",
        type: "Blade",
        debuff: 5,
      }
    ],
    strength: [
      {
        name: "Gauntlet Resistance",
        type: "Gauntlet",
        buff: 2,
      },
    ],
    plays: 1,
    movement: 'random',
    onBoard: 'vanguardNext',

    moves: [
      {
        name: 'Crushing Gnaw',
        type: "Scissor",
        damage: 50,
        description: "Scissor traited.",
        chance: 1,
      },
    ],
  },
  orcRenegade: {
    image: "orcRenegade.png",
    name: 'Orc Renegade',
    animation: "enemyFlip",
    hp: 300,
    weakness: [
      {
        name: "Gauntlet Traited",
        type: "Gauntlet",
        debuff: 2,
      }
    ],
    plays: 'continuous',
    movement: 'random',
    moves: [
      {
        name: 'Cleave',
        type: "Scissor",
        damage: 50,

        strong: "Shield",
        strongV: 2,

        description: "Active: Deals 2x more damage against Shield traited. Scissor and Blade Traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 2,
      },
    ],

    moves150: [
      {
        name: 'War Cry',
        type: ['Immortal1', 'Hide'],

        description: "Active: Be immune to damage, last 1 turn.",
        chance: 1,
        firstplayhp: 150,
        cooldown: 'inf',
        locked: 'yes',
      },
      {
        name: 'Cleave',
        id: 'cleave1',
        type: "Scissor",
        damage: 50,

        strong: "Shield",
        strongV: 2,

        description: "Active: Deals 2x more damage against Shield traited. Scissor and Blade Traited.",
        chance: 1,
        firstplayhp: 150,
        cooldown: 1,
      },
      {
        name: 'Cleave HARDER',
        id: 'cleave2',
        type: "Scissor",
        damage: 100,

        strong: "Shield",
        strongV: 2,

        description: "Active: Deals 2x more damage against Shield traited. Scissor and Blade Traited.",
        chance: 1,
        firstplayhp: 150,
        cooldown: 2,
      },
    ],
  },
  goblinHexer: {
    image: "goblinHexer.png",
    name: 'Goblin Hexer',
    animation: "enemyFlip",
    hp: 150,
    weakness: [
      {
        name: "Shield Traited",
        type: "Shield",
        debuff: 2,
      }
    ],
    plays: 'continuous',
    movement: 'random',
    moves: [
      {
        name: "Scroll of Fracture",
        id: 'Scroll of Fractured Focus 1',
        type: ['Paper', 'SwapEnemy'],
        swap: 'LR_B_R_H0',
        description: "Combat: Turn the player’s leftmost and rightmost cards into Blanks. Paper Traited.",
        chance: 1,
        firstplay: 2,
        cooldown: 2,
      },
    ],
  },
  goblinHexer2: {
    image: "goblinHexer.png",
    name: 'Goblin Hexer',
    animation: "enemyFlip",
    hp: 150,
    weakness: [
      {
        name: "Shield Traited",
        type: "Shield",
        debuff: 2,
      }
    ],
    plays: 'continuous',
    movement: 'random',
    moves: [
      {
        name: "Scroll of Wild Fracture",
        id: 'Scroll of Wild Fracture 1',
        type: ['Paper', 'SwapEnemy'],
        swap: 'RandomNumBlank',
        description: "Combat: Turn the player’s {num} card into a Blank. Paper Traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 1,
      },
      /*
      {
        name: "Scroll of Wild Fracture",
        id: 'Scroll of Wild Fracture 1',
        type: ['Paper', 'SwapEnemy'],
        swap: 'RandomBlank',
        description: "Combat: Turn the player’s {trait} Traited cards into Blanks. Paper Traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 1,
      },
      */
    ],
  },
  goblinNinja: {
    image: "Mokgut.png",
    name: 'Mokgut',
    animation: "enemyFlip",
    hp: 1000,
    weakness: [
      {
        name: "Gauntlet Traited",
        type: "Gauntlet",
        debuff: 3,
      }
    ],
    plays: 'continuous',
    movement: 'random',
    moves: [
      {
        name: 'Cleave HARDER',
        id: 'Cleave HARDER 1',
        type: "Scissor",
        damage: 100,

        strong: "Shield",
        strongV: 2,

        description: "Active: Deals 2x more damage against Shield traited. Scissor and Blade Traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 5,
      },
      {
        name: "Flesh Debt",
        id: 'Flesh Debt 1',
        type: ['Summon', "Lose"],
        summons: 
        [ 
          ["scapeOrc", 1],
        ],
        description: "After 5 turns, summon a Scape Orc",
        chance: 1,
        firstplay: 2,
        cooldown: 5,
      },
      {
        name: "Blood Boil",
        id: 'Blood Boil 1',
        type: ['DamageAlliesHeal', 'Lose'],
        damage: 20,
        description: "Combat: Damages all allies by 20 to heal 20 per ally.",
        chance: 1,
        firstplay: 3,
        cooldown: 5,
      },
      {
        name: "Rupture the Lines",
        id: 'Rupture the Lines 1',
        type: ['Lose', 'SwapEnemy'],
        swap: 'LR_B_R_H50',
        description: "Turn the player’s leftmost and rightmost cards into Blanks, if any were Rock Traited, Mokgut heals 50 Hp.",
        chance: 1,
        firstplay: 2,
        cooldown: 5,
      },
      {
        name: "Bone Toll",
        id: 'Bone Toll 1',
        type: ['Lose'],
        description: "If the opponent played 2 or more weapons this turn, their right-most card will be Exhausted",
        chance: 1,
        firstplay: 4,
        cooldown: 5,
      },
    ],

    moves700: [
      {
        name: 'War Cry',
        id: 'War Cry 1',
        type: ['Immortal1', 'Hide'],

        description: "Active: Be immune to damage, last 1 turn.",
        chance: 1,
        firstplayhp: 700,
        cooldown: 'inf',
        locked: 'yes',
      },
      {
        name: 'Cleave HARDER II',
        id: 'Cleave HARDER 2',
        type: "Scissor",
        damage: 100,

        strong: "Shield",
        strongV: 2,

        description: "Active: Deals 2x more damage against Shield traited. Scissor and Blade Traited.",
        chance: 1,
        firstplayhp: 700,
        cooldown: 1,
      },
      {
        name: "Flesh Debt",
        id: 'Flesh Debt 2',
        type: ['Summon', "Lose"],
        summons: 
        [ 
          ["scapeOrc", 1],
        ],
        description: "After 5 turns, summon a Scape Orc",
        chance: 1,
        firstplayhp: 700,
        cooldown: 3,
      },
      {
        name: "Blood Boil",
        id: 'Blood Boil 2',
        type: ['DamageAlliesHeal', 'Lose'],
        damage: 20,
        description: "Combat: Damages all allies by 20 to heal 20 per ally.",
        chance: 1,
        firstplayhp: 700,
        cooldown: 5,
      },
      {
        name: "Rupture the Lines",
        id: 'Rupture the Lines 2',
        type: ['Lose', 'SwapEnemy'],
        swap: 'LR_B_R_H50',
        description: "Turn the player’s leftmost and rightmost cards into Blanks, if any were Rock Traited, Mokgut heals 50 Hp.",
        chance: 1,
        firstplayhp: 700,
        cooldown: 4,
      },
      {
        name: "Bone Toll",
        id: 'Bone Toll 2',
        type: ['Lose'],
        description: "If the opponent played 2 or more weapons this turn, their right-most card will be Exhausted",
        chance: 1,
        firstplayhp: 700,
        cooldown: 4,
      },
    ],

    moves200: [
      {
        name: 'War Cry',
        id: 'War Cry 3',
        type: ['Immortal1', 'Hide'],

        description: "Active: Be immune to damage, last 1 turn.",
        chance: 1,
        firstplayhp: 200,
        cooldown: 'inf',
        locked: 'yes',
      },
      {
        name: "Blood Boil",
        id: 'Blood Boil 3',
        type: ['DamageAlliesHeal', 'Lose'],
        damage: 20,
        description: "Combat: Damages all allies by 20 to heal 20 per ally.",
        chance: 1,
        firstplayhp: 200,
        firstplay: 2,
        cooldown: 2,
      },
      {
        name: 'Boomspawn',
        id: 'Boomspawn 3',
        type: ['Summon', "Lose"],
        summons: 
        [ 
          ["blastGuts", 1],
        ],
        description: "Every turn summon a Blastguts",
        chance: 1,
        firstplayhp: 200,
        cooldown: 2,
      },
    ],
  },
  goblinKing: {
    image: "goblinKing.png",
    name: 'Goblin King',
    animation: "enemyFlip",
    hp: 1000,
    plays: 'continous',
    movement: 'full-random',
    weakness: [
      {
        name: "Blade Traited",
        type: "Blade",
        debuff: 2,
      }
    ],
    moves: [
      {
        name: 'Royal Healing',
        id: 'Royal Healing 1',
        type: ['Heal', 'Paper'],
        damage: 100,
        heal: 'right',
        description: "Restores health to all adjacent allies positioned to the right. Paper Traited",
        firstplay: 2,
        cooldown: 2,
        chance: 1,
      },
      {
        name: "Go Goblin Go",
        id: 'Go Goblin Go 1',
        type: ['Summon', "Lose"],
        summons: 
        [ 
          ["goblin", 1],
        ],
        description: "Summon a Goblin",
        chance: 1,
        firstplay: 2,
        cooldown: 3,
      },
      {
        name: "Sending an Orc",
        id: 'Go Goblin Go 1',
        type: ['Summon', "Lose"],
        summons: 
        [ 
          ["goblin", 1],
        ],
        description: "Summon an Orc",
        chance: 1,
        firstplay: 5,
        cooldown: 5,
      },
    ],

    moves800: [
      {
        name: 'War Cry',
        id: 'War Cry 1',
        type: ['Immortal1', 'Hide'],

        description: "Active: Be immune to damage, last 1 turn.",
        chance: 1,
        firstplayhp: 800,
        cooldown: 'inf',
        locked: 'yes',
      },
      {
        name: 'Royal Healing',
        id: 'Royal Healing 1',
        type: ['Heal', 'Paper'],
        damage: 100,
        heal: 'right',
        description: "Restores health to all adjacent allies positioned to the right. Paper Traited",
        firstplay: 2,
        cooldown: 2,
        chance: 1,
        firstplayhp: 800,
      },
      {
        name: 'The Royal Slash',
        type: AbilityTypes.SCISSOR,
        damage: 300,
        description: "Scissor Traited.",
        chance: 1,
        firstplayhp: 800,
        firstplay: 1,
        cooldown: 3,
      },
    ],

    moves600: [
      {
        name: 'Royal Healing',
        id: 'Royal Healing 1',
        type: ['Heal', 'Paper'],
        damage: 100,
        heal: 'right',
        description: "Restores health to all adjacent allies positioned to the right. Paper Traited",
        firstplay: 2,
        cooldown: 2,
        chance: 1,
        firstplayhp: 600,
      },
      {
        name: "Go Goblin Go",
        id: 'Go Goblin Go 1',
        type: ['Summon', "Lose"],
        summons: 
        [ 
          ["goblin", 1],
        ],
        description: "Summon a Goblin",
        chance: 1,
        firstplayhp: 600,
        firstplay: 2,
        cooldown: 3,
      },
      {
        name: "Sending an Orc",
        id: 'Go Goblin Go 1',
        type: ['Summon', "Lose"],
        summons: 
        [ 
          ["goblin", 1],
        ],
        description: "Summon an Orc",
        chance: 1,
        firstplayhp: 600,
        firstplay: 5,
        cooldown: 5,
      },
    ],

    moves400: [
      {
        name: 'War Cry',
        id: 'War Cry 1',
        type: ['Immortal1', 'Hide'],

        description: "Active: Be immune to damage, last 1 turn.",
        chance: 1,
        firstplayhp: 400,
        cooldown: 'inf',
        locked: 'yes',
      },
      {
        name: 'Royal Healing',
        id: 'Royal Healing 1',
        type: ['Heal', 'Paper'],
        damage: 100,
        heal: 'right',
        description: "Restores health to all adjacent allies positioned to the right. Paper Traited",
        firstplay: 2,
        cooldown: 2,
        chance: 1,
        firstplayhp: 400,
      },
      {
        name: 'The Royal Crush',
        type: AbilityTypes.ROCK,
        damage: 300,
        description: "Rock Traited.",
        chance: 1,
        firstplayhp: 400,
        firstplay: 1,
        cooldown: 3,
      },
    ],

    moves200: [
      {
        name: 'Royal Healing',
        id: 'Royal Healing 1',
        type: ['Heal', 'Paper'],
        damage: 100,
        heal: 'right',
        description: "Restores health to all adjacent allies positioned to the right. Paper Traited",
        firstplay: 2,
        cooldown: 2,
        chance: 1,
        firstplayhp: 200,
      },
      {
        name: "Go Goblin Go",
        id: 'Go Goblin Go 1',
        type: ['Summon', "Lose"],
        summons: 
        [ 
          ["goblin", 1],
        ],
        description: "Summon a Goblin",
        chance: 1,
        firstplayhp: 200,
        firstplay: 2,
        cooldown: 3,
      },
      {
        name: "Sending an Orc",
        id: 'Go Goblin Go 1',
        type: ['Summon', "Lose"],
        summons: 
        [ 
          ["goblin", 1],
        ],
        description: "Summon an Orc",
        chance: 1,
        firstplayhp: 200,
        firstplay: 5,
        cooldown: 5,
      },
      {
        name: 'The Royal Seal',
        type: AbilityTypes.PAPER,
        damage: 300,
        description: "Paper Traited.",
        chance: 1,
        firstplayhp: 200,
        firstplay: 1,
        cooldown: 3,
      },
    ],
  },

  scapeOrc: {
    image: "scapeOrc.png",
    name: 'Scape Orc',
    animation: "enemyFlip",
    hp: 200,
    weakness: [
      {
        name: "Blade Traited",
        type: "Blade",
        debuff: 2,
      }
    ],
    strength: [
      {
        name: "Shield Resistance",
        type: "Shield",
        buff: 2,
      }
    ],
    plays: 1,
    movement: 'random',
    moves: [
      {
        name: 'Toilet Paper',
        type: "Paper",
        damage: 5,
        description: "Essential in battle... and in the bathroom. Paper traited.",
        chance: 1,
      },
    ],
  },
  blastGuts: {
    image: "blastGuts.png",
    name: 'Blastguts',
    animation: "enemyFlip",
    hp: 20,
    plays: 1,
    movement: 'random',
    death: 'bombSelf',
    moves: [
      {
        name: 'Air Freshener',
        id: 'Air Freshener 1',
        type: "Lose",
        damage: 0,

        description: "Perfect for covering up bad smells.",
        chance: 1,
        firstplay: 1,
        cooldown: 2,
      },
      {
        name: 'Magazine',
        id: 'Magazine 1',
        type: "Lose",
        damage: 0,

        description: "For when you’re stuck on the toilet. WAS Paper traited but come on two paper traited units? Eh.",
        chance: 1,
        firstplay: 2,
        cooldown: 2,
      },
    ],
  },
  Mokgut: {
    image: "Mokgut.png",
    name: 'Mokgut',
    animation: "enemyFlip",
    hp: 1000,
    weakness: [
      {
        name: "Gauntlet Traited",
        type: "Gauntlet",
        debuff: 3,
      }
    ],
    plays: 'continuous',
    movement: 'random',
    moves: [
      {
        name: 'Cleave HARDER',
        id: 'Cleave HARDER 1',
        type: "Scissor",
        damage: 100,

        strong: "Shield",
        strongV: 2,

        description: "Active: Deals 2x more damage against Shield traited. Scissor and Blade Traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 5,
      },
      {
        name: "Flesh Debt",
        id: 'Flesh Debt 1',
        type: ['Summon', "Lose"],
        summons: 
        [ 
          ["scapeOrc", 1],
        ],
        description: "After 5 turns, summon a Scape Orc",
        chance: 1,
        firstplay: 2,
        cooldown: 5,
      },
      {
        name: "Blood Boil",
        id: 'Blood Boil 1',
        type: ['DamageAlliesHeal', 'Lose'],
        damage: 20,
        description: "Combat: Damages all allies by 20 to heal 20 per ally.",
        chance: 1,
        firstplay: 3,
        cooldown: 5,
      },
      {
        name: "Rupture the Lines",
        id: 'Rupture the Lines 1',
        type: ['Lose', 'SwapEnemy'],
        swap: 'LR_B_R_H50',
        description: "Turn the player’s leftmost and rightmost cards into Blanks, if any were Rock Traited, Mokgut heals 50 Hp.",
        chance: 1,
        firstplay: 2,
        cooldown: 5,
      },
      {
        name: "Bone Toll",
        id: 'Bone Toll 1',
        type: ['Lose'],
        description: "If the opponent played 2 or more weapons this turn, their right-most card will be Exhausted",
        chance: 1,
        firstplay: 4,
        cooldown: 5,
      },
    ],

    moves700: [
      {
        name: 'War Cry',
        id: 'War Cry 1',
        type: ['Immortal1', 'Hide'],

        description: "Active: Be immune to damage, last 1 turn.",
        chance: 1,
        firstplayhp: 700,
        cooldown: 'inf',
        locked: 'yes',
      },
      {
        name: 'Cleave HARDER II',
        id: 'Cleave HARDER 2',
        type: "Scissor",
        damage: 100,

        strong: "Shield",
        strongV: 2,

        description: "Active: Deals 2x more damage against Shield traited. Scissor and Blade Traited.",
        chance: 1,
        firstplayhp: 700,
        cooldown: 1,
      },
      {
        name: "Flesh Debt",
        id: 'Flesh Debt 2',
        type: ['Summon', "Lose"],
        summons: 
        [ 
          ["scapeOrc", 1],
        ],
        description: "After 5 turns, summon a Scape Orc",
        chance: 1,
        firstplayhp: 700,
        cooldown: 3,
      },
      {
        name: "Blood Boil",
        id: 'Blood Boil 2',
        type: ['DamageAlliesHeal', 'Lose'],
        damage: 20,
        description: "Combat: Damages all allies by 20 to heal 20 per ally.",
        chance: 1,
        firstplayhp: 700,
        cooldown: 5,
      },
      {
        name: "Rupture the Lines",
        id: 'Rupture the Lines 2',
        type: ['Lose', 'SwapEnemy'],
        swap: 'LR_B_R_H50',
        description: "Turn the player’s leftmost and rightmost cards into Blanks, if any were Rock Traited, Mokgut heals 50 Hp.",
        chance: 1,
        firstplayhp: 700,
        cooldown: 4,
      },
      {
        name: "Bone Toll",
        id: 'Bone Toll 2',
        type: ['Lose'],
        description: "If the opponent played 2 or more weapons this turn, their right-most card will be Exhausted",
        chance: 1,
        firstplayhp: 700,
        cooldown: 4,
      },
    ],

    moves200: [
      {
        name: 'War Cry',
        id: 'War Cry 3',
        type: ['Immortal1', 'Hide'],

        description: "Active: Be immune to damage, last 1 turn.",
        chance: 1,
        firstplayhp: 200,
        cooldown: 'inf',
        locked: 'yes',
      },
      {
        name: "Blood Boil",
        id: 'Blood Boil 3',
        type: ['DamageAlliesHeal', 'Lose'],
        damage: 20,
        description: "Combat: Damages all allies by 20 to heal 20 per ally.",
        chance: 1,
        firstplayhp: 200,
        firstplay: 2,
        cooldown: 2,
      },
      {
        name: 'Boomspawn',
        id: 'Boomspawn 3',
        type: ['Summon', "Lose"],
        summons: 
        [ 
          ["blastGuts", 1],
        ],
        description: "Every turn summon a Blastguts",
        chance: 1,
        firstplayhp: 200,
        cooldown: 2,
      },
    ],
  },

  test: {
    image: "scapeOrc.png",
    name: 'Scape Orc',
    animation: "enemyFlip",
    hp: 200,
    plays: 'continous',
    movement: 'static',
    moves: [
      {
        name: "Flesh Debt",
        id: 'Flesh Debt',
        type: ['Summon', "Lose"],
        summons: 
        [ 
          ["scapeOrc", 1],
        ],
        description: "After 5 turns, summon a Scape Orc",
        chance: 1,
        cooldown: 1,
      },
      {
        name: "Blood Boil",
        id: 'Blood Boil',
        type: ['DamageAlliesHeal', 'Lose'],
        damage: 20,
        description: "Combat: Damages all allies by 20 to heal 20 per ally.",
        chance: 1,
        cooldown: 1,
      },
    ],
  },



  smol: {
    image: "smol.png",
    name: 'Smol',
    animation: "enemyFlip",
    hp: 10,
    plays: 1,
    movement: 'random',
    fill: 'none',
    death: 'spider-web',
    moves: [
      {
        name: 'Nimble Nibble',
        type: AbilityTypes.NIMBLENIBBLE,
        damage: 5,
        description: "Dodges scissors pretty well...",
        chance: 1,
      },
    ],
  },
  beetle: {
    image: "beetle.png",
    name: 'Beatle',
    animation: "enemyFlip",
    hp: 40,
    plays: 'continuous',
    movement: 'random',
    fill: 'none',
    moves: [
      {
        name: 'Reflect',
        type: AbilityTypes.PAPER,
        damage: 10,
        description: "Paper Traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 2,
      },
      {
        name: 'Rock-Band',
        type: AbilityTypes.ROCK,
        damage: 10,
        description: "Rock Traited.",
        chance: 1,
        firstplay: 2,
        cooldown: 2,
      },
    ],
  },
  squirrol: {
    image: "squirrel.png",
    name: 'Squirrol',
    animation: "enemyFlip",
    hp: 30,
    plays: 'continuous',
    movement: 'random',
    fill: 'none',
    moves: [
      {
        name: 'Acorn',
        type: AbilityTypes.ROCK,
        damage: 10,
        description: "Rock Traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 1,
      },
      {
        name: 'Abigcorn',
        type: AbilityTypes.ROCK,
        damage: 30,
        description: "Rock Traited.",
        chance: 1,
        firstplay: 3,
        cooldown: 3,
      },
    ],
  },
  spider: {
    image: "spider.png",
    name: 'Spider',
    animation: "enemyFlip",
    hp: 30,
    plays: 1,
    movement: 'random',
    death: 'spider-web',
    moves: [
      {
        name: 'Vengebite',
        type: AbilityTypes.SCISSOR,
        damage: '#',
        description: "Scales based on the number allies' actions. Scissor Traited.",
        chance: 1,
      },
    ],
  },
  spiderWeb: {
    image: "spiderWeb.png",
    name: 'Spider Web',
    animation: 'none',
    hp: 50,
    plays: 1,
    movement: 'random',
    death: 'web',
    moves: [
      {
        name: 'Summon Smol',
        type: ['Summon', "Lose"],
        summons: 
        [ 
          ["smol", 1],
        ],
        
        description: "Summon a Smol",
        chance: 1,
        firstplay: 1,
        cooldown: 2,
      },
    ],
  },
  spiderWeb2: {
    image: "spiderWeb.png",
    name: 'Spider Web',
    animation: 'none',
    hp: 50,
    plays: 1,
    movement: 'random',
    death: 'web',
    moves: [
      {
        name: 'Summon Smol',
        type: ['Summon', "Lose"],
        summons: 
        [ 
          ["smol", 1],
        ],
        
        description: "Summon a Smol",
        chance: 1,
        firstplay: 4,
        cooldown: 4,
      },
    ],
  },
  smol2: {
    image: "smolWeb.png",
    name: 'Smol',
    animation: "enemyFlip",
    hp: 10,
    plays: 1,
    movement: 'random',
    fill: 'none',
    death: 'web',
    moves: [
      {
        name: 'Nimble Nibble',
        type: AbilityTypes.NIMBLENIBBLE,
        damage: 5,
        description: "Dodges scissors pretty well...",
        chance: 1,
      },
    ],
  },
  broodWeaver: {
    image: "broodWeaver.png",
    name: 'Brood Weaver',
    animation: 'enemyFlip',
    hp: 250,
    plays: 'continous',
    movement: 'random',
    weakness: [
      {
        name: "Paper Traited",
        type: "Paper",
        debuff: 2,
      }
    ],
    moves: [
      {
        name: 'Summon Smol',
        type: ['Summon', "Lose"],
        summons: 
        [ 
          ["smol", 3],
        ],
        
        description: "Summon 3 Smol",
        chance: 1,
        firstplay: 2,
        cooldown: 3,
      },
      {
        name: 'Threadbind',
        type: ['Paper'],
        damage: 20,
        description: "Paper Traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 2,
      },
      {
        name: 'Protective Strike',
        type: ['Rock'],
        damage: 20,
        description: "Rock Traited.",
        chance: 1,
        firstplay: 2,
        cooldown: 2,
      },
    ],
  },
  tangler: {
    image: "tangler.png",
    name: 'Tangler',
    animation: 'enemyFlip',
    hp: 150,
    plays: 'continous',
    movement: 'random',
    weakness: [
      {
        name: "Paper Traited",
        type: "Paper",
        debuff: 2,
      }
    ],
    moves: [
      {
        name: "Wrap It Up",
        id: 'Wrap it up 1',
        type: ['Paper', 'SwapEnemy'],
        swap: 'RandomBlank',
        description: "Combat: Turn the player’s {trait} Traited cards into Blanks. Paper Traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 1,
      },
    ],
  },
  broodMother: {
    image: "broodMother.png",
    name: 'BroodMother',
    animation: 'none',
    hp: 1000,
    plays: 'continous',
    movement: 'random',
    weakness: [
      {
        name: "Paper Traited",
        type: "Paper",
        debuff: 3,
      }
    ],
    moves: [
      {
        name: "Wrap It Up",
        id: 'Wrap it up 1',
        type: ['Paper', 'SwapEnemy'],
        swap: 'RandomBlank',
        description: "Combat: Turn the player’s {trait} Traited cards into Blanks. Paper Traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 1,
      },
    ],
  },
  leftArm: {
    image: "leftArm.png",
    name: '',
    animation: 'none',
    hp: 200,
    plays: 'continous',
    movement: 'random',
    weakness: [
      {
        name: "Paper Traited",
        type: "Paper",
        debuff: 3,
      }
    ],
    moves: [
      {
        name: "Crushnest",
        id: "crushnest 1",
        type: ['Rock'],
        damage: 20,
        description: "Rock Traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 2,
      },
    ],
  },
  left1Arm: {
    image: "leftArm.png",
    name: '',
    animation: 'none',
    hp: 200,
    plays: 'continous',
    movement: 'random',
    weakness: [
      {
        name: "Paper Traited",
        type: "Paper",
        debuff: 3,
      }
    ],
    moves: [
      {
        name: "Crushnest",
        id: "crushnest 1",
        type: ['Rock'],
        damage: 20,
        description: "Rock Traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 2,
      },
    ],
  },
  left2Arm: {
    image: "leftArm.png",
    name: '',
    animation: 'none',
    hp: 200,
    plays: 'continous',
    movement: 'random',
    weakness: [
      {
        name: "Paper Traited",
        type: "Paper",
        debuff: 3,
      }
    ],
    moves: [
      {
        name: "Silksever",
        id: "Silksever 1",
        type: ['Scissor'],
        damage: 20,
        description: "Scissor Traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 2,
      },
    ],
  },
  left3Arm: {
    image: "leftArm.png",
    name: '',
    animation: 'none',
    hp: 200,
    plays: 'continous',
    movement: 'random',
    weakness: [
      {
        name: "Paper Traited",
        type: "Paper",
        debuff: 3,
      }
    ],
    moves: [
      {
        name: "Crushnest",
        id: "crushnest 1",
        type: ['Rock'],
        damage: 20,
        description: "Rock Traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 2,
      },
    ],
  },
  left4Arm: {
    image: "leftArm.png",
    name: '',
    animation: 'none',
    hp: 200,
    plays: 'continous',
    movement: 'random',
    weakness: [
      {
        name: "Paper Traited",
        type: "Paper",
        debuff: 3,
      }
    ],
    moves: [
      {
        name: "Silksever",
        id: "Silksever 1",
        type: ['Scissor'],
        damage: 20,
        description: "Scissor Traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 2,
      },
    ],
  },
  right1Arm: {
    image: "rightArm.png",
    name: '',
    animation: 'none',
    hp: 200,
    plays: 'continous',
    movement: 'random',
    weakness: [
      {
        name: "Paper Traited",
        type: "Paper",
        debuff: 3,
      }
    ],
    moves: [
      {
        name: "Silksever",
        id: "Silksever 1",
        type: ['Scissor'],
        damage: 20,
        description: "Scissor Traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 2,
      },
    ],
  },
  right2Arm: {
    image: "rightArm.png",
    name: '',
    animation: 'none',
    hp: 200,
    plays: 'continous',
    movement: 'random',
    weakness: [
      {
        name: "Paper Traited",
        type: "Paper",
        debuff: 3,
      }
    ],
    moves: [
      {
        name: "Crushnest",
        id: "crushnest 1",
        type: ['Rock'],
        damage: 20,
        description: "Rock Traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 2,
      },
    ],
  },
  right3Arm: {
    image: "rightArm.png",
    name: '',
    animation: 'none',
    hp: 200,
    plays: 'continous',
    movement: 'random',
    weakness: [
      {
        name: "Paper Traited",
        type: "Paper",
        debuff: 3,
      }
    ],
    moves: [
      {
        name: "Silksever",
        id: "Silksever 1",
        type: ['Scissor'],
        damage: 20,
        description: "Scissor Traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 2,
      },
    ],
  },
  right4Arm: {
    image: "rightArm.png",
    name: '',
    animation: 'none',
    hp: 200,
    plays: 'continous',
    movement: 'random',
    weakness: [
      {
        name: "Paper Traited",
        type: "Paper",
        debuff: 3,
      }
    ],
    moves: [
      {
        name: "Crushnest",
        id: "crushnest 1",
        type: ['Rock'],
        damage: 20,
        description: "Rock Traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 2,
      },
    ],
  },

  venustrap: {
    image: "venustrap.png",
    name: 'Mega Venus',
    animation: "enemyBig",
    hp: 100,
    plays: 3,
    movement: 'random',
    moves: [
      {
        name: 'Leaf Trap',
        type: ['Paper'],
        damage: 5,
        description: "Plant fibers traited.",
        chance: 1,
      },
      {
        name: 'Root Trap',
        type: ['Rock'],
        damage: 5,
        description: "Strong as rocks.",
        chance: 1,
      },
    ],
  },
  fairy: {
    image: "fairy.png",
    name: 'Fairy',
    animation: "enemyFlip",
    hp: 30,
    plays: 'continuous',
    movement: 'random',
    onBoard: 'fairyBuff',
    moves: [
      {
        name: "Fun Time",
        type: ['Lose'],
        damage: 0,
        description: "Does nothing but funny I guess.",
        chance: 1,
        firstplay: 2,
        cooldown: 2,
      },
    ],
  }, 

  mimicChest: {
    image: "mimicChest.png",
    name: 'The Mimic',
    animation: "enemyFlip",
    hp: 200,
    plays: 5,
    movement: 'full-random',
    moves: [
      {
        name: "Disruption",
        type: ['Lose', 'SwapEnemy'],
        swap: 'LR',
        description: "Combat: Swaps the enemy’s leftmost and rightmost cards.",
        placement: 2,
        chance: 1,
        firstplay: 2,
        cooldown: 2,
      },
      {
        name: "Shut Tight",
        type: ['Hide'],
        description: "...",
        chance: 1,
        firstplay: 1,
        cooldown: 1,
      },
      {
        name: "Shut Tight",
        type: ['Hide'],
        description: "...",
        chance: 1,
        firstplay: 1,
        cooldown: 1,
      },
      {
        name: "Shut Tight",
        type: ['Hide'],
        description: "...",
        chance: 1,
        firstplay: 1,
        cooldown: 1,
      },
      {
        name: "Gauntlets",
        type: ['Rock'],
        damage: 30,
        description: "...",
        chance: 1,
        firstplay: 1,
        cooldown: 3,
      },
      {
        name: "Shield",
        type: ['Paper'],
        damage: 30,
        description: "...",
        chance: 1,
        firstplay: 2,
        cooldown: 3,
      },
      {
        name: "TwinBlade",
        type: ['Scissor'],
        damage: 30,
        description: "...",
        chance: 1,
        firstplay: 3,
        cooldown: 3,
      },
    ],
  }, 
  spikeTrap: {
    image: "spikeTrap.png",
    name: 'Spike Trap',
    animation: "enemyFlip",
    hp: 100,
    plays: 10,
    movement: 'random',
    moves: [
      {
        name: 'Spike Trap',
        type: "Trap",
        damage: 20,
        description: "Oops you are going to take damage if you reply with an attack!",
        chance: 1,
      },
      {
        name: 'Spike Trap',
        type: "Trap",
        damage: 20,
        description: "Oops you are going to take damage if you reply with an attack!",
        chance: 1,
      },
      {
        name: 'Spike Trap',
        type: "Trap",
        damage: 20,
        description: "Oops you are going to take damage if you reply with an attack!",
        chance: 1,
      },
    ],
  },
  theArchive: {
    image: "theArchive.png",
    name: 'Living Grimoire',
    animation: "enemyFlip",
    hp: 100,
    weakness: [
      {
        name: "Scissor Traited",
        type: "Scissor",
        debuff: 2,
      }
    ],
    plays: 1,
    movement: 'full-random',
    moves: [
      {
        name: 'Interchange',
        type: "Lose",
        
        description: "Active: All ally cards may be rearranged randomly.",
        chance: 1,
      },
    ],
  },
  rockGolem: {
    image: "rockGolem.png",
    name: 'Gate Golem',
    animation: "enemyFlip",
    hp: 300,
    weakness: [
      {
        name: "Paper Traited",
        type: "Paper",
        debuff: 3,
      }
    ],
    strength: [
      {
        name: "Scissor Traited",
        type: "Scissor",
        buff: "Immunity",
      }
    ],
    plays: 'fill',
    movement: 'random',
    moves: [
      {
        name: 'Rockier Rock',
        type: "Rock",
        damage: 10,
        strong: "Scissor",
        strongV: 2,
        description: "Active: Deals 2x more damage against Scissor traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 2,
      },
      {
        name: 'Rockier Rock',
        type: "Rock",
        damage: 10,
        strong: "Scissor",
        strongV: 2,
        description: "Active: Deals 2x more damage against Scissor traited.",
        chance: 1,
        firstplay: 1,
        cooldown: 2,
      },
      {
        name: 'Rockier Rock',
        type: "Rock",
        damage: 10,
        strong: "Scissor",
        strongV: 2,
        description: "Active: Deals 2x more damage against Scissor traited.",
        chance: 1,
        firstplay: 2,
        cooldown: 2,
      },
      {
        name: 'Sharp Gnaw',
        type: "Scissor",
        damage: 10,
        strong: "Paper",
        strongV: 2,
        description: [ 'Scissor Traited.',
                    'Active: Deals 2x more damage against Scissor traited.'],
        chance: 1,
        firstplay: 3,
        cooldown: 2,
      },
      {
        name: 'Origami Slate',
        type: "Paper",
        damage: 10,
        strong: "Rock",
        strongV: 2,
        description: [ 'Paper Traited.',
                    'Active: Deals 2x more damage against Rock traited.'],
        chance: 1,
        firstplay: 4,
        cooldown: 2,
      },
    ],
  },

};

export default enemyData;
