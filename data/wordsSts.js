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
        "Character Starting Cards",
        [
            "Neutralise",
            "Bash",
            "Survivor",
            "Falling Star",
            "Venerate",
            "Bodyguard",
            "Unleash"
        ]
    ),

    new YellowCategory(
        "Things that Give you Souls",
        [
            "Capture Spirit",
            "Dirge",
            "Glimpse Beyond",
            "Reave",
            "Seance",
            "Grave Warden"
        ]
    )
];

// ========================================
// GREEN CATEGORIES
// ========================================

const greenCategories = [

    new GreenCategory(
        "Co-op Cards containig the Defect",
        [
            "Beacon of Hope",
            "Believe in You",
            "Coordinate",
            "Rally",
            "Tag Team",
            "Hammer Time",
            "Energy Surge",
            "Ignition"
        ]
    ),

    new GreenCategory(
        "Cards that give you Status Cards",
        [
            "Fight Through",
            "Boost Away",
            "Gunk Up",
            "TURBO",
            "Collision Course",
            "Crash Landing"
        ]
    ),

    new GreenCategory(
        "Cards that apply Poison",
        [
            "Bubble Bubble",
            "Corrosive Wave",
            "Deadly Poison",
            "Envenom",
            "Haze",
            "Noxious Fumes",
            "Poisoned Stab",
            "Snakebite",
            "Bouncing Flask"
        ]
    )
];

// ========================================
// BLUE CATEGORIES
// ========================================

const blueCategories = [

    new BlueCategory(
        "Cards Containing 'Strike'",
        [
            "Minion Strike",
            "Adaptive Strike",
            "Pommel Strike",
            "Perfected Strike",
            "Strike",
            "Shining Strike",
            "Sculpting Strike"
        ]
    ),

    new BlueCategory(
        "Cards that cost 0 Energy after being Upgarded",
        [
            "Automation",
            "Pagestorm",
            "Body Slam",
            "Havoc",
            "Tank",
            "Shadow Step",
            "Shadowmeld",
            "Alchemize",
            "Sacrafice",
            "Protector"
        ]
    )
];

// ========================================
// PURPLE CATEGORIES
// ========================================

const purpleCategories = [

    new PurpleCategory(
        "Refrences to Anime",
        [
            "All for One",
            "Gamma Blast",
            "Heavenly Drill",
            "Arsenal"
        ]
    )
];



