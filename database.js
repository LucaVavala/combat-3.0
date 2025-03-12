"use strict";

// Weapons Database – only the name and damage (we only use the first number of the damage string)
const weaponDatabase = [
  { name: "Bow and Arrow", damage: "7/5/–" },
  { name: "Black powder pistol", damage: "7/3/6" },
  { name: "Crossbow", damage: "7/4/6" },
  { name: "Musket", damage: "8/5/6" },
  { name: "American Derringer Mini-Cop", damage: "11/1/6" },
  { name: "AMT Automag v", damage: "12/3/5" },
  { name: "Auto-ordnance pit Bull", damage: "10/1/4" },
  { name: "Beretta 92FS Centurion", damage: "10/2/3" },
  { name: "Beretta Model 21 Bobcat", damage: "8/1/4" },
  { name: "Beretta Model 950BS Jet Fire", damage: "8/1/4" },
  { name: "Beretta M9", damage: "10/2/3" },
  { name: "Browning Hi-power", damage: "10/2/3" },
  { name: "Colt Delta Elite MKIv Series 80", damage: "11/2/4" },
  { name: "Colt 380 Gov't pocketlite", damage: "8/1/4" },
  { name: "Colt 1911A", damage: "10/2/4" },
  { name: "CZ 75B", damage: "10/1/3" },
  { name: "Desert Eagle .357 Magnum", damage: "11/3/3" },
  { name: "Desert Eagle .50AE", damage: "12/3/4" },
  { name: "E.T. 'Series one Laseraim'", damage: "11/3/3" },
  { name: "Glock 17", damage: "10/1/3" },
  { name: "Glock 18", damage: "10/1/3" },
  { name: "Glock 18 Variant", damage: "10/2/1" },
  { name: "Grendel p-12", damage: "9/1/3" },
  { name: "Grendel p-30", damage: "8/1/1" },
  { name: "Heckler & Koch p7", damage: "10/2/4" },
  { name: "Heckler & Koch HK45C", damage: "10/2/3" },
  { name: "Kahr K9", damage: "10/1/4" },
  { name: "Intratec Tec-9", damage: "10/3/1" },
  { name: "Intratec Tec-22", damage: "8/2/1" },
  { name: "Kimber Solo Carry", damage: "10/1/6" },
  { name: "Llama Large Frame", damage: "10/2/4" },
  { name: "Makarov", damage: "10/2/4" },
  { name: "Norinco Type M1911", damage: "10/3/4" },
  { name: "Norinco Tokarev", damage: "10/2/4" },
  { name: "ruger p89", damage: "10/2/3" },
  { name: "Sig-Sauer p-220", damage: "10/2/4" },
  { name: "Smith & Wesson 2213 Sportsman", damage: "8/1/4" },
  { name: "Smith & Wesson 3566", damage: "11/3/3" },
  { name: "Smith & Wesson Sigma", damage: "10/1/3" },
  { name: "Walther p-5 Compact", damage: "10/1/4" },
  { name: "Walther ppK", damage: "9/1/5" },
  { name: "Chiappa rhino", damage: "12/3/5" },
  { name: "Colt Detective Special", damage: "9/1/5" },
  { name: "Colt King Cobra", damage: "11/3/5" },
  { name: "rossi Model 515", damage: "8/2/4" },
  { name: "rossi Model 851", damage: "9/2/5" },
  { name: "S&W Model 19 Combat Magnum", damage: "11/2/5" },
  { name: "Smith & Wesson Model 500", damage: "12/3/5" },
  { name: "Taurus Model 85", damage: "9/2/5" },
  { name: "Thompson Center Arms Contender", damage: "12/3/6" },
  { name: "Beretta M12", damage: "10/5/6" },
  { name: "FN p90", damage: "13/5/6" },
  { name: "Colt M6351", damage: "10/5/1" },
  { name: "Heckler & Koch Mp5", damage: "10/5/1" },
  { name: "Heckler & Koch Mp5 K", damage: "10/3/1" },
  { name: "Heckler & Koch Mp5 police", damage: "11/5/1" },
  { name: "Heckler & Koch Mp7", damage: "12/5/1" },
  { name: "Heckler & Koch uMp", damage: "11/5/1" },
  { name: "Mp40", damage: "10/5/1" },
  { name: "M3", damage: "10/5/1" },
  { name: "Mini uZI", damage: "10/3/1" },
  { name: "ruger Mp9", damage: "10/3/1" },
  { name: "TDI vector", damage: "11/5/2" },
  { name: "Thompson M1A1", damage: "10/5/1" },
  { name: "uZI", damage: "10/4/1" },
  { name: "Amsel Striker", damage: "13/4/3" },
  { name: "Benelli 121", damage: "13/5/4" },
  { name: "Benelli 90 M3", damage: "13/5/4" },
  { name: "Beretta 1201 riot", damage: "13/5/5" },
  { name: "Bernadelli", damage: "13/5/3" },
  { name: "Franchi SpAS-12", damage: "13/5/4" },
  { name: "Mossberg Special purpose", damage: "13/5/4" },
  { name: "Remington 870 police", damage: "13/5/4" },
  { name: "Ruger red Label", damage: "10/5/6" },
  { name: "Winchester Model 1300 Marine", damage: "13/5/4" },
  { name: "AK-47", damage: "13/5/1" },
  { name: "AK-74", damage: "13/5/1" },
  { name: "K2", damage: "13/4/1" },
  { name: "FN F2000", damage: "13/5/1" },
  { name: "M16", damage: "13/5/1" },
  { name: "M14", damage: "13/5/2" },
  { name: "SvD Dragunov", damage: "13/5/3" },
  { name: "Tavor TAr-21", damage: "13/5/1" },
  { name: "Winchester Model 70", damage: "12/5/5" }
];

