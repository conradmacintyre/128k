(function($) {
    function shuffle(a) {
        var i = a.length, j;
        while (i) {
            var j = Math.floor((i--) * Math.random());
            var t = a[i];
            a[i] = a[j];
            a[j] = t;
        }
    }
    function randomAlphaNum() {
    	//Get a random interger between 1 & 62
        var rnd = Math.floor(Math.random() * 62);
        //If the random interger is >= 52
        if (rnd >= 52) {
        	return String.fromCharCode(rnd - 4);
        }
        //If the random interger is >= 26
        else if (rnd >= 26) {
        	return String.fromCharCode(rnd + 71);
        }
        //If the random interger is < 26
        else {
        	return String.fromCharCode(rnd + 65);
        }
    }
    $.fn.scrambledWriter = function() {
        this.each(function() {
            var $ele = $(this), str = $ele.text(), progress = 0, replace = /[^\s]/g,
                random = randomAlphaNum, inc = 3;
            $ele.text('');
            var timer = setInterval(function() {
                $ele.text(str.substring(0, progress) + str.substring(progress, str.length).replace(replace, random));
                progress += inc
                if (progress >= str.length + inc) clearInterval(timer);
            }, 100);
        });
        return this;
    };
    $.fn.typewriter = function() {
        this.each(function() {
            var $ele = $(this), str = $ele.text(), progress = 0;
            $ele.text('');
            var timer = setInterval(function() {
                $ele.text(str.substring(0, progress++));
                if (progress >= str.length) clearInterval(timer);
            }, 50);
        });
        return this;
    };    
})(jQuery);

// The Global Variables, for reference
var $hit = $('.hit');
var $hold = $('.hold');
var $reset = $('.reset');
var $output = $('.messageOutput');
var round = 1;
var theDeck = [];
var playerHand = [];
var dealerHand = [];
var playerTotal = 0;
var dealerTotal = 0;
var gameOver = false;
var playerHold = false;
var $playerScore = $('.playerScore');
var $dealerScore = $('.dealerScore');
var playerScore = 0;
var dealerScore = 0;
$playerScore.html(playerScore);
$dealerScore.html(dealerScore);

// For incrementing verious things.
  //Increment the card pulled from the Deck
  var iDeck;
  //Increment the Player's Hand value
  var iPHa;
  //Increment the player's Hand suit
  var iPHb;
  //Increment the player's card offset from screen edge
  var iPO;
  //Increment z-value of the player & dealer cards to overlap correctly
  var iPZ;
  //Increment over Dealer's Hand Value
  var iDHa;
  //Increment over Dealer's Hand Suit
  var iDHb;
  //Increment the dealer's card offset from screen edge
  var iDO;

// NEW GAME~!
$reset.click(function() {

  //Reset all the Global Variables
  $output.html('');
  theDeck.length = 0;
  playerHand.length = 0;
  dealerHand.length = 0;
  playerTotal = 0;
  dealerTotal = 0;
  gameOver = false;
  playerHold = false;
  iDeck = 0;
  iPHa = 0;
  iPHb = 0;
  iPO = -20;
  iPZ = 0;
  iDHa = 0;
  iDHb = 0;
  iDO = -172;
  
  //Reset all the card styles
  $('.card')
    .removeAttr('style')
    .removeClass('player dealer')
  ;
  
  //  
  $output
    .html('Round ' + round++ + ', good luck! ')
    .typewriter()
  ;
  
  //Create the Deck
  for (i = 0; i < 53; i++) {
      if (i >= 1 && i <= 13) {
          makeCard(i, 'd');
      } else if (i >= 14 && i <= 26) {
          offset = i - 13;
          makeCard(offset, 'c');
      } else if (i >= 27 && i <= 39) {
          offset = i - 26;
          makeCard(offset, 'h');
      } else if (i >= 40 && i <= 52) {
          offset = i - 39;
          makeCard(offset, 's');
      }
  }
  
  //Adjusting the Cards
  function makeCard(num, suit) {
      if (num === 1) {
          theDeck.push(['a', suit, 11]);
      } else if (num > 1 && num < 11) {
          theDeck.push([num, suit, num]);
      } else if (num > 10) {
          if (num === 11) {
              theDeck.push(['j', suit, 10]);
          } else if (num === 12) {
              theDeck.push(['q', suit, 10]);
          } else {
              theDeck.push(['k', suit, 10]);
          }
      }
  }
  
  //Shuffle the Deck
  theDeck.sort(function() {
      return 0.5 - Math.random();
  });
  
  //Push the first card to the player's hand
  playerHand
    .push(theDeck[iDeck++])
  ;
  
  //And style it!
  playerStyle();
  
  //Push the first card to the dealer's hand
  dealerHand
    .push(theDeck[iDeck++])
  ;
  
  //And style it!
  dealerStyle();
  $(('.c' + dealerHand[0][0] + dealerHand[0][1]))
    .css({
      'background': 'url(images/card-back.jpg) no-repeat',
      'background-size': 'contain'
    })
  ;
  
  //Push the second card to the player's hand
  playerHand
    .push(theDeck[iDeck++])
  ;
  
  //And style it!
  playerStyle();
  
  //Push the second card to the dealer's hand
  dealerHand
    .push(theDeck[iDeck++])
  ;
  
  //And style it!
  dealerStyle();
  
// end NEW GAME~!
});


