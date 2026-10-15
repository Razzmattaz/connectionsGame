// ========================================
// CATEGORY MOTHER CLASS
// ========================================

class Category {
    constructor(name, words, color) {
        this.name = name;
        this.words = words;
        this.color = color;
    }

    getRandomWords(count) {
        return [...this.words]
            .sort(() => Math.random() - 0.5)
            .slice(0, count);
    }
}

// ========================================
// COLOR CLASSES
// ========================================

class YellowCategory extends Category {
    constructor(name, words) {
        super(name, words, "yellow");
    }
}

class GreenCategory extends Category {
    constructor(name, words) {
        super(name, words, "green");
    }
}

class BlueCategory extends Category {
    constructor(name, words) {
        super(name, words, "blue");
    }
}

class PurpleCategory extends Category {
    constructor(name, words) {
        super(name, words, "purple");
    }
}

// ========================================
// CATEGORY POOLS
// ========================================

// ========================================
// YELLOW CATEGORIES
// ========================================

const yellowCategories = [

    new YellowCategory(
        "TB Outsiders",
        [
            "Drunk",
            "Butler",
            "Saint",
            "Recluse"
        ]
    ),

    new YellowCategory(
        "TB 'Top 4'",
        [
            "Chef",
            "Washerwoman",
            "Investigator",
            "Librarian"
        ]
    ),

    new YellowCategory(
        "Wth is the Qutler?",
        [
            "Qutler 1",
            "Qutler 2",
            "Qutler 3",
            "Qutler 4"
        ]
    ),

    new YellowCategory(
        "SNV Travellers",
        [
            "Butcher",
            "Bone Collector",
            "Harlot",
            "Barista",
            "Deviant"
        ]
    ),
    new YellowCategory(
        "Unofficial / Temple Fair Characters",
        [
            "Actor",
            "Waiter",
            "Singer",
            "Rascal",
            "Corpse Walker"
        ]
    ),
        new YellowCategory(
        "Non-Townsfolk sources of Drunkeness",
        [
            "Drunk",
            "Organ Grinder",
            "Sweetheart",
            "Puzzlemaster",
            "Goon"
        ]
    ),
];

// ========================================
// GREEN CATEGORIES
// ========================================

const greenCategories = [

    new GreenCategory(
        "Each Night* info Roles",
        [
            "Town Crier",
            "Flowergirl",
            "Undertaker",
            "Oracle"
        ]
    ),

    new GreenCategory(
        "SNV Minions",
        [
            "Evil Twin",
            "Cerenovus",
            "Witch",
            "Pit-Hag"
        ]
    ),

    new GreenCategory(
        "Non-Demon Sources of Daytime Kills",
        [
            "Psychopath",
            "Witch",
            "Golem",
            "Tinker",
            "Gunslinger",
            "Gangster",
            "Slayer",
            "Harpy",
            "Gnome"
        ]
    ),

    new GreenCategory(
        "Sources of Madness",
        [
            "Pixie",
            "Mutant",
            "Cerenovus",
            "Harpy"
        ]
    ),

    new GreenCategory(
        "Sources of Evil Townsfolk",
        [
            "Bounty Hunter",
            "Mezepheles",
            "Cacklejack",
            "Pit-Hag",
            "Barber"
        ]
    ),

    new GreenCategory(
        "Characters that learn 'Yes' or 'No'",
        [
            "Flowergirl",
            "Artist",
            "Town Crier",
            "Fortune Teller",
            "Seamstress"
        ]
    ),
];

// ========================================
// BLUE CATEGORIES
// ========================================

