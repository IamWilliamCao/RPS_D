import React, { useState, useEffect } from 'react';
import './DungeonMap.css';
import { GiBackpack } from 'react-icons/gi';
import cardData from './cards/cardData';
import { tileConnections } from './tileConnections';

function DungeonMap({
  currentTile,
  completedTiles,
  mapViewDungeon,
  setMapViewDungeon,
  setCurrentTile,
  dungeonLevel,
  setFadeDungeonOut,
  setInBattle,
  setShowDungeon,
  fadeDungeonOut,
  coinCount,
  showBackpack,
  setShowBackpack,
  playerBackpack,
  setDialogVisible,
  setDialogText,
  setDialogName
}) {


const maxTile = 20; 

const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

const renderTile = (tile) => (
  <div
    key={tile}
    className={`tile ${isTileUnlocked(tile) ? 'glow' : ''} ${!isTileUnlocked(tile) ? 'locked' : ''}`}
    onClick={() => isTileUnlocked(tile) && handleTileClick(tile)}
  >
    {tile === currentTile && <div className="player-icon"></div>}
  </div>
);

const isTileUnlocked = (tile) => {
  // 1. You can re-enter current tile (if not yet beaten)
  if (tile === currentTile && !completedTiles.includes(tile)) return true;

  // 2. You can go to any tile that's completed
  if (completedTiles.includes(tile)) return false;

  // 3. Any tile listed in tileConnections of a completed tile is also allowed
  for (let t of completedTiles) {
    const nexts = tileConnections[t] || [];
    if (nexts.includes(tile)) return true;
  }

  return false;
};

useEffect(() => {
  const handleMouseMove = (e) => {
    setMousePos({
      x: e.clientX / window.innerWidth,   // 0 to 1
      y: e.clientY / window.innerHeight,  // 0 to 1
    });
  };
  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);

const handleTileClick = (i) => {
  const tileIsInView = mapViewDungeon === 1 ? i >= 0 && i <= 4 : i >= 5 && i <= 20;

  if (!tileIsInView || !isTileUnlocked(i)) return;

  if (i === 14.2) {
    // Intercept this tile and show dialog instead of battle
    setDialogName('Game Dev');
    setDialogText("Thanks for playing! This area is still under development, but Level 14.1 gives you a glimpse of future contents to come. Stay tuned!");
    setDialogVisible(true);
    return;
  }

  setCurrentTile(i);
  setFadeDungeonOut(true);
  setTimeout(() => {
    setInBattle(true);
    setShowDungeon(false);
    setFadeDungeonOut(false);
  }, 500);
};


  const environmentElements = mapViewDungeon === 2
    ? [
        {
          key: 'grass-1',
          src: require('./assets/dungeonParts/grass.png'),
          baseLeft: 80,
          baseBottom: -120,
          size: 300,
          blur: 0,
          depth: 2,
          tone: 0.9,
        },
        {
          key: 'grass-2',
          src: require('./assets/dungeonParts/grass.png'),
          baseLeft: 60,
          baseBottom: -120,
          size: 300,
          blur: 4,
          depth: 1,
          tone: 0.3,
        },
        {
          key: 'grass-3',
          src: require('./assets/dungeonParts/high-grass.png'),
          baseLeft: 40,
          baseBottom: -120,
          size: 300,
          blur: 0,
          depth: 2,
          tone: 0.9,
        },
        {
          key: 'grass-4',
          src: require('./assets/dungeonParts/grass.png'),
          baseLeft: 20,
          baseBottom: -120,
          size: 250,
          blur: 4,
          depth: 1,
          tone: 0.3,
        },
        {
          key: 'grass-5',
          src: require('./assets/dungeonParts/grass.png'),
          baseLeft: 0,
          baseBottom: -120,
          size: 250,
          blur: 5,
          depth: 0.5,
          tone: 0.2,
        },
        {
          key: 'tree-1',
          src: require('./assets/dungeonParts/pine-tree.png'),
          baseLeft: 70,
          baseBottom: -120,
          size: 350,
          blur: 3,
          depth: 0.3,
          tone: 0.2,
        },
        {
          key: 'tent-1',
          src: require('./assets/dungeonParts/camping-tent.png'),
          baseLeft: 10,
          baseBottom: -170,
          size: 300,
          blur: 5,
          depth: 0.2,
          tone: 0.9,
        },
    ]
:   [
  {
    key: 'stalactite-1',
    src: require('./assets/dungeonParts/stalagtite2.png'),
    baseLeft: 80,
    baseTop: -150,
    size: 400,
    blur: 0,
    depth: 4,
    tone: 0.9,
  },
  {
    key: 'stalactite-2',
    src: require('./assets/dungeonParts/stalagtite.png'),
    baseLeft: 70,
    baseTop: -10,
    size: 200,
    blur: 3,
    depth: 0.5,
    tone: 0.6,
  },
  {
    key: 'stalactite-3',
    src: require('./assets/dungeonParts/stalagtite.png'),
    baseLeft: 0,
    baseTop: -50,
    size: 400,
    blur: 0,
    depth: 4,
    tone: 1,
  },
  {
    key: 'stalactite-4',
    src: require('./assets/dungeonParts/stalagtite2.png'),
    baseLeft: 40,
    baseTop: -50,
    size: 200,
    blur: 3,
    depth: 0.5,
    tone: 0.4,
  },
  {
    key: 'stalactite-5',
    src: require('./assets/dungeonParts/stalagtite.png'),
    baseLeft: 30,
    baseTop: 0,
    size: 100,
    blur: 5,
    depth: 0.5,
   tone: 0.4,
  },
  {
    key: 'spike-1',
    src: require('./assets/dungeonParts/caveBelow.png'),
    baseLeft: 60,
    baseBottom: -120,
    size: 400,
    blur: 0,
    depth: 0.7,
  },
  {
    key: 'path',
    src: require('./assets/dungeonParts/caveRock.png'),
    baseLeft: 20,
    baseBottom: -190,
    size: 200,
    blur: 2,
    depth: 0.1,
    tone: 0.4,
  },
];

  return (
    <div className={`dungeon ${fadeDungeonOut ? 'fade-out' : 'fade-in'}`}>
      {currentTile > 4 && (
        <button
          onClick={() => setShowBackpack(true)}
          className="backpack-button"
          aria-label="Open Backpack"
        >
          <GiBackpack />
        </button>
      )}
        
        
      {showBackpack && (
        <>
          <div className="blur-overlay" onClick={() => setShowBackpack(false)} />
          <div className="backpack-popup">
            <div className="backpack-header">
              <h2>Backpack</h2>
              <button
                onClick={() => setShowBackpack(false)}
                className="backpack-close"
                aria-label="Close Backpack"
              >
                ✕
              </button>
            </div>

            <div className="backpack-grid">
              {coinCount > 0 && (
                <div className="card backpack-card">
                  💰 {coinCount} Coins
                  <div className="tooltip">
                    <strong>Coins</strong>
                    <br />
                    Used for future purchases or bribes.
                  </div>
                </div>
              )}
              {playerBackpack.map((card, i) => {
                const data = cardData[card];
                return (
                  <div key={i} className="card backpack-card">
                    {data?.displayName || card}
                    <div className="tooltip">
                      <strong>{data?.displayName || card}</strong>
                      {(Array.isArray(data?.description)
                        ? data.description
                        : [data?.description]
                      ).map((line, i) => (
                        <React.Fragment key={i}>
                          <br />
                          {line}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

<div className="stalactite-container">
  {environmentElements.map((el) => {
    const shiftX = (mousePos.x - 0.5) * 40 * el.depth;
    const shiftY = (mousePos.y - 0.5) * 20 * el.depth;

    return (
      <img
        key={el.key}
        src={el.src}
        alt={el.key}
        className="stalactite-image"
        style={{
          left: `calc(${el.baseLeft}% + ${shiftX}px)`,

            ...(el.baseTop !== undefined
                ? { top: `calc(${el.baseTop}px + ${shiftY}px)` }
                : el.baseBottom !== undefined
                ? { bottom: `calc(${el.baseBottom}px + ${shiftY}px)` }
                : {}),
                
          width: `${el.size}px`,
          filter: `blur(${el.blur}px) brightness(${el.tone || 1})`,
          zIndex: el.depth,
          
        }}
      />
    );
  })}
</div>

    {mapViewDungeon === 2 && (
    <>
        <img
        src={require('./assets/dungeonParts/cloud1.png')}
        className="alternating-cloud cloud1-image"
        alt="Cloud 1"
        />
        <img
        src={require('./assets/dungeonParts/cloud2.png')}
        className="alternating-cloud cloud2-image"
        alt="Cloud 2"
        />
    </>
    )}

    <div className={`dungeon-map-title ${mapViewDungeon === 1 ? 'map1-title' : 'map2-title'}`}>
    {mapViewDungeon === 1 ? 'The Cavern' : 'The Meadow'}
    </div>

        {mapViewDungeon === 1 ? (
        <div className="dungeon-grid-horizontal-simple">
            {[0, 1, 2, 3, 4].map((tile) => (
            <div
                key={tile}
                className={`tile ${isTileUnlocked(tile) ? 'glow' : ''} ${!isTileUnlocked(tile) ? 'locked' : ''}`}
                onClick={() => isTileUnlocked(tile) && handleTileClick(tile)}
            >
                {tile === currentTile && <div className="player-icon"></div>}
            </div>
            ))}
            
    <div
    key="gate-deco"
    style={{ gridColumnStart: 1, gridRowStart: 1 }}
    className="tile village-deco"
    >
    <img
        src={require('./assets/dungeonParts/gateway.png')}
        alt="Village"
        style={{ width: '100%', height: '100%' }}
    />
    </div>
{/* 
<div className="gate-tile">
  <img
    src={require('./assets/dungeonParts/dungeon-gate.png')}
    alt="Dungeon Gate"
    className="gate-image"
  />
</div> 
*/}

        </div>
        ) : (

 <div className="dungeon-grid-9x9">

    {[5, 6].map((tile, i) => (
      <div
        key={tile}
        style={{ gridColumnStart: 1 + i, gridRowStart: 5 }}
        className={`tile ${isTileUnlocked(tile) ? 'glow' : ''} ${!isTileUnlocked(tile) ? 'locked' : ''}`}
        onClick={() => isTileUnlocked(tile) && handleTileClick(tile)}
      >
                {tile}
      </div>
    ))}

    {[7, 7.1, 7.2].map((tile, i) => (
      <div
        key={tile}
        style={{ gridColumnStart: 2, gridRowStart: 4 - i }} // Column 2 (tile 6), rows 3 to 0
        className={`tile ${isTileUnlocked(tile) ? 'glow' : ''} ${!isTileUnlocked(tile) ? 'locked' : ''}`}
        onClick={() => isTileUnlocked(tile) && handleTileClick(tile)}
      >
                {tile}
      </div>
    ))}

    {[8, 9, 10, 11, 12, 13, 14].map((tile, i) => (
      <div
        key={tile}
        style={{ gridColumnStart: 3 + i, gridRowStart: 4 }}
        className={`tile ${isTileUnlocked(tile) ? 'glow' : ''} ${!isTileUnlocked(tile) ? 'locked' : ''}`}
        onClick={() => isTileUnlocked(tile) && handleTileClick(tile)}
      >
                {tile}
      </div>
    ))}

    {[11.1, 11.2, 11.3].map((tile, i) => (
      <div
        key={tile}
        style={{ gridColumnStart: 6, gridRowStart: 5 + i }}
        className={`tile ${isTileUnlocked(tile) ? 'glow' : ''} ${!isTileUnlocked(tile) ? 'locked' : ''}`}
        onClick={() => isTileUnlocked(tile) && handleTileClick(tile)}
      >
                {tile}
      </div>
    ))}

    {[15, 16].map((tile, i) => (
      <div
        key={tile}
        style={{ gridColumnStart: 9, gridRowStart: 5 + i }}
        className={`tile ${isTileUnlocked(tile) ? 'glow' : ''} ${!isTileUnlocked(tile) ? 'locked' : ''}`}
        onClick={() => isTileUnlocked(tile) && handleTileClick(tile)}
      >
                {tile}
      </div>
    ))}

    {[17, 18].map((tile, i) => (
      <div
        key={tile}
        style={{ gridColumnStart: 10 + i, gridRowStart: 6}}
        className={`tile ${isTileUnlocked(tile) ? 'glow' : ''} ${!isTileUnlocked(tile) ? 'locked' : ''}`}
        onClick={() => isTileUnlocked(tile) && handleTileClick(tile)}
      >
                {tile}
      </div>
    ))}

    {[6.1, 6.2].map((tile, i) => (
      <div
        key={tile}
        style={{ gridColumnStart: 2, gridRowStart: 6 + i }}
        className={`tile ${isTileUnlocked(tile) ? 'glow' : ''} ${!isTileUnlocked(tile) ? 'locked' : ''}`}
        onClick={() => isTileUnlocked(tile) && handleTileClick(tile)}
      >
                {tile}
      </div>
    ))}

    {[14.1, 14.2, 14.3].map((tile, i) => (
      <div
        key={tile}
        style={{ gridColumnStart: 10 + i, gridRowStart: 3}}
        className={`tile ${isTileUnlocked(tile) ? 'glow' : ''} ${!isTileUnlocked(tile) ? 'locked' : ''}`}
        onClick={() => isTileUnlocked(tile) && handleTileClick(tile)}
      >
                {tile}
      </div>
    ))}

    {/* Decorative village tile under 6.2 with quest logic */}
    <div
    key="village-deco"
    style={{ gridColumnStart: 2, gridRowStart: 8, position: 'relative' }}
    className="tile village-deco"
    >
    <img
        src={
        playerBackpack.includes("Village SOS")
            ? require('./assets/dungeonParts/village.png')
            : require('./assets/dungeonParts/question.png')
        }
        alt={playerBackpack.includes("Village SOS") ? "Village (Quest: Village SOS)" : "???"}
        style={{ width: '100%', height: '100%' }}
    />
    <div className="village-tooltip">
        {playerBackpack.includes("Village SOS") ? "Village (Quest: Village SOS)" : "???"}
    </div>
    </div>

    {/* Decorative village tile under 6.2 */}
    <div
    key="village-deco2"
    style={{ gridColumnStart: 1, gridRowStart: 2 }}
    className="tile village-deco"
    >
    <img
        src={require('./assets/dungeonParts/wood-cabin.png')}
        alt="Village"
        style={{ width: '100%', height: '100%' }}
    />
    <div className="village-tooltip">
        {"Armory"}
    </div>
    </div>

    <div
    key="boss-deco"
    style={{ gridColumnStart: 12, gridRowStart: 6 }}
    className="tile village-deco"
    >
    <img
        src={require('./assets/dungeonParts/medieval-barracks.png')}
        alt="Village"
        style={{ width: '100%', height: '100%' }}
    />
    <div className="village-tooltip">
        {"The Broken Throne (Quest: King Goblin)"}
    </div>
    </div>

    <div
    key="barrack-deco2"
    style={{ gridColumnStart: 6, gridRowStart: 8 }}
    className="tile village-deco"
    >
    <img
        src={
        playerBackpack.includes("Hunt the Rebel")
            ? require('./assets/dungeonParts/barracks-tent.png')
            : require('./assets/dungeonParts/question.png')
        }
        alt={playerBackpack.includes("Hunt the Rebel") ? "Mokgut's Camp (Quest: Hunt the Rebel)" : "???"}
        style={{ width: '100%', height: '100%' }}
    />
    <div className="village-tooltip">
        {playerBackpack.includes("Hunt the Rebel") ? "Mokgut's Camp (Quest: Hunt the Rebel)" : "???"}
    </div>
    </div>

    <div
    key="web-deco"
    style={{ gridColumnStart: 10, gridRowStart: 4 }}
    className="tile village-deco"
    >
    <img
        src={require('./assets/dungeonParts/crypt-entrance.png')}
        alt="Village"
        style={{ width: '100%', height: '100%' }}
    />
    <div className="village-tooltip">
        {"Webbed Labyrinth"}
    </div>
    </div>

    <div
      key="web2-deco"
      style={{
        gridColumnStart: 12,
        gridRowStart: 3,
        pointerEvents: 'none',
      }}
      className="tile village-deco"
    >
      <img
        src={require('./assets/dungeonParts/web1.png')}
        alt="Village"
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: 'none', 
        }}
      />
    </div>

    <div
    key="web3-deco"
    style={{ gridColumnStart: 11, gridRowStart: 3, pointerEvents: 'none',}}
    className="tile village-deco"
    >
    <img
        src={require('./assets/dungeonParts/web2.png')}
        alt="Village"
        style={{ width: '120%', height: '100%', pointerEvents: 'none', }}
    />
    </div>

{/*
    <div
    key="shop-deco"
    style={{ gridColumnStart: 9, gridRowStart: 7 }}
    className="tile village-deco"
    >
    <img
        src={require('./assets/dungeonParts/shop.png')}
        alt="Village"
        style={{ width: '100%', height: '100%' }}
    />
    <div className="village-tooltip">
        {"Shop"}
    </div>
    </div>
*/}

  </div>

      )}

        {mapViewDungeon > 1 && (
        <button
            className="dungeon-arrow left"
            onClick={() => setMapViewDungeon((prev) => prev - 1)}
        >
            ←
        </button>
        )}

        {mapViewDungeon === 1 && currentTile >= 5 && (
        <button
            className="dungeon-arrow right"
            onClick={() => setMapViewDungeon((prev) => prev + 1)}
        >
            →
        </button>
        )}

    </div>
    
  );
}

export default DungeonMap;