// Dealer's Turn Function
function dealerTurn() {
    
    // First thing's first - What the dealer's current total?
    countDealerTotal();

    var FeelingLucky = Math.random();
    
    // Now some conditionals based on that information.
    if (dealerTotal < 16 || (FeelingLucky < 0.1 && dealerTotal < 21) ) {
        
        //Draw another card!!
        dealerHand
          .push(theDeck[iDeck++])
        ;
  
        //And style it!
        dealerStyle();
    }
    
    // Now recount the dealer's total.  
    countDealerTotal();
    
    // Another conditional based on that information  
    if (dealerTotal > 21) {
      whoWon();    
    }

// End Dealer's Turn!
}



// Count Player Total
function countPlayerTotal() {
    // Reset playerTotal because I've had some weird behaviour otherwise
    playerTotal = 0;
    //Reset Aces
    aces = 0;
    // Does we have aces?
    for (var i = 0; i < playerHand.length; i++) {
        playerTotal += playerHand[i][2];
        if (playerHand[i][0] === 'a') {
            aces++;
        }
    }
    //Recalculate those aces so we don't accidentally bust
    while (playerTotal > 21 && aces > 0) {
        playerTotal -= 10;
        aces--;
    }
    //Set global variable
    return playerTotal;
// End Count Player Total
}



//Count Dealer Total
function countDealerTotal() {

     // Reset playerTotal because I've had some weird behaviour otherwise
    dealerTotal = 0;
    
    // Reset Aces
    aces = 0;
    
    // Do we have any aces?
    for (var i = 0; i < dealerHand.length; i++) {
        dealerTotal += dealerHand[i][2];
        if (dealerHand[i][0] === 'a') {
            aces++;
        }
    }
    
    // Recalculate those aces so the dealer doesn't accidentally bust
    while (dealerTotal > 21 && aces > 0) {
        dealerTotal -= 10;
        aces--;
    }
    
    //Set global variable
    return dealerTotal;

//End Count Dealer Total
}

// Who Won?
function whoWon() {

    //Game Over!
    gameOver = true;

    //Half a dozen conditionals, including the highly unlikely double-bust.
    if (playerTotal > 21 && dealerTotal <= 21) {
        $output
          .html('You busted with ' + playerTotal + '. The house won with ' + dealerTotal + '. ')
          .typewriter()
        ;
        dealerScore += 1;
        $dealerScore
          .html(dealerScore)
        ;
    } else if (playerTotal <= 21 && dealerTotal > 21) {
        $output
          .html('You won with ' + playerTotal + '! The house busted with ' + dealerTotal + '. ')
          .typewriter()
        ;
        playerScore += 1;
        $playerScore
          .html(playerScore)
        ;
        //cool winning animation
    } else if (playerTotal > 21 && dealerTotal > 21) {
        $output
          .html('You and the house both busted with ' + playerTotal + ' & ' + dealerTotal + ', respectively. ')
          .typewriter()
        ;
    } else if (playerTotal < dealerTotal) {
        $output
          .html('You lost with ' + playerTotal + '. The house won with ' + dealerTotal + '. ')
          .typewriter()
        ;
        dealerScore += 1;
        $dealerScore
          .html(dealerScore)
        ;
    } else if (playerTotal > dealerTotal) {
        $output
          .html('You won with ' + playerTotal + '! The house lost with ' + dealerTotal + '. ')
          .typewriter()
        ;
        playerScore += 1;
        $playerScore
          .html(playerScore)
        ;
        //Cool winning animation
    } else {
        $output
          .html('You tied with ' + dealerTotal + '. ')
          .typewriter()
        ;
    }
    
    // Show the dealer's hidden card
    $(('.c' + dealerHand[0][0] + dealerHand[0][1]))
      .css({
        'background': '',
        'background-size': ''
      })
    ;

//End Who Won?
}

// HIT ME!
$hit.click(function() {
    if (!playerHold && !gameOver) {
        // Add new card to the player's hand
        playerHand.push(theDeck[iDeck++]);
        //Calling the next card from the shuffled deck and styling it correctly
        playerStyle();
        //Add up the total value of the player's hand
        countPlayerTotal();
        countDealerTotal();
        // Did the player bust?  
        if (playerTotal > 21) {
            whoWon();
        } else {
            dealerTurn();
        }
    }
});

// HOLD ME!
$hold.click(function() {
    //Is the game already over? Has the player already held?
    if (!playerHold && !gameOver) {
        //If they haven't already held then they do that now.
        playerHold = true;
        //Here's a couple tasks for the computer to run as long as the dealer's hand is under 16.
        do {
            dealerTurn();
            countDealerTotal();
            countPlayerTotal();
        } while (dealerTotal < 16);
        //But if the daler's hand is equal to or greater than 16 the game's done.
        if (dealerTotal >= 16) {
            whoWon();
        }
    }
});

function playerStyle() {
  $('.c' + playerHand[iPHa++][0] + playerHand[iPHb++][1])
    .addClass('player')
    .css({
      'left': iPO += 37,
      'z-index': iPZ++
    })
  ;
}

function dealerStyle() {
  $('.c' + dealerHand[iDHa++][0] + dealerHand[iDHb++][1])
    .addClass('dealer')
    .css({
      'margin-left': iDO-=37,
      'z-index': iPZ++
    })
  ;
}

$(".messageOutput").scrambledWriter();


