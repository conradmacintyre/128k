//JSHINT-SPECIFIC THINGS
//jshint multistr: true

//Declared so JSLINT leaves me alone about it
var Superstars;

var Matchtypes = {
	'STD' : {
		'Name'		: 'Standard',
		'Strength'	: 1,
		'Technique'	: 1,
		'Speed'		: 1,
		'Mind'		: 1,
		'Nerve'		: 1,
		'Heart'		: 1,
		'MicSkill'	: 0,
		'Charisma'	: 1,
		'Popularity': 1,
		'Durability': 1,
		'Finisher'	: 2,
		'Height'	: 0.1,
		'Weight'	: 0.01,
		'Fatigue'	: 0.5,
		'Viewership': 100,
		'Outcomes'	: [
			[9.5	, 'Disqualification'],
			[8.5	, 'Knockout'],
			[7.5	, 'Submission'],
			[0.0	, 'Pinfall']
		]
	},
	'SUB' : {
		'Name'		: 'Submission',
		'Strength'	: 1,
		'Technique'	: 2,
		'Speed'		: 1,
		'Mind'		: 1.5,
		'Nerve'		: 1,
		'Heart'		: 1,
		'MicSkill'	: 0,
		'Charisma'	: 1,
		'Popularity': 1,
		'Durability': 1,
		'Finisher'	: 1.5,
		'Height'	: 0.1,
		'Weight'	: 0.01,
		'Fatigue'	: 1,
		'Viewership': 150,
		'Outcomes'	: [
			[9.5	, 'Pass-Out'],
			[0.0	, 'Submission']
		]
	},
	'HCR' : {
		'Name'		: 'Hardcore',
		'Strength'	: 1,
		'Technique'	: 1,
		'Speed'		: 1,
		'Mind'		: 1,
		'Nerve'		: 2,
		'Heart'		: 1.5,
		'MicSkill'	: 0,
		'Charisma'	: 1,
		'Popularity': 1,
		'Durability': 2,
		'Finisher'	: 1,
		'Height'	: 0.1,
		'Weight'	: 0.01,
		'Fatigue'	: 3,
		'Viewership': 200,
		'Outcomes'	: [
			[9.5	, 'Submission'],
			[8.5	, 'Knockout'],
			[0.0	, 'Pinfall']
		]
	},
	'LDR' : {
		'Name'		: 'Ladder',
		'Strength'	: 1,
		'Technique'	: 1,
		'Speed'		: 2,
		'Mind'		: 1,
		'Nerve'		: 2,
		'Heart'		: 1,
		'MicSkill'	: 0,
		'Charisma'	: 1,
		'Popularity': 1,
		'Durability': 1.5,
		'Finisher'	: 1,
		'Height'	: 0.1,
		'Weight'	: 0.01,
		'Fatigue'	: 1.5,
		'Viewership': 300,
		'Outcomes'	: [
			[0.0	, 'Retrieving the suspended object']
		]
	},
	'CGE' : {
		'Name'		: 'Cage',
		'Strength'	: 1,
		'Technique'	: 1,
		'Speed'		: 1.2,
		'Mind'		: 1,
		'Nerve'		: 1.5,
		'Heart'		: 2,
		'MicSkill'	: 0,
		'Charisma'	: 1,
		'Popularity': 1,
		'Durability': 1.5,
		'Finisher'	: 1,
		'Height'	: 0.1,
		'Weight'	: 0.01,
		'Fatigue'	: 2,
		'Viewership': 250,
		'Outcomes'	: [
			[9.0	, 'Submission'],
			[8.0	, 'Pinfall'],
			[0.0	, 'Climb-Out']
		]
	}
};

//Make sure any given Superstar is attached to it's appropriate object
function Contextr(a) {
	if (a.Strength === undefined) {
		return Superstars[a];
	} else {
		return a;
	}
}

//Get a Stat
function Stat(Wrestler,Attribute) {
	Wrestler = Contextr(Wrestler);
	return Wrestler[Attribute];
}

//Calculate Overall
function Overall(Wrestler,MatchType) {
	var total = 0;
	//Standard
	if (MatchType === undefined) {
		total += Stat(Wrestler,'Strength');
		total += Stat(Wrestler,'Technique');
		total += Stat(Wrestler,'Speed');
		total += Stat(Wrestler,'Mind');
		total += Stat(Wrestler,'Nerve');
		total += Stat(Wrestler,'Heart');
		total += Stat(Wrestler,'Charisma');
		total += Stat(Wrestler,'Popularity');
		total += Stat(Wrestler,'Durability');
		total += Stat(Wrestler,'Finisher');
	//Match-aware
	} else {
		total += Stat(Wrestler,'Strength') * Matchtypes[MatchType].Strength;
		total += Stat(Wrestler,'Technique') * Matchtypes[MatchType].Technique;
		total += Stat(Wrestler,'Speed') * Matchtypes[MatchType].Speed;
		total += Stat(Wrestler,'Mind') * Matchtypes[MatchType].Mind;
		total += Stat(Wrestler,'Nerve') * Matchtypes[MatchType].Nerve;
		total += Stat(Wrestler,'Heart') * Matchtypes[MatchType].Heart;
		total += Stat(Wrestler,'Charisma') * Matchtypes[MatchType].Charisma;
		total += Stat(Wrestler,'Popularity') * Matchtypes[MatchType].Popularity;
		total += Stat(Wrestler,'Durability') * Matchtypes[MatchType].Durability;
		total += Stat(Wrestler,'Finisher') * Matchtypes[MatchType].Finisher;
	}
	return total;
}