// Schticks Database – each entry is a string; only the title (text before the first colon) is bolded.
const schtickDatabase = [
  "Ablative Lackey: If at least one mook is up, as an interrupt after the foe takes Wound Points, the foe takes 0 Wound Points and 1 mook goes down.",
  "Anti-Mystical: +1 Defense vs. Creature Powers and Sorcery attacks.",
  "Anti-Tech: +1 Defense vs. Guns, Mutant, and Scroungetech attacks.",
  "Back to the Wall: If the foe is attacked by more than one character in any sequence, the shot cost of a standard attack drops to 2 until end of sequence.",
  "Bark of the Underdog: +2 Toughness when more than half the mooks on the foe’s side have been put down.",
  "Bone Fissure (Sorcerer, Supernatural Creature): Spend 1 shot; if the foe is still active at the start of the next keyframe, target hero takes 7 Wound Points at the start of their next fight.",
  "Broken Trigram (Sorcerer): Spend 1 shot; if the foe is still active at the start of the next keyframe, target hero suffers a financial setback in a later scene.",
  "Clear Aim: +3 Attack vs. characters whose current Defense exceeds their base Defense.",
  "Contagion (Supernatural Creature): On a successful Bite attack, target hero makes a Defense Check. On failure, the victim takes 1 Impairment until the end of the fight and requires a storyline cure.",
  "Copy Cat: After missing a Dodging hero, the foe gains +2 Defense until next keyframe.",
  "Cursed Weapon (Sorcerer, Supernatural Creature): When a hero misses a weapon attack, subsequent attacks with that weapon take a –2 penalty and cost +1 shot.",
  "Cyclical Flow (Martial Artist): Damage equals current shot number +5.",
  "Defensive Mastery (Martial Artist): When the foe takes more than 10 Wound Points from a weapon-wielding hero, the foe may spend 1 shot to Disarm the hero.",
  "Delayed Death Strike (Martial Artist): On a successful unarmed strike, target hero starts their next fight with 1 Mark of Death.",
  "Disarm: The foe’s first successful hit against a hero each fight disarms that hero.",
  "Disfiguring Strike: On an attack with an Outcome of 4 or more, the target hero suffers a gruesome (if temporary) injury that leads to a complication.",
  "Disrupt Meridian (Martial Artist): Spend 6 shots as an interrupt after a successful attack. Roll a die: Even result, damage doubles. Odd result, hero takes 0 damage.",
  "Domination (Sorcerer, Supernatural Creature, Scroungetech): The foe spends 1 shot and forces a hero to make a Difficulty 10 Will Check. On failure, the foe chooses their next attack target.",
  "Don't Turn Your Back: +2 Attack if the foe has not been attacked since its last attack.",
  "Dread Resurrection (Sorcerer): Spend 1 shot; if the foe is still active at start of next keyframe, an enemy of the target will return from the dead in a later scene.",
  "Energy Drain (Mutant, Supernatural Creature, Scroungetech): +2 Attack if any hero spent a Fortune point since foe’s previous attack.",
  "Explosive Vest: When the foe goes down, all nearby heroes take a Smackdown of 12.",
  "Flying Guillotine (Martial Artist): On a successful Martial Arts ranged hit, note damage based on a Damage Value of 20. If not removed within 3 shots, hero suffers that damage.",
  "Furious Wrath: If the foe’s last attack missed, its current one gains +1 Attack and +3 Damage.",
  "Garrotte of Destiny (Sorcerer, Supernatural Creature): At the beginning of each sequence, all heroes lose 1 Fortune while this foe is active.",
  "Headshot: After a successful attack, the foe may decide that a hero takes –2 penalty to skill checks until beginning of a subsequent fight.",
  "Heal Steal (Sorcerer): When a hero uses a healing effect, the foe spends 1 shot to cancel the effect if it succeeds on a Sorcery check against the hero’s Defense.",
  "Helix Shredder (Scroungetech): On a successful attack, the target takes –1 penalty to Up Checks until end of fight.",
  "Hot Metal (Sorcerer, Supernatural Creature, Mutant): On a successful hit, a hero carrying a weapon must drop that weapon or suffer a –2 attack penalty until next keyframe.",
  "Implant Suggestion (Sorcerer, Supernatural Creature, Scroungetech): Spend 1 shot; if the foe is still active at the start of the next keyframe, target hero takes an action in favor of the foe’s faction in a later scene.",
  "Inspire Loyalty: When this foe goes down, all active Featured Foes make an interrupt attack at a shot cost of 0.",
  "Kneecapper: When the foe’s close attack hits with an Outcome of 3 or more, the target loses 3 Speed until end of fight.",
  "Last Rally: As an interrupt after taking 35+ Wound Points, the foe makes an attack at +2 Attack and +6 Damage.",
  "Nuh-uh: As an interrupt when a hero regains any Fortune, spend 3 shots to attack that hero.",
  "Offended Honor: +1 Damage for each hero after the first that has attacked it during the current fight.",
  "Quantum Bastard (Scroungetech): While the foe is up, all heroes take 5 Wound Points each time they roll boxcars.",
  "Teleport: The foe can instantly move from ranged to close combat for an attack, then back to ranged distance.",
  "Toxic Dart: When downed, the foe makes an attack against any hero. If successful, 10 minutes after the fight ends, the hero must make a Constitution Check or take 15 Wound Points.",
  "Turnabout: While the foe is up, this and all other foes lose 5 Wound Points on every hero’s successful Up Check.",
  "Fender Blender: If a foe is hit as a pedestrian during a chase, the foe takes no Wound Points. The Wound Points the foe would have taken are added to the Driver’s Chase Point total as a ram or sideswipe.",
  "Inspire Fanaticism: When a weapon-wielding hero announces an attack while at least 1 mook is still up, the foe spends 1 shot as an interrupt. One mook goes down. Roll a die: Odd result, the attack is nullified, and the hero is Disarmed.",
  "Leveling Strike: After a successful attack, the target hero is at –1 Attack vs. mooks while the foe remains active. This penalty is not cumulative.",
  "Mach Schnell!: Add +3 to mook initiative while this foe is up.",
  "Medkit: Spend 3 shots to remove 7 Wound Points from a Boss or Featured Foe.",
  "Mimic Form: Spend 1 shot as an interrupt after taking Wound Points from an attack with a higher Damage Value than the foe’s weapons. The foe’s Damage Value now equals that of the attacking hero.",
  "Monkey See, Monkey Crouch: When a hero Dodges, the foe gains +3 Defense against the next attack. This is not cumulative.",
  "Not So Fast: When a hero Cheeses It, this foe may spend 3 shots as an interrupt to deal that hero 14 Damage. This does not expend the bad guys’ one chance to stop the hero from Cheesing It.",
  "Numerical Superiority: Add +2 Toughness when more than half the mooks on the foe’s side are still standing.",
  "Oxygen Sink (Mutant): While the foe is up, heroes take –1 penalty to Up Checks.",
  "Parting Shot: If the foe successfully Cheeses It despite a hero’s attempt to stop it, the hero takes 14 Damage.",
  "Pause That Refreshes: As an interrupt when a hero makes a Dodge, the foe may remove 4 Wound Points from any foe, including itself.",
  "Pep Talk: Spend 1 shot and make an attack against the Defense of the hero the foe last tried to hit. On a success, a number of downed mooks equal to 1 plus the Outcome recovers, and the foe spends 2 more shots.",
  "Protective Fury (Martial Artist): When a mook is downed by a weapon-wielding hero, the foe may spend 1 shot to Disarm that hero.",
  "Radiation Poisoning (Scroungetech, Mutant): Spend 3 shots and beat a hero’s Defense with a Scroungetech or Mutant Check; if the foe is still active at the end of a sequence, that hero takes 22 Damage.",
  "Reinforced Skeleton (Scroungetech, Mutant, Supernatural Creature): On a failed Martial Arts attack against the foe, the attacker takes Wound Points equal to the difference between the result and the foe’s Defense.",
  "Reversion Curse (Sorcerer, Ancient or Past Martial Artist): Spend 1 shot; if the foe is still active at the start of the next keyframe, all Transformed Animal heroes gain 5 Reversion Points at the start of the next session.",
  "Requires Group Effort: +1 Damage for each hero who has yet to attack the foe during the current fight.",
  "Retrench: Regain 7 Wound Points at the end of any sequence in which a hero Dodged.",
  "Rock Hard (Martial Artist, Supernatural Creature, Cyborg): Heroes making successful unarmed attacks against this foe take 2 Wound Points per attack.",
  "Screaming Steel (Sorcerer, Supernatural Creature, Mutant): On a successful attack against a hero fighting with a weapon, all mooks make a 0-shot cost attack on the hero as an interrupt every time the hero attacks with that weapon.",
  "Severed Love Line (Sorcerer): Spend 1 shot; if the foe is still active at the start of the next keyframe, target hero suffers a romantic setback in a later scene.",
  "Shattered Loyalties (Sorcerer): Spend 1 shot; if the foe is still active at the start of the next keyframe, target hero suffers a betrayal from a friendly supporting character in a later scene.",
  "Shouted Orders: As an interrupt when a mook hits a hero, the foe may spend 1 shot to add 4 Damage to the mook’s hit.",
  "Skull-Mounted Targeting Goggles (Cyborg): Add +3 Initiative if Wound Points are less than 20.",
  "Slipstrike (Martial Artist): When this foe’s attack against a hero is successful but deals less than 5 Wound Points to that hero, the hero is Disarmed.",
  "Spin the Cylinder (Featured Foe with Guns attack): After Reloading, the foe’s next attack is at +2 Attack and +6 Damage.",
  "Stasis Field (Scroungetech): On a successful attack with an Outcome of 3 or more, +1 to the Reload value of all guns the hero carries.",
  "Stunt Stopper: As an interrupt when a hero announces a stunt, spend 3 shots to make an attack against the hero.",
  "Supergun (Guns character): If the foe brings a hero to 35 or more Wound Points, the hero gains an additional Mark of Death.",
  "T is for Target: As an interrupt after a failed attack on a hero, spend 1 shot; up to three mooks, as an interrupt, may attack the hero.",
  "Tactical Genius: Spend 1 shot; until the foe goes down, mooks gain +2 Attack.",
  "Taskmaster (Boss): Add +3 to Featured Foe Initiative while the Boss is up.",
  "Tongue Grab (Supernatural Creature, Mutant): Spend 1 shot; the foe draws target hero from ranged to close combat distance.",
  "Vehicle Hit: Spend 3 shots and make an Attack against a driver’s Driving AV. The Driver’s vehicle takes Outcome +11 Chase Points, counting as a ram or sideswipe.",
  // DRIVING SCHTICKS:
  "Armor Plated: +2 to the Frame of the foe’s starting vehicle.",
  "Rehearsed Getaway: –3 to Chase Points dealt to the foe’s vehicle when a hero narrows the gap.",
  "Shibuya Slide: When driving as the evader in a chase, gain +2 Driving if one or more hero drivers have fewer Chase Points.",
  "Pedal to the Metal: When driving as the pursuer in a chase, gain +2 Driving if one or more hero drivers have fewer Chase Points.",
  "Wrench the Wheel: –3 to Chase Points dealt to the foe’s vehicle in any ram or sideswipe.",
  "Braced for Impact: When the foe’s vehicle crashes, all occupants gain +4 Toughness against crash damage.",
  "Counterslam: If the foe’s vehicle’s higher Frame gives an opposing vehicle a Bump value, that value increases by 3.",
  "Dazed and Contused: Until the next keyframe, enemies exiting a vehicle the foe rammed or sideswiped take 1 point of Impairment and add 1 to all shot costs.",
  "High Gear: If the foe’s Initiative is lower than that of the first hero Driver to act, the foe’s Initiative equals that hero’s Initiative –1.",
  "Ram-Alama-Bam: When driving, if the foe rams a vehicle, gain +2 Frame. Also, +4 Damage Value when the foe hits a pedestrian.",
  "Wicked Ride: +2 to the Handling of the foe’s starting vehicle."
];