const blueCategories = [

    new BlueCategory(
        "Alternate Good Win Conditions",
        [
            "Alsaahir",
            "Mayor",
            "Cult Leader",
            "Heretic",
            "Atheist"
        ]
    ),

    new BlueCategory(
        "Execution Survival Characters",
        [
            "Sailor",
            "Tea Lady",
            "Leech",
            "Devil's Advocate",
            "Pacifist",
            "Fool"
        ]
    ),

    new BlueCategory(
        "Characters that are also Tarot Cards",
        [
            "Fool",
            "Hermit",
            "High Priestess",
            "Magician"
        ]
    ),

    new BlueCategory(
        "Connected Characters",
        [
            "Damsel",
            "Huntsman",
            "King",
            "Choirboy"
        ]
    ),

    new BlueCategory(
        "Modern Political Figures",
        [
            "Politician",
            "Mayor",
            "Bureaucrat",
            "Judge"
        ]
    ),
            new BlueCategory(
        "Characters that modify the evil info step",
        [
            "Damsel",
            "Poppy Grower",
            "Magician",
            "Lunatic",
            "King",
            "Marionette",
            "Snitch",
            "Boffin"
        ]
    ),
        new BlueCategory(
        "Mouths",
        [
            "Scarlet Woman",
            "Goblin",
            "Yaggababble",
            "Shabaloth",
            "Snitch"
        ]
    ),
        new BlueCategory(
        "BMR Demons",
        [
            "Po",
            "Zombuul",
            "Shabaloth",
            "Pukka"
        ]
    ),
];

// ========================================
// PURPLE CATEGORIES
// ========================================

const purpleCategories = [

    new PurpleCategory(
        "Characters that make Outsiders Arbitrary",
        [
            "Lord of Typhon",
            "Kazali",
            "Xaan",
            "Legion"
        ]
    ),

    new PurpleCategory(
        "Non-Demon sources of Poison",
        [
            "Cannibal",
            "Xaan",
            "Poisoner",
            "Widow",
            "Snake Charmer"
        ]
    ),

    new PurpleCategory(
        "Characters with artwork made by Steven Medway",
        [
            "Hatter",
            "Xaan",
            "Vigormortis",
            "Legion"
        ]
    ),

    new PurpleCategory(
        "Characters with more than 4 Reminder Tokens",
        [
            "Vigormortis",
            "Juggler",
            "Mathematician",
            "Leviathan"
        ]
    ),

    new PurpleCategory(
        "Characters with more that 7 Jinxes",
        [
            "Alchemist",
            "Plague Doctor",
            "Riot",
            "Leviathan",
            "Summoner"
        ]
    ),

    new PurpleCategory(
        "Characters with multiple Character Tokens",
        [
            "Farmer",
            "Imp",
            "Riot",
            "Fang Gu",
            "Village Idiot",
            "Legion"
        ]
    ),

    new PurpleCategory(
        "Characters that add additional Minion Abillities",
        [
            "Lil' Monsta",
            "Lord of Typhon",
            "Plague Doctor",
            "Alchemist"
        ]
    ),

    new PurpleCategory(
        "Demonbanes",
        [
            "Ravenkeeper",
            "Banshee",
            "Farmer",
            "Soldier",
            "Sage"
        ]
    ),

    new PurpleCategory(
        "Demons with more that 1 Word in their Name",
        [
            "Lil' Monsta",
            "Lord of Typhon",
            "Fang Gu",
            "No Dashii"
        ]
    ),

        new PurpleCategory(
        "Characters with non-english flavour text",
        [
            "Shugenja",
            "Banshee",
            "Al-Hadikhia",
            "Wraith",
            "Riot"
        ]
    ),

        new PurpleCategory(
        "Characters that announce themselves",
        [
            "Fearmonger",
            "Banshee",
            "Al-Hadikhia",
            "Leviathan",
            "Vizier"
        ]
    ),
];



