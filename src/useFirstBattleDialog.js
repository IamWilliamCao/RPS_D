import { useEffect } from 'react';

export function useFirstBattleDialog({
  inBattle,
  phase,
  currentTile,
  firstBattleIntroShown,
  setFirstBattleIntroShown,
  setDialogVisible,
  setDialogText,
  setDialogName,
  showRewards, // 🔥 NEW
  battleTurn,  // 🔥 NEW
}) {
  useEffect(() => {
    if (
      inBattle &&
      phase === 'player' &&
      currentTile === 0 &&
      !firstBattleIntroShown &&
      !showRewards &&         // ✅ Don't show if reward is active
      battleTurn === 1        // ✅ Only fire on first turn
    ) {
      const dialogSequence = [
        ["Righ", "There—see that *fat* rat? Should be easy. Don’t get cocky though."],
        ["Righ", "Alright, focus up. The rule here is *very* similar to what you were playing."],
        ["You", "Playing?"],
        ["Righ", "Rock. Paper. Scissors, dummy. The rat’s gonna open with a Gnaw."],
        ["You", "A Gnaw?!"],
        ["Righ", "Yeah, try to keep up. 'Gnaw' is the rat’s version of Scissors—sharp, twitchy, and kind of pathetic. Just play a Rock for now."],
        ["You", 'And how does one play a "Rock"?'],
        ["Righ", "Seriously? You *click* it. Unless that's too advanced for you."],
        ["Righ", "Quick tip: after you click it, it moves to the center of the board. Click it again while it's there and it'll go back to your hand. But right now? Play the Rock and end your turn."],
        ["You", "End turn?!"],
        ["Righ", "Yeah, it's a turn-based system—basic stuff. You go, rat goes, repeat until someone wins... or loses horribly."],
        ["You", "A...alright, here goes nothing."]
      ];

      let i = 0;

      function showNextLine() {
        if (i >= dialogSequence.length) return;
        const [name, text] = dialogSequence[i];
        setDialogVisible(false);
        setTimeout(() => {
          setDialogName(name);
          setDialogText(text);
          setDialogVisible(true);
        }, 5);
        i++;
        if (i < dialogSequence.length) {
          setTimeout(showNextLine, 2800);
        }
      }

      showNextLine();
      setFirstBattleIntroShown(true);
    }
  }, [inBattle, phase, currentTile, firstBattleIntroShown, showRewards, battleTurn]); // 🔥 include `showRewards` and `battleTurn`
}