/*=======================
  Hard-coded PCs (Players)
=======================*/
const pcs = [
  { id: 100, name: "Ken", attack: 13, defense: 13, toughness: 6, speed: 8, fortune: 7, woundPoints: 0, isPC: true },
  { id: 101, name: "Oleg", attack: 14, backupAttack: 13, defense: 14, toughness: 7, speed: 7, fortune: 7, woundPoints: 0, isPC: true },
  { id: 102, name: "Bai Zhu", attack: 16, defense: 15, toughness: 5, speed: 6, fortune: 10, woundPoints: 0, isPC: true },
  { id: 103, name: "Shen Dao", attack: 14, defense: 13, toughness: 6, speed: 7, fortune: 8, woundPoints: 0, isPC: true }
];

/*=======================
  NPC Array and ID Counter
=======================*/
let npcs = [];
let npcIdCounter = 200;
function getNextNpcId() {
  return npcIdCounter++;
}

/*=======================
  DOM Elements
=======================*/
const pcList = document.getElementById('pcList');
const npcList = document.getElementById('npcList');

const addEnemyForm = document.getElementById('addEnemyForm');
const enemyNameInput = document.getElementById('enemyName');
const enemyTypeSelect = document.getElementById('enemyType');
const mookCountContainer = document.getElementById('mookCountContainer');
const mookCountInput = document.getElementById('mookCount');

