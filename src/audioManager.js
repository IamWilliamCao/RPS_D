const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const musicBuffers = {};
let currentSource = null;
let currentGainNode = null;
let sfxVolume = 0.3;

const audioTracks = {
  // Music tracks to be handled by Web Audio API
  cavern: '/audio/cavern.wav',
  meadows: '/audio/meadows.wav',
  battle_chill: '/audio/battle_chill.wav',
  battle_tense: '/audio/battle_tense.wav',
  battle_webite: '/audio/battle_webite.wav',

  // SFX still use HTMLAudioElement
  click: new Audio('/audio/click.wav'),
  select: new Audio('/audio/select.wav'),
  damage: new Audio('/audio/damage.mp3'),
};

async function loadAudioBuffer(name) {
  if (musicBuffers[name]) return musicBuffers[name];
  const url = audioTracks[name];
  const res = await fetch(url);
  const arrayBuffer = await res.arrayBuffer();
  const buffer = await audioCtx.decodeAudioData(arrayBuffer);
  musicBuffers[name] = buffer;
  return buffer;
}

function fadeInWebAudio(gainNode, duration, targetVolume) {
  const now = audioCtx.currentTime;
  gainNode.gain.setValueAtTime(0, now);
  gainNode.gain.linearRampToValueAtTime(targetVolume, now + duration);
}

function fadeOutWebAudio(gainNode, duration) {
  const now = audioCtx.currentTime;
  gainNode.gain.linearRampToValueAtTime(0, now + duration);
}

export async function playMusic(trackName, volume = 1.0) {
  console.log("▶️ playMusic called:", trackName);
  if (!trackName || !audioTracks[trackName]) return;

  const buffer = await loadAudioBuffer(trackName);

  // Fade out current music
  if (currentSource) {
    fadeOutWebAudio(currentSource.gainNode, 1.0);
    currentSource.stop(audioCtx.currentTime + 1.0);
  }

  const source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.loop = true;

  const gainNode = audioCtx.createGain();
  gainNode.gain.value = 0;

  source.connect(gainNode).connect(audioCtx.destination);
  source.start();

  fadeInWebAudio(gainNode, 1.0, volume);

  source.gainNode = gainNode; 
  currentSource = source;      
  currentGainNode = gainNode;
}

export function updateMusicVolume(volume) {
  if (currentGainNode) {
    currentGainNode.gain.setTargetAtTime(volume, audioCtx.currentTime, 0.1);
  }
}

export function updateSFXVolume(volume) {
  sfxVolume = volume;
}

// Map music by dungeon level (based on mapViewDungeon)
export function getMapMusic(dungeonLevel) {
  switch (dungeonLevel) {
    case 1:
      return 'cavern';
    case 2:
      return 'meadows';
    default:
      return null;
  }
}

// Battle music by tile
const battleMusicMap = {
  'battle_chill': [1, 2, 3, 4, 6, 6.1, 6.2, 7, 7.1, 8, 9, 10, 11, 11.2, 12, 13, 14, 16, 17, 18, 19, 20],
  'battle_tense': [5, 15, 11.3, 7.2],
  'battle_webite': [14.1, 14.2, 14.3],
};

export function getBattleMusic(tile) {
  for (const [trackKey, tileList] of Object.entries(battleMusicMap)) {
    if (tileList.includes(tile)) {
      return trackKey;
    }
  }
  return null;
}

// Utility: play sound effect (non-looped, overlapping)
let clickAudio = new Audio('/audio/click.wav');
clickAudio.preload = 'auto';

export function playSFX(name) {
  if (name === 'click') {
    try {
      clickAudio.pause();
      clickAudio.currentTime = 0;
      clickAudio.volume = sfxVolume;
      clickAudio.play().catch(() => {});
    } catch (e) {
      console.warn('Click sound failed', e);
    }
    return;
  }

  const track = audioTracks[name];
  if (track instanceof Audio) {
    const clone = track.cloneNode(); // allows overlapping playback
    clone.volume = sfxVolume;
    clone.play().catch(() => {});
  } else {
    console.warn(`SFX not found: ${name}`);
  }
}


