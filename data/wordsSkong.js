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
        "Memento NPCs",
        ["Sprintmaster Swift", "Watcher at the Edge", "Seth", "Crawfather", "Nuu", "Garmund"]
    ),

    new YellowCategory(
        "Things that increase Spell/Silk Skill Damage",
        ["Volt Filament", "Shaman Crest", "Shaman Stone", "Flukenest"]
    ),

    new YellowCategory(
        "Main Quest Items",
        ["Sacred Cylinder", "Snare Setter", "Void Heart", "Everbloom", "Maiden's Soul"]
    ),

    new YellowCategory(
        "Characters that sing",
        ["Zote", "Skarrsinger Karmelita", "Cornifer", "Sherma", "Shakra", "Songstress Marissa"]
    ),

    new YellowCategory(
        "Tools Relating to Weavers",
        ["Silkshot", "Snare Setter", "Multibinder", "Weavelight", "Silkspeed Anklets", "Spider Strings"]
    ),

    new YellowCategory(
        "Things that appear in the Putrified Ducts",
        ["Huntress", "Runt", "Vog", "Wreath of Purity", "Longclaw", "Shakra", "Apostate Key"]
    ),

    new YellowCategory(
        "Warrior Dreams",
        ["Gorb", "Markoth", "No Eyes", "Xero", "Galien", "Elder Hu", "Marmu"]
    )
];

// ========================================
// GREEN CATEGORIES
// ========================================

const greenCategories = [

    new GreenCategory(
        "Bosses that reward you with Skills/Powerups",
        ["Broken Vessel", "Soul Master", "Bell Eater", "Bell Beast", "Lace", "The Unravelled", "Phantom", "First Sinner", "Hornet", "Widow"]
    ),

    new GreenCategory(
        "Weavers / Spiders",
        ["First Sinner", "Hornet", "Widow", "Herrah the Beast", "Midwife", "Styx"]
    ),

    new GreenCategory(
        "Nail/Needle damadge Increases",
        ["Flintslate", "Unbreakable Strength", "Beast Crest", "Hunter Crest", "Barbed Bracelet", "Fury of the Fallen"]
    ),

    new GreenCategory(
        "Things with an upgraded Version",
        ["Druid's Eye", "Howling Wraiths", "Hunter Crest", "Grimmchild", "Fragile Heart", "Curveclaw", "Ruined Tool"]
    ),

    new GreenCategory(
        "Items, that can be 'bought' from vendors and obtained for free",
        ["Curveclaw", "Fractured Mask", "The Quill", "Magnetite Dice", "Warding Bell"]
    ),

    new GreenCategory(
        "Things that appear in Hollow Knight and Silksong",
        ["The Mask Maker", "Hornet", "Mister Mushroom", "The Quill", "The Map", "Arcane Egg"]
    ),

    new GreenCategory(
        "Characters that give you Pale Ore/Pale Oil",
        ["Loyal Mergwin", "Fleamaster Mooshka", "Seer", "Nosk", "Grubfather"]
    ),

    new GreenCategory(
        "Eggs",
        ["Egg of Flealia", "Rancid Egg", "Arcane Egg", "Queen's Eggs"]
    ),

    new GreenCategory(
        "People you can give Courier Items to",
        ["The Mask Maker", "Styx", "Loyal Mergwin", "Fleamaster Mooshka"]
    )
];

// ========================================
// BLUE CATEGORIES
// ========================================

const blueCategories = [

    new BlueCategory(
        "Silksong Bosses with 2 Fights",
        ["Savage Beastfly", "Skull Tyrant", "Moss Mother", "Great Conchflies", "Trobbio"]
    ),

    new BlueCategory(
        "Double Bosses",
        ["Cogwork Dancers", "Great Conchflies", "Forebrothers Signis & Gron", "Oblobbles", "Brothers Oro & Mato"]
    ),

    new BlueCategory(
        "Steel Soul Excusive Content",
        ["Summoned Saviour", "Shell Satchel", "Skynx", "Steel Soul Jinn", "Steel Seer Zi", "Growstone"]
    ),

    new BlueCategory(
        "Bosses you can only fight in Gautlets (And Hall of Gods)",
        ["Sisters of Battle", "God Tamer", "Oblobbles", "Winged Nosk", "Brothers Oro & Mato"]
    ),

    new BlueCategory(
        "Charms with a Tool Counterpart",
        ["Grubsong", "Deep Focus", "Quick Focus", "Spore Shroom", "Baldur Shell", "Longnail", "Glowing Womb", "Nailmaster's Glory", "Wayward Compass", "Gathering Swarm", "Steady Body", "Carefree Melody"]
    ),

    new BlueCategory(
        "Ways to kill the Elder Baldur to enter Greenpath",
        ["Shade Soul", "Dreamshield", "Longnail", "Descending Dark", "Mark of Pride", "Glowing Womb", "Weaversong"]
    ),

    new BlueCategory(
        "Characters you get Simple Keys from",
        ["Pale Lurker", "Grindle", "Sly", "Pebb", "Jubilana"]
    )
];