const mookTemplateContainer = document.getElementById('mookTemplateContainer');
const mookTemplateSelect = document.getElementById('mookTemplate');
const featuredTemplateContainer = document.getElementById('featuredTemplateContainer');
const featuredTemplateSelect = document.getElementById('featuredTemplate');

const playerAttackerSelect = document.getElementById('playerAttacker');
const npcTargetSelect = document.getElementById('npcTarget');
const npcAttackerSelect = document.getElementById('npcAttacker');
const playerTargetSelect = document.getElementById('playerTarget');

const playerActionForm = document.getElementById('playerActionForm');
const npcActionForm = document.getElementById('npcActionForm');

const playerRollResultInput = document.getElementById('playerRollResult');
const playerModifierInput = document.getElementById('playerModifier');
const playerWeaponDamageInput = document.getElementById('playerWeaponDamage');

const npcModifierInput = document.getElementById('npcModifier');
const npcWeaponDamageInput = document.getElementById('npcWeaponDamage');
const npcRollDiceButton = document.getElementById('npcRollDiceButton');
const npcRollResultDiv = document.getElementById('npcRollResult');

const logList = document.getElementById('logList');
const exportButton = document.getElementById('exportButton');
const importButton = document.getElementById('importButton');
const importFileInput = document.getElementById('importFileInput');

/*=======================
  Modal Panel Elements
=======================*/
// Ensure these variables are declared only once.
let currentNpcIdModal = null;
const dbPanel = document.getElementById('dbPanel');
const dbClose = document.getElementById('dbClose');
const weaponListDB = document.getElementById('weaponListDB');
const schtickListDB = document.getElementById('schtickListDB');

/*=======================
  Utility Functions
=======================*/
function renderStatRow(label, statValue, id, statKey) {
  return `
    <div class="statRow">
      <span>${label}: <strong id="${statKey}-${id}">${statValue}</strong></span>
      <button data-id="${id}" class="inc${statKey}">+</button>
      <button data-id="${id}" class="dec${statKey}">–</button>
    </div>
  `;
}

function populateFeaturedTemplateDropdown() {
  featuredTemplateSelect.innerHTML = '<option value="" disabled selected>Select Template</option>';
  for (const key in featuredTemplates) {
    if (featuredTemplates.hasOwnProperty(key)) {
      const option = document.createElement('option');
      option.value = key;
      let label = key.replace(/([A-Z])/g, ' $1').trim();
      label = label.charAt(0).toUpperCase() + label.slice(1);
      option.textContent = label;
      featuredTemplateSelect.appendChild(option);
    }
  }
}
populateFeaturedTemplateDropdown();

function populateMookTemplateDropdown() {
  mookTemplateSelect.innerHTML = '<option value="" disabled selected>Select Mook Template</option>';
  for (const key in mookTemplates) {
    if (mookTemplates.hasOwnProperty(key)) {
      const option = document.createElement('option');
      option.value = key;
      let label = key.replace(/([A-Z])/g, ' $1').trim();
      label = label.charAt(0).toUpperCase() + label.slice(1);
      option.textContent = label;
      mookTemplateSelect.appendChild(option);
    }
  }
}
populateMookTemplateDropdown();

/*=======================
  Display Update Functions
=======================*/
function updatePcList() {
  pcList.innerHTML = '';
  pcs.forEach(pc => {
    let cardHTML = `<h3>${pc.name}</h3>`;
    cardHTML += renderStatRow("Attack", pc.attack, pc.id, "Attack");
    if (pc.backupAttack !== undefined) {
      cardHTML += renderStatRow("Backup Attack", pc.backupAttack, pc.id, "BackupAttack");
    }
    cardHTML += renderStatRow("Defense", pc.defense, pc.id, "Defense");
    cardHTML += renderStatRow("Toughness", pc.toughness, pc.id, "Toughness");
    cardHTML += renderStatRow("Speed", pc.speed, pc.id, "Speed");
    cardHTML += renderStatRow("Fortune", pc.fortune, pc.id, "Fortune");
    cardHTML += renderStatRow("Wound Points", pc.woundPoints, pc.id, "Wound");
    const li = document.createElement('li');
    li.className = "combatantCard";
    li.innerHTML = cardHTML;
    pcList.appendChild(li);
  });
  attachPcListeners();
}

