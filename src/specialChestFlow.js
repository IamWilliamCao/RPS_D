import { CullFaceFront } from "three";

export function handleSpecialChestFlow({
  specialChestStep,
  setDialogVisible,
  setDialogName,
  setDialogText,
  setFadeDungeonOut,
  setShowDungeon,
  setSpecialChestFlow,
  setSpecialChestStep,
  setSpecialDialogAnim,
}) {
  if (specialChestStep === 1) {
    setDialogVisible(false);
    setFadeDungeonOut(true);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Hello?! Earth to you... any brain activity in there or are you just running on idle all day?");
      setDialogVisible(true);
      setSpecialChestStep(2);
    }, 5000);
  } else if (specialChestStep === 2) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setSpecialDialogAnim('Shock');
      setDialogText('HEY WAKE UP!');
      setDialogVisible(true);
      setSpecialChestStep(3);
    }, 5000);
  } else if (specialChestStep === 3) {
    setDialogVisible(false);
    setShowDungeon(true);
    setTimeout(() => {
      setDialogName('You');
      setSpecialDialogAnim('null');
      setDialogText('Who...What...Huh?');
      setDialogVisible(true);
      setSpecialChestStep(4);
    }, 5);
  } else if (specialChestStep === 4) {
    setDialogVisible(false);
    setFadeDungeonOut(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Well well well... look who finally decided to join the world of the living. What was it this time? Up all night chasing high scores like it's gonna mean something?");
      setDialogVisible(true);
      setSpecialChestStep(5); // this is fine
    }, 5);
  } else if (specialChestStep === 5) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText('Huh?! Who are you?');
      setDialogVisible(true);
      setSpecialChestStep(6);
    }, 5);
  } else if (specialChestStep === 6) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("My name is R—wait, seriously? You can’t read? Just look at the dialog box, genius. It’s right there.");
      setDialogVisible(true);
      setSpecialChestStep(7);
    }, 5);
  } else if (specialChestStep === 7) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText('AH!!!');
      setSpecialDialogAnim('Shock');
      setDialogVisible(true);
      setSpecialChestStep(8);
    }, 5);
  } else if (specialChestStep === 8) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("Why is this happening?! What are these cards? Buttons? Did you do this to me?");
      setSpecialDialogAnim('null');
      setDialogVisible(true);
      setSpecialChestStep(9);
    }, 5);
  } else if (specialChestStep === 9) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Obviously it was me. I’ve been pulling people into my world all day. Shame I ended up with *you* this time.");
      setDialogVisible(true);
      setSpecialChestStep(10);
    }, 5);
  } else if (specialChestStep === 10) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText('Pulling people into your world?!');
      setDialogVisible(true);
      setSpecialChestStep(11);
    }, 5);
  } else if (specialChestStep === 11) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Yeah, you heard me. I reel them in like flies to a light… except you're more like that one dumb moth that keeps banging into the same window.");
      setDialogVisible(true);
      setSpecialChestStep(12);
    }, 5);
  } else if (specialChestStep === 12) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("You’d be amazed how easy it is. Just slap a random chest down and boom… curiosity does the rest. People are &so& predictable.");
      setDialogVisible(true);
      setSpecialChestStep(13);
    }, 5);
  } else if (specialChestStep === 13) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText('But why?');
      setDialogVisible(true);
      setSpecialChestStep(14);
    }, 5);
  } else if (specialChestStep === 14) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Tch. If you &must& know... my world’s in a bit of a mess. Don’t get the wrong idea… I could handle it myself, obviously. But hey, why not use a little... expendable help?");
      setDialogVisible(true);
      setSpecialChestStep(15);
    }, 5);
  } else if (specialChestStep === 15) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText('You said you been pulling a lot of people, what happened to them? Did they... *DIE*?');
      setDialogVisible(true);
      setSpecialChestStep(16);
    }, 5);
  } else if (specialChestStep === 16) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Whoa, dramatic much? No one died—yet. Truth is… you’re actually my first. But hey, don’t let that shake your confidence. Now get up and start heading to that open door, and I’ll fill you in.");
      setDialogVisible(true);
      setSpecialChestStep(17); 
    }, 5);
  } else if (specialChestStep === 17) {
    setDialogVisible(false);

  } else if (specialChestStep === 18) {
    setDialogVisible(false);
    setTimeout(() => {
      setShowDungeon(true);
      setDialogName('Righ');
      setDialogText("So… welcome to the dungeon. Or, well, &a& part of it. Think of it as your charming little introduction. Just don’t get too comfortable though.");
      setDialogVisible(true);
      setSpecialChestStep(19);
    }, 5);
  } else if (specialChestStep === 19) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("Oh no…");
      setDialogVisible(true);
      setSpecialChestStep(20);
    }, 5);
  } else if (specialChestStep === 20) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Let’s get you warmed up before I fill you in on the mess we’re in. We’re running out of time, so move it. See that flicker in the distance? That’s your first crash course in survival so you don’t end up looking like a complete fool.");
      setDialogVisible(true);
      setSpecialChestStep(21);
    }, 5);
  } else if (specialChestStep === 21) {
      setDialogVisible(false);
   
  } else if (specialChestStep === 22) {
  setDialogVisible(false);
  setTimeout(() => {
    setDialogName('Righ');
    setDialogText("There—see that *fat* rat? Should be easy. Don’t get cocky though.");
    setDialogVisible(true);
    setSpecialChestStep(23);
  }, 5);
  } else if (specialChestStep === 23) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Alright, focus up. The rule here is *very* similar to what you were playing.");
      setDialogVisible(true);
      setSpecialChestStep(24);
    }, 5);
  } else if (specialChestStep === 24) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("Playing?");
      setDialogVisible(true);
      setSpecialChestStep(25);
    }, 5);
  } else if (specialChestStep === 25) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Rock. Paper. Scissors, dummy. The rat’s gonna open with a Gnaw.");
      setDialogVisible(true);
      setSpecialChestStep(26);
    }, 5);
  } else if (specialChestStep === 26) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("A Gnaw?!");
      setDialogVisible(true);
      setSpecialChestStep(27);
    }, 5);
  } else if (specialChestStep === 27) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Yeah, try to keep up. 'Gnaw' is the rat’s version of Scissors—sharp, twitchy, and kind of pathetic. Just play a Rock for now.");
      setDialogVisible(true);
      setSpecialChestStep(28);
    }, 5);
  } else if (specialChestStep === 28) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText('And how does one play a "Rock"?');
      setDialogVisible(true);
      setSpecialChestStep(29);
    }, 5);
  } else if (specialChestStep === 29) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Seriously? You *click* it. Unless that's too advanced for you.");
      setDialogVisible(true);
      setSpecialChestStep(30);
    }, 5);
  } else if (specialChestStep === 30) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Quick tip: after you click it, it moves to the center of the board. Click it again while it's there and it'll go back to your hand. But right now? Play the Rock and click the bottom right triangle to end your turn.");
      setDialogVisible(true);
      setSpecialChestStep(31);
    }, 5);
  } else if (specialChestStep === 31) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("End turn?!");
      setDialogVisible(true);
      setSpecialChestStep(32);
    }, 5);
  } else if (specialChestStep === 32) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Yeah, it's a turn-based system—basic stuff. You go, rat goes, repeat until someone wins... or loses horribly.");
      setDialogVisible(true);
      setSpecialChestStep(33);
    }, 5);
  } else if (specialChestStep === 33) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("A...alright, here goes nothing.");
      setDialogVisible(true);
      setSpecialChestStep(34);
    }, 5);
  } else if (specialChestStep === 34) {
    setDialogVisible(false);
  } else if (specialChestStep === 35) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Okay, so welcome to the Inspection Phase—kinda something I made up just now. Normally, you and the enemy play at the same time, so there’s no time to react. But here? You get a quick peek at the enemy’s card... and maybe special stuff later.");
      setDialogVisible(true);
      setSpecialChestStep(36);
    }, 5);
  } else if (specialChestStep === 36) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("What does that even mean?");
      setDialogVisible(true);
      setSpecialChestStep(37);
    }, 5);
  } else if (specialChestStep === 37) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("It means stop gawking and start thinking. This phase gives you a rare chance to peek—use it before it’s gone.");
      setDialogVisible(true);
      setSpecialChestStep(38);
    }, 5);
  } else if (specialChestStep === 38) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("Yeah but what would it do here?");
      setDialogVisible(true);
      setSpecialChestStep(39);
    }, 5);
  } else if (specialChestStep === 39) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Oh, you’ll need to start remembering enemy cards and their weaknesses. Watch for patterns—for now, that’s your best weapon. Later on? You’ll have more ways to make plays... if you live that long. Anyway, go on—make your move.");
      setDialogVisible(true);
      setSpecialChestStep(40);
    }, 5);
  } else if (specialChestStep === 40) {
    setDialogVisible(false);
  } else if (specialChestStep === 41) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("I... I did it. I actually did it!");
      setDialogVisible(true);
      setSpecialChestStep(42);
    }, 5);
  } else if (specialChestStep === 42) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Yeah yeah, don’t throw yourself a parade just yet. That was the easy part.");
      setDialogVisible(true);
      setSpecialChestStep(43);
    }, 5);
  } else if (specialChestStep === 43) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("What do you mean?");
      setDialogVisible(true);
      setSpecialChestStep(44);
    }, 5);
  } else if (specialChestStep === 44) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("It means play Paper now—lol.");
      setDialogVisible(true);
      setSpecialChestStep(45);
    }, 5);
  } else if (specialChestStep === 45) {
  setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("Wait, won't I lose?");
      setDialogVisible(true);
      setSpecialChestStep(46);
    }, 5);
  } else if (specialChestStep === 46) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("...");
      setDialogVisible(true);
      setSpecialChestStep(47);
    }, 5);
  } else if (specialChestStep === 47) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("Hey... what happens if I lose? I think I saw the stats on Gnaw and I feel it might beat Paper...");
      setDialogVisible(true);
      setSpecialChestStep(48);
    }, 5);
  } else if (specialChestStep === 48) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Lose? You? That's rich. But if you do, well... let's just say it won't be pretty. Think of it as motivation to not screw up.");
      setDialogVisible(true);
      setSpecialChestStep(49);
    }, 5);
  } else if (specialChestStep === 49) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setSpecialDialogAnim('Shock');
      setDialogText("Noooooooooooooooooooooo");
      setDialogVisible(true);
      setSpecialChestStep(50);
    }, 5);
  } else if (specialChestStep === 50) {
    setDialogVisible(false);
  } else if (specialChestStep === 51) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setSpecialDialogAnim('null');
      setDialogText("Well that wasn't that bad if I do say so myself. You seem to be quiet too. I guess you're doing fi-");
      setDialogVisible(true);
      setSpecialChestStep(52);
    }, 5);
  } else if (specialChestStep === 52) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setSpecialDialogAnim('Shock');
      setDialogText("OWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
      setDialogVisible(true);
      setSpecialChestStep(53);
    }, 5);
  } else if (specialChestStep === 53) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setSpecialDialogAnim('null');
      setDialogText("Jeez... act like you've been hit before.");
      setDialogVisible(true);
      setSpecialChestStep(54);
    }, 5);
  } else if (specialChestStep === 54) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setSpecialDialogAnim('null');
      setDialogText("Alright, well — finish him.");
      setDialogVisible(true);
      setSpecialChestStep(55);
    }, 5);
  } else if (specialChestStep === 55) {
  setDialogVisible(false);
  setTimeout(() => {
    setDialogName('You');
    setDialogText("What happens if I put Scissors there?");
    setDialogVisible(true);
    setSpecialChestStep(56);
  }, 5);
  } else if (specialChestStep === 56) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("I mean... Idk, what do you think? I’d assume the person playing knows, but really, why are you even asking?");
      setDialogVisible(true);
      setSpecialChestStep(57);
    }, 5);
  } else if (specialChestStep === 57) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("Person playing?");
      setDialogVisible(true);
      setSpecialChestStep(58);
    }, 5);
  } else if (specialChestStep === 58) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Forget it, try it for your self.");
      setDialogVisible(true);
      setSpecialChestStep(59);
    }, 5);
  } else if (specialChestStep === 59) {
    setDialogVisible(false);
  } else if (specialChestStep === 60) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("You happy now?");
      setDialogVisible(true);
      setSpecialChestStep(61);
    }, 5);
  } else if (specialChestStep === 61) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("Just wanted to see.");
      setDialogVisible(true);
      setSpecialChestStep(62);
    }, 5);
  } else if (specialChestStep === 62) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Whatever, just finish him off.");
      setDialogVisible(true);
      setSpecialChestStep(63);
    }, 5);
  } else if (specialChestStep === 63) {
    setDialogVisible(false);
  } else if (specialChestStep === 64) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("Uhh... is that a skull?");
      setDialogVisible(true);
      setSpecialChestStep(65);
    }, 5);
  } else if (specialChestStep === 65) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("What? Never seen a skull before? It’s probably just... decorative. You know, for *vibes*.");
      setDialogVisible(true);
      setSpecialChestStep(66);
    }, 5);
  } else if (specialChestStep === 66) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("D-D-Decorative?! Why would anyone decorate with a skull?! Whose skull is it?! Why’s it smiling like that?!");
      setDialogVisible(true);
      setSpecialChestStep(67);
    }, 5);
  } else if (specialChestStep === 67) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Relax. It’s just a goblin skull. They leave those things everywhere. It's a good sign for us though, cause the next test should be around here...");
      setDialogVisible(true);
      setSpecialChestStep(68);
    }, 5);
  } else if (specialChestStep === 68) {
    setDialogVisible(false);
  } else if (specialChestStep === 69) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("A goblin!");
      setDialogVisible(true);
      setSpecialChestStep(70);
    }, 5);
  } else if (specialChestStep === 69) {
  setDialogVisible(false);
  setTimeout(() => {
    setDialogName('You');
    setDialogText("Wait—wait wait wait. Is that... a goblin?! That’s a freaking goblin!!");
    setDialogVisible(true);
    setSpecialChestStep(70);
  }, 5);
  } else if (specialChestStep === 70) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Yeah, and? It’s just a goblin. They’re like the squirrels of this place—ugly, loud, and way too confident.");
      setDialogVisible(true);
      setSpecialChestStep(71);
    }, 5);
  } else if (specialChestStep === 71) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Goblin');
      setSpecialDialogAnim('Shock');
      setDialogText("WHO YOU CALLIN' UGLY?! I’M GONNA BITE YOUR KNEECAPS OFF!");
      setDialogVisible(true);
      setSpecialChestStep(72);
    }, 5);
  } else if (specialChestStep === 72) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setSpecialDialogAnim('null');
      setDialogText("He seems angry!");
      setDialogVisible(true);
      setSpecialChestStep(73);
    }, 5);
  } else if (specialChestStep === 73) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Yeah. They’re all noise and no nuance. Loud, bold, and too dumb to mix things up—makes 'em real easy to read if you pay attention.");
      setDialogVisible(true);
      setSpecialChestStep(74);
    }, 5);
  } else if (specialChestStep === 74) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Goblin');
      setSpecialDialogAnim('Shock');
      setDialogText("I'M RIGHT HERE, YOU KNOW! I’LL RIP YOUR CARDS TO SHREDS AND THEN USE ‘EM AS CONFETTI!");
      setDialogVisible(true);
      setSpecialChestStep(75);
    }, 5);
  } else if (specialChestStep === 75) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setSpecialDialogAnim('null');
      setDialogText("Yup. Definitely caffeinated. Just stay calm and make your play before he explodes.");
      setDialogVisible(true);
      setSpecialChestStep(76);
    }, 5);
  } else if (specialChestStep === 76) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("On the topic of playing... I can see that we can play all three cards now.");
      setDialogVisible(true);
      setSpecialChestStep(77);
    }, 5);
  } else if (specialChestStep === 77) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Well, look at that — you’re actually paying attention.");
      setDialogVisible(true);
      setSpecialChestStep(78);
    }, 5);
  } else if (specialChestStep === 78) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Come on, try playing all the cards.");
      setDialogVisible(true);
      setSpecialChestStep(79);
    }, 5);
  } else if (specialChestStep === 79) {
    setDialogVisible(false);
  } else if (specialChestStep === 80) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Notice how the goblin played only two action while you played three. Playing fewer actions leaves you vulnerable and limits your ability to respond. To gain the upper hand, you need to commit enough cards.");
      setDialogVisible(true);
      setSpecialChestStep(81);
    }, 5);
  } else if (specialChestStep === 81) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("So, I should always play MORE cards than the opponent, right? I got it.");
      setDialogVisible(true);
      setSpecialChestStep(82);
    }, 5);
  } else if (specialChestStep === 82) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Depends on the situation. Sometimes you’ll want to play fewer cards—but don’t worry, we’ll get to those moments when it really matters.");
      setDialogVisible(true);
      setSpecialChestStep(83);
    }, 5);
  } else if (specialChestStep === 83) {
    setDialogVisible(false);
  } else if (specialChestStep === 84) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Look at that! You did extra damage to the enemy.");
      setDialogVisible(true);
      setSpecialChestStep(85);
    }, 5);
  } else if (specialChestStep === 85) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("Woah… that actually worked?");
      setDialogVisible(true);
      setSpecialChestStep(86);
    }, 5);
  } else if (specialChestStep === 86) {
    setDialogVisible(false);
  } else if (specialChestStep === 87) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("See anything different?");
      setDialogVisible(true);
      setSpecialChestStep(88);
    }, 5);
  } else if (specialChestStep === 88) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("Yeah... the goblin didn’t ‘Hide’ this time.");
      setDialogVisible(true);
      setSpecialChestStep(89);
    }, 5);
  } else if (specialChestStep === 89) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Right! Some actions have a sort of ‘cooldown’. Spotting patterns like that is good.");
      setDialogVisible(true);
      setSpecialChestStep(90);
    }, 5);
  } else if (specialChestStep === 90) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Goblins will always go: Gnaw, Hide... then next turn just Gnaw... then back to Gnaw, Hide... and so on.");
      setDialogVisible(true);
      setSpecialChestStep(91);
    }, 5);
  } else if (specialChestStep === 91) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("You seem to know a lot about this. Why don’t you just play for me?");
      setDialogVisible(true);
      setSpecialChestStep(92);
    }, 5);
  } else if (specialChestStep === 92) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Pfft. Because I’m the brains and you’re the... brave, reckless meat-suit. Besides, it’s kinda out of my control.");
      setDialogVisible(true);
      setSpecialChestStep(93);
    }, 5);
  } else if (specialChestStep === 93) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("What do you mean by that?");
      setDialogVisible(true);
      setSpecialChestStep(94);
    }, 5);
  } else if (specialChestStep === 94) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Nope. That’s endgame dialogue. You're still in ‘don’t trip over your own feet’ mode.");
      setDialogVisible(true);
      setSpecialChestStep(95);
    }, 5);
  } else if (specialChestStep === 95) {
    setDialogVisible(false);
  } else if (specialChestStep === 96) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Well well, look at you — now *you* get to Hide. Use it wisely.");
      setDialogVisible(true);
      setSpecialChestStep(97);
    }, 5);
  } else if (specialChestStep === 97) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("Wait—so I just... vanish? Like, poof? Do I need a smoke bomb or something?");
      setDialogVisible(true);
      setSpecialChestStep(98);
    }, 5);
  } else if (specialChestStep === 98) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Yes, obviously. Just reach into your *imaginary utility belt* and toss a smoke bomb. Or you know... just click the Hide card.");
      setDialogVisible(true);
      setSpecialChestStep(99);
    }, 5);
  } else if (specialChestStep === 99) {
    setDialogVisible(false);
  } else if (specialChestStep === 100) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Well... this is the part where I do what every game guide NPC does: vanish until you finish the chapter. So, uh... good luck not dying horribly.");
      setDialogVisible(true);
      setSpecialChestStep(101);
    }, 5);
  } else if (specialChestStep === 101) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("What? But I really need you! I’m not ready for this!");
      setDialogVisible(true);
      setSpecialChestStep(102);
    }, 5);
  } else if (specialChestStep === 102) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Relax, I’m just messing with you. I’m not going anywhere. Yet.");
      setDialogVisible(true);
      setSpecialChestStep(103);
    }, 5);
  } else if (specialChestStep === 103) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("Not funny.");
      setDialogVisible(true);
      setSpecialChestStep(104);
    }, 5);
  } else if (specialChestStep === 104) {
    setDialogVisible(false);
  } else if (specialChestStep === 105) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Quick tip: enemies act in the same order they’re lined up. If you highlight their actions, you’ll see each attack happens in the exact order they appear on the field. Simple, but super important.");
      setDialogVisible(true);
      setSpecialChestStep(106);
    }, 5);
  } else if (specialChestStep === 106) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("Oh that’s very important! I’ll try to remember that!");
      setDialogVisible(true);
      setSpecialChestStep(107);
    }, 5);
  } else if (specialChestStep === 107) {
    setDialogVisible(false);
  } else if (specialChestStep === 108) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("An ambush!");
      setDialogVisible(true);
      setSpecialChestStep(109);
    }, 5);
  } else if (specialChestStep === 109) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Yep—classic dungeon move. Baddies popping out the moment you let your guard down.");
      setDialogVisible(true);
      setSpecialChestStep(110);
    }, 5);
  } else if (specialChestStep === 110) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("Come on! I ain't afraid of you... y’all... I mean, okay maybe a *little*, but I’m still standing!");
      setDialogVisible(true);
      setSpecialChestStep(111);
    }, 5);
  } else if (specialChestStep === 111) {
    setDialogVisible(false);
  } else if (specialChestStep === 112) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Alright, I’m trusting you with this one. Watch the enemy and their move order. Try not to get hit—let’s see if you’re actually any good. Come on, don’t embarrass me... too much.");
      setDialogVisible(true);
      setSpecialChestStep(113);
    }, 5);
  } else if (specialChestStep === 113) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Also, if you highlight the enemy, you might catch some handy facts to help you out. No promises though—heard it from someone &cough& the devs &cough&.");
      setDialogVisible(true);
      setSpecialChestStep(114);
    }, 5);
  } else if (specialChestStep === 114) {
    setDialogVisible(false);
    } else if (specialChestStep === 115) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Wow, a smart one decided to show up.");
      setDialogVisible(true);
      setSpecialChestStep(116);
    }, 5);
  } else if (specialChestStep === 116) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Goblin Clubber');
      setDialogText("ME SMASH YOU REAL TACTICAL-LIKE.");
      setDialogVisible(true);
      setSpecialChestStep(117);
    }, 5);
  } else if (specialChestStep === 117) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Nevermind, I take it back.");
      setDialogVisible(true);
      setSpecialChestStep(118);
    }, 5);
  } else if (specialChestStep === 118) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("How am I supposed to beat someone with a weapon?!");
      setDialogVisible(true);
      setSpecialChestStep(119);
    }, 5);
  } else if (specialChestStep === 119) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Just watch how he moves. Enemies follow patterns—figure it out, and you’ll have the upper hand.");
      setDialogVisible(true);
      setSpecialChestStep(120);
    }, 5);
  } else if (specialChestStep === 120) {
    setDialogVisible(false);
  } else if (specialChestStep === 121) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("A... broken hand? What kind of totem even needs a hand like this?");
      setDialogVisible(true);
      setSpecialChestStep(122);
    }, 5);
  } else if (specialChestStep === 122) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("No way, that’s actually important! And hey, it’s got charm—at least to me. Keep it. Trust me, you’re gonna need it.");
      setDialogVisible(true);
      setSpecialChestStep(123);
    }, 5);
  } else if (specialChestStep === 123) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("Whatever you say man.");
      setDialogVisible(true);
      setSpecialChestStep(124);
    }, 5);
  } else if (specialChestStep === 124) {
    setDialogVisible(false);
  } else if (specialChestStep === 125) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("A SCROLL? MAGIC? YES, FINALLY!");
      setDialogVisible(true);
      setSpecialChestStep(126);
    }, 5);
  } else if (specialChestStep === 126) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("It’s just a scroll. What’s got you so excited?");
      setDialogVisible(true);
      setSpecialChestStep(127);
    }, 5);
  } else if (specialChestStep === 127) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("What do you mean?! Ancient scrolls hold forbidden knowledge—secret techniques lost to time! This… this could be the turning point of my entire journey! The scroll that awakens my dormant power… the one sealed away since birth! With this, I shall transcend my limits, awaken my hidden potential, and carve a new path into destiny itself! My enemies shall tremble, fate will bend to my will, and the world will finally understand the true power that lies within ME!!");
      setDialogVisible(true);
      setSpecialChestStep(128);
    }, 5);
  } else if (specialChestStep === 128) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("🤦");
      setDialogVisible(true);
      setSpecialChestStep(129);
    }, 5);
  } else if (specialChestStep === 129) {
    setDialogVisible(false);
  } else if (specialChestStep === 130) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("So what's got you all quiet?");
      setDialogVisible(true);
      setSpecialChestStep(131);
    }, 5);
  } else if (specialChestStep === 131) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("…It’s not even cool.");
      setDialogVisible(true);
      setSpecialChestStep(132);
    }, 5);
  } else if (specialChestStep === 132) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("So after all that dramatic monologue... your talent for disappointment is truly unmatched.");
      setDialogVisible(true);
      setSpecialChestStep(133);
    }, 5);
  } else if (specialChestStep === 133) {
    setDialogVisible(false);
  } else if (specialChestStep === 134) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("That golem’s the last thing in our way before we step out into the great outdoors.");
      setDialogVisible(true);
      setSpecialChestStep(135);
    }, 5);
  } else if (specialChestStep === 135) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("Actually? Home?");
      setDialogVisible(true);
      setSpecialChestStep(136);
    }, 5);
  } else if (specialChestStep === 136) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Who knows...");
      setDialogVisible(true);
      setSpecialChestStep(137);
    }, 5);
  } else if (specialChestStep === 137) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Before we move on—about that Scroll of Switchroo. Honestly, I didn’t expect that goblin to be carrying it. If it works like I think it does… this could flip everything.");
      setDialogVisible(true);
      setSpecialChestStep(138);
    }, 5);
  } else if (specialChestStep === 138) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("Everything?");
      setDialogVisible(true);
      setSpecialChestStep(139);
    }, 5);
  } else if (specialChestStep === 139) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("As you probably figured, picking the perfect card against enemies is tough with all the randomness... but now? You get the final say.");
      setDialogVisible(true);
      setSpecialChestStep(140);
    }, 5);
  } else if (specialChestStep === 140) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Come on, lemme show you. Play Rock, then Scissor, then Hide — in that order. *DO NOT* play the Scroll.");
      setDialogVisible(true);
      setSpecialChestStep(141);
    }, 5);
  } else if (specialChestStep === 141) {
    setDialogVisible(false);
  } else if (specialChestStep === 142) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Hey, look! The scroll's glowing. Go ahead—click it, then tap Scissor and Hide to swap them. To undo the swap check the left-facing triangle!");
      setDialogVisible(true);
      setSpecialChestStep(143);
    }, 5);
  } else if (specialChestStep === 143) {
    setDialogVisible(false);
  } else if (specialChestStep === 144) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("I’m guessing you’re either confused why Scissor didn’t do any damage... or you already peeked at his stats.");
      setDialogVisible(true);
      setSpecialChestStep(145);
    }, 5);
  } else if (specialChestStep === 145) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("Pfft, yeah, obviously I saw that coming. Just... testing you.");
      setDialogVisible(true);
      setSpecialChestStep(146);
    }, 5);
  } else if (specialChestStep === 146) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("...regardless, any attack with Paper traits will deal triple damage to him. But Scissors? Won’t even leave a scratch. Keep that in mind—now let’s see if you can take him down and finally get us to the surface.");
      setDialogVisible(true);
      setSpecialChestStep(147);
    }, 5);
  } else if (specialChestStep === 147) {
    setDialogVisible(false);
  } else if (specialChestStep === 148) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("...Weird. Feels familiar out here. Haven’t seen the sky in a long time.");
      setDialogVisible(true);
      setSpecialChestStep(149);
    }, 5);
  } else if (specialChestStep === 149) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("What do you mean you haven’t seen the sky in a long time? How long were you away?");
      setDialogVisible(true);
      setSpecialChestStep(150);
    }, 5);
  } else if (specialChestStep === 150) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("Long enough to forget what the wind felt like. Let’s just say... I wasn’t always down there by choice.");
      setDialogVisible(true);
      setSpecialChestStep(151);
    }, 5);
  } else if (specialChestStep === 151) {
  setDialogVisible(false);
  setTimeout(() => {
    setDialogName('Righ');
    setDialogText("Now that we're outside though, lemme give you a few more details about what's going on. As you may know, I mentioned that my world is in a pickle.");
    setDialogVisible(true);
    setSpecialChestStep(152);
  }, 5);
  } else if (specialChestStep === 152) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("There's a villain—the same one who trapped me—plotting an irreversible change to the world. To stop him, we need to reclaim the lands he's taken and destroy the ‘vessels’ he left behind to keep his plan growing.");
      setDialogVisible(true);
      setSpecialChestStep(153);
    }, 5);
  } else if (specialChestStep === 153) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("That's... a lot of information, and like, very little detail.");
      setDialogVisible(true);
      setSpecialChestStep(154);
    }, 5);
  } else if (specialChestStep === 154) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("If we can defeat the vessels, I can get stronger... strong enough to stop his change before it spreads. I’ll tell you more when the time’s right. But for now—we go after the first vessel the *Goblin King*.");
      setDialogVisible(true);
      setSpecialChestStep(155);
    }, 5);
  } else if (specialChestStep === 155) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("Goblin King. How original. Why not something cool like *King Grubble the Third, Supreme Monarch of the Trashpile Realm*?");
      setDialogVisible(true);
      setSpecialChestStep(156);
    }, 5);
  } else if (specialChestStep === 156) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('Righ');
      setDialogText("You complain a lot for someone who nearly got flattened by a regular goblin.");
      setDialogVisible(true);
      setSpecialChestStep(157);
    }, 5);
  } else if (specialChestStep === 157) {
    setDialogVisible(false);
    setTimeout(() => {
      setDialogName('You');
      setDialogText("Fair point.");
      setDialogVisible(true);
      setSpecialChestStep(158);
    }, 5);
  } else if (specialChestStep === 158) {
    setDialogVisible(false);
  }

  //PLACE HOLDER OBTAINED
  else if (specialChestStep === 159) {
  setDialogVisible(false);
  setTimeout(() => {
    setDialogName('You');
    setDialogText("Is that what I think it is? A quest?");
    setDialogVisible(true);
    setSpecialChestStep(160);
  }, 5);
  } else if (specialChestStep === 160) {
    setDialogVisible(false);
  }



}