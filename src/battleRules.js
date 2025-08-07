// battleRules.js
export function beats(aRaw, bRaw) {
  const aTypes = Array.isArray(aRaw) ? aRaw : [aRaw];
  const bTypes = Array.isArray(bRaw) ? bRaw : [bRaw];

  for (let a of aTypes) {
    for (let b of bTypes) {
      if (!a || !b || a === "Undamageable" || b === "Undamageable") continue;

      if (a === "Hide" || b === "Hide") continue;
      if (a === b) continue;

      if (aTypes.includes("Lose")) {
        // Attacker is Lose type → loses to everything
        return false;
      }
      if (bTypes.includes("Lose")) {
        // Defender is Lose type → attacker beats defender
        return true;
      }

      if (a === "Trap") return true;
      if (b === "Trap") return false;

      // Custom rule for Nimble Nibble
      if (a === "Nimble Nibble" && b === "Scissor") return true;
      if (a === "Scissor" && b === "Nimble Nibble") return false;

      if (b === "Nimble Nibble") {
        if (a === "Rock" || a === "Paper") return true;
        return false;
      }

      // Club beats everything except Paper
      if (a === "Club" && b !== "Paper") return true;
      if (a === "Paper" && b === "Club") return true;

      // Regular RPS
      if (a === "Rock" && b === "Scissor") return true;
      if (a === "Scissor" && b === "Paper") return true;
      if (a === "Paper" && b === "Rock") return true;
    }
  }

  return false;
}

export function calculateDamage(attackerMoveName, defenderMoveName, attackerMoveData, context = {}) {
  const attackerTypes = Array.isArray(attackerMoveData?.type)
    ? attackerMoveData.type
    : [attackerMoveData?.type];

  const defenderTypes = Array.isArray(defenderMoveName)
    ? defenderMoveName
    : [defenderMoveName];

  if (attackerTypes.includes("Hide") || defenderTypes.includes("Hide")) {
    return 0;
  }

  if (attackerTypes.includes("Undamageable") || defenderTypes.includes("Undamageable")) {
    return 0;
  }


  if (attackerTypes.includes("Trap") && (!defenderMoveName || defenderMoveName === null)) {
    return 0;
  }

  const baseDamage = attackerMoveData?.damage || 0;

  if (attackerTypes.includes("Heal")) {
    return -baseDamage;
  }

  if (!defenderMoveName || beats(attackerTypes, defenderTypes)) {
  let damage = baseDamage;

  const defenderEnemy = context?.defenderEnemy;
  const defenderCardData = context?.defenderCardData;

  // Apply weakness multiplier
  if (defenderEnemy?.weakness?.length) {
    for (const type of attackerTypes) {
      const weakness = defenderEnemy.weakness.find(w => w.type === type);
      if (weakness) {
        damage *= weakness.debuff || 1;
      }
    }
  }

  // Apply strength (resistance) reduction
  if (defenderEnemy?.strength?.length) {
    for (const type of attackerTypes) {
      const strength = defenderEnemy.strength.find(s => s.type === type);
      if (strength) {
        if (strength.buff === "Immunity") {
          return 0;  //∞
        } else {
          const buffValue = parseFloat(strength.buff);
          if (!isNaN(buffValue) && buffValue > 0) {
            damage /= buffValue;
          }
        }
      }
    }
  }

  // Vengebite logic
  if (attackerMoveData.name === 'Vengebite') {
    const attackCount = context?.otherEnemyAttacks || 0;
    damage = 10 + 5 * attackCount;
  }

  return damage;
  }

  return 0;
}



