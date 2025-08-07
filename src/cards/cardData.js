const cardData = {
  Rock: {
    name: "Rock",
    type: "Rock",
    damage: 10,
    description: "Strong against Scissors, weak against Paper, and draws with Rock.",
  },
  Paper: {
    name: "Paper",
    type: "Paper",
    damage: 10,
    description: "Strong against Rock, weak against Scissors, and draws with Paper.",
  },
  Scissor: {
    name: "Scissor",
    type: "Scissor",
    damage: 10,
    description: "Strong against Paper, weak against Rock, and draws with Scissors.",
  },
  Hide: {
    name: 'Hide',
    description: 'Avoids any action.',
    type: 'Hide',
  },
  'Scroll of Switchroo': {
    name: 'Scroll of Switchroo',
    description: [
      'Passive: If in your hand, you get to swap two cards during inspection phase.',
      'Active: Paper traited, but two other cards on your board get randomly swapped around.'
    ],
    type: ['Scroll of Switchroo', 'Paper'],
    damage: 20,
  },
  'Spider-Web': {
    name: 'Spider-Web',
    description: [
      'Passive: If in your hand, you are forced to put back a played card from your board.',
      'Active: Nothing :P.'
    ],
    type: 'Lose',
    onetime: 'yes',
    damage: 0,
  },
  Gauntlet: {
    name: "Gauntlets",
    type: ['Rock', 'Gauntlet', 'Weapon'],
    damage: 30,
    description: "A blunt weapon. Rock and Gauntlet traited.",
  },
  Shield: {
    name: "Shield",
    type: ['Paper', 'Shield', 'Weapon'],
    damage: 60,
    description: "A defensive weapon. Paper and Shield traited.",
  },
  TwinBlade: {
    name: "TwinBlade",
    type: ['Scissor', 'Blade', 'Weapon'],
    damage: 60,
    description: "A sharp weapon. Scissor and Blade traited.",
  },
  Placeholder: {
    name: "Placeholder",
    type: "",
    description: [
      'Active: Places an empty space. 3 uses per turn only.'
    ],
  },
  BLANK: {
    name: "",
    type: "BLANK",
    description: "This slot is inactive. No damage dealt or received.",
    damage: 0,
  },
  Exhausted: {
    name: "Exhausted",
    type: ['Lose'],
    description: "Exhausted.",
    damage: 0,
  },

  Skull: {
    name: "Skull",
    type: "item",
    description: [
      'Boo.'
    ],
  },

  'Broken Hand Totem': {
    name: "Broken Hand Totem",
    type: "item",
    description: [
      'A totem shaped like a hand. High-five at your own risk.'
    ],
  },

   '50 Coins': {
    name: "50 Coins",
    type: "item",
    coins: 50,
    description: [
      "At least these coins don’t come with hidden micro-transactions… just good old-fashioned loot."
    ],
   },

    '100 Coins': {
    name: "100 Coins",
    type: "item",
    coins: 100,
    description: [
      "LOOT!"
    ],
   },

    '1000 Coins': {
    name: "1000 Coins",
    type: "item",
    coins: 1000,
    description: [
      "LOOOT. Is it a very loud lot or loot."
    ],
   },

   'Village SOS': {
    name: "Village's SOS",
    type: "item",
    description: [
      "To any brave soul who finds this:",
      "Our village is under siege by goblins.",
      "The forest trembles with every weapon they carry.",
      "Please, we can’t hold out much longer.",
      "- Elder Duroot",
    ],
  }, 

  'Helping Hand Totem': {
    name: "Helping Hand Totem",
    type: "item",
    description: [
      "A carved token gifted by a grateful village.",
      "Its presence is a quiet testament to a hero’s courage.",
      "+50 Maximum HP",
    ],
    maxHpBoost: 50,
  }, 

  'Hunt the Rebel': {
    name: "Hunt the Rebel",
    type: "item",
    description: [
      "To all capable bounty hunters and warriors:",
      "The rebel orc Mokgut has been spotted beyond the northern ridge.",
      "He rallies goblins under a broken banner and defies all law.",
      "His capture or defeat would bring great reward and greater peace.",
      "- Posted by Captain Rulvek",
    ],
  },
  
  'Severing Hand Totem': {
    name: "Severing Hand Totem",
    type: "item",
    description: [
      "A crude idol taken from the fallen rebel.",
      "Its jagged shape serves as a reminder: some hands are better severed.",
      "+ Obtain the ability to rearrange any blanks with other cards while in inspection phase",
    ],
  },

  'Small Health Potion': {
    name: "Small Health Potion",
    type: "consumable",
    description: [
      "A basic healing potion.",
      "+ Restores 50 HP.",
    ],
    consumable_heal: 50,
  },

};

export default cardData;