function updateNpcList() {
  npcList.innerHTML = '';
  npcs.forEach(npc => {
    let cardHTML = "";
    if (npc.type === "mook") {
      cardHTML += `<h3>${npc.name} (Mook)</h3>`;
      cardHTML += renderStatRow("Attack", npc.attack, npc.id, "Attack");
      cardHTML += renderStatRow("Defense", npc.defense, npc.id, "Defense");
      cardHTML += renderStatRow("Toughness", npc.toughness, npc.id, "Toughness");
      cardHTML += renderStatRow("Speed", npc.speed, npc.id, "Speed");
      cardHTML += renderStatRow("Fortune", npc.fortune || 0, npc.id, "Fortune");
      cardHTML += `<div class="statRow">
                     <span>Mook Count: <strong id="mook-${npc.id}">${npc.count}</strong></span>
                     <button data-id="${npc.id}" class="incMook">+</button>
                     <button data-id="${npc.id}" class="decMook">–</button>
                   </div>`;
    } else {
      cardHTML += `<h3>${npc.name} (${npc.type.charAt(0).toUpperCase() + npc.type.slice(1)})</h3>`;
      cardHTML += renderStatRow("Attack", npc.attack, npc.id, "Attack");
      cardHTML += renderStatRow("Defense", npc.defense, npc.id, "Defense");
      cardHTML += renderStatRow("Toughness", npc.toughness, npc.id, "Toughness");
      cardHTML += renderStatRow("Speed", npc.speed, npc.id, "Speed");
      cardHTML += renderStatRow("Fortune", npc.fortune || 0, npc.id, "Fortune");
      cardHTML += renderStatRow("Wound Points", npc.woundPoints, npc.id, "Wound");
      // Display weapons (name and first damage number)
      if (npc.weapons && npc.weapons.length > 0) {
        cardHTML += `<div class="weaponList"><h4>Weapons:</h4><ul>`;
        npc.weapons.forEach(weapon => {
          const damageValue = weapon.damage.split("/")[0];
          cardHTML += `<li><strong>${weapon.name}</strong>: ${damageValue}</li>`;
        });
        cardHTML += `</ul></div>`;
      }
      // Display schticks (only bolding the title before the colon)
      if (npc.schticks && npc.schticks.length > 0) {
        cardHTML += `<div class="schtickList"><h4>Schticks:</h4><ul>`;
        npc.schticks.forEach(schtick => {
          const parts = schtick.split(':');
          if (parts.length > 1) {
            const title = parts[0].trim();
            const description = parts.slice(1).join(':').trim();
            cardHTML += `<li><strong>${title}</strong>: ${description}</li>`;
          } else {
            cardHTML += `<li><strong>${schtick}</strong></li>`;
          }
        });
        cardHTML += `</ul></div>`;
      }
      // '+' button for database panel
      cardHTML += `<button data-id="${npc.id}" class="addDB">+</button>`;
    }
    cardHTML += `<button data-id="${npc.id}" class="removeEnemy removeBtn">Remove</button>`;
    const li = document.createElement('li');
    li.className = "combatantCard";
    li.innerHTML = cardHTML;
    npcList.appendChild(li);
  });
  attachNpcListeners();
}

function updateAttackDropdowns() {
  playerAttackerSelect.innerHTML = '';
  pcs.forEach(pc => {
    const option = document.createElement('option');
    option.value = pc.id;
    option.textContent = pc.name;
    playerAttackerSelect.appendChild(option);
  });
  npcTargetSelect.innerHTML = '';
  npcs.forEach(npc => {
    if (npc.type !== "mook" || npc.count > 0) {
      const option = document.createElement('option');
      option.value = npc.id;
      option.textContent = npc.name;
      npcTargetSelect.appendChild(option);
    }
  });
  npcAttackerSelect.innerHTML = '';
  npcs.forEach(npc => {
    if (npc.type !== "mook" || npc.count > 0) {
      const option = document.createElement('option');
      option.value = npc.id;
      option.textContent = npc.name;
      npcAttackerSelect.appendChild(option);
    }
  });
  playerTargetSelect.innerHTML = '';
  pcs.forEach(pc => {
    const option = document.createElement('option');
    option.value = pc.id;
    option.textContent = pc.name;
    playerTargetSelect.appendChild(option);
  });
}

/*=======================
  Modal Panel Functions
=======================*/
function openDBPanel(npcId) {
  currentNpcIdModal = npcId;
  // Populate weapons list
  weaponListDB.innerHTML = '';
  weaponDatabase.forEach(item => {
    const li = document.createElement('li');
    const dmg = item.damage.split("/")[0];
    li.innerHTML = `<strong>${item.name}</strong>: ${dmg}`;
    li.addEventListener('click', () => {
      addWeaponToNpc(item);
      closeDBPanel();
    });
    weaponListDB.appendChild(li);
  });
  // Populate schticks list (bold only the title before the colon)
  schtickListDB.innerHTML = '';
  schtickDatabase.forEach(item => {
    const li = document.createElement('li');
    const parts = item.split(':');
    if (parts.length > 1) {
      const title = parts[0].trim();
      const description = parts.slice(1).join(':').trim();
      li.innerHTML = `<strong>${title}</strong>: ${description}`;
    } else {
      li.innerHTML = `<strong>${item}</strong>`;
    }
    li.addEventListener('click', () => {
      addSchtickToNpc(item);
      closeDBPanel();
    });
    schtickListDB.appendChild(li);
  });
  dbPanel.style.display = "flex";
}

function closeDBPanel() {
  dbPanel.style.display = "none";
  currentNpcIdModal = null;
}

function addWeaponToNpc(weaponItem) {
  const npc = npcs.find(npc => npc.id === currentNpcIdModal);
  if (npc) {
    npc.weapons = npc.weapons || [];
    if (!npc.weapons.some(w => w.name === weaponItem.name)) {
      npc.weapons.push(weaponItem);
      logEvent(`Added weapon "${weaponItem.name}" to ${npc.name}`);
    }
    updateNpcList();
  }
}

function addSchtickToNpc(schtickItem) {
  const npc = npcs.find(npc => npc.id === currentNpcIdModal);
  if (npc) {
    npc.schticks = npc.schticks || [];
    if (!npc.schticks.includes(schtickItem)) {
      npc.schticks.push(schtickItem);
      logEvent(`Added schtick to ${npc.name}: ${schtickItem}`);
    }
    updateNpcList();
  }
}

dbClose.addEventListener('click', closeDBPanel);
window.addEventListener('click', (e) => {
  if (e.target === dbPanel) {
    closeDBPanel();
  }
});