//Injury-checker
function CheckInjury(Wrestler,MatchType) {
	//Get wrestler
	Wrestler = Contextr(Wrestler);
	//Update fatigue
	if (MatchType !== undefined) {
		Wrestler.Fatigue += Matchtypes[MatchType].Fatigue;
	}
	//Get updated fatigue
	var Tiredness = Wrestler.Fatigue;
	//Injury calculator mini function
	function Injured(num) {
		if ( Math.random() > num ) {
			Wrestler.Injury = true;
			return 'disabled';
		}
	}
	//Odds of injury
	if (Tiredness > 10) {
		Wrestler.Injury = true;
	} else if (Tiredness === 10) {
		Injured(0.8);
	} else if (Tiredness >= 9) {
		Injured(0.85);
	} else if (Tiredness >= 8) {
		Injured(0.9);
	} else {
		Injured(0.95);
	}
}

//Comma-Separate Large Numbers
function Comma(num) {
    var parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

//Get Win type
function VictoryType(MatchType) {
	var NumGen = Math.random() * 10;
	var PosOut = Matchtypes[MatchType].Outcomes;
	var PosLen = PosOut.length;
	for (var i = 0; i<PosLen; i++) {
		if (NumGen >= PosOut[i][0]) {
			console.log(PosOut[i][1]);
			return PosOut[i][1];
		}
	}
}

//Get Number of Viewers
function RealViewers(Viewers) {
	Viewers = parseInt(Viewers * 1000);
	if (Viewers >= 1000) {
		return Viewers;
	} else {
		return 1000;
	}
}

//Layout Roster for selection
function SuperstarSelector(Roster) {
	//Get the element that the roster will be listed in
	var RosterWrap = document.getElementById('Roster');
	//Empty it
	RosterWrap.innerHTML = '';
	//Create an array for all the brand's superstars
	var keys = [];
    //Loop through the roster, adding them to the above array
    for (var i in Roster) {
        keys.push(i);
    }
    //Loop through each wrestler
    for (i=0; i<keys.length; i++) {
	    //Get their object name
    	var ShortName = keys[i];
    	//Get their actual name
    	var Wrestler = Contextr(ShortName);
    	//Define teh disabled variable
    	var disabled = '';
    	//If the wrestler is injured, set them as disabled
    	if (Wrestler.Injury === true) { 
	    	disabled = 'disabled';
	    }
	    //Populate the roster-select element with this, for each wrestler
    	RosterWrap.innerHTML 
    		+= 	'<input type="checkbox" id="' + ShortName + '" ' + disabled + '>'
    		+ 	'<label class="Wrestler" style="background-image:url(img/' + ShortName + '.png)" for="' + ShortName + '">'
    		+ 		'<div class="DarkBG">'
		    + 			'<p class="Name">'
		    + 				Wrestler.Name
		    + 			'</p>'
		    + 			'<p class="Overall">'
		    + 				'<b>O</b><br>' + parseInt(Overall(ShortName))
		    + 			'</p>'
		    + 			'<p class="Morale">'
		    + 				'<b>M</b><br>' + Wrestler.Morale
		    + 			'</p>'
		    + 			'<p class="Fatigue">'
		    + 				'<b>F</b><br>' + Wrestler.Fatigue
		    + 			'</p>'
		    + 			'<p class="Wins">'
		    + 				'<b>W</b><br>' + Wrestler.Wins
		    + 			'</p>'
		    + 			'<p class="Losses">'
		    + 				'<b>L</b><br>' + Wrestler.Losses
		    + 			'</p>'
	    	+ 		'</div>'
    		+ 	'</label>'
    	;
    }
}

//Fight simulator
function StartFight(Wrestlers,MatchType){
	
	//Log start of fight
	console.log('FIGHT STARTED');
	
	//If there is no opponent
	if (Wrestlers.length === 1) {
		document.getElementById('WinnerName').innerHTML 
			= '<p>'
			+ Stat(Wrestlers[0],'Name')
			+ ' won by default. '  
			+ Comma(RealViewers()) 
			+ ' people were disappointed.'
			+ '</p>'
			+ document.getElementById('WinnerName').innerHTML
		;
	
	//If there is one or more opponents
	} else {
		
		//The match rankings
		var Rank = [];
		
		//The match rating, starting with the match type
		var Viewers = Matchtypes[MatchType].Viewership;
		console.log('Viewers',Viewers);
		
		//Loop through each wrestler in the match
		for (var i=0; i<Wrestlers.length; i++) {
			
			//Get their stats
			var who = Contextr(Wrestlers[i]);
			var ovr = Overall(who,MatchType);
			var rnd = (Math.random() * 25);
			var mrl = who.Morale;
			var ftg = who.Fatigue;
			var ttl = ovr + rnd + mrl - ftg;
			
			//Add those stats to the match rankings array
			Rank.push( ttl );
			
			//And add their popularity to the match rating
			Viewers += who.Popularity * 10;
		}
		
		//Get the position of the highest overall, and assign that to a wrestler
		var Win = Rank.indexOf(Math.max.apply(Math, Rank));
		var Winner = Contextr([Wrestlers[Win]]);
		
		//Get the position of the lowset overall, and assign that to a wrestler
		var Lose = Rank.indexOf(Math.min.apply(Math, Rank));
		var Loser = Contextr([Wrestlers[Lose]]);
		
		//Subtract the difference between the winner's rank and the loser's
		Viewers -= (Rank[Win] - Rank[Lose]) * 10;
		
		//Adjust everyone's stats
		for (var each in Superstars) {
			//Define THIS wrestler
			var Wrestler = Contextr(each);
			//If THIS wrestler is in the match
	        if ( Wrestlers.indexOf(each) > -1 ) {
		        
		        //MAYBE SEND THIS TO A MATCH FUNCTION??
		        
		        if (Wrestler.Morale <= 9.5){
		        	Wrestler.Morale += 0.25;
		        }
		        
				//Check each participating superstar for injury
				CheckInjury(each,MatchType);
				
			//If THIS wrestler is NOT in the match
	        } else {
		        if (Wrestler.Morale >= 0.25){
		        	Wrestler.Morale -= 0.25;
		        }
		        if (Wrestler.Fatigue >= 0.25){
					Wrestler.Fatigue -= 0.25;
				}
				if (Wrestler.Injury === true && Wrestler.Fatigue <= 5){
		        	Wrestler.Injury = false;
		        }
	        }
	    }
		//Adjust stats of the winning superstar
		Winner.Wins += 1;
		if (Winner.Morale <= 8.5){
			Winner.Morale += 1;
		}
		if (Winner.Fatigue >= 0.25){
			Winner.Fatigue -= 0.25;
		}
		//Adjust stats of the losing superstar
		Loser.Losses += 1;
		if (Loser.Morale >= 0.5){
			Loser.Morale -= 0.5;
		}
		if (Loser.Fatigue <= 9.5){
			Loser.Fatigue += 0.5;
		}
		//Output winner
		document.getElementById('WinnerName').innerHTML 
			= '<p>'
			+ Winner.Name
			+ ' def. ' 
			+ Loser.Name 
			+ ' via '
			+ VictoryType(MatchType)
			+ ', with ' 
			+ Comma(RealViewers(Viewers)) 
			+ ' viewers.'
			+ '</p>'
			+ document.getElementById('WinnerName').innerHTML
		;
	}	
	SuperstarSelector(Superstars);
}

//Hook up the roster reveal
var ShowRoster = document.getElementById('RosterButton');
var RosterWrap = document.getElementById('RosterWrapper');
ShowRoster.addEventListener('click', function(){
	var className = 'open';
	if (RosterWrap.classList.contains(className) && ShowRoster.classList.contains(className)) {
		ShowRoster.classList.remove(className);
		RosterWrap.classList.remove(className);
		RosterWrap.removeAttribute('style');
	} else {
		ShowRoster.classList.add(className);
		RosterWrap.classList.add(className);
		RosterWrap.setAttribute('style','height:'+RosterWrap.children[0].offsetHeight+'px;');
	}
});

//Rematch!
document.getElementById('Rematch').addEventListener('click', function(){
	var Wrestlers = this.getAttribute('data-rematch').split(',');
	for (var i=0; i<Wrestlers.length; i++) {
		var Wrestler = Wrestlers[i];
		console.log(Wrestler, Wrestlers);
		document.getElementById(Wrestler).click();
	}
});


//All-In
document.getElementById('AllIn').addEventListener('click',function(){
	var inputs = document.querySelectorAll('input:not(:disabled)');
	for (var i=0; i<inputs.length; i++) {
		inputs[i].checked = true;
	}
});


//Hook up the fight button
document.getElementById('Fight').addEventListener('click', function(){
	var Wrestlers = document.querySelectorAll('input:checked');
	var Fighters = [];
	var MatchType = document.getElementById('MatchType').value;
	for (var i=0; i<Wrestlers.length; i++) {
		Fighters.push(Wrestlers[i].getAttribute('id'));
	}
 	document.getElementById('Rematch').setAttribute('data-rematch', Fighters);
	StartFight(Fighters,MatchType);
});

//Init!
(function Init(){
	SuperstarSelector(Superstars);
	ShowRoster.click();
})();