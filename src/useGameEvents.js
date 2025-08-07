import { useEffect, useRef } from 'react';
import { handleSpecialChestFlow } from './specialChestFlow';

export function useGameEvents({
  gameCount,
  dialogVisible,
  setDialogVisible,
  setDialogText,
  setDialogName,
  setWeirdMode,
  setChestVisible,

  inBattle,
  phase,
  currentTile,
  battleTurn,
  firstBattleIntroShown,
  setFadeDungeonOut,
  setShowDungeon,
  setSpecialChestFlow,
  setSpecialChestStep,
  setSpecialDialogAnim,
  firstBattleDialogStep,
  currentWaveIndex,

  showRewards,
  lastDefeatedTile,
  setShowRewards,
}) {
  const timerRef = useRef(null);
  const shownDialogs = useRef(new Set()); // Track which dialogs already shown

useEffect(() => {
  if (!showRewards || dialogVisible || lastDefeatedTile == null) return;

  // Special handling for tile 0 and tile 1 reward
  if (lastDefeatedTile >= 0 && lastDefeatedTile <= 3) {
  const step = [64, 96, 121, 125][lastDefeatedTile];

    handleSpecialChestFlow({
      specialChestStep: step,
      setDialogVisible,
      setDialogName,
      setDialogText,
      setFadeDungeonOut,
      setShowDungeon,
      setSpecialChestFlow,
      setSpecialChestStep,
      setSpecialDialogAnim,
    });

    return; // Skip normal rewardDialogs
  }


  // Standard reward dialog for other tiles
  const rewardDialogs = {
    // Add more if needed
  };

  const dialog = rewardDialogs[lastDefeatedTile];
  if (!dialog) return;

  setDialogName('You');
  setDialogText(dialog);
  setDialogVisible(true);

  const interval = setInterval(() => {
    if (!dialogVisible) {
      clearInterval(interval);
      setShowRewards(false);
      setShowDungeon(true);
    }
  }, 100);

  return () => clearInterval(interval);
}, [
  showRewards,
  lastDefeatedTile,
  dialogVisible,
  setDialogName,
  setDialogText,
  setDialogVisible,
  setShowRewards,
  setShowDungeon,
  setFadeDungeonOut,
  setSpecialChestFlow,
  setSpecialChestStep,
  setSpecialDialogAnim,
  setSpecialDialogAnim,
]);


  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    // 🧠 Tutorial step triggers (tile 0 only)
    if (
      inBattle &&
      currentTile === 0 &&
      !firstBattleIntroShown
    ) {
      const commonArgs = {
        setDialogVisible,
        setDialogName,
        setDialogText,
        setFadeDungeonOut,
        setShowDungeon,
        setSpecialChestFlow,
        setSpecialChestStep,
        setSpecialDialogAnim,
      };

      const stepMap = {
        'player-1': 22,
        'highlight-1': 35,
        'player-2': 41,
        'player-3': 51,
        'player-4': 60, // if you want to add a new step here
      };

      const key = `${phase}-${battleTurn}`;
      const step = stepMap[key];

      if (step !== undefined) {
        handleSpecialChestFlow({
          ...commonArgs,
          specialChestStep: step,
        });
      }
    }

    if (
      inBattle &&
      currentTile === 1 &&
      !firstBattleIntroShown
    ) {
      const commonArgs = {
        setDialogVisible,
        setDialogName,
        setDialogText,
        setFadeDungeonOut,
        setShowDungeon,
        setSpecialChestFlow,
        setSpecialChestStep,
        setSpecialDialogAnim,
      };

      const stepMap = {
        'player-1': 69,
        'highlight-1': 80,
        'player-2': 84,
        'highlight-2': 87
      };

      const key = `${phase}-${battleTurn}`;
      const step = stepMap[key];

      if (step !== undefined) {
        handleSpecialChestFlow({
          ...commonArgs,
          specialChestStep: step,
        });
      }
    }
  
    if (
      inBattle &&
      currentTile === 2
    ) {
      const commonArgs = {
        setDialogVisible,
        setDialogName,
        setDialogText,
        setFadeDungeonOut,
        setShowDungeon,
        setSpecialChestFlow,
        setSpecialChestStep,
        setSpecialDialogAnim,
      };

      const key = `${currentWaveIndex}-${phase}-${battleTurn}`;

      const stepMap = {
        '0-highlight-1': 105,
        '1-player-1': 108,
      };

      const step = stepMap[key];

      if (step !== undefined) {
        handleSpecialChestFlow({
          ...commonArgs,
          specialChestStep: step,
        });
      }
    }

    if (
      inBattle &&
      currentTile === 3
    ) {
      const commonArgs = {
        setDialogVisible,
        setDialogName,
        setDialogText,
        setFadeDungeonOut,
        setShowDungeon,
        setSpecialChestFlow,
        setSpecialChestStep,
        setSpecialDialogAnim,
      };

      const key = `${currentWaveIndex}-${phase}-${battleTurn}`;

      const stepMap = {
        '0-player-1': 112,
        '3-player-1': 115,
      };

      const step = stepMap[key];

      if (step !== undefined) {
        handleSpecialChestFlow({
          ...commonArgs,
          specialChestStep: step,
        });
      }
    }

    if (
      inBattle &&
      currentTile === 4
    ) {
      const commonArgs = {
        setDialogVisible,
        setDialogName,
        setDialogText,
        setFadeDungeonOut,
        setShowDungeon,
        setSpecialChestFlow,
        setSpecialChestStep,
        setSpecialDialogAnim,
      };

      const key = `${currentWaveIndex}-${phase}-${battleTurn}`;

      const stepMap = {
        '0-player-1': 134,
        '0-highlight-1': 142,
        '0-player-2': 144,
      };

      const step = stepMap[key];

      if (step !== undefined) {
        handleSpecialChestFlow({
          ...commonArgs,
          specialChestStep: step,
        });
      }
    }
    // --------------------
    // RPS game dialog flow
    // --------------------

    if (shownDialogs.current.has(gameCount)) return;

    const showDialog = (name, text, delay = 0) => {
      timerRef.current = setTimeout(() => {
        setDialogName(name);
        setDialogText(text);
        setDialogVisible(true);
        shownDialogs.current.add(gameCount);
        timerRef.current = null;
      }, delay);
    };

    if (gameCount === 3 && !dialogVisible) {
      showDialog('You', 'Wow this is fun');
    }

    if (gameCount === 5 && !dialogVisible) {
      showDialog('You', 'What the...?', 10);
      setWeirdMode(true);
      const weirdTimeout = setTimeout(() => setWeirdMode(false), 1000);
      return () => clearTimeout(weirdTimeout);
    }

    if (gameCount === 6 && !dialogVisible) {
      showDialog('You', 'Lets just ignore that...');
    }

    if (gameCount === 8 && !dialogVisible) {
      showDialog('You', "This again! I'm not sure if I wanna play this anymore...", 10);
      setWeirdMode(true);
      const weirdTimeout = setTimeout(() => setWeirdMode(false), 1500);
      return () => clearTimeout(weirdTimeout);
    }

    if (gameCount === 10 && !dialogVisible) {
      showDialog(
        'You',
        'A chest? Why here? It’s kind of out of place... Could be a trap, or maybe it’s something important. But then again, maybe it’s best to just move on and forget about it...',
        10
      );
      setChestVisible(true);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [
    gameCount,
    dialogVisible,
    setDialogName,
    setDialogText,
    setDialogVisible,
    setWeirdMode,
    setChestVisible,

    // 👇 Dependencies for tutorial steps
    inBattle,
    phase,
    battleTurn,
    currentTile,
    firstBattleIntroShown,
    setFadeDungeonOut,
    setShowDungeon,
    setSpecialChestFlow,
    setSpecialChestStep,
    setSpecialDialogAnim,
    firstBattleDialogStep,
  ]);
}