/*=======================
  Attach Event Listeners for PC and NPC Buttons
=======================*/
function attachPcListeners() {
  document.querySelectorAll('.incAttack').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      const pc = pcs.find(pc => pc.id === id);
      if (pc) { pc.attack++; updatePcList(); logEvent(`Increased ${pc.name}'s Attack to ${pc.attack}`); }
    });
  });
  document.querySelectorAll('.decAttack').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      const pc = pcs.find(pc => pc.id === id);
      if (pc) { pc.attack--; if(pc.attack < 0) pc.attack = 0; updatePcList(); logEvent(`Decreased ${pc.name}'s Attack to ${pc.attack}`); }
    });
  });
  document.querySelectorAll('.incBackupAttack').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      const pc = pcs.find(pc => pc.id === id);
      if (pc && pc.backupAttack !== undefined) { pc.backupAttack++; updatePcList(); logEvent(`Increased ${pc.name}'s Backup Attack to ${pc.backupAttack}`); }
    });
  });
  document.querySelectorAll('.decBackupAttack').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      const pc = pcs.find(pc => pc.id === id);
      if (pc && pc.backupAttack !== undefined) { pc.backupAttack--; if(pc.backupAttack < 0) pc.backupAttack = 0; updatePcList(); logEvent(`Decreased ${pc.name}'s Backup Attack to ${pc.backupAttack}`); }
    });
  });
  document.querySelectorAll('.incDefense').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      const pc = pcs.find(pc => pc.id === id);
      if (pc) { pc.defense++; updatePcList(); logEvent(`Increased ${pc.name}'s Defense to ${pc.defense}`); }
    });
  });
  document.querySelectorAll('.decDefense').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      const pc = pcs.find(pc => pc.id === id);
      if (pc) { pc.defense--; if(pc.defense < 0) pc.defense = 0; updatePcList(); logEvent(`Decreased ${pc.name}'s Defense to ${pc.defense}`); }
    });
  });
  document.querySelectorAll('.incToughness').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      const pc = pcs.find(pc => pc.id === id);
      if (pc) { pc.toughness++; updatePcList(); logEvent(`Increased ${pc.name}'s Toughness to ${pc.toughness}`); }
    });
  });
  document.querySelectorAll('.decToughness').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      const pc = pcs.find(pc => pc.id === id);
      if (pc) { pc.toughness--; if(pc.toughness < 0) pc.toughness = 0; updatePcList(); logEvent(`Decreased ${pc.name}'s Toughness to ${pc.toughness}`); }
    });
  });
  document.querySelectorAll('.incSpeed').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      const pc = pcs.find(pc => pc.id === id);
      if (pc) { pc.speed++; updatePcList(); logEvent(`Increased ${pc.name}'s Speed to ${pc.speed}`); }
    });
  });
  document.querySelectorAll('.decSpeed').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      const pc = pcs.find(pc => pc.id === id);
      if (pc) { pc.speed--; if(pc.speed < 0) pc.speed = 0; updatePcList(); logEvent(`Decreased ${pc.name}'s Speed to ${pc.speed}`); }
    });
  });
  document.querySelectorAll('.incFortune').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      const pc = pcs.find(pc => pc.id === id);
      if (pc) { pc.fortune++; updatePcList(); logEvent(`Increased ${pc.name}'s Fortune to ${pc.fortune}`); }
    });
  });
  document.querySelectorAll('.decFortune').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      const pc = pcs.find(pc => pc.id === id);
      if (pc) { pc.fortune--; if(pc.fortune < 0) pc.fortune = 0; updatePcList(); logEvent(`Decreased ${pc.name}'s Fortune to ${pc.fortune}`); }
    });
  });
  document.querySelectorAll('.incWound').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      const pc = pcs.find(pc => pc.id === id);
      if (pc) { pc.woundPoints++; updatePcList(); logEvent(`Increased ${pc.name}'s Wound Points to ${pc.woundPoints}`); }
    });
  });
  document.querySelectorAll('.decWound').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      const pc = pcs.find(pc => pc.id === id);
      if (pc) { pc.woundPoints--; if(pc.woundPoints < 0) pc.woundPoints = 0; updatePcList(); logEvent(`Decreased ${pc.name}'s Wound Points to ${pc.woundPoints}`); }
    });
  });
}

function attachNpcListeners() {
  // '+' button for database panel
  document.querySelectorAll('.addDB').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      openDBPanel(id);
    });
  });
  document.querySelectorAll('.incAttack').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      const npc = npcs.find(npc => npc.id === id);
      if (npc) { npc.attack++; updateNpcList(); logEvent(`Increased ${npc.name}'s Attack to ${npc.attack}`); }
    });
  });
  document.querySelectorAll('.decAttack').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      const npc = npcs.find(npc => npc.id === id);
      if (npc) { npc.attack--; if(npc.attack < 0) npc.attack = 0; updateNpcList(); logEvent(`Decreased ${npc.name}'s Attack to ${npc.attack}`); }
    });
  });
  // (Similar listeners for other NPC stats would go here.)
}

function updateAttackDropdowns() {
  playerAttackerSelect.innerHTML = '';
  pcs.forEach(pc => {
    const option = document.createElement('option');
    option.value = pc.id;
    option.textContent = pc.name;
    playerAttackerSelect.appendChild(option);
  });
  npcTargetSelect.innerHTML = '';
  npcs.forEach(npc => {
    if (npc.type !== "mook" || npc.count > 0) {
      const option = document.createElement('option');
      option.value = npc.id;
      option.textContent = npc.name;
      npcTargetSelect.appendChild(option);
    }
  });
  npcAttackerSelect.innerHTML = '';
  npcs.forEach(npc => {
    if (npc.type !== "mook" || npc.count > 0) {
      const option = document.createElement('option');
      option.value = npc.id;
      option.textContent = npc.name;
      npcAttackerSelect.appendChild(option);
    }
  });
  playerTargetSelect.innerHTML = '';
  pcs.forEach(pc => {
    const option = document.createElement('option');
    option.value = pc.id;
    option.textContent = pc.name;
    playerTargetSelect.appendChild(option);
  });
}

/*=======================
  Modal Panel Functions
=======================*/
function openDBPanel(npcId) {
  currentNpcIdModal = npcId;
  // Populate weapons list
  weaponListDB.innerHTML = '';
  weaponDatabase.forEach(item => {
    const li = document.createElement('li');
    const dmg = item.damage.split("/")[0];
    li.innerHTML = `<strong>${item.name}</strong>: ${dmg}`;
    li.addEventListener('click', () => {
      addWeaponToNpc(item);
      closeDBPanel();
    });
    weaponListDB.appendChild(li);
  });
  // Populate schticks list (only bolding the title before the colon)
  schtickListDB.innerHTML = '';
  schtickDatabase.forEach(item => {
    const li = document.createElement('li');
    const parts = item.split(':');
    if (parts.length > 1) {
      const title = parts[0].trim();
      const description = parts.slice(1).join(':').trim();
      li.innerHTML = `<strong>${title}</strong>: ${description}`;
    } else {
      li.innerHTML = `<strong>${item}</strong>`;
    }
    li.addEventListener('click', () => {
      addSchtickToNpc(item);
      closeDBPanel();
    });
    schtickListDB.appendChild(li);
  });
  dbPanel.style.display = "flex";
}