// ========================================
// PURPLE CATEGORIES
// ========================================

const purpleCategories = [

    new PurpleCategory(
        "Pale Beings/Gods",
        ["The White Lady", "The Radiance", "Palestag", "The Pale King", "Grand Mother Silk", "Unn", "Nightmare King Grimm"]
    ),

    new PurpleCategory(
        "NPCs Related to Crests",
        ["Greyroot", "Eva", "The Caretaker", "The Twelfth Architect"]
    ),

    new PurpleCategory(
        "Things in Hollow Knight that deal 2 masks of damage",
        ["The Radiance", "Traitor Lord", "Great Nailsage Sly", "Revek", "Pure Vessel", "Failed Champion", "Nightmare King Grimm"]
    ),

    new PurpleCategory(
        "The 5 Great Knights",
        ["The Dung Defender", "The Grey Mourner", "Dryya", "Isma", "Hegemol"]
    ),

    new PurpleCategory(
        "Things that are Grey",
        ["Grey Prince Zote", "The Grey Mourner", "Greyroot", "The Grey Memento"]
    ),

    new PurpleCategory(
        "Things Relating to Lifeblood",
        ["Plasmified Zango", "Alchemist Zylotol", "Blue Child Joni", "Plasmium Phial", "Plasmium Gland", "Lifeblood Core"]
    ),

    new PurpleCategory(
        "People you can give the Delicate Flower to",
        ["Traitor's Child", "Elderbug", "Oro", "Godseeker"]
    ),

    new PurpleCategory(
        "NPCs that have unique dialogue with Defender's Crest",
        ["Elderbug", "The White Lady", "Relic Seeker Lemm", "Tuk", "Divine", "The Dung Defender", "Leg Eater"]
    ),

    new PurpleCategory(
        "Grimm Troupe Members",
        ["Troupe Master Grimm", "Brumm", "Divine", "Grimsteed"]
    ),

    new PurpleCategory(
        "Gay Characters",
        ["The Nailsmith", "Sheo", "The Grey Mourner", "Traitor's Child", "The Green Prince"]
    )
];



