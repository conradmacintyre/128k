// General & Helper Funcitons

function cycleActiveItem( array, interval ) {
	function cycle( array ) {
		for (let i=0; i<array.length; i++) {
			if ( array[i].classList.contains('active') ) {
				array[i].classList.remove('active');
				if ( i == array.length - 1 ) {
					array[0].classList.add('active');
				} else {
					array[i + 1].classList.add('active');
				}
				break;
			}
		}
	}
	let cycleTimer = setInterval(() => cycle( array ), interval);
}



//Specific Library Functions

function navStateSwitcher() {
	const switchableNavs = document.querySelectorAll('[data-nav]');
	switchableNavs.forEach( nav => {
		let navItems = [...nav.children];
		let minWidth = 0;
		navItems.forEach( item => {
			let itemStyles = getComputedStyle(item);
			let itemWidth = item.offsetWidth + parseInt(itemStyles.marginLeft) + parseInt(itemStyles.marginRight);
			minWidth += itemWidth;
		});
		let parent = nav.parentNode;
		// Call the switcher
		measureNav(minWidth, parent);
		window.addEventListener('resize', () => measureNav(minWidth, parent));
	});
} window.addEventListener('load', () => navStateSwitcher());

function measureNav(minWidth, parent) {
	let parentStyles = getComputedStyle(parent);
	let maxWidth = parent.clientWidth - parseInt(parentStyles.paddingLeft) - parseInt(parentStyles.paddingRight);
	console.log(maxWidth);
	if (minWidth >= maxWidth) {
		parent.classList.add('mobile');
	} else {
		parent.classList.remove('mobile');
	}
}
	

function billboard() {
	const billboards = document.querySelectorAll('[data-billboard]');
	billboards.forEach( billboard => {
		const slides = [...billboard.getElementsByClassName('billboard-slide')];
		const interval = parseInt(billboard.getAttribute('data-billboard')) * 1000;
		cycleActiveItem(slides,interval);
	});
} window.addEventListener('load', () => billboard());

function convertBgImage () {
	const domNodes = document.querySelectorAll('[data-bgimg]');
	domNodes.forEach( node => {
		let bgImg = node.getAttribute('data-bgimg');
		node.style.backgroundImage = 'url('+bgImg+')';
	});
} window.addEventListener('load', () => convertBgImage());

/*********************************
* ScrollTriggr.js
**********************************
	Allows arbitrary triggering of css classes on page scroll without screwing around with Javascript directly
	Uses inline data-attrs to set parameters
	Re-calling scrollTriggr() will re-init this utility.
	 
	PARAMETERS:
	@param: data-st=""
	@required: true
	@description: Add this to the element that should be triggered. Can optionally take a custom class name to be triggered.
	@value: String -- Any valid CSS class name
	@default: on-screen

	@param: data-st-offset=""
	@required: false
	@description: Add this to the triggered element. Determines how far onto the page an element should be before it is triggered.
	@value: Interger -- A percentage from the BOTTOM of the screen
	@default: 10
	 
	DEPENDENCIES:
	None
*********************************/