function closeDBPanel() {
  dbPanel.style.display = "none";
  currentNpcIdModal = null;
}

function addWeaponToNpc(weaponItem) {
  const npc = npcs.find(npc => npc.id === currentNpcIdModal);
  if (npc) {
    npc.weapons = npc.weapons || [];
    if (!npc.weapons.some(w => w.name === weaponItem.name)) {
      npc.weapons.push(weaponItem);
      logEvent(`Added weapon "${weaponItem.name}" to ${npc.name}`);
    }
    updateNpcList();
  }
}

function addSchtickToNpc(schtickItem) {
  const npc = npcs.find(npc => npc.id === currentNpcIdModal);
  if (npc) {
    npc.schticks = npc.schticks || [];
    if (!npc.schticks.includes(schtickItem)) {
      npc.schticks.push(schtickItem);
      logEvent(`Added schtick to ${npc.name}: ${schtickItem}`);
    }
    updateNpcList();
  }
}

dbClose.addEventListener('click', closeDBPanel);
window.addEventListener('click', (e) => {
  if (e.target === dbPanel) {
    closeDBPanel();
  }
});

/*=======================
  Event Listeners for Enemy Form
=======================*/
enemyTypeSelect.addEventListener('change', (e) => {
  const selected = e.target.value;
  if (selected === "mook") {
    mookCountContainer.style.display = "block";
    mookTemplateContainer.style.display = "block";
    featuredTemplateContainer.style.display = "none";
  } else if (selected === "featured" || selected === "boss" || selected === "uberboss") {
    featuredTemplateContainer.style.display = "block";
    mookCountContainer.style.display = "none";
    mookTemplateContainer.style.display = "none";
  } else {
    mookCountContainer.style.display = "none";
    mookTemplateContainer.style.display = "none";
    featuredTemplateContainer.style.display = "none";
  }
});

addEnemyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = enemyNameInput.value.trim();
  let type = enemyTypeSelect.value;
  let enemy;
  
  if (type === "mook") {
    const templateKey = mookTemplateSelect.value;
    if (!templateKey) {
      alert("Please select a Mook Template.");
      return;
    }
    const template = mookTemplates[templateKey];
    enemy = {
      id: getNextNpcId(),
      name,
      type,
      attack: 8,
      defense: 13,
      toughness: 0,
      speed: 5,
      fortune: 0,
      templateDamage: template.templateDamage
    };
    enemy.count = parseInt(mookCountInput.value, 10) || 1;
  } else if (type === "featured" || type === "boss" || type === "uberboss") {
    const templateKey = featuredTemplateSelect.value;
    if (!templateKey) {
      alert("Please select a Featured Foe Template.");
      return;
    }
    const template = featuredTemplates[templateKey];
    let baseAttack = template.attack;
    let baseDefense = template.defense;
    let baseToughness = template.toughness;
    let baseSpeed = template.speed;
    if (type === "boss") {
      baseAttack += 3;
      baseDefense += 2;
      baseToughness += 2;
      baseSpeed += 1;
    } else if (type === "uberboss") {
      baseAttack += 5;
      baseDefense += 4;
      baseToughness += 3;
      baseSpeed += 2;
    }
    enemy = {
      id: getNextNpcId(),
      name,
      type,
      attack: baseAttack,
      defense: baseDefense,
      toughness: baseToughness,
      speed: baseSpeed,
      fortune: 0,
      woundPoints: 0,
      attackImpair: 0,
      defenseImpair: 0,
      weapons: template.weapons,
      schticks: template.schticks
    };
  } else {
    return;
  }
  
  npcs.push(enemy);
  updateAttackDropdowns();
  updateNpcList();
  addEnemyForm.reset();
  mookCountContainer.style.display = "none";
  mookTemplateContainer.style.display = "none";
  featuredTemplateContainer.style.display = "none";
  logEvent(`Added enemy: ${name} (${type})`);
});

/*=======================
  Attack Actions
=======================*/
playerActionForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const attackerId = parseInt(playerAttackerSelect.value, 10);
  const targetId = parseInt(npcTargetSelect.value, 10);
  const attacker = pcs.find(pc => pc.id === attackerId);
  const target = npcs.find(npc => npc.id === targetId);
  if (!attacker || !target) return;
  
  let rollResult = parseInt(playerRollResultInput.value.replace('!', ''), 10);
  const modifier = parseInt(playerModifierInput.value, 10) || 0;
  rollResult += modifier;
  
  let smackdown = rollResult - target.defense;
  if (smackdown < 0) smackdown = 0;
  
  const weaponDamage = parseInt(playerWeaponDamageInput.value, 10) || 0;
  let damage = smackdown + weaponDamage - target.toughness;
  if (damage < 0) damage = 0;
  
  let logMsg = `Player Attack: ${attacker.name} rolled ${rollResult} vs. ${target.name}'s Defense (${target.defense}) = ${smackdown}. `;
  logMsg += `+ Weapon Damage (${weaponDamage}) - Toughness (${target.toughness}) = Damage ${damage}. `;
  
  if (target.type === "mook") {
    if (damage > 0) {
      target.count--;
      if (target.count < 0) target.count = 0;
      logMsg += `Mook hit! ${target.name} count decreased to ${target.count}.`;
    } else {
      logMsg += `No damage; mook count remains ${target.count}.`;
    }
  } else {
    target.woundPoints += damage;
    if (target.type === "featured") {
      if (target.woundPoints >= 30) {
        target.attackImpair = 2;
        target.defenseImpair = 2;
        logMsg += `Impairment -2 applied. `;
      } else if (target.woundPoints >= 25) {
        target.attackImpair = 1;
        target.defenseImpair = 1;
        logMsg += `Impairment -1 applied. `;
      } else {
        target.attackImpair = 0;
        target.defenseImpair = 0;
      }
    } else if (target.type === "boss" || target.type === "uberboss") {
      if (target.woundPoints >= 45) {
        target.attackImpair = 2;
        target.defenseImpair = 2;
        logMsg += `Impairment -2 applied. `;
      } else if (target.woundPoints >= 40) {
        target.attackImpair = 1;
        target.defenseImpair = 1;
        logMsg += `Impairment -1 applied. `;
      } else {
        target.attackImpair = 0;
        target.defenseImpair = 0;
      }
    }
    logMsg += `${target.name} now has ${target.woundPoints} Wound Points.`;
  }
  
  logEvent(logMsg);
  updateNpcList();
  playerActionForm.reset();
  updateAttackDropdowns();
});