const wordData = {
    "Garmund": {
        image: "./imgsskong/garmund.webp",
        description: "A brave warrior exploring Pharloom with his friend Zaza"
    },
    "Watcher at the Edge": {
        image: "./imgsskong/B_Watcher_at_the_Edge.png",
        description: "The last remaining Coral Guard, gives you the Grey Memento"
    },
    "Sprintmaster Swift": {
        image: "./imgsskong/Sprintmaster_Swift.png",
        description: "The fastest bug in all of Pharloom, or is He?"
    },
    "Seth": {
        image: "./imgsskong/Seth.webp",
        description: "Valiant protector of Nyleth's Shrine"
    },
    "Huntress": {
        image: "./imgsskong/Huntress.webp",
        description: "Mother of Runt, Gives you the 'Broodfeast' wish"
    },
    "Cloth": {
        image: "./imgsskong/Cloth-2.webp",
        description: "Warrior Wandering Hallownest, Helps you in fighting the Traitor Lord"
    },
    "Crawfather": {
        image: "./imgsskong/Crawfather_Idle.png",
        description: "Ruler of Craw Lake, only fightable in Act 3"
    },
    "Flukenest": {
        image: "./imgsskong/Flukenest.webp",
        description: "Charm that replaces Vengeful SPirit with a Volley of Flukes"
    },
    "The Green Prince": {
        image: "./imgsskong/Green_Prince.webp",
        description: "Former twin Prince of Verdania"
    },
    "Tiso": {
        image: "./imgsskong/Mod_Journal_Tiso.png",
        description: "Egoistic Traveler who Travels to the Colosseum of Fools"
    },
    "Mort": {
        image: "./imgsskong/Mort.png",
        description: "Vendor in Pilgrims Rest at the top of Far Fileds"
    },
    "Myla": {
        image: "./imgsskong/Myla.webp",
        description: "Kind Miner, Gets infected after collecting your first Dreamer"
    },
    "The Nailsmith": {
        image: "./imgsskong/Npc_nailsmith.webp",
        description: "Upgrades your nail in Hollow Knight"
    },
    "Nuu": {
        image: "./imgsskong/npc_nuu.png",
        description: "Gives you the Hunters Journal in Silksong"
    },
    "Shaman Crest": {
        image: "./imgsskong/Shaman_Crest_Inventory.png",
        description: "Weapon Style that enhances Silk Skills"
    },
    "Shaman Stone": {
        image: "./imgsskong/Shaman_Stone.webp",
        description: "Charm that increases the size and damage of spells"
    },
    "Volt Filament": {
        image: "./imgsskong/Volt_Filament.png",
        description: "Tool that increases silk skill damage"
    },
    "Zote": {
        image: "./imgsskong/Zotethemighty.webp",
        description: "Egoistic Traveler of Hallownest"
    },
    "Skarrsinger Karmelita": {
        image: "./imgsskong/Boss_hunter_queen_carmelita.webp",
        description: "Queen of the Skarr, only Fightable in Act 3"
    },
    "Cornifer": {
        image: "./imgsskong/Cornifer.webp",
        description: "Map vendor of Hallownest"
    },
    "Everbloom": {
        image: "./imgsskong/Everbloom.png",
        description: "Quest item that allows you to swim in Void"
    },
    "Apostate Key": {
        image: "./imgsskong/Key_of_Apostate.png",
        description: "Key that grants access to the Slab, found in Putrified Ducsts"
    },
    "Longclaw": {
        image: "./imgsskong/Longclaw.png",
        description: "Blue Tool that extends the Needles Reach"
    },
    "Maiden's Soul": {
        image: "./imgsskong/Maiden's_Soul.png",
        description: "Quest item required to enter Act 3"
    },
    "Multibinder": {
        image: "./imgsskong/Multibinder.png",
        description: "Tool Bought from Jubilana in Songclave, Increases Bind Healing"
    },
    "Sherma": {
        image: "./imgsskong/Npc_sherma.webp",
        description: "Gleeful Pilgrim of Pharloom"
    },
    "Shakra": {
        image: "./imgsskong/Npc_shakra.webp",
        description: "Map vendor of Pharloom"
    },
    "Runt": {
        image: "./imgsskong/Runt.png",
        description: "Child of Huntress, only appears in act 3"
    },
    "Sacred Cylinder": {
        image: "./imgsskong/Sacred_Cylinder.png",
        description: "Given to Vaultkeeper Cardinius to learn the Vaultkeepers Melody"
    },
    "Silkshot": {
        image: "./imgsskong/Silkshot.png",
        description: "Restored version of the Ruined Tool, forged in Mount Fay"
    },
    "Silkspeed Anklets": {
        image: "./imgsskong/Silkspeed_Anklets.png",
        description: "Tool found in Weavenest Cindril, Increases Hornet's Running Speed"
    },
    "Spider Strings": {
        image: "./imgsskong/Spider_Strings.png",
        description: "Weaver tool that increases the range of Needolin"
    },
    "Vog": {
        image: "./imgsskong/Vog_Stand.png",
        description: "Special Flea that marks other fleas on your map"
    },
    "Snare Setter": {
        image: "./imgsskong/Snare_Setter.png",
        description: "Tool used in trapping Grand Mother Silk"
    },
    "Void Heart": {
        image: "./imgsskong/Void_Heart.webp",
        description: "Charm that makes void creatures friendly towards the Knight"
    },
    "Weavelight": {
        image: "./imgsskong/Weavelight.png",
        description: "Tool that increases your passive silk restoration"
    },
    "Wreath of Purity": {
        image: "./imgsskong/Wreath_of_Purity.png",
        description: "Blue Tool that makes you resistent to infested waters"
    },
    "Beast Crest": {
        image: "./imgsskong/300px-Beast_Crest_Inventory.png",
        description: "Weapon Stlye that makes your Nailswings faster and deadlier"
    },
    "Arcane Egg": {
        image: "./imgsskong/Arcane_Egg.webp",
        description: "Ancient Relic commonly found in the Abyss"
    },
    "Crystal Guardian": {
        image: "./imgsskong/B_Crystal_Guardian.webp",
        description: "Sentinel found guarding a Bench in Crystal Peaks"
    },
    "Moss Mother": {
        image: "./imgsskong/B_Moss_Mother.png",
        description: "The First Boss encountered in Silksong"
    },
    "Savage Beastfly": {
        image: "./imgsskong/B_Savage_Beastfly.png",
        description: "Hated boss guarding the Beast Crest"
    },
    "Skull Tyrant": {
        image: "./imgsskong/B_Skull_Tyrant.png",
        description: "Boss responsible for the destruction of Bone Bottom"
    },
    "Barbed Bracelet": {
        image: "./imgsskong/Barbed_Bracelet.png",
        description: "Tool that increses Needle Damage, also increases incoming damage"
    },
    "Curveclaw": {
        image: "./imgsskong/Curveclaw.png",
        description: "Red Tool that flies like a Boomerang, can be enhanced in Far Fields"
    },
    "Druid's Eye": {
        image: "./imgsskong/Druid's_Eye.png",
        description: "Blue tool that grants silk when Hornet is hit"
    },
    "Egg of Flealia": {
        image: "./imgsskong/Egg_of_Flealia.png",
        description: "Tool given by Fleamaster Mooshka at the Flea Carnival"
    },
    "Fleamaster Mooshka": {
        image: "./imgsskong/Fleamaster_Mooshka.png",
        description: "Leader of the Flea Caravan"
    },
    "Flintslate": {
        image: "./imgsskong/Flintslate.png",
        description: "Red Tool that enflames your Needle"
    },
    "Fractured Mask": {
        image: "./imgsskong/Fractured_Mask.png",
        description: "Tool that prevents one instance of lethal damage"
    },
    "Fragile Heart": {
        image: "./imgsskong/Fragile_Heart.webp",
        description: "Upradeable Charm that increases your maximum health"
    },
    "Fury of the Fallen": {
        image: "./imgsskong/Fury_of_the_Fallen.webp",
        description: "Charm that strengthens the Knight when they only have one mask"
    },
    "Grimmchild": {
        image: "./imgsskong/Grimmchild01.webp",
        description: "Charm given by Troupe Master Grimm"
    },
    "Hornet": {
        image: "./imgsskong/Hornet_(Hollow_Knight).png",
        description: "Daugther of Hallownest, Protagonist of Silksong"
    },
    "Howling Wraiths": {
        image: "./imgsskong/Howling_Wraiths.webp",
        description: "Upward angeled spell in Hollow Knight"
    },
    "Hunter Crest": {
        image: "./imgsskong/Hunter_Crest_Inventory.png",
        description: "Weapon Style that hornet starts with in Silksong"
    },
    "Loyal Mergwin": {
        image: "./imgsskong/Loyal_Mergwin.png",
        description: "Underling of the Grand Gourmand, gives you 'the Great Taste of Pharloom' wish"
    },
    "Magnetite Dice": {
        image: "./imgsskong/Magnetite_Dice.png",
        description: "Yellow Tool that has an increasing chance to negate damage"
    },
    "The Map": {
        image: "./imgsskong/Map_(Silksong).png",
        description: "Obtained from Cornifer, Iselda or Shakra displaying Hallownest or Pharloom"
    },
    "The Mask Maker": {
        image: "./imgsskong/Mask_Maker_Unmasked.webp",
        description: "Devout creator of Masks found in Deepnest and Mount Fay"
    },
    "Mister Mushroom": {
        image: "./imgsskong/Mister_Mushroom.png",
        description: "NPC tied to a rare acheivement, gives you the 'Passing of the Age' wish"
    },
    "Nosk": {
        image: "./imgsskong/Nosk_Idle.png",
        description: "Boss that Mimics the Knight, guards a Pale Ore fragment"
    },
    "Grubfather": {
        image: "./imgsskong/Npc_grubfather.webp",
        description: "Father of all Grubs"
    },
    "Queen's Eggs": {
        image: "./imgsskong/Queen's_Egg.png",
        description: "A courier item deivered to Styx in Sinners Road"
    },
    "The Quill": {
        image: "./imgsskong/Quill_(Silksong).png",
        description: "Marks discovered paths on the Map"
    },
    "Rancid Egg": {
        image: "./imgsskong/Rancid_Egg.webp",
        description: "Given to Jiji to recall your Shade"
    },
    "Ruined Tool": {
        image: "./imgsskong/Ruined_Tool.png",
        description: "Tool found in Weavnest Murglin, Needs to be repaired by a Craftsperson"
    },
    "Seer": {
        image: "./imgsskong/Seer.webp",
        description: "Gives you the Dreamnail and other things for Essence"
    },
    "Styx": {
        image: "./imgsskong/Styx.png",
        description: "Generates Silkeaters, found in Sinners Road"
    },
    "Unbreakable Strength": {
        image: "./imgsskong/Unbreakable_Strength.webp",
        description: "Enhanced version of Fragile Strength, Increases Nail Damage"
    },
    "Warding Bell": {
        image: "./imgsskong/Warding_Bell.png",
        description: "Tool that negates damage when Binding"
    },
    "Bell Eater": {
    image: "./imgsskong/B_Bell_Eater.png",
    description: "Boss that can be fought in act 3, gives you the Beastling Call"
    },
    "Cogwork Dancers": {
        image: "./imgsskong/B_Cogwork_Dancers.png",
        description: "Double bosses guarding the Cogwork Core"
    },
    "First Sinner": {
        image: "./imgsskong/B_First_Sinner.png",
        description: "Boss found in the Slab, gives you the Rune Rage Silk Skill"
    },
    "Forebrothers Signis & Gron": {
        image: "./imgsskong/B_Forebrothers_Signis_&_Gron.png",
        description: "Double Bosses guarding the Diving Bell"
    },
    "God Tamer": {
        image: "./imgsskong/B_God_Tamer.webp",
        description: "Final Boss fought at the end of colosseum 3"
    },
    "Great Conchflies": {
        image: "./imgsskong/B_Great_Conchfly.png",
        description: "Bosses Blocking the way to the Sands of Karak"
    },
    "Oblobbles": {
        image: "./imgsskong/B_Oblobble.png",
        description: "Boss fought at the end of Colosseum 2"
    },
    "Brothers Oro & Mato": {
        image: "./imgsskong/B_Oro_Mato.webp",
        description: "Fought as the final boss in the Pantheon of the Master"
    },
    "Summoned Saviour": {
        image: "./imgsskong/B_Summoned_Saviour.png",
        description: "Boss found near Bone Bottom, exlusive to Steel Soul Mode"
    },
    "The Unravelled": {
        image: "./imgsskong/B_The_Unravelled.png",
        description: "Boss of the Whiteward, Gives you a Silk Heart"
    },
    "Baldur Shell": {
        image: "./imgsskong/Baldur_Shell.webp",
        description: "Charm found in the Howling Cliffs, Negates damage when Focusing"
    },
    "Bell Beast": {
        image: "./imgsskong/Bell_Beast.png",
        description: "Boss fought in the Marrow, afterwards used as fast travel"
    },
    "Lace": {
        image: "./imgsskong/Boss_lace.webp",
        description: "Silken Being, Daughter of Grand Mother Silk"
    },
    "Broken Vessel": {
        image: "./imgsskong/Broken_Vessel.webp",
        description: "An escaped Vessel blocking the way to the Monarch Wings"
    },
    "Carefree Melody": {
        image: "./imgsskong/Carefree_Melody.png",
        description: "Charm obtained from Nymm after banishing the Grimm Troupe"
    },
    "Deep Focus": {
        image: "./imgsskong/Deep_Focus.webp",
        description: "Charm that extends focusing for 2 masks in stead of 1"
    },
    "Gathering Swarm": {
        image: "./imgsskong/Gathering_Swarm.webp",
        description: "Charm that attracts Geo to the Knight"
    },
    "Glowing Womb": {
        image: "./imgsskong/Glowing_Womb.webp",
        description: "Charm that summons allied infested flies"
    },
    "Godseeker": {
        image: "./imgsskong/Godseeker-2.webp",
        description: "Bug from a distant land, grants access to Godhome"
    },
    "Growstone": {
        image: "./imgsskong/Growstone_4.png",
        description: "Consumable gained after completing the 'a Vassal Lost' wish"
    },
    "Grubsong": {
        image: "./imgsskong/Grubsong.webp",
        description: "Charm that grants the knight soul when hit"
    },
    "Longnail": {
        image: "./imgsskong/Longnail.webp",
        description: "Charm that increases the Knights reach"
    },
    "Nailmaster's Glory": {
        image: "./imgsskong/Nailmaster's_Glory.png",
        description: "Charm that makes nail arts charge faster"
    },
    "Oro": {
        image: "./imgsskong/Oro.webp",
        description: "Nailmaster found in Kingdom's Edge, teaches the Dash Slash"
    },
    "Phantom": {
        image: "./imgsskong/Phantom_HK.webp",
        description: "Silken Being, teaches you the Cross Stich Silk Skill"
    },
    "Quick Focus": {
        image: "./imgsskong/Quick_Focus.png",
        description: "Charm that increases speed of focusing"
    },
    "Sisters of Battle": {
        image: "./imgsskong/Sisters_of_Battle.webp",
        description: "Harder vesion of the Mantis Lords, only found in Godhome"
    },
    "Skynx": {
        image: "./imgsskong/Skynx.png",
        description: "Vendor that trades Silkeater for Rosaries"
    },
    "Spore Shroom": {
        image: "./imgsskong/Spore_Shroom.webp",
        description: "Charm that emits a puff when focusing, required to talk to Mister Mushroom"
    },
    "Steady Body": {
        image: "./imgsskong/Steady_Body.webp",
        description: "Charm that removes self-knockback from nailswings"
    },
    "Steel Seer Zi": {
        image: "./imgsskong/Steel_Seer_Zi.png",
        description: "NPC found in the Wormways, gives you the 'a Vassal Lost' wish"
    },
    "Steel Soul Jinn": {
        image: "./imgsskong/SteelsoulJinn.webp",
        description: "Trades rancid eggs for geo"
    },
    "Traitor's Child": {
        image: "./imgsskong/Traitors_Child.webp",
        description: "Lover of the Grey Mourner, Daughter of the Traitor Lord"
    },
    "Wayward Compass": {
        image: "./imgsskong/Wayward_Compass.webp",
        description: "Charm bought from Iselda, marks your position on the Map"
    },
    "Winged Nosk": {
        image: "./imgsskong/Winged_Nosk.webp",
        description: "Harder Vesion of Nosk, only appears in Godhome"
    },
    "Elderbug": {
        image: "./imgsskong/Elderbug-2.webp",
        description: "Caretaker of Dirtmouth"
    },
    "Alchemist Zylotol": {
        image: "./imgsskong/Alchemist_Zylotol.png",
        description: "Scientist found in the Wormways, gives you the 'Alchemist's Assistiant' wish"
    },
    "Grey Prince Zote": {
        image: "./imgsskong/B_Grey_Prince_Zote.png",
        description: "Glorified version of Zote, found in Dirtmouth"
    },
    "Palestag": {
        image: "./imgsskong/B_Palestag.png",
        description: "Secret Boss found in Verdania, Legendary Cryptid"
    },
    "Pure Vessel": {
        image: "./imgsskong/B_Pure_Vessel.png",
        description: "Harder vesion of the Hollow Knight, found in the Pantheon of the Knight"
    },
    "The Radiance": {
        image: "./imgsskong/B_Radiance.webp",
        description: "Final Boss of Hollow Knight"
    },
    "Failed Champion": {
        image: "./imgsskong/Failed-Champion.png",
        description: "Dream Refight of the False Knight"
    },
    "Traitor Lord": {
        image: "./imgsskong/B_Traitor_Lord.webp",
        description: "Former member of the Mantis Clan, Guards the White Lady"
    },
    "Hegemol": {
        image: "./imgsskong/False_Knight_Statue.webp",
        description: "Deceased member of the Five Great Knights, armor stolen by the False Knight"
    },
    "Great Nailsage Sly": {
        image: "./imgsskong/great-nailsage-sly-boss-hollow-knight-wiki-guide.png",
        description: "Final fight in the Pantheon of the Sage"
    },
    "The Grey Memento": {
        image: "./imgsskong/Grey_Memento.png",
        description: "Memento given by the Watcher at the Edge"
    },
    "The Grey Mourner": {
        image: "./imgsskong/Grey_Mourner2.webp",
        description: "Lover of the Traitors Child, gives you the Delicate Flower"
    },
    "Greyroot": {
        image: "./imgsskong/Greyroot.png",
        description: "Plant-Like resident of Shellwood, Gives you the Cursed Crest"
    },
    "Isma": {
        image: "./imgsskong/Isma.PNG.webp",
        description: "Deceased Knight of Hallownest, found holding Isma's Tear"
    },
    "Blue Child Joni": {
        image: "./imgsskong/Joni.webp",
        description: "NPC whos body is found in Joni's Repose, Gives Joni's Blessing"
    },
    "Lifeblood Core": {
        image: "./imgsskong/Lifeblood_Core.webp",
        description: "Charm found in the Abyss, gives 4 lifeblood masks"
    },
    "The Pale King": {
        image: "./imgsskong/Pale_King_Throne.webp",
        description: "Deceased King of Hallownest"
    },
    "The Dung Defender": {
        image: "./imgsskong/Promotional_Art_Hollow_Knight_Dung_Defender.webp",
        description: "Defender of the Kindly Isma, gives you the Defenders Crest"
    },
    "Revek": {
        image: "./imgsskong/Revek.png",
        description: "Guardian of the Spirits glade, deals 2 masks of damage"
    },
    "The Caretaker": {
        image: "./imgsskong/Caretaker_Snail_Shaman.png",
        description: "Snail Shaman overseeing Songclave"
    },
    "The Twelfth Architect": {
        image: "./imgsskong/Twelfth_Architect.png",
        description: "Vendor encountered in the Underworks, sells red tools"
    },
    "Unn": {
        image: "./imgsskong/Unn.webp",
        description: "God in hiding, gives you the shape of unn Charm"
    },
    "Dryya": {
        image: "./imgsskong/White_Knight_Dead.webp",
        description: "Deceased Guardian of the White Lady"
    },
    "The White Lady": {
        image: "./imgsskong/White_Lady_Cut.webp",
        description: "Mother of all Vessels, Queen of Hallownest"
    },
    "Plasmified Zango": {
        image: "./imgsskong/Zango.webp",
        description: "Zylotol's Assisstant, reanimated by Plasmium"
    },
    "Plasmium Phial": {
        image: "./imgsskong/Plasmium_Phial.png",
        description: "Red Tool used to obtain Lifeblood Masks"
    },
    "Plasmium Gland": {
        image: "./imgsskong/plasmium_gland_item_hollow_knight_silksong_wiki_guide_128px.png",
        description: "Alchemist Zylotol's pulsing heart, obtained in act 3"
    },
    "Eva": {
        image: "./imgsskong/Eva.png",
        description: "Silken being found in Weavenest Atla, gives you the Vesticrest"
    },
    "Soul Master": {
        image: "./imgsskong/B_Soulmaster.webp",
        description: "Master of the Soul Sanctum, Gives you the Desolate Dive"
    },
    "Shell Satchel": {
        image: "./imgsskong/Shell_Satchel.png",
        description: "Tool that replaces the Pilgrim's Purse in Steel Soul Mode"
    },
    "Grand Mother Silk": {
        image: "./imgsskong/B_Grand_Mother_Silk.png",
        description: "Silken Ruler of Pharloom"
    },
    "Nightmare King Grimm": {
        image: "./imgsskong/B_Nightmare_King.png",
        description: "God of Nightmares"
    },
    "Songstress Marissa": {
        image: "./imgsskong/Marissa.webp",
        description: "Ghostly singer discovered in the pleasure home"
    },
    "Descending Dark": {
        image: "./imgsskong/Descending_Dark.webp",
        description: "Enhanced Version of Desolate Dive"
    },
    "Dreamshield": {
        image: "./imgsskong/Dreamshield.png",
        description: "Charm that circles the Knight and blocks projectiles"
    },
    "Shade Soul": {
        image: "./imgsskong/Shade_Soul.webp",
        description: "Channeled Void that replaces the Vengeful Spirit"
    },
    "Weaversong": {
        image: "./imgsskong/Weaversong.webp",
        description: "Charm that passively Summons Weavers to aid the Knight in battle"
    },
    "Widow": {
        image: "./imgsskong/B_Widow.png",
        description: "Weaver threat controlling Haunted Bellhart, gives you the Needolin"
    },
    "Herrah the Beast": {
        image: "./imgsskong/B_Herrah.webp",
        description: "Dreamer protecting the Hollow Knight, Mother of Hornet"
    },
    "Midwife": {
        image: "./imgsskong/Midwife.webp",
        description: "Spider discovered under the Distant Village in Deepnest"
    },
    "Divine": {
        image: "./imgsskong/Divine.png",
        description: "Member of the Grimm Troupe, gives you the Unbreakable Charms"
    },
    "Tuk": {
        image: "./imgsskong/Tuk.webp",
        description: "Vendor found in the Royal Waterways, Trades Rancid eggs for geo"
    },
    "Leg Eater": {
        image: "./imgsskong/Legeater.webp",
        description: "Found in Fungal Wastes, Gives you Fragile Charms"
    },
    "Relic Seeker Lemm": {
        image: "./imgsskong/RelicSeekerLemm.webp",
        description: "Gives you Geo for Relics, won't speak to you when you wear the Defenders Crest"
    },
    "Grimsteed": {
        image: "./imgsskong/Grimmsteed.webp",
        description: "Animalistic member of the travelling Troupe"
    },
    "Brumm": {
        image: "./imgsskong/Brumm2.webp",
        description: "Musician, helps you in banishing the Grimm Troupe"
    },
    "Troupe Master Grimm": {
        image: "./imgsskong/Grimm_Idle.webp",
        description: "Dramatic Leader of the Grimm Troupe"
    },
    "Sheo": {
        image: "./imgsskong/NailmasterSheo.webp",
        description: "Artistic Brother of the Nailmasters"
    },
    "Sly": {
        image: "./imgsskong/Sly.webp",
        description: "Vendor of Dirtmouth, Retired Nailmaster"
    },
    "Pale Lurker": {
        image: "./imgsskong/B_Pale_Lurker.png",
        description: "Infested creature found behind the Colosseum, Guards a Simple Key"
    },
    "Grindle": {
        image: "./imgsskong/Grindle.webp",
        description: "Theiving traveller of Pharloom"
    },
    "Jubilana": {
        image: "./imgsskong/Jubilana.png",
        description: "Merchant encoutered in Songclave"
    },
    "Pebb": {
        image: "./imgsskong/Pebb.png",
        description: "Vendor found in Bone Bottom"
    },
    "Mark of Pride": {
        image: "./imgsskong/Mark_of_Pride.webp",
        description: "Charm displaying the Mantis's respect, increases nail swing distance"
    },
    "Xero": {
        image: "./imgsskong/HJ_Xero.png",
        description: "Warrior Dream found in Resting Grounds"
    },
    "Elder Hu": {
        image: "./imgsskong/HJ_Elder_Hu.png",
        description: "Revenant guarding a gong in Fungal Wastes"
    },
    "Galien": {
        image: "./imgsskong/HJ_Galien.webp",
        description: "Spirit Warrior fighting with a Sythe in Deepnest"
    },
    "Gorb": {
        image: "./imgsskong/HJ_Gorb.webp",
        description: "He is Gorb. Ascend Ascend Ascend Ascend Ascend Ascend Ascend Ascend"
    },
    "Markoth": {
        image: "./imgsskong/HJ_Markoth.png",
        description: "Warrior Spirit fought in Kingdom's Edge"
    },
    "Marmu": {
        image: "./imgsskong/HJ_Marmu.png",
        description: "Caterpillar Spirit found in the Queen's Gardens"
    },
    "No Eyes": {
        image: "./imgsskong/HJ_No_Eyes.png",
        description: "Spirit discovered in the Stone Sanctuary"
    },
    "Trobbio": {
        image: "./imgsskong/Trobbio_Promotional_Art.webp",
        description: "Dramatic boss entertaining Pharloom with a Performance"
    },
};