function scrollTriggr() {
	// Set some reference variables
	let windowHeight = 0;
	const scrollables = document.querySelectorAll('[data-st]');
	const scrollableData = [];

	// scrollTriggr being called? Init!
	if (scrollables.length) {
	    scrollInit();
	}

	//Calculate element's distance from top of document. (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
	function getOffsetTop(elem) {
	  let distance = 0;
	  if (elem.offsetParent) {
	    do {
	      distance += elem.offsetTop;
	      elem = elem.offsetParent;
	    } while (elem);
	  }
	  return distance < 0 ? 0 : distance;
	}

	// Initalize the utility
	function scrollInit() {
	  scrollableData.length = 0;
	  scrollables.forEach((element) => {
	    //Get properties or set fallbacks
	    let scrollClass = element.getAttribute('data-st') ? element.getAttribute('data-st') : 'on-screen';
	    let scrollOffset = element.getAttribute('data-st-offset') ? parseInt(element.getAttribute('data-st-offset')) : 20;
	    //Create an ojbect for the data and populate it
	    const scrollData = {};
	    scrollData.element = element;
	    scrollData.className = scrollClass;
	    scrollData.offset = scrollOffset;
	    //Add the new object to the array of objects.
	    scrollableData.push(scrollData);
	  });
	  // Call, the queue the resize event
	  scrollResize();
	  window.addEventListener('resize',scrollResize, false);
	}

	// Fires on resize
	function scrollResize() {
	  // Re-calc and set the window size
	  windowHeight = window.innerHeight;
	  // Calculate and store the trigger point for each element.
	  scrollableData.forEach((index) => index.triggerPoint = getOffsetTop(index.element) + ( (windowHeight / 100) * index.offset ));
	  // Call, queue the scroll event
	  scrollScroll();
	  window.addEventListener('scroll',scrollScroll, false);
	}

	// Fires on scroll
	function scrollScroll() {
	  // Calculate the relevant scroll position
	  let windowBottom = window.scrollY + windowHeight;
	  scrollableData.forEach((item,index) => {
	    if (windowBottom >= item.triggerPoint) {
	      item.element.classList.add(item.className);
	      // Remove any triggered items from the array
	      scrollableData.splice(index,1);
	      // Un-queue scroll and resize events if there are no more items in the queue.
	      if (!scrollableData.length) {
	        window.removeEventListener('resize',scrollResize, false);
	        window.removeEventListener('scroll',scrollScroll, false);
	      }
	    }
	  });
	}
//Fire the script on page load 
} window.addEventListener('load', () => scrollTriggr());

/*********************************
* TableBreakr.js
**********************************
	If you would rather re-format than horizontally-scroll a table on mobile, this *ALLOWS* that, if used with CSS.
	Uses inline data-attrs to set parameters
	Re-calling scrollTriggr() will re-init this utility.
	 
	PARAMETERS:
	@param: data-bt
	@required: true
	@description: Add this to the top-level <table> element. Accepts no parameters
	@value: none
	@default: none
	 
	DEPENDENCIES:
	None

	BASIC SASS:
	table.broken {
	  &, & tbody, & tr, & td { display: block; }
	  & tr:first-of-type { display: none; }
	  & td:before { content: attr(data-heading); display: block; font-weight: bold; }
	}
*********************************/
//Table Breaker
function tableBreakr(){
	const tables = document.querySelectorAll('table[data-bt]');
	//If there are responsive tables...
	if (tables.length) {
		tableBreakrInit()
	}
	// Amend Headings
	function amendHeadings(table,headingText,index) {
		table.querySelectorAll('td:nth-of-type('+index+')').forEach((element) => {
			element.setAttribute('data-heading', headingText );
		});
	}
	// Isolate Headings
	function isolateHeadings(table,headings) {
		headings.forEach((heading, index) => {
			index++;
			let headingText = heading.innerText.trim();
			amendHeadings(table,headingText,index);
		});
	}
	//For each responsive table...
	function tableBreakrInit() {
	tables.forEach((table) => {
		let columnCount = table.querySelectorAll('tr')[0].childElementCount;
		table.classList.add( columnCount + '-column' );
		//Define the header row as either the <th> row, or the first <td> in each column
		let headings = table.querySelectorAll('th') || table.querySelectorAll('tr:first-of-type td');
		isolateHeadings(table,headings);
	});
	}
	// Get the outer width of an element -- youmightnotneedjquery.com
	function outerWidth(element) {
		let width = element.offsetWidth;
		let style = getComputedStyle(element);
		width += parseInt(style.marginLeft) + parseInt(style.marginRight);
		return width;
	}
	// Toggle the broken class
	function breakTheTable() {
		tables.forEach( (table) => {
			table.classList.remove('broken');
			if ( outerWidth(table) > table.parentNode.offsetWidth ) {
				table.classList.add('broken');
			}
		});
	// Call the resize event at least once to do the check on page load.
	} breakTheTable();
	// Resize Debouncer
	let resizeTimer = 0;
	window.addEventListener('resize', () => {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			breakTheTable();
		}, 250);
	});