npcRollDiceButton.addEventListener('click', () => {
  const attackerId = parseInt(npcAttackerSelect.value, 10);
  const attacker = npcs.find(npc => npc.id === attackerId);
  if (!attacker) {
    alert("No attacking NPC selected!");
    return;
  }
  const modifier = parseInt(npcModifierInput.value, 10) || 0;
  
  const posInitial = rollDie();
  const negInitial = rollDie();
  const boxcars = (posInitial === 6 && negInitial === 6);
  const posTotal = rollExplodingDie(posInitial);
  const negTotal = rollExplodingDie(negInitial);
  const diceOutcome = posTotal - negTotal;
  
  let baseAttack = attacker.attack;
  const finalCheck = baseAttack + diceOutcome + modifier;
  npcRollResultDiv.dataset.finalCheck = finalCheck;
  
  const targetId = parseInt(playerTargetSelect.value, 10);
  const target = pcs.find(pc => pc.id === targetId);
  let finalCheckHTML = `<span>${finalCheck}</span>`;
  if (target) {
    if (finalCheck >= target.defense) {
      finalCheckHTML = `<span class="hitResult">${finalCheck}</span>`;
    } else {
      finalCheckHTML = `<span class="missResult">${finalCheck}</span>`;
    }
  }
  
  let resultText = `Positive Total: ${posTotal} (init: ${posInitial}), Negative Total: ${negTotal} (init: ${negInitial}) → Outcome: ${diceOutcome}. `;
  resultText += `Final Check = ${baseAttack} + ${diceOutcome} + Modifier (${modifier}) = ${finalCheckHTML}`;
  if (boxcars) resultText += " (Boxcars!)";
  npcRollResultDiv.innerHTML = resultText;
  logEvent(`NPC Dice Roll: +die=${posTotal} (init ${posInitial}), -die=${negTotal} (init ${negInitial}), Outcome=${diceOutcome}. Final Check = ${baseAttack} + ${diceOutcome} + ${modifier} = ${finalCheck}${boxcars ? " (Boxcars!)" : ""}`);
});

npcActionForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const attackerId = parseInt(npcAttackerSelect.value, 10);
  const targetId = parseInt(playerTargetSelect.value, 10);
  const attacker = npcs.find(npc => npc.id === attackerId);
  const target = pcs.find(pc => pc.id === targetId);
  if (!attacker || !target) return;
  
  let finalCheck = parseInt(npcRollResultDiv.dataset.finalCheck || "0", 10);
  if (isNaN(finalCheck) || finalCheck === 0) {
    alert("Please roll the dice for NPC attack first.");
    return;
  }
  
  let smackdown = finalCheck - target.defense;
  if (smackdown < 0) smackdown = 0;
  
  const weaponDamage = parseInt(npcWeaponDamageInput.value, 10) || 0;
  let damage = smackdown + weaponDamage - target.toughness;
  if (damage < 0) damage = 0;
  
  let logMsg = `NPC Attack: ${attacker.name} (Final Check ${finalCheck}) vs. ${target.name}'s Defense (${target.defense}) = ${smackdown}. `;
  logMsg += `+ Weapon Damage (${weaponDamage}) - Toughness (${target.toughness}) = Damage ${damage}. `;
  
  target.woundPoints += damage;
  logMsg += `${target.name} now has ${target.woundPoints} Wound Points.`;
  
  logEvent(logMsg);
  updatePcList();
  npcActionForm.reset();
  npcRollResultDiv.textContent = "";
  delete npcRollResultDiv.dataset.finalCheck;
  updateAttackDropdowns();
});

/*=======================
  Dice Roller Functions
=======================*/
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}
function rollExplodingDie(initial) {
  let total = initial;
  while (initial === 6) {
    initial = rollDie();
    total += initial;
  }
  return total;
}

/*=======================
  Data Export / Import
=======================*/
exportButton.addEventListener('click', () => {
  const data = { pcs, npcs };
  const dataStr = JSON.stringify(data);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "combatData.json";
  a.click();
  URL.revokeObjectURL(url);
  logEvent("Exported combat data.");
});

importButton.addEventListener('click', () => {
  importFileInput.click();
});

importFileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const importedData = JSON.parse(evt.target.result);
      npcs = importedData.npcs || [];
      updateAttackDropdowns();
      updatePcList();
      updateNpcList();
      logEvent("Imported combat data successfully.");
    } catch (error) {
      alert("Failed to import data: " + error);
    }
  };
  reader.readAsText(file);
});

/*=======================
  Event Log Helper
=======================*/
function logEvent(message) {
  const li = document.createElement('li');
  li.textContent = message;
  logList.appendChild(li);
}

/*=======================
  Dropdown Updates and Initialization
=======================*/
function updateAttackDropdowns() {
  playerAttackerSelect.innerHTML = '';
  pcs.forEach(pc => {
    const option = document.createElement('option');
    option.value = pc.id;
    option.textContent = pc.name;
    playerAttackerSelect.appendChild(option);
  });
  npcTargetSelect.innerHTML = '';
  npcs.forEach(npc => {
    if (npc.type !== "mook" || npc.count > 0) {
      const option = document.createElement('option');
      option.value = npc.id;
      option.textContent = npc.name;
      npcTargetSelect.appendChild(option);
    }
  });
  npcAttackerSelect.innerHTML = '';
  npcs.forEach(npc => {
    if (npc.type !== "mook" || npc.count > 0) {
      const option = document.createElement('option');
      option.value = npc.id;
      option.textContent = npc.name;
      npcAttackerSelect.appendChild(option);
    }
  });
  playerTargetSelect.innerHTML = '';
  pcs.forEach(pc => {
    const option = document.createElement('option');
    option.value = pc.id;
    option.textContent = pc.name;
    playerTargetSelect.appendChild(option);
  });
}

function init() {
  updatePcList();
  updateAttackDropdowns();
}
init();
