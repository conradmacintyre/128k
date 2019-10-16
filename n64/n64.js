//TODO FOR ENTIRE FILE:
	//Move to RAW JS to reduce HTTP requests, dependencies, weight of page.

//N64 Games List - Global Variable
	var games = {
		"0": {
			 "name": "1080 Snowboarding",
			 "pcid": "3674",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"1": {
			 "name": "Aero Fighters Assault",
			 "pcid": "3675",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"2": {
			 "name": "Aerogauge",
			 "pcid": "14427",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"3": {
			 "name": "Aidyn Chronicles: The First Mage",
			 "pcid": "3676",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"3a": {
			"name": "Aidyn Chronicles: The First Mage [Grey Cart]",
			"pcid": "40351",
			"loose": "",
			"cib": "",
			"date": ""
	   },
		"4": {
			 "name": "All-Star Baseball '99",
			 "pcid": "3679",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"5": {
			 "name": "All-Star Baseball 2000",
			 "pcid": "3677",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"6": {
			 "name": "All-Star Baseball 2001",
			 "pcid": "3678",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"7": {
			 "name": "All-Star Tennis \u201899",
			 "pcid": "3680",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"8": {
			 "name": "Armorines: Project SWARM",
			 "pcid": "3681",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"9": {
			 "name": "Army Men: Air Combat",
			 "pcid": "3683",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"9a": {
			"name": "Army Men: Air Combat [Grey Cart]",
			"pcid": "40352",
			"loose": "",
			"cib": "",
			"date": ""
	   },
		"10": {
			 "name": "Army Men: Sarge's Heroes",
			 "pcid": "3684",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"11": {
			 "name": "Army Men: Sarge\u2019s Heroes 2",
			 "pcid": "3682",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"11a": {
			"name": "Army Men: Sarge\u2019s Heroes 2 [Grey Cart]",
			"pcid": "40353",
			"loose": "",
			"cib": "",
			"date": ""
	   },
		"12": {
			 "name": "Asteroids Hyper",
			 "pcid": "3685",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"13": {
			 "name": "Automobili Lamborghini",
			 "pcid": "3695",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"14": {
			 "name": "Banjo-Kazooie",
			 "pcid": "3696",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"15": {
			 "name": "Banjo-Tooie",
			 "pcid": "3697",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"16": {
			 "name": "Bass Hunter 64",
			 "pcid": "3698",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"17": {
			 "name": "Bass Masters 2000",
			 "pcid": "3699",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"17a": {
			"name": "Bass Masters 2000 [Grey Cart]",
			"pcid": "40354",
			"loose": "",
			"cib": "",
			"date": ""
	   },
		"18": {
			 "name": "Batman Beyond: Return of the Joker",
			 "pcid": "3700",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"19": {
			 "name": "BattleTanx",
			 "pcid": "3702",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"20": {
			 "name": "Battletanx 2: Global Assault",
			 "pcid": "3703",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"21": {
			 "name": "Battlezone: Rise of the Black Dogs",
			 "pcid": "3701",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"22": {
			 "name": "Beetle Adventure Racing",
			 "pcid": "3705",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"23": {
			 "name": "BioFreaks",
			 "pcid": "3186",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"24": {
			 "name": "Big Mountain 2000",
			 "pcid": "14428",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"25": {
			 "name": "Blast Corps.",
			 "pcid": "3707",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"26": {
			 "name": "Blues Brothers 2000",
			 "pcid": "3711",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"27": {
			 "name": "Body Harvest",
			 "pcid": "3712",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"28": {
			 "name": "Bomberman 64",
			 "pcid": "3713",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"29": {
			 "name": "Bomberman 64: Second Attack",
			 "pcid": "3715",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"30": {
			 "name": "Bomberman Hero",
			 "pcid": "3714",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"31": {
			 "name": "Bottom of the 9th",
			 "pcid": "14881",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"32": {
			 "name": "Brunswick Circuit Pro Bowling",
			 "pcid": "3728",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"33": {
			 "name": "Buck Bumble",
			 "pcid": "3716",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"34": {
			 "name": "Bust A Move 2",
			 "pcid": "3718",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"35": {
			 "name": "Bust A Move \u201899",
			 "pcid": "3719",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"36": {
			 "name": "California Speed",
			 "pcid": "3720",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"37": {
			 "name": "Carmageddon 64",
			 "pcid": "3721",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"38": {
			 "name": "Castlevania",
			 "pcid": "3722",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"39": {
			 "name": "Castlevania: Legacy of Darkness",
			 "pcid": "3723",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"40": {
			 "name": "Chameleon Twist",
			 "pcid": "3724",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"41": {
			 "name": "Chameleon Twist 2",
			 "pcid": "3725",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"42": {
			 "name": "Charlie Blast's Territory",
			 "pcid": "3726",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"43": {
			 "name": "Chopper Attack",
			 "pcid": "3727",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"44": {
			 "name": "Clay Fighter 63 1\/3",
			 "pcid": "3730",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"45": {
			 "name": "Clay Fighter: Sculptor's Cut",
			 "pcid": "3729",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"46": {
			 "name": "Command and Conquer 64",
			 "pcid": "3731",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"47": {
			 "name": "Conker's Bad Fur Day",
			 "pcid": "3732",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"48": {
			 "name": "Cruis'n Exotica",
			 "pcid": "3733",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"49": {
			 "name": "Cruis'n USA",
			 "pcid": "3734",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"50": {
			 "name": "Cruis'n World",
			 "pcid": "3735",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"51": {
			 "name": "Cybertiger 2000",
			 "pcid": "3736",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"52": {
			 "name": "Daikatana",
			 "pcid": "14429",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"53": {
			 "name": "Dark Rift",
			 "pcid": "3737",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"54": {
			 "name": "Deadly Arts",
			 "pcid": "3738",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"55": {
			 "name": "Destruction Derby 64",
			 "pcid": "3739",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"56": {
			 "name": "Diddy Kong Racing",
			 "pcid": "3740",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"57": {
			 "name": "Disney's A Bug's Life",
			 "pcid": "3717",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"58": {
			 "name": "Disney's Donald Duck Goin' Quackers",
			 "pcid": "3741",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"59": {
			 "name": "Disney\u2019s Tarzan",
			 "pcid": "3927",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"60": {
			 "name": "Disney's Toy Story 2: Buzz Lightyear to the Rescue",
			 "pcid": "3940",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"61": {
			 "name": "Disney's Tigger's Honey Hunt",
			 "pcid": "3930",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"62": {
			 "name": "Donkey Kong 64",
			 "pcid": "3742",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"63": {
			 "name": "Doom 64",
			 "pcid": "3743",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"64": {
			 "name": "Dr Mario 64",
			 "pcid": "3744",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"65": {
			 "name": "Dual Heroes",
			 "pcid": "3745",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"66": {
			 "name": "Duck Dodgers Starring Daffy Duck",
			 "pcid": "3746",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"67": {
			 "name": "Duke Nukem 64",
			 "pcid": "3747",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"68": {
			 "name": "Duke Nukem: Zero Hour",
			 "pcid": "3748",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"69": {
			 "name": "Earthworm Jim 3D",
			 "pcid": "3749",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"70": {
			 "name": "ECW Hardcore Revolution",
			 "pcid": "14158",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"71": {
			 "name": "Elmo's Letter Adventure",
			 "pcid": "3750",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"72": {
			 "name": "Elmo's Number Journey",
			 "pcid": "3751",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"73": {
			 "name": "Excitebike 64",
			 "pcid": "3752",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"74": {
			 "name": "Extreme G",
			 "pcid": "3754",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"75": {
			 "name": "Extreme G II",
			 "pcid": "3973",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"76": {
			 "name": "F-1 Pole Position",
			 "pcid": "14430",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"77": {
			 "name": "F-1 World Grand Prix",
			 "pcid": "3755",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"78": {
			 "name": "FIFA Soccer 64",
			 "pcid": "3756",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"79": {
			 "name": "FIFA Soccer '99",
			 "pcid": "3758",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"80": {
			 "name": "FIFA: Road To World Cup '98",
			 "pcid": "10909",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"81": {
			 "name": "Fighter's Destiny",
			 "pcid": "3759",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"82": {
			 "name": "Fighter's Destiny 2",
			 "pcid": "3760",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"83": {
			 "name": "Fighting Force 64",
			 "pcid": "3761",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"84": {
			 "name": "Flying Dragon",
			 "pcid": "3762",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"85": {
			 "name": "Forsaken 64",
			 "pcid": "3763",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"86": {
			 "name": "Fox Sports College Hoops '99",
			 "pcid": "14431",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"87": {
			 "name": "F-Zero X",
			 "pcid": "3764",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"88": {
			 "name": "Gauntlet Legends",
			 "pcid": "3773",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"89": {
			 "name": "Gex 3: Deep Cover Gecko",
			 "pcid": "3774",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"90": {
			 "name": "GEX 64: Enter the Gecko",
			 "pcid": "3775",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"91": {
			 "name": "Glover",
			 "pcid": "3776",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"92": {
			 "name": "Goemon's Great Adventure",
			 "pcid": "3777",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"93": {
			 "name": "Golden Nugget",
			 "pcid": "3779",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"94": {
			 "name": "GoldenEye 007",
			 "pcid": "3780",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"95": {
			 "name": "GT 64: Championship Edition",
			 "pcid": "3787",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"96": {
			 "name": "Harvest Moon 64",
			 "pcid": "3788",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"97": {
			 "name": "Hercules: The Legendary Journeys",
			 "pcid": "3789",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"98": {
			 "name": "Hexen",
			 "pcid": "3790",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"99": {
			 "name": "Hey You, Pikachu!",
			 "pcid": "3791",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"100": {
			 "name": "Hot Wheels Turbo Racing",
			 "pcid": "3793",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"101": {
			 "name": "Hybrid Heaven",
			 "pcid": "3794",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"102": {
			 "name": "Hydro Thunder",
			 "pcid": "3795",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"102a": {
			"name": "Hydro Thunder [Grey Cart]",
			"pcid": "40355",
			"loose": "",
			"cib": "",
			"date": ""
	   },
		"103": {
			 "name": "Iggy's Reckin Balls",
			 "pcid": "3796",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"104": {
			 "name": "Indiana Jones and the Infernal Machine",
			 "pcid": "3797",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"105": {
			 "name": "Indy Racing 2000",
			 "pcid": "10904",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"106": {
			 "name": "International Superstar Soccer 64",
			 "pcid": "3798",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"107": {
			 "name": "International Superstar Soccer '98",
			 "pcid": "3799",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"108": {
			 "name": "International Superstar Soccer 2000",
			 "pcid": "16188",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"109": {
			 "name": "International Track & Field 2000",
			 "pcid": "3941",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"110": {
			 "name": "Jeopardy!",
			 "pcid": "3800",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"111": {
			 "name": "Jeremy McGrath Super Cross 2000",
			 "pcid": "3801",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"112": {
			 "name": "Jet Force Gemini",
			 "pcid": "3802",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"113": {
			 "name": "Ken Griffey Jr's Slugfest",
			 "pcid": "3804",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"114": {
			 "name": "Killer Instinct Gold",
			 "pcid": "3805",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"115": {
			 "name": "Kirby 64: The Crystal Shards",
			 "pcid": "3806",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"116": {
			 "name": "Knife Edge: Nose Gunner",
			 "pcid": "3807",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"117": {
			 "name": "Knockout Kings 2000",
			 "pcid": "3808",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"118": {
			 "name": "Kobe Bryant in NBA Courtside",
			 "pcid": "3845",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"119": {
			 "name": "LEGO Racers",
			 "pcid": "3809",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"120": {
			 "name": "Lode Runner 3-D",
			 "pcid": "3810",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"121": {
			 "name": "Mace: The Dark Age",
			 "pcid": "3811",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"122": {
			 "name": "Madden Football 64",
			 "pcid": "14134",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"123": {
			 "name": "Madden NFL '99",
			 "pcid": "14212",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"124": {
			 "name": "Madden NFL 2000",
			 "pcid": "3812",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"125": {
			 "name": "Madden NFL 2001",
			 "pcid": "3813",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"126": {
			 "name": "Madden NFL 2002",
			 "pcid": "3814",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"127": {
			 "name": "Magical Tetris Challenge Featuring Mickey",
			 "pcid": "3816",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"128": {
			 "name": "Major League Baseball Featuring Ken Griffey Jr.",
			 "pcid": "3803",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"129": {
			 "name": "Mario Golf",
			 "pcid": "3817",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"130": {
			 "name": "Mario Kart 64",
			 "pcid": "3818",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"131": {
			 "name": "Mario Party",
			 "pcid": "3819",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"132": {
			 "name": "Mario Party 2",
			 "pcid": "3820",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"133": {
			 "name": "Mario Party 3",
			 "pcid": "3821",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"134": {
			 "name": "Mario Tennis",
			 "pcid": "3822",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"135": {
			 "name": "Mega Man 64",
			 "pcid": "3823",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"136": {
			 "name": "Mia Hamm Soccer",
			 "pcid": "3825",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"137": {
			 "name": "Midway's Greatest Arcade Hits Volume 1",
			 "pcid": "3828",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"138": {
			 "name": "Mickey's Speedway USA",
			 "pcid": "3826",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"139": {
			 "name": "Micro Machines Turbo",
			 "pcid": "3827",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"140": {
			 "name": "Mike Piazza's Strike Zone",
			 "pcid": "14432",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"141": {
			 "name": "Milo's Astro Lanes",
			 "pcid": "3829",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"142": {
			 "name": "Mischief Makers",
			 "pcid": "3830",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"143": {
			 "name": "Mission Impossible",
			 "pcid": "3831",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"144": {
			 "name": "Monaco Grand Prix",
			 "pcid": "3832",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"145": {
			 "name": "Monopoly",
			 "pcid": "3833",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"146": {
			 "name": "Monster Truck Madness",
			 "pcid": "3834",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"147": {
			 "name": "Mortal Kombat IV",
			 "pcid": "3835",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"148": {
			 "name": "Mortal Kombat Mythologies: The Adventures of Sub-Zero",
			 "pcid": "3836",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"149": {
			 "name": "Mortal Kombat Trilogy",
			 "pcid": "3837",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"150": {
			 "name": "Ms Pac Man: Maze Madness",
			 "pcid": "3839",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"151": {
			 "name": "Multi Racing Championship (MRC)",
			 "pcid": "3838",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"152": {
			 "name": "Mystical Ninja Starring Goemon",
			 "pcid": "3840",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"153": {
			 "name": "Nagano Winter Olympics '98",
			 "pcid": "3841",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"154": {
			 "name": "Namco Museum 64",
			 "pcid": "3842",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"155": {
			 "name": "NASCAR \u201999",
			 "pcid": "3844",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"156": {
			 "name": "NASCAR 2000",
			 "pcid": "3843",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"157": {
			 "name": "NBA Courtside 2 Featuring Kobe Bryant",
			 "pcid": "3846",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"158": {
			 "name": "NBA Hang Time",
			 "pcid": "3847",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"159": {
			 "name": "NBA In The Zone \u201898",
			 "pcid": "14434",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"160": {
			 "name": "NBA In the Zone \u201899",
			 "pcid": "14435",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"161": {
			 "name": "NBA In The Zone 2000",
			 "pcid": "14433",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"162": {
			 "name": "NBA Jam '99",
			 "pcid": "3849",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"163": {
			 "name": "NBA Jam 2000",
			 "pcid": "3848",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"164": {
			 "name": "NBA Live \u201899",
			 "pcid": "3851",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"165": {
			 "name": "NBA Live 2000",
			 "pcid": "3850",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"166": {
			 "name": "NBA Showtime",
			 "pcid": "3852",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"167": {
			 "name": "NFL Blitz",
			 "pcid": "3854",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"168": {
			 "name": "NFL Blitz: Special Edition",
			 "pcid": "3855",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"169": {
			 "name": "NFL Blitz 2000",
			 "pcid": "3708",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"170": {
			 "name": "NFL Blitz 2001",
			 "pcid": "3709",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"171": {
			 "name": "NFL Quarterback Club '98",
			 "pcid": "14096",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"172": {
			 "name": "NFL Quarterback Club '99",
			 "pcid": "14133",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"173": {
			 "name": "NFL Quarterback Club 2000",
			 "pcid": "10451",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"174": {
			 "name": "NFL Quarterback Club 2001",
			 "pcid": "3877",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"175": {
			 "name": "NHL '99",
			 "pcid": "3856",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"176": {
			 "name": "NHL Blades of Steel \u201899",
			 "pcid": "14436",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"177": {
			 "name": "NHL Breakaway \u201898",
			 "pcid": "14437",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"178": {
			 "name": "NHL Breakaway '99",
			 "pcid": "14438",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"179": {
			 "name": "Nightmare Creatures",
			 "pcid": "3857",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"180": {
			 "name": "Nuclear Strike 64",
			 "pcid": "3859",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"181": {
			 "name": "Offroad Challenge",
			 "pcid": "3860",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"182": {
			 "name": "Ogre Battle 64: Person of Lordly Caliber",
			 "pcid": "3861",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"183": {
			 "name": "Olympic Hockey Nagano ' 98",
			 "pcid": "14426",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"184": {
			 "name": "Paperboy 64",
			 "pcid": "3863",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"185": {
			 "name": "Paper Mario",
			 "pcid": "3862",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"186": {
			 "name": "Penny Racers",
			 "pcid": "3864",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"187": {
			 "name": "Perfect Dark",
			 "pcid": "3865",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"188": {
			 "name": "PGA European Tour",
			 "pcid": "13163",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"189": {
			 "name": "PilotWings 64",
			 "pcid": "3867",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"190": {
			 "name": "Pokemon Puzzle League",
			 "pcid": "3868",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"191": {
			 "name": "Pokemon Snap",
			 "pcid": "3869",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"192": {
			 "name": "Pokemon Stadium",
			 "pcid": "3870",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"193": {
			 "name": "Pokemon Stadium 2",
			 "pcid": "3871",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"194": {
			 "name": "Polaris Snocross",
			 "pcid": "3872",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"195": {
			 "name": "Powerpuff Girls: Chemical X Traction",
			 "pcid": "3874",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"196": {
			 "name": "Power Rangers Lightspeed Rescue",
			 "pcid": "3873",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"197": {
			 "name": "Quake",
			 "pcid": "3876",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"198": {
			 "name": "Quake II",
			 "pcid": "3875",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"199": {
			 "name": "Quest 64",
			 "pcid": "3878",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"200": {
			 "name": "Rainbow Six Red Storm",
			 "pcid": "3879",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"200a": {
			"name": "Rainbow Six Red Storm [Grey Cart]",
			"pcid": "40359",
			"loose": "",
			"cib": "",
			"date": ""
	   },
		"201": {
			 "name": "Rally Challenge 2000",
			 "pcid": "3880",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"202": {
			 "name": "Rampage 2: Universal Tour",
			 "pcid": "3881",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"203": {
			 "name": "Rampage World Tour",
			 "pcid": "3882",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"204": {
			 "name": "Rat Attack",
			 "pcid": "3883",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"205": {
			 "name": "Rayman 2",
			 "pcid": "3884",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"206": {
			 "name": "Razor Freestyle Scooter",
			 "pcid": "3885",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"207": {
			 "name": "Ready 2 Rumble Boxing",
			 "pcid": "3886",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"208": {
			 "name": "Ready 2 Rumble Boxing: Round 2",
			 "pcid": "3887",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"209": {
			 "name": "Resident Evil 2",
			 "pcid": "3889",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"210": {
			 "name": "Re-Volt",
			 "pcid": "14425",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"211": {
			 "name": "Ridge Racer 64",
			 "pcid": "3890",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"212": {
			 "name": "Road Rash 64",
			 "pcid": "3891",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"212a": {
			"name": "Road Rash 64 [Grey Cart]",
			"pcid": "40356",
			"loose": "",
			"cib": "",
			"date": ""
	   },
		"213": {
			 "name": "Roadsters Trophy",
			 "pcid": "3892",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"214": {
			 "name": "Robotron 64",
			 "pcid": "3893",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"215": {
			 "name": "Rocket: Robot on Wheels",
			 "pcid": "3894",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"216": {
			 "name": "Rugrats: Scavenger Hunt",
			 "pcid": "3896",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"217": {
			 "name": "Rugrats in Paris: The Movie",
			 "pcid": "3895",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"217a": {
			"name": "Rugrats in Paris: The Movie [Grey Cart]",
			"pcid": "40357",
			"loose": "",
			"cib": "",
			"date": ""
	   },
		"218": {
			 "name": "Rush 2: Extreme Racing USA",
			 "pcid": "3898",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"219": {
			 "name": "San Francisco Rush 2049",
			 "pcid": "3899",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"220": {
			 "name": "San Francisco Rush: Extreme Racing",
			 "pcid": "3900",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"221": {
			 "name": "S.C.A.R.S.",
			 "pcid": "12587",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"222": {
			 "name": "Scooby-Doo! Classic Creep Capers",
			 "pcid": "3901",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"222a": {
			"name": "Scooby-Doo! Classic Creep Capers [Grey Cart]",
			"pcid": "40358",
			"loose": "",
			"cib": "",
			"date": ""
	   },
		"223": {
			 "name": "Shadow Man",
			 "pcid": "3902",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"224": {
			 "name": "Shadowgate: Trial of the Four Towers",
			 "pcid": "3903",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"225": {
			 "name": "Snowboard Kids",
			 "pcid": "3904",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"226": {
			 "name": "Snowboard Kids 2",
			 "pcid": "3905",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"227": {
			 "name": "South Park",
			 "pcid": "3906",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"228": {
			 "name": "South Park: Chef\u2019s Luv Shack",
			 "pcid": "3907",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"229": {
			 "name": "South Park Rally",
			 "pcid": "3908",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"230": {
			 "name": "Space Invaders",
			 "pcid": "3909",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"231": {
			 "name": "Space Station: Silicon Valley",
			 "pcid": "3910",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"232": {
			 "name": "Spider-Man",
			 "pcid": "3911",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"233": {
			 "name": "Star Fox 64",
			 "pcid": "3918",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"234": {
			 "name": "Star Soldier: Vanishing Earth",
			 "pcid": "3912",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"235": {
			 "name": "Star Wars Episode One: Battle for Naboo",
			 "pcid": "3913",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"236": {
			 "name": "Star Wars Episode One: Racer",
			 "pcid": "3914",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"237": {
			 "name": "Star Wars: Rogue Squadron",
			 "pcid": "3915",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"238": {
			 "name": "Star Wars: Shadows of the Empire",
			 "pcid": "3916",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"239": {
			 "name": "StarCraft 64",
			 "pcid": "3917",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"240": {
			 "name": "Starshot: Space Circus Fever",
			 "pcid": "3920",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"241": {
			 "name": "Stunt Racer 64",
			 "pcid": "3921",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"242": {
			 "name": "Super Bowling",
			 "pcid": "3922",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"243": {
			 "name": "Super Mario 64",
			 "pcid": "3924",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"244": {
			 "name": "Super Smash Brothers",
			 "pcid": "3925",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"245": {
			 "name": "Supercross 2000",
			 "pcid": "3923",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"246": {
			 "name": "Superman",
			 "pcid": "3926",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"247": {
			 "name": "Tetrisphere",
			 "pcid": "3928",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"248": {
			 "name": "Legend of Zelda: Ocarina of Time, The",
			 "pcid": "3977",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"248a": {
			 "name": "Legend of Zelda: Ocarina of Time, The [Gold Cart] (Collector's Edition)",
			 "pcid": "14315",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"249": {
			 "name": "Legend of Zelda: Majora's Mask, The",
			 "pcid": "3976",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"249a": {
			 "name": "Legend of Zelda: Majora's Mask, The [Hologram Label] (Collector's Edition)",
			 "pcid": "19305",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"250": {
			 "name": "New Tetris, The",
			 "pcid": "3853",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"251": {
			 "name": "World Is Not Enough, The",
			 "pcid": "3966",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"251a": {
			"name": "World Is Not Enough, The [Grey Cart]",
			"pcid": "40361",
			"loose": "",
			"cib": "",
			"date": ""
	   },
		"252": {
			 "name": "Tom and Jerry: Fists of Furry",
			 "pcid": "3931",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"253": {
			 "name": "Tonic Trouble",
			 "pcid": "3932",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"254": {
			 "name": "Tony Hawk's Pro Skater",
			 "pcid": "3933",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"255": {
			 "name": "Tony Hawk's Pro Skater 2",
			 "pcid": "3934",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"256": {
			 "name": "Tony Hawk's Pro Skater 3",
			 "pcid": "3935",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"257": {
			 "name": "Top Gear Hyper-Bike",
			 "pcid": "3936",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"258": {
			 "name": "Top Gear Overdrive",
			 "pcid": "3937",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"259": {
			 "name": "Top Gear Rally",
			 "pcid": "3938",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"260": {
			 "name": "Top Gear Rally 2",
			 "pcid": "3939",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"261": {
			 "name": "Tranformers: Beast Wars Metals",
			 "pcid": "3704",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"262": {
			 "name": "Triple Play 2000",
			 "pcid": "3942",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"263": {
			 "name": "Turok: Dinosaur Hunter",
			 "pcid": "3945",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"264": {
			 "name": "Turok 2: Seeds of Evil",
			 "pcid": "3943",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"264a": {
			"name": "Turok 2: Seeds of Evil [Grey Cart]",
			"pcid": "40360",
			"loose": "",
			"cib": "",
			"date": ""
	   },
		"265": {
			 "name": "Turok 3: Shadow of Oblivion",
			 "pcid": "3944",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"266": {
			 "name": "Turok: Rage Wars",
			 "pcid": "3946",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"266a": {
			 "name": "Turok: Rage Wars [Grey Cart] (Medal Patch)",
			 "pcid": "33811",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"267": {
			 "name": "Twisted Edge Snowboarding",
			 "pcid": "3947",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"268": {
			 "name": "Vigilante 8",
			 "pcid": "3948",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"269": {
			 "name": "Vigilante 8: Second Offense",
			 "pcid": "3949",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"270": {
			 "name": "Virtual Chess 64",
			 "pcid": "3950",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"271": {
			 "name": "Virtual Pool 64",
			 "pcid": "3951",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"272": {
			 "name": "V-Rally Edition 99",
			 "pcid": "3952",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"273": {
			 "name": "Waialae Country Club: True Golf Classics",
			 "pcid": "3953",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"274": {
			 "name": "War Gods",
			 "pcid": "14135",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"275": {
			 "name": "Wave Race 64",
			 "pcid": "3954",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"276": {
			 "name": "Wayne Gretzky's 3-D Hockey",
			 "pcid": "3785",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"277": {
			 "name": "Wayne Gretzky's 3-D Hockey '98",
			 "pcid": "3786",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"278": {
			 "name": "WCW Backstage Assault",
			 "pcid": "3955",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"279": {
			 "name": "WCW Mayhem",
			 "pcid": "3956",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"280": {
			 "name": "WCW Nitro",
			 "pcid": "3957",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"281": {
			 "name": "WCW vs NWO: World Tour",
			 "pcid": "3959",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"282": {
			 "name": "WCW\/NWO Revenge",
			 "pcid": "3958",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"283": {
			 "name": "Wetrix",
			 "pcid": "3960",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"284": {
			 "name": "Wheel of Fortune",
			 "pcid": "3961",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"285": {
			 "name": "WinBack",
			 "pcid": "3962",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"286": {
			 "name": "Wipeout 64",
			 "pcid": "3963",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"287": {
			 "name": "World Cup '98",
			 "pcid": "3964",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"288": {
			 "name": "World Driver Chamionship",
			 "pcid": "3965",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"289": {
			 "name": "Worms: Armageddon",
			 "pcid": "3967",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"290": {
			 "name": "WWF Wrestlemania 2000",
			 "pcid": "3968",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"291": {
			 "name": "WWF: War Zone",
			 "pcid": "3971",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"292": {
			 "name": "WWF: Attitude",
			 "pcid": "3969",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"293": {
			 "name": "WWF: No Mercy",
			 "pcid": "3970",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"294": {
			 "name": "Xena Warrior Princess: The Talisman of Fate",
			 "pcid": "3972",
			 "loose": "",
			 "cib": "",
			 "date": ""
		},
		"295": {
			 "name": "Yoshi's Story",
			 "pcid": "3975",
			 "loose": "",
			 "cib": "",
			 "date": ""
		}
	};

//PriceCharting API Token - Global Variable
	// var pcAuthToken = "09f74ba6c7119279d03ea5e16965cb6b650f1952";
	var pcAuthToken = "00291687cb933b07d363351aa54b8d684d8d0059";
	
//Global Variable to store all the game rows in an array, to avoid further DOM searches.
	var gameRows;
	
//Global Variable to store passed Bundle information
	var bundle = false;
	
//Get vars passed via URL string:
	//TODO: Update to accept custom game values as well

	//No new games by deafult
	var newGames = false;
	//Get any search parameters, if they exist
	var q = window.location.search;
	//If they do indeed exist...
	if ( q.length > 0 ) {
		//Convert from string to array
		q = q.split("?")[1].split("&");
		//get length
		var qL = q.length;
		//Loop through
		for (var i=0; i<qL; i++) {
			//Store item, key, and value
			var param = q[i],
				key = param.split("=")[0],
				val = param.split("=")[1];
			//If key is reset..
			if ( key === "reset" && val === "true") {
				//Set new games to true (Causing a reload)
			    newGames = true;
			    window.history.replaceState('N64 Bundlr', 'N64 Bundlr', window.location.pathname);
			}
			//If key is bundle...
			if ( key === "bundle" ) {
				//Update the bundle var, and wipe out the q string from the URL
				bundle = val;
				window.history.replaceState('N64 Bundlr', 'N64 Bundlr', window.location.pathname);
			}
		}
	}

//Local or Ajax Game Price Data & Ajax Count
	var local,
		totalGames;
	//If there is NO local data OR that data is > 24 hours old OR there are new games
	if ( localStorage.lastData === undefined || Date.now() > parseInt(localStorage.lastData) + 86400000 || newGames === true ) {
		local = false;
		totalGames = Object.keys(games).length;
	} else {
		local = true;
		totalGames = 0;
	}

//Convert to HH:MM:SS
	function returnHours(_time) {
		var date = _time;
		var hours = parseInt(date/3600000);
		return hours;
	}

//Get and Set Current Exchange Rate
//ToDo: Have option to set currency to anything, for use worldwide
	var CAD; //Assign nothing to return undefined
	function convertCurrency(_num,_cur) {
		_num = parseFloat(_num * 0.01);
		if (_cur === "USD") {
			_num = _num.toFixed(2);
			return _num;
		} else if (_cur === "CAD") {
			_num = _num * CAD;
			_num = _num.toFixed(2);
			var _rd1 = function() {
				if ( _num % 1 > 0 ) { 
					return (parseInt(_num) + 1).toFixed(2);
				} else { 
					return _num ;
				}
			};
			var _rd5 = function() {
				if ( _num % 5 > 0 ) { 
					return (_num - ( _num % 5 ) + 5).toFixed(2);
				} else { 
					return _num ;
				}
			};
			return [_num, _rd1, _rd5];
		//} else {
			//window.console && console.log ( 'ConvertCurrency error. Erroneous input. Currency not supported.' );
		}
	}

//Wipe out data and start over
	function resetData() {
		//Regex detects strings of numbers 3-5 characters long
		var regEx = /^[1-9][0-9]{3,5}$/;
		//Get total number of items in localStorage
		var lsl = localStorage.length;
		//Loop through each localStorage item
		for ( var i = 0; i < lsl; i++ ) {
			//Store the single item
			var lsItem = localStorage.key(i);
			//If the item exists and matches the regex
			if ( lsItem !== null && lsItem.match(regEx) ) {
				//Remove it.
				localStorage.removeItem( lsItem );
			}
		}
		//Now reload the page in order to re-init the data
		window.location = window.location.pathname + '?reset=true';
	}

//Reset bundles
	function resetBundles() {
		//Regex detects strings of numbers 3-5 characters long
		var regEx = /^[1-9][0-9]{3,5}$/;
		//Get total number of items in localStorage
		var lsl = localStorage.length;
		//Loop through each localStorage item
		for ( var i = 0; i < lsl; i++ ) {
			//Store the single item
			var lsItem = localStorage.key(i);
			//If the item exists and DOES NOT match the regex
			if ( lsItem !== null && !lsItem.match(regEx) && lsItem !== 'saveState' && lsItem !== 'lastData' ) {
				//Remove it.
				localStorage.removeItem( lsItem );
			}
		}
		//Update the list of bundles
		listBundles();
	}
	$('#resetBundles').click(function(){
		resetBundles();
	});

//Keyword Generator
//ToDo: add space-stripped title, add genre, add publisher, other?
	function generateKeywords(_local,_remote) {
		var _localStrip = _local.replace(/[^\w\s]/gi, '');
		var _remoteStrip = _remote.replace(/[^\w\s]/gi, '');
		return _local + ' ' + _remote + ' ' + _localStrip + ' ' + _remoteStrip;
	}

//Checks that exchange rate is set, tries again until it works
	function isExchangeSet() {
		if (CAD !== undefined) {	
			buildGameTable();
		} else {
			setTimeout(isExchangeSet(), 1000);
		}
	}

//Populates the newly-built table with 
	function populateGameTable( _data , _pcid ){
		if ( _data === null ) {
			resetData(); //Clear local storage
			return; //Break out of func?
		} else {
			$('#'+_data.id).find('.gameLooseValue')
				.attr( 'data-USD' , convertCurrency(_data["loose-price"],"USD")   )
				.attr( 'data-CAD' , convertCurrency(_data["loose-price"],"CAD")[0])
				.attr( 'data-rd1' , convertCurrency(_data["loose-price"],"CAD")[1])
				.attr( 'data-rd5' , convertCurrency(_data["loose-price"],"CAD")[2])
				.html( convertCurrency(_data["loose-price"],"CAD")[0] )
				.end()
				.find('.gameTitle')
				.attr( 'data-keywords' , generateKeywords( $('#gameTitle'+_pcid).text() , _data["product-name"] ) )
			;
		}
	}

// Constructs Game Table
	//Builds the HTML structure from our JSON Obj
	function buildGameTable() {
		//Loop through the array of games
		$.each( games, function(_i){
			var game = games[_i];
			var pcid = game.pcid;
			//Build the HTML layout for each game
			var html = 	"<tr id=\""+pcid+"\">"
					 + 		"<td id=\"gameImage"+pcid+"\" 		class=\"gameImage\"																>"+"</td>"
					 + 		"<td id=\"gameTitle"+pcid+"\" 		class=\"gameTitle\" 				data-keywords=\"\"							>"+game.name+"</td>"
					 + 		"<td id=\"gameLooseValue"+pcid+"\" 	class=\"gameLooseValue\" 			data-rd1=\"\" data-rd5=\"\" data-USD=\"\"	>"+"</td>"
					 + 		"<td id=\"gameCIBValue"+pcid+"\" 	class=\"gameCIBValue hidden\" 		data-rd1=\"\" data-rd5=\"\" data-USD=\"\"	>"+"</td>"
					 + 		"<td id=\"gameReleaseDate"+pcid+"\" class=\"gameReleaseDate hidden\"												>"+game.date+"</td>"
					 + 	"</tr>"
			;
			//Append it to the table
			$('#GameIndex').append(html);
			//If new remote data is required...
			if ( local === false ) {
				localStorage.lastData = Date.now();
				//Go get the info from pricecharting
				$.get( 
					//url
					"https://ae.pricecharting.com/api/product?t="+pcAuthToken+"&id="+pcid,
					//data
					function(data) {
						console.log(data);
						//Set localStorage entry for each game
						localStorage.setItem( pcid , JSON.stringify( data ) );
						//Convert the data into user-accessible info
						populateGameTable( data , pcid );
					}
				);
			//Otherwise grab it from local
			} else {
				//Convert the data into user-accessible info
				populateGameTable( JSON.parse( localStorage.getItem(pcid) ) , pcid );
			}
			
		});
	}

//Round	Up
	function roundUp(_amt) {
		if ( _amt === -1 ) {
			$('.gameLooseValue').each(function(){
				var _this = $(this);
				_this.html( _this.attr('data-USD') );
			});
		} else if ( _amt === 0 ) {
			$('.gameLooseValue').each(function(){
				var _this = $(this);
				_this.html( _this.attr('data-CAD') );
			});
		} else if ( _amt === 1 ) {
			$('.gameLooseValue').each(function(){
				var _this = $(this);
				_this.html( _this.attr('data-rd1') );
			});
		} else if ( _amt === 5) {
			$('.gameLooseValue').each(function(){
				var _this = $(this);
				_this.html( _this.attr('data-rd5') );
			});
		} else {
			alert('Custom Rounding coming soon...');
		}
	}

//Add up the totals for the bundle
	function calcTotal() {
		var bundleTotal = 0,
			feeTotal = 0,
			adjTotal = 0,
			discount10 = 0,
			discount15 = 0,
			discount20 = 0,
			discount25 = 0
		;
		$('.selected .gameLooseValue').each(function(){
			var nextItem = parseFloat( $(this).html() );
			bundleTotal = bundleTotal + nextItem;
		});
		$('#bundletotal').html( bundleTotal.toFixed(2) );
		feeTotal = ( bundleTotal * 0.1 ) + ( bundleTotal * 0.029 ) + 0.3;
		$('#ebayFees').html( feeTotal.toFixed(2) );
		adjTotal = bundleTotal - ( bundleTotal * 0.1 ) + ( bundleTotal * 0.029 ) + 0.3;
		$('#adjTotal').html( adjTotal.toFixed(2) );
		discount10 = bundleTotal * 0.9;
		$('#discount10').html( discount10.toFixed(2) );
		discount15 = bundleTotal * 0.85;
		$('#discount15').html( discount15.toFixed(2) );
		discount20 = bundleTotal * 0.80;
		$('#discount20').html( discount20.toFixed(2) );
		discount25 = bundleTotal * 0.75;
		$('#discount25').html( discount25.toFixed(2) );
	}

//Count the number of selected items
	function countItems() {
		$('#itemNumber').html( $('.selected').length );
	}

// LIVE Searching
	//Global Vars
	var searchTerm,
		searchBox = $('#search');
	//Match Search Term against Keywords
	function searchTerms() {
		searchTerm = searchBox.val().toLowerCase();
		$('[data-keywords]').each(function () {
			var $this = $(this);
			var $parent = $this.parent();
			if ($this.attr('data-keywords').toLowerCase().indexOf(searchTerm) === -1) {
				$parent.addClass('hidden');
			} else {
				$parent.removeClass('hidden');
			}
		});
	}
	//Fire the search after each entry into the search field
	function liveSearch() {
		searchBox.keyup(function () {
			searchTerms();
		});
	}
	//Clear live search
	function clearLiveSearch() {
		$('#search').val("");
		searchTerms();
		$('#search').focus();
	}
	//Attach clearLiveSearch to the CLEAR button
	$('#clear').click( function(){
		clearLiveSearch();
	});
	//Toggle only bundled items
	function toggleBundle(){
		console.log("hey kids!");
		clearLiveSearch();
		var $this_p = $('#toggleBundled');
		if ( $this_p.hasClass('filtered') ) {
			gameRows.removeClass('hidden');
			$this_p.removeClass('filtered');
		} else {
			gameRows.each(function(){
				var $this_c = $(this);
				if ( !$this_c.hasClass('selected') ) {
					$this_c.addClass('hidden');
				}
			});
			$this_p.addClass('filtered');
		}
	}
	
//Bundle-Checker-Off-Er
	function highlightBundle(_bundle) {
		if ( _bundle ) {
			$('.selected').removeClass('selected');
			var games;
			if ( _bundle.indexOf("~") > -1 ){
				games = _bundle.split('~')[1].split(',');	
			} else {
				games = _bundle.split(',');
			}
			var gamesl = games.length;
			for (var g=0;g<gamesl;g++) {
				var _game = games[g];
				$('#'+_game).click();
			}
		//} else {
			//window.console && console.log('No Bundle Defined. No highlight occured.');
		}
	}

//Save State
	function saveState() {
		var currentBundle = '';
		$('.selected').each(function(b){
			var _this = $(this);
			if ( b === 0 ) {
				currentBundle = _this.attr('id');
			} else {
				currentBundle += "," + _this.attr('id');
			}
		});
		document.getElementById('currentBundle').value = currentBundle;
		document.getElementById('sharingUrl').value = window.location.href + '?bundle=MyBundle~' + currentBundle;
		localStorage.setItem( 'saveState' , currentBundle );
	}
	
//Load Saved State
	function loadState() {
		if ( bundle === false ) {
			if ( localStorage.getItem('saveState') !== null ) {
				highlightBundle( localStorage.getItem('saveState') );
			} else {
				highlightBundle(bundle);
			}
		} else {
			highlightBundle(bundle);
		}
	}
	
//Bundle List
	function listBundles() {
		//window.console && console.log('listBundles was called');
		let _bundles = document.getElementById('bundles');
		_bundles.innerHTML = ''; //Clear it out
		//Regex detects strings of numbers 3-5 characters long
		let regEx = /^[1-9][0-9]{3,5}$/;
		//Get total number of items in localStorage
		let lsLength = localStorage.length;
		//Loop through each localStorage item
		for ( let i = 0; i < lsLength; i++ ) {
			//Store the single item
			let _thisBundle = localStorage.key(i);
			//If the item exists and matches the regex and it NOT any of the internal storage items.
			if ( _thisBundle !== null && !_thisBundle.match(regEx) && _thisBundle !== 'lastData' && _thisBundle !== 'saveState' ) {
				let _games = localStorage.getItem( _thisBundle );
				let _bundleSelector = document.createElement('a');
				_bundleSelector.innerHTML = _thisBundle;
				_bundleSelector.setAttribute('class', 'bundleName');
				_bundleSelector.setAttribute('data-bundle-name', _thisBundle);
				_bundleSelector.setAttribute('data-bundle-items', _games);
				_bundleSelector.addEventListener('click', () => {
					highlightBundle(_games);
				});
				_bundles.appendChild(_bundleSelector);

				let _bundleDeleter = document.createElement('a');
				_bundleDeleter.innerHTML = 'DELETE';
				_bundleDeleter.setAttribute('class', 'deleteBundle');
				_bundleDeleter.addEventListener('click', () => {
					deleteBundle(_thisBundle);
				});
				_bundles.appendChild(_bundleDeleter);
				// $('#bundles').append('<a class="bundleName" data-bundle-name="' + _thisBundle + '" data-bundle-items="' + _games + '" onclick="javascript:loadBundle(this);">' + _thisBundle + '</a><a class="deleteBundle" onclick="javascript:deleteBundle(\'' + _thisBundle + '\');"></a>');
			}
		}
	}
	
//Save Bundle
	function bundleSaver() {
		var _bundleName = $('#bundleName').val();
		var _bundles = localStorage.length - Object.keys(games).length;
		if ( _bundleName.length === 0 ) {
			_bundleName = 'MyBundle';
		}
		if ( localStorage.getItem( _bundleName ) === null ) {
			localStorage.setItem( _bundleName , $('#currentBundle').val() );
			document.getElementById('popup-close').click();
			alert("You bundle was saved as " + _bundleName + ".");
		} else {
			if ( _bundleName === 'MyBundle' ) {
				for ( var i = 0; i < _bundles; i++ ) {
					if ( localStorage.getItem( _bundleName + i ) === null ) {
						localStorage.setItem( _bundleName + i , $('#currentBundle').val() );
						alert("You bundle was saved as " + _bundleName + i + ".");
						document.getElementById('popup-close').click();
						break;
					}
				}
			} else {
				if (confirm("Bundle already exists. Overwrite?") === true) {
			        localStorage.setItem( _bundleName , $('#currentBundle').val() );
			    } else {
			        alert("Bundle was not saved. Please enter a unique name and try again. :)");
			    }				
			}
		}
		//Update the list of bundles
		listBundles();
	}
	$('#saveBundleName').click(function(){
		bundleSaver();
	});
	
//Delete Bundle
	// This is defined here, but only used inline
	// eslint-disable-next-line no-unused-vars
	function deleteBundle(_name) {
		//var _bundleName = $('#bundleName').val();
		localStorage.removeItem(_name);
		//Update the list of bundles
		listBundles();
	}

//Document "ready" function
	$(document).ready(function(){
		//Set CAD exchange
		$.get( 
			"http://data.fixer.io/api/latest?access_key=c171f44c489d8926104d2f3a7b8172d3&symbols=USD,CAD",
			function( data ){
				if (typeof data !== 'object') {
					data = JSON.parse(data);
				}
				CAD = data.rates.CAD/data.rates.USD;
				//Fire off the DOM builder
				isExchangeSet();
			}
		);
	});

//DOM finished dynamically building function
	// TODO: Clean up this mess
	var ajaxfired = -1; //-1 to account for fixer.io conversion data
	$( document ).ajaxComplete(function() {
		ajaxfired++;
		if (ajaxfired === totalGames) { //Init!
			
			//Add the table-sorting
			$("#GameTable").tablesorter();
			
			//Make an array of all the table rows for future use
			gameRows = $('tbody tr');
	
			//Add the click-to-calc bundle function
			gameRows.click(function(){
				var $this = $(this);
				$this.toggleClass('selected');
				calcTotal();
				countItems();
				saveState();
			});
			
			//Toggle Show Only Bundled Items
			$('#toggleBundled').click(function(){
				toggleBundle();
			});
			
			//Clear Bundled Items
			$('#clearSelected').click(function(){
				$('.selected').removeClass('selected');
				liveSearch();
				countItems();
				calcTotal();
				if ( $('#toggleBundled').hasClass('open') ) {
					toggleBundle();
				}
			});
			
			//Toggle Bundle-Management Menu
			$('#itemCount').click(function(){
				$(this).toggleClass('open');
			});
			
			//Toggle Main Menu (Start Button)
			$('#mainMenu').click(function(){
				$('#sidebar').toggleClass('open');
			});
			
			$('#closeSidebar').click(function(){
				$('#sidebar').toggleClass('open');
			});
	
			//Init live search
			liveSearch();
	
			//Focus on search field
			$('#search').focus();
	
			//Remove the loading screen so the page is interactive
			$('body').removeClass('loading');
			
			//Highlight Bundle, if required
			loadState();
			
			//List out bundles
			listBundles();
			
			//Price Display Customizations...
			$('#roundUpUsd').click(	function(){	roundUp(-1);});
			$('#roundUpCad').click(	function(){	roundUp(0);	});
			$('#roundUp1').click(	function(){	roundUp(1);	});
			$('#roundUp5').click(	function(){	roundUp(5);	});
			
			//Reset Price Data
			$('#resetPrices').click(function(){
				if (confirm("Price data is automatically refreshed in about " + returnHours((parseInt(localStorage.lastData) + 86400000) - Date.now()) + " hours. Do you still want to reset the data?") === true) {
			        resetData();
			    }
			});		


			// Random Color
			// let root = document.documentElement;
			// root.addEventListener("mousemove", e => {
			// 	root.style.setProperty('--mouse-x', e.clientX + "px");
			// 	root.style.setProperty('--mouse-y', e.clientY + "px");
			// });
	
		} else {
			// Animate the loading bar
			var loadingBar = 60 - (60/totalGames * ajaxfired);
			$('style').html('body.loading:before{box-shadow: inset -'+loadingBar+'vw 0px 0px 0px white;}');
		}
	});