const wordData = {
  "Adaptive Strike": {
    image: "./imgSts/adaptive-strike.png",
    description: ""
  },

  "All for One": {
    image: "./imgSts/all-for-one.png",
    description: ""
  },

  "Arsenal": {
    image: "./imgSts/arsenal.png",
    description: ""
  },

  "Beacon of Hope": {
    image: "./imgSts/beacon-of-hope.png",
    description: ""
  },

  "Believe in You": {
    image: "./imgSts/believe-in-you.png",
    description: ""
  },

  "Boost Away": {
    image: "./imgSts/boost-away.webp",
    description: ""
  },

  "Capture Spirit": {
    image: "./imgSts/capture-spirit.png",
    description: ""
  },

  "Coordinate": {
    image: "./imgSts/coordinate.png",
    description: ""
  },

  "Dirge": {
    image: "./imgSts/dirge.png",
    description: ""
  },

  "Energy Surge": {
    image: "./imgSts/energy-surge.png",
    description: ""
  },

  "Fight Through": {
    image: "./imgSts/fight-through.webp",
    description: ""
  },

  "Gamma Blast": {
    image: "./imgSts/gamma-blast.png",
    description: ""
  },

  "Glimpse Beyond": {
    image: "./imgSts/glimpse-beyond.png",
    description: ""
  },

  "Grave Warden": {
    image: "./imgSts/grave-warden.png",
    description: ""
  },

  "Hammer Time": {
    image: "./imgSts/hammer-time.png",
    description: ""
  },

  "Heavenly Drill": {
    image: "./imgSts/heavenly-drill.png",
    description: ""
  },

  "Ignition": {
    image: "./imgSts/ignition.png",
    description: ""
  },

  "Minion Strike": {
    image: "./imgSts/minion-strike.png",
    description: ""
  },

  "Paper Phrog": {
    image: "./imgSts/paper_phrog.webp",
    description: ""
  },

  "Perfected Strike": {
    image: "./imgSts/perfected-strike.png",
    description: ""
  },

  "Pommel Strike": {
    image: "./imgSts/pommel-strike.png",
    description: ""
  },

  "Rally": {
    image: "./imgSts/rally.png",
    description: ""
  },

  "Reave": {
    image: "./imgSts/reave.png",
    description: ""
  },

  "Sculpting Strike": {
    image: "./imgSts/sculpting-strike.png",
    description: ""
  },

  "Seance": {
    image: "./imgSts/seance.png",
    description: ""
  },

  "Seeker Strike": {
    image: "./imgSts/seeker-strike.png",
    description: ""
  },

  "Shining Strike": {
    image: "./imgSts/shining-strike.png",
    description: ""
  },

  "Strike": {
    image: "./imgSts/strike-silent.png",
    description: ""
  },

  "Tag Team": {
    image: "./imgSts/tag-team.png",
    description: ""
  },

  "Bodyguard": {
    image: "./imgSts/bodyguard.png",
    description: ""
  },

  "Dualcast": {
    image: "./imgSts/dualcast.png",
    description: ""
  },

  "Falling Star": {
    image: "./imgSts/falling-star.png",
    description: ""
  },

  "Neutralise": {
    image: "./imgSts/neutralize.png",
    description: ""
  },

  "Bash": {
    image: "./imgSts/bash.png",
    description: ""
  },

  "Survivor": {
    image: "./imgSts/survivor.png",
    description: ""
  },

  "Unleash": {
    image: "./imgSts/unleash.png",
    description: ""
  },

  "Venerate": {
    image: "./imgSts/venerate.png",
    description: ""
  },

  "Zap": {
    image: "./imgSts/zap.png",
    description: ""
  },

    "Collision Course": {
    image: "./imgSts/collision-course.png",
    description: ""
  },
  "Crash Landing": {
    image: "./imgSts/crash-landing.png",
    description: ""
  },
  "Gunk Up": {
    image: "./imgSts/gunk-up.png",
    description: ""
  },
    "Overclock": {
    image: "./imgSts/overclosck.png",
    description: ""
  },
    "TURBO": {
    image: "./imgSts/turbo.png",
    description: ""
  },
      "Alchemize": {
    image: "./imgSts/alchemize.png",
    description: ""
  },
      "Automation": {
    image: "./imgSts/automation.png",
    description: ""
  },
      "Body Slam": {
    image: "./imgSts/body-slam.png",
    description: ""
  },
      "Havoc": {
    image: "./imgSts/havoc.png",
    description: ""
  },
    "Pagestorm": {
    image: "./imgSts/pagestorm.png",
    description: ""
  },
    "Protector": {
    image: "./imgSts/protector.png",
    description: ""
  },
    "Sacrafice": {
    image: "./imgSts/sacrifice.png",
    description: ""
  },
      "Shadow Step": {
    image: "./imgSts/shadow-step.png",
    description: ""
  },
      "Shadowmeld": {
    image: "./imgSts/shadowmeld.png",
    description: ""
  },
        "Tank": {
    image: "./imgSts/tank.png",
    description: ""
  },
        "Bubble Bubble": {
    image: "./imgSts/bubble-bubble.png",
    description: ""
  },
      "Bouncing Flask": {
    image: "./imgSts/bouncing-flask.png",
    description: ""
  },
  "Corrosive Wave": {
    image: "./imgSts/corrosive-wave.png",
    description: ""
  },
  "Deadly Poison": {
    image: "./imgSts/deadly-poison.png",
    description: ""
  },
  "Envenom": {
    image: "./imgSts/envenom.png",
    description: ""
  },
  "Haze": {
    image: "./imgSts/haze.png",
    description: ""
  },
  "Noxious Fumes": {
    image: "./imgSts/noxious-fumes.png",
    description: ""
  },
  "Poisoned Stab": {
    image: "./imgSts/poisoned-stab.png",
    description: ""
  },
  "Snakebite": {
    image: "./imgSts/snakebite.png",
    description: ""
  },
};



