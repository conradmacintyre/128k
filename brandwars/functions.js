//JSHINT-SPECIFIC THINGS
//jshint multistr: true

//Declared so JSLINT leaves me alone about it
var Superstars;

//Make sure any given Superstar is attached to it's appropriate object
var Contextr = function(a) {
	if (a.Strength === undefined) {
		return Superstars[a];
	}
	return a;
}; 

//Return a stat
var Stat = function(Wrestler,Attribute) {
	Wrestler = Contextr(Wrestler);
	var value = Wrestler[Attribute];

	return value;
};

//Calculate Overall
var Overall = function(Wrestler) {
	var total = 0;
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
	return total;
};

//Injury-checker
var Disabled = function(Wrestler) {
	//Get wrestler
	Wrestler = Contextr(Wrestler);
	//Get fatigue
	var Tiredness = Wrestler.Fatigue;
	//Injury calculator
	function Injured(num) {
		if ( Math.random() > num ) {
			Wrestler.Injury = true;
			return 'disabled';
		}
	}
	//Odds of injury
	if (Tiredness >= 10) {
		Injured(0.8);
	} else if (Tiredness >= 9) {
		Injured(0.85);
	} else if (Tiredness >= 8) {
		Injured(0.9);
	} else {
		Injured(0.95);
	}
};

//Comma-Separate Large Numbers
function Comma(num) {
    var parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
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
		    + 				'<b>O</b><br>' + Overall(ShortName)
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
function StartFight(Wrestlers){
	console.log('FIGHT STARTED');
	//The match rankings
	var Rank = [];
	//The match rating
	var Viewers = 0;
	//Loop through each wrestler submitted
	for (var i=0; i<Wrestlers.length; i++) {
		//Get each wrestler's stats
		var who = Contextr(Wrestlers[i]);
		var ovr = Overall(who);
		var rnd = (Math.random() * 10);
		var mrl = who.Morale;
		var ftg = who.Fatigue;
		var ttl = ovr + rnd + mrl - ftg;
		//Add them to an array
		Rank.push( ttl );
		//Add their popularity to the match rating
		Viewers += who.Popularity * 10;
	}
	
	//Get the position of the highest overall
	var Win = Rank.indexOf(Math.max.apply(Math, Rank));
	var Winner = Contextr([Wrestlers[Win]]);
	//Get the position of the lowset overall
	var Lose = Rank.indexOf(Math.min.apply(Math, Rank));
	var Loser = Contextr([Wrestlers[Lose]]);
	
	//Subtract the difference between the winner and the loser
	Viewers -= (Rank[Win] - Rank[Lose]) * 10;
	
	//Adjust everyone's stats
	for (var each in Superstars) {
		//Define THIS wrestler
		var Wrestler = Contextr(each);
		//If THIS wrestler is in the match
        if ( Wrestlers.indexOf(each) > -1 ) {
	        if (Wrestler.Morale <= 9.5){
	        	Wrestler.Morale += 0.25;
	        }
	        if (Wrestler.Fatigue < 9.75){
				Wrestler.Fatigue += 0.25;
			}
			//Check each participating superstar for injury
			Disabled(each);
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
	
	var VictoryType = function() {
		var NumGen = Math.random() * 10;
		if (NumGen > 9.5) {
			return 'knockout';
		} else if (NumGen > 8.5 && Winner.Technique <= Loser.Technique || NumGen > 7 && Winner.Technique >= Loser.Technique) {
			return 'submission';
		} else {
			return 'pinfall';
		}
	};
	
	var RealViewers = function() {
		Viewers = parseInt(Viewers * 1000);
		if (Viewers >= 1000) {
			return Viewers;
		} else {
			return 1000;
		}
	};
	
	document.getElementById('WinnerName').innerHTML 
		= Winner.Name
		+ ' def. ' 
		+ Loser.Name 
		+ ' via '
		+ VictoryType()
		+ ', with ' 
		+ Comma(RealViewers()) 
		+ ' viewers.'
		+ '<br>'
		+ document.getElementById('WinnerName').innerHTML
	;
	
/*
	document.getElementById('MatchVewiers').innerHTML 
		= '<br>' 
		+ Comma(parseInt(Viewers * 1000)) 
		+ document.getElementById('MatchVewiers').innerHTML
	;
*/
	
	SuperstarSelector(Superstars);
}

//Hook up the fight button
document.getElementById('Fight').onclick = function(){
	var Wrestlers = document.querySelectorAll('input:checked');
	var Fighters = [];
	for (var i=0; i<Wrestlers.length; i++) {
		Fighters.push(Wrestlers[i].getAttribute('id'));
	}
	console.log(Fighters);
	StartFight(Fighters);
};

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

//All-In
(function(){
	document.getElementById('allin').onclick = function(){
		var inputs = document.querySelectorAll('input:not(:disabled)');
		for (var i=0; i<inputs.length; i++) {
			inputs[i].checked = true;
		}
	};
	
})();

//Init!
SuperstarSelector(Superstars);