// That's it, queue the script!
} window.addEventListener('load', tableBreakr, false);

/*********************************
* Togglr.js
**********************************
	Allows arbitrary toggling of css classes without screwing around with Javascript directly
	Uses inline data-attrs to set parameters
	Re-calling togglr() will re-init this utility.
	 
	PARAMETERS:
	@param: data-ts=""
	@required: true
	@description: Add this to the trigger. The value should be any valid CSS selector to target the elements you want to toggle
	@value: String -- Any valid CSS selector
	@default: none

	@param: data-ts-class=""
	@required: false
	@description: Add this to the trigger. This is the class that will be toggled onto the trigger and all the targets
	@value: String -- Any valid CSS class name
	@default: "open"

	@param: data-ts-prop=""
	@required: false
	@description: Add this to the trigger. This determines whether or not the toggle will propogate down to child elements.
	@value: Boolean
	@default: true

	@param: data-ts-group=""
	@required: false
	@description: Add this to all the elements you intend to group. 
	@value: String -- A name for the group
	@default: none

	@param: data-ts-hover=""
	@required: false
	@description: Whether the toggle should be triggered on hover, added to trigger element
	@value: Boolean -- true to trigger on hover, false to trigger only on click
	@default: false
	 
	DEPENDENCIES:
	Modernizr touch testing
*********************************/
function togglr() {
  // Utility-wide items and containers
  const toggleables = document.querySelectorAll('[data-ts],[data-ts-group]');
  const toggleablesCount = toggleables.length;
  const toggleableGroups = {};
  const groupClassCache = [];

  // Togglr being called? Init!
  if (toggleablesCount) {
      toggleInit();
  }

  // Convert string to boolean
  function toBoolean(_string) {
    return JSON.parse(_string);
  }

  // Create or Modify the Toggleable Groups
  function addToToggleableGroups(_toggleElement,_toggleGroup) {
    if (!(_toggleGroup in toggleableGroups)) {
      toggleableGroups[_toggleGroup] = {};
      toggleableGroups[_toggleGroup].elements = [];
    }
    toggleableGroups[_toggleGroup].elements.push(_toggleElement);
  }

  // Cache the toggled classes for grouping purposes
  function groupToggleCaching(_element,_className) {
    _element.classList.toggle(_className);
    let elementCache = {};
    elementCache.element = _element;
    elementCache.className = _element.classList.value;
    groupClassCache.push(elementCache);
  }
  
  //The actual toggling
  function toggleIt(_element,_state,_group,_targets,_className){
    if ( _state === 'over' ) {
      _targets.forEach( (target) => target.classList.add(_className) );
      _element.classList.add(_className);
    } else if ( _state === 'out' ) {
      _targets.forEach( (target) => target.classList.remove(_className) );
      _element.classList.remove(_className);
    } else {
      _targets.forEach( (target) => {
        groupToggleCaching(target,_className);
      });
      groupToggleCaching(_element,_className);
      if ( _group ) {
        _group.elements.forEach( (element) => element.classList.remove(_className) );
        groupClassCache.forEach( (index) => index.element.classList = index.className );            
      }
      groupClassCache.length = 0;
    }
  }

    // Initalization
  function toggleInit() {
    for (let i=0; i<toggleablesCount; i++) {
      //Get properties or set fallbacks
      let toggleElement = toggleables[i];
      let toggleWithHover = toggleElement.getAttribute('data-ts-hover') ? toBoolean(toggleElement.getAttribute('data-ts-hover')) : false;
      let togglePropogation = toggleElement.getAttribute('data-ts-prop') ? toBoolean(toggleElement.getAttribute('data-ts-prop')) : true;
      let toggleGroup = toggleElement.getAttribute('data-ts-group');
      let toggleTargets = Array.from( document.querySelectorAll( toggleElement.getAttribute('data-ts') ) );
      let className = toggleElement.getAttribute('data-ts-class') ? toggleElement.getAttribute('data-ts-class') : 'open';
      //Create/modify grouping if required
      if ( toggleGroup ) {
        addToToggleableGroups(toggleElement,toggleGroup);
        toggleGroup = toggleableGroups[toggleGroup];
      }
      //Attach click/hover events as required
      if ( toggleWithHover && !Modernizr.touchevents ) {
        toggleElement.addEventListener("mouseenter", () => { toggleIt(toggleElement,'over',toggleGroup,toggleTargets,className); } );
        toggleElement.addEventListener("mouseleave", () => { toggleIt(toggleElement,'out',toggleGroup,toggleTargets,className); } );
      } else {
        toggleElement.addEventListener("click", () => toggleIt(toggleElement,null,toggleGroup,toggleTargets,className) );
      }
      //Stops event propogation, if required
      if (!togglePropogation) {
        toggleElement.addEventListener("click", e => { e.stopPropagation(); } );
      }
    }
  }
} togglr();