const wordData = {
  "Actor": {
    image: "./imgBotc/actor_temple_fair.png",
    description: "Good characters are good, drunk & know each other.\n Whoever wins, loses & whoever loses, wins. You can’t lose this ability."
  },

  "Corpse Walker": {
    image: "./imgBotc/corpsewalker_temple_fair.png",
    description: "The 1st time your Townsfolk neighbors die,\n they register as alive. [−1 Outsider]"
  },

  "Alchemist": {
    image: "./imgBotc/Icon_alchemist.png",
    description: "You have a Minion ability. When using this,\n the Storyteller may prompt you to choose differently."
  },

  "Alsaahir": {
    image: "./imgBotc/Icon_alsaahir.png",
    description: "Each day, if you publicly guess which players are Minion(s) and which are Demon(s),\n good wins."
  },

  "Atheist": {
    image: "./imgBotc/Icon_atheist.png",
    description: "The Storyteller can break the game rules, and if executed, good wins,\n even if you are dead. [No evil characters]"
  },

  "Banshee": {
    image: "./imgBotc/Icon_banshee.png",
    description: "If the Demon kills you, all players learn this. From now on,\n you may nominate twice per day and vote twice per nomination."
  },

  "Barber": {
    image: "./imgBotc/Icon_barber.png",
    description: "If you died today or tonight, the Demon may choose 2 players\n (not another Demon) to swap characters."
  },

  "Barista": {
    image: "./imgBotc/Icon_barista.png",
    description: "Each night, until dusk, 1) a player becomes sober, healthy & gets true info, or\n 2) their ability works twice. They learn which."
  },

  "Bone Collector": {
    image: "./imgBotc/Icon_bonecollector.png",
    description: "Once per game, at night*, choose a dead player:\n they regain their ability until dusk."
  },

  "Bounty Hunter": {
    image: "./imgBotc/Icon_bountyhunter.png",
    description: "You start knowing 1 evil player. If the player you know dies,\n you learn another evil player tonight. [1 Townsfolk is evil]"
  },

  "Bureaucrat": {
    image: "./imgBotc/Icon_bureaucrat.png",
    description: "Each night, choose a player (not yourself):\n their vote counts as 3 votes tomorrow."
  },

  "Butcher": {
    image: "./imgBotc/Icon_butcher.png",
    description: "Each day, after the 1st execution, you may nominate again."
  },

  "Butler": {
    image: "./imgBotc/Icon_butler.png",
    description: "Each night, choose a player (not yourself): tomorrow,\n you may only vote if they are voting too."
  },

  "Cacklejack": {
    image: "./imgBotc/Icon_cacklejack.png",
    description: "Each day, choose a player: a different player changes character tonight."
  },

  "Cannibal": {
    image: "./imgBotc/Icon_cannibal.png",
    description: "You have the ability of the recently killed executee.\n If they are evil, you are poisoned until a good player dies by execution."
  },

  "Cerenovus": {
    image: "./imgBotc/Icon_cerenovus.png",
    description: `Each night, choose a player & a good character:\n they are "mad" they are this character tomorrow, or might be executed.`
  },

  "Chef": {
    image: "./imgBotc/Icon_chef.png",
    description: "You start knowing how many pairs of evil players there are."
  },

  "Choirboy": {
    image: "./imgBotc/Icon_choirboy.png",
    description: "If the Demon kills the King,\n you learn which player is the Demon. [+the King]"
  },

  "Cult Leader": {
    image: "./imgBotc/Icon_cultleader.png",
    description: "Each night, you become the alignment of an alive neighbor\n If all good players choose to join your cult, your team wins."
  },

  "Damsel": {
    image: "./imgBotc/Icon_damsel.png",
    description: "All Minions know a Damsel is in play.\n If a Minion publicly guesses you (once), your team loses."
  },

  "Deviant": {
    image: "./imgBotc/Icon_deviant.png",
    description: "If you were funny today, you cannot die by exile."
  },

  "Devil's Advocate": {
    image: "./imgBotc/Icon_devilsadvocate.png",
    description: "Each night, choose a living player (different to last night):\n if executed tomorrow, they don't die."
  },

  "Drunk": {
    image: "./imgBotc/Icon_drunk.png",
    description: "You do not know you are the Drunk.\n You think you are a Townsfolk character, but you are not."
  },

  "Evil Twin": {
    image: "./imgBotc/Icon_eviltwin.png",
    description: "You & an opposing player know each other. If the good player is executed,\n evil wins. Good can't win if you both live."
  },

  "Farmer": {
    image: "./imgBotc/Icon_farmer.png",
    description: "When you die at night, an alive good player becomes a Farmer."
  },

  "Fool": {
    image: "./imgBotc/Icon_fool.png",
    description: "The 1st time you die, you don't."
  },

  "Gangster": {
    image: "./imgBotc/Icon_gangster.png",
    description: "Once per day, you may choose to kill an alive neighbor,\n if your other alive neighbor agrees."
  },

  "Goblin": {
    image: "./imgBotc/Icon_goblin.png",
    description: "If you publicly claim to be the Goblin when nominated &\n are executed that day, your team wins."
  },

  "Golem": {
    image: "./imgBotc/Icon_golem.png",
    description: "You may only nominate once per game. When you do,\n if the nominee is not the Demon, they die."
  },

  "Gunslinger": {
    image: "./imgBotc/Icon_gunslinger.png",
    description: "Each day, after the 1st vote has been tallied,\n you may choose a player that voted: they die."
  },

  "Harlot": {
    image: "./imgBotc/Icon_harlot.png",
    description: "Each night*, choose a living player: if they agree,\n you learn their character, but you both might die."
  },

  "Harpy": {
    image: "./imgBotc/Icon_harpy.png",
    description: "Each night, choose 2 players: tomorrow, the 1st player is mad\n that the 2nd is evil, or one or both might die."
  },

  "Hatter": {
    image: "./imgBotc/Icon_hatter.png",
    description: "If you died today or tonight, the Minion & Demon players may choose\n new Minion & Demon characters to be."
  },

  "Heretic": {
    image: "./imgBotc/Icon_heretic.png",
    description: "Whoever wins, loses & whoever loses, wins, even if you are dead."
  },

  "Hermit": {
    image: "./imgBotc/Icon_hermit.png",
    description: "You have all Outsider abilities. [-0 or -1 Outsider]"
  },

  "High Priestess": {
    image: "./imgBotc/Icon_highpriestess.png",
    description: "Each night, learn which player the Storyteller believes you should talk to most."
  },

  "Huntsman": {
    image: "./imgBotc/Icon_huntsman.png",
    description: "Once per game, at night, choose a living player: the Damsel, if chosen,\n becomes a not-in-play Townsfolk. [+the Damsel]"
  },

  "Investigator": {
    image: "./imgBotc/Icon_investigator.png",
    description: "You start knowing that 1 of 2 players is a particular Minion."
  },

    "Judge": {
    image: "./imgBotc/Icon_judge.png",
    description: "Once per game, if another player nominated,\n you may choose to force the current execution to pass or fail."
  },
  "Juggler": {
    image: "./imgBotc/Icon_juggler.png",
    description: "On your 1st day, publicly guess up to 5 players' characters.\n That night, you learn how many you got correct."
  },
  "Kazali": {
    image: "./imgBotc/Icon_kazali.png",
    description: "Each night*, choose a player: they die.\n [You choose which players are which Minions. -? to +? Outsiders]"
  },
    "King": {
    image: "./imgBotc/Icon_king.png",
    description: "Each night, if the dead equal or outnumber the living, you learn 1 alive character.\n The Demon knows you are the King."
  },
    "Legion": {
    image: "./imgBotc/Icon_legion.png",
    description: "Each night*, a player might die. Executions fail if only evil voted.\n You register as a Minion too. [Most players are Legion]"
  },
    "Leviathan": {
    image: "./imgBotc/Icon_leviathan.png",
    description: "If more than 1 good player is executed, evil wins.\n All players know you are in play. After day 5, evil wins."
  },
    "Librarian": {
    image: "./imgBotc/Icon_librarian.png",
    description: "You start knowing that 1 of 2 players is a particular Outsider.\n (Or that zero are in play.)"
  },
    "Leech": {
    image: "./imgBotc/Icon_lleech.png",
    description: "Each night*, choose a player: they die. You start by choosing a player: they are poisoned.\n You die if & only if they are dead."
  },
    "Lord of Typhon": {
    image: "./imgBotc/Icon_lordoftyphon.png",
    description: "Each night*, choose a player: they die. [Evil characters are in a line.\n You are in the middle. +1 Minion. -? to +? Outsiders]"
  },
    "Magician": {
    image: "./imgBotc/Icon_magician.png",
    description: "The Demon thinks you are a Minion. Minions think you are a Demon."
  },
    "Mathematician": {
    image: "./imgBotc/Icon_mathematician.png",
    description: "Each night, you learn how many players' abilities worked abnormally (since dawn)\n due to another character's ability."
  },
    "Mayor": {
    image: "./imgBotc/Icon_mayor.png",
    description: "If only 3 players live & no execution occurs, your team wins.\n If you die at night, another player might die instead."
  },
    "Mezepheles": {
    image: "./imgBotc/Icon_mezepheles.png",
    description: "You start knowing a secret word.\n The 1st good player to say this word becomes evil that night."
  },
    "Mutant": {
    image: "./imgBotc/Icon_mutant.png",
    description: `If you are "mad" about being an Outsider, you might be executed.`
  },
    "Pacifist": {
    image: "./imgBotc/Icon_pacifist.png",
    description: "Executed good players might not die."
  },
    "Pit-Hag": {
    image: "./imgBotc/Icon_pithag.png",
    description: "Each night*, choose a player & a character they become (if not in play).\n If a Demon is made, deaths tonight are arbitrary."
  },
    "Pixie": {
    image: "./imgBotc/Icon_pixie.png",
    description: "You start knowing 1 in-play Townsfolk. If you were mad that you were this character,\n you gain their ability when they die."
  },
  "Plague Doctor": {
    image: "./imgBotc/Icon_plaguedoctor.png",
    description: "When you die, the Storyteller gains a Minion ability."
  },
  "Po": {
    image: "./imgBotc/Icon_po.png",
    description: "Each night*, you may choose a player: they die. If your last choice was no-one,\n choose 3 players tonight."
  },
  "Poisoner": {
    image: "./imgBotc/Icon_poisoner.png",
    description: "Each night, choose a player: they are poisoned tonight and tomorrow day."
  },
  "Politician": {
    image: "./imgBotc/Icon_politician.png",
    description: "If you were the player most responsible for your team losing,\n you change alignment & win, even if dead."
  },
  "Psychopath": {
    image: "./imgBotc/Icon_psychopath.png",
    description: "Each day, before nominations, you may publicly choose a player: they die.\n If executed, you only die if you lose roshambo."
  },
  "Pukka": {
    image: "./imgBotc/Icon_pukka.png",
    description: "Each night, choose a player: they are poisoned.\n The previously poisoned player dies then becomes healthy."
  },
  "Ravenkeeper": {
    image: "./imgBotc/Icon_ravenkeeper.png",
    description: "If you die at night, you are woken to choose a player:\n you learn their character."
  },
  "Recluse": {
    image: "./imgBotc/Icon_recluse.png",
    description: "You might register as evil & as a Minion or Demon, even if dead."
  },
    "Riot": {
    image: "./imgBotc/Icon_riot.png",
    description: "On day 3, Minions become Riot & nominees die but nominate\n an alive player immediately. This must happen."
  },
    "Sage": {
    image: "./imgBotc/Icon_sage.png",
    description: "If the Demon kills you, you learn that it is 1 of 2 players."
  },
  "Sailor": {
    image: "./imgBotc/Icon_sailor.png",
    description: "Each night, choose an alive player:\n either you or they are drunk until dusk. You can't die."
  },
  "Saint": {
    image: "./imgBotc/Icon_saint.png",
    description: "If you die by execution, your team loses."
  },
  "Scarlet Woman": {
    image: "./imgBotc/Icon_scarletwoman.png",
    description: "If there are 5 or more players alive & the Demon dies, you become the Demon.\n (Travellers don't count.)"
  },
  "Shabaloth": {
    image: "./imgBotc/Icon_shabaloth.png",
    description: "Each night*, choose 2 players: they die.\n A dead player you chose last night might be regurgitated."
  },
  "Slayer": {
    image: "./imgBotc/Icon_slayer.png",
    description: "Once per game, during the day, publicly choose a player:\n if they are the Demon, they die."
  },
  "Snake Charmer": {
    image: "./imgBotc/Icon_snakecharmer.png",
    description: "Each night, choose an alive player:\n a chosen Demon swaps characters & alignments with you & is then poisoned."
  },
  "Snitch": {
    image: "./imgBotc/Icon_snitch.png",
    description: "Each Minion gets 3 bluffs."
  },
  "Soldier": {
    image: "./imgBotc/Icon_soldier.png",
    description: "You are safe from the Demon."
  },
  "Tea Lady": {
    image: "./imgBotc/Icon_tealady.png",
    description: "If both your alive neighbors are good, they can't die."
  },
    "Tinker": {
    image: "./imgBotc/Icon_tinker.png",
    description: "You might die at any time."
  },
    "Vigormortis": {
    image: "./imgBotc/Icon_vigormortis.png",
    description: "Each night*, choose a player: they die. Minions you kill keep their ability\n & poison 1 Townsfolk neighbor. [-1 Outsider]"
  },
  "Vizier": {
    image: "./imgBotc/Icon_vizier.png",
    description: "All players know you are the Vizier. You cannot die during the day.\n If good voted, you may choose to execute immediately."
  },
  "Washerwoman": {
    image: "./imgBotc/Icon_washerwoman.png",
    description: "You start knowing that 1 of 2 players is a particular Townsfolk."
  },
  "Widow": {
    image: "./imgBotc/Icon_widow.png",
    description: "On your 1st night, look at the Grimoire & choose a player: they are poisoned.\n1 good player knows a Widow is in play."
  },
  "Witch": {
    image: "./imgBotc/Icon_witch.png",
    description: "Each night, choose a player: if they nominate tomorrow, they die.\n If just 3 players live, you lose this ability."
  },
  "Xaan": {
    image: "./imgBotc/Icon_xaan.png",
    description: "On night X, all Townsfolk are poisoned until dusk. [X Outsiders]"
  },
  "Yaggababble": {
    image: "./imgBotc/Icon_yaggababble.png",
    description: "You start knowing a secret phrase. For each time you said it publicly today,\n a player might die."
  },
  "Zombuul": {
    image: "./imgBotc/Icon_zombuul.png",
    description: "Each night*, if no-one died today, choose a player: they die. The 1st time you die,\n you live but register as dead."
  },
    "Rascal": {
    image: "./imgBotc/rascal_temple_fair.png",
    description: "Each night, choose a Townsfolk character:\n their ability yields false info until dusk."
  },
  "Singer": {
    image: "./imgBotc/singer_temple_fair.png",
    description: "Once per game, during the day, publicly choose any volunteers. \nIf a Demon is chosen, you die tonight."
  },
  "Waiter": {
    image: "./imgBotc/waiter_temple_fair.png",
    description: "You start knowing 2 good players: 1 is drunk, even if you are dead."
  },

  "Al-Hadikhia": {
    image: "./imgBotc/Icon_alhadikhia.png",
    description: "Each night*, you may choose 3 players (all players learn who):\n each silently chooses to live or die, but if all live, all die."
  },
    "Artist": {
    image: "./imgBotc/Icon_artist.png",
    description: "Once per game, during the day,\n privately ask the Storyteller any yes/no question."
  },
  "Boffin": {
    image: "./imgBotc/Icon_boffin.png",
    description: "The Demon (even if drunk or poisoned) has a not-in-play good character's ability.\n You both know which."
  },
  "Fang Gu": {
    image: "./imgBotc/Icon_fanggu.png",
    description: "Each night*, choose a player: they die. The 1st Outsider this kills\n becomes an evil Fang Gu & you die instead. [+1 Outsider]"
  },
  "Fearmonger": {
    image: "./imgBotc/Icon_fearmonger.png",
    description: "Each night, choose a player: if you nominate & execute them, their team loses.\n All players know if you choose a new player."
  },
  "Flowergirl": {
    image: "./imgBotc/Icon_flowergirl.png",
    description: "Each night*, you learn if a Demon voted today."
  },
  "Fortune Teller": {
    image: "./imgBotc/Icon_fortuneteller.png",
    description: "Each night, choose 2 players: you learn if either is a Demon.\n There is a good player that registers as a Demon to you."
  },
  "Gnome": {
    image: "./imgBotc/Icon_gnome.png",
    description: "All players start knowing a player of your alignment.\n You may choose to kill anyone who nominates them."
  },
  "Goon": {
    image: "./imgBotc/Icon_goon.png",
    description: "Each night, the 1st player to choose you with their ability is drunk until dusk.\n You become their alignment."
  },
    "Imp": {
    image: "./imgBotc/Icon_imp.png",
    description: "Each night*, choose a player: they die.\n If you kill yourself this way, a Minion becomes the Imp."
  },
  "Lil' Monsta": {
    image: "./imgBotc/Icon_lilmonsta.png",
    description: "Each night, Minions choose who babysits Lil' Monsta & 'is the Demon'.\n Each night*, a player might die. [+1 Minion]"
  },
  "Lunatic": {
    image: "./imgBotc/Icon_lunatic.png",
    description: "You think you are a Demon, but you are not.\n The Demon knows who you are & who you choose at night."
  },
  "Marionette": {
    image: "./imgBotc/Icon_marionette.png",
    description: "You think you are a good character, but you are not.\n The Demon knows who you are. [You neighbor the Demon]"
  },
  "No Dashii": {
    image: "./imgBotc/Icon_nodashii.png",
    description: "Each night*, choose a player: they die.\n Your 2 Townsfolk neighbors are poisoned."
  },
  "Oracle": {
    image: "./imgBotc/Icon_oracle.png",
    description: "Each night*, you learn how many dead players are evil."
  },
  "Organ Grinder": {
    image: "./imgBotc/Icon_organgrinder.png",
    description: "All players keep their eyes closed when voting and the vote tally is secret.\n Each night, choose if you are drunk until dusk."
  },
  "Poppy Grower": {
    image: "./imgBotc/Icon_poppygrower.png",
    description: "Minions & Demons do not know each other. If you die,\n they learn who each other are that night."
  },
  "Puzzlemaster": {
    image: "./imgBotc/Icon_puzzlemaster.png",
    description: "1 player is drunk, even if you die. If you guess (once) who it is,\n learn the Demon player, but guess wrong & get false info."
  },
  "Qutler 1": {
    image: "./imgBotc/Icon_qutler.png",
    description: "Each night, choose a player (not yourself): tomorrow,\n you may only vote if they are voting too."
  },
  "Qutler 2": {
    image: "./imgBotc/Icon_qutler.png",
    description: "Each night, choose a player (not yourself): tomorrow,\n you may only vote if they are voting too."
  },
  "Qutler 3": {
    image: "./imgBotc/Icon_qutler.png",
    description: "Each night, choose a player (not yourself): tomorrow,\n you may only vote if they are voting too."
  },
  "Qutler 4": {
    image: "./imgBotc/Icon_qutler.png",
    description: "Each night, choose a player (not yourself): tomorrow,\n you may only vote if they are voting too."
  },
    "Seamstress": {
    image: "./imgBotc/Icon_seamstress.png",
    description: "Once per game, at night, choose 2 players (not yourself):\n you learn if they are the same alignment."
  },
  "Summoner": {
    image: "./imgBotc/Icon_summoner.png",
    description: "You get 3 bluffs. On the 3rd night, choose a player:\n they become an evil Demon of your choice. [No Demon]"
  },
  "Shugenja": {
    image: "./imgBotc/Icon_shugenja.png",
    description: "You start knowing if your closest evil player is clockwise or anti-clockwise.\n If equidistant, this info is arbitrary."
  },
  "Sweetheart": {
    image: "./imgBotc/Icon_sweetheart.png",
    description: "When you die, 1 player is drunk from now on."
  },
    "Town Crier": {
    image: "./imgBotc/Icon_towncrier.png",
    description: "Each night*, you learn if a Minion nominated today."
  },
  "Village Idiot": {
    image: "./imgBotc/Icon_villageidiot.png",
    description: "Each night, choose a player: you learn their alignment.\n [+0 to +2 Village Idiots. 1 of the extras is drunk]"
  },
  "Undertaker": {
    image: "./imgBotc/Icon_undertaker.png",
    description: "Each night*, you learn which character died by execution today."
  },
  "Wraith": {
    image: "./imgBotc/Icon_wraith.png",
    description: "You may choose to open your eyes at night.\n You wake when other evil players do."
  }
};