/*********************************
* UserControlledElements.js
**********************************
	Allows a user to toggle an element from one state to another for a set amount of time. Designed specifically for CTAs.
	The user's action is cached in localStorage.
	 
	PARAMETERS:
	@param: data-uce=""
	@required: true
	@description: Defines what element is user-controllable.
	@value: String -- A UNIQUE name for the element to be controlled, so that it can be stored.
	@default: none

	@param: data-uce-reopen
	@required: false
	@description: Defines the time, in days, until the UCE will reappear
	@value: Float -- can take partial days, or multiple days.
	@default: 1

	@param: data-uce-close
	@required: true
	@description: Defines the button(s) that can be used to close the UCE. 
	@value: String -- Any valid CSS selector
	@default: none

	@param: data-uce-close-class
	@required: false
	@description: Defines the class that will be applied to the element when the user takes action. NOTE this class MUST be applied to the element manually, as it will be removed during init if the element should be showing.
	@value: String -- Any valid CSS class
	@default: hide

	@param: data-uce-callback
	@required: false
	@description: Defines one or more scripts that can be called if the user takes action
	@value: String -- Any JavaScript function name
	@default: none
	 
	DEPENDENCIES:
	None
*********************************/
function userControlledElements(els) {
    const elements = els || document.querySelectorAll('[data-uce]');
    const fallbackClass = 'd-none';
    
    if (elements.length) {
        uceInit(elements);
    }

    function uceInit() {
        elements.forEach( element => registerUCE(element));
    }

    function registerUCE(element) {
        const identifier = element.getAttribute('data-uce');
        const reopenDelay = element.getAttribute('data-uce-reopen') * 86400000;
        const currentTimestamp = new Date().getTime();
        if ( !localStorage[identifier] || localStorage[identifier] == 'open' || localStorage[identifier] <= currentTimestamp) {
            //Register element
            localStorage[identifier] = 'open'; 
            openUCE(element);
        }
    }

    function openUCE(element) {
        element.getAttribute('data-uce-close-class') ? element.classList.remove( element.getAttribute('data-uce-close-class') ) : element.classList.remove(fallbackClass);
        element.classList.remove(fallbackClass);
        const closeTriggers = document.querySelectorAll( element.getAttribute('data-uce-close') );
        closeTriggers.forEach( (closeTrigger) => {
            closeTrigger.addEventListener( 'click',() => closeUCE(closeTrigger,element) );
        });
    }

    function closeUCE(trigger, target) {
        const identifier = target.getAttribute('data-uce');
        const currentTime = new Date().getTime();
        const delay = target.getAttribute('data-uce-reopen') * 86400000;
        const closedClass = target.getAttribute('data-uce-close-class') || fallbackClass;
        target.classList.add(closedClass);
        if ( target.hasAttribute('data-uce-callback') && window[ target.getAttribute('data-uce-callback') ] ) {
            window[ target.getAttribute('data-uce-callback') ]();
        }
        localStorage[identifier] = currentTime + delay;
    }
} window.addEventListener('load', () => userControlledElements());

















