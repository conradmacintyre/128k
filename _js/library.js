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
	setInterval(() => cycle( array ), interval);
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
	function measureNav(minWidth, parent) {
		let parentStyles = getComputedStyle(parent);
		let maxWidth = parent.clientWidth - parseInt(parentStyles.paddingLeft) - parseInt(parentStyles.paddingRight);
		if (minWidth >= maxWidth) {
			parent.classList.add('mobile');
		} else {
			parent.classList.remove('mobile');
		}
	}
} window.addEventListener('load', () => navStateSwitcher());

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
		let targs = toggleElement.getAttribute('data-ts');
      let toggleTargets = document.querySelectorAll( targs );
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
} window.addEventListener('load', togglr);

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

/*********************************
* ModalPopup.js
**********************************
	Pops up a modal dialog box that requires user interaction to dismiss
	 
	PARAMETERS:
	@param: data-uce=""
	@required: true
	@description: Defines what element is user-controllable.
	@value: String -- A UNIQUE name for the element to be controlled, so that it can be stored.
	@default: none
	 
	DEPENDENCIES:
	None
*********************************/
    function customPopup() {
        //Reusable Vars
        const body = document.body;
        const popUpContainer = document.getElementById( 'popup-container' );
        const popUpBG = document.getElementById( 'popup-bg' );
        const popUpClose = document.getElementById( 'popup-close' );
        let popUpLinks = [...document.getElementsByClassName( 'popup-link' )];
        // Basic Setup
        if (popUpContainer) {
	        // Make sure elements inside the popup are interactive
	        popUpContainer.addEventListener ( 'click', function(e) {
	            e.stopPropagation();
	        } );
	        // Don't double-close the popup
	        popUpClose.addEventListener ( 'click', function(e) {
	            e.stopPropagation();
	        } );
	        // Hook up all the popup links
	        popUpLinks.forEach( link => {
	        	link.addEventListener( 'click', () => {
	        		openPopUp( link );
	        	});
	        });
	    }
        // Clear out the popup
        function removeContent( element ) {
        	if ( element ) {
        		element.appendChild( popUpContainer.children[0] );
        	} else {
        		console.log("ERROR: no element defined");
        	}
        }
        //Open popup
        function openPopUp( link ) {
        	let el = link.getAttribute( 'data-content' );
            let element = document.getElementById( el );
            body.classList.add('popup-open'); 
            popUpBG.classList.add( link.getAttribute( 'data-content' ) );
            if ( popUpContainer.children.length > 0 ) {
            	removeContent();
            }
            popUpContainer.appendChild( element.children[0] );
            popUpBG.onclick =  () => { closePopUp( element ) };
            popUpClose.onclick =  () => { closePopUp( element ) };
        }
        // Close Popup
        function closePopUp( element ) {
        	popUpBG.setAttribute( 'class', 'popup-bg' ); //Remove any Class Names
            body.classList.remove( 'popup-open' ); //Remove the Body class
            removeContent( element );
        }
    } window.addEventListener('load',customPopup);


//Smooth Scroll
    //TO DO: -
    function smoothScroll(el) {
        el = $(el);
        var fixedHeight = 0;
        var fixedEls = $('.FixedElementStack');
        if (fixedEls.length > 0) {
            fixedEls.each(function(){
                fixedHeight += $(this).outerHeight();
            });
        }
        $('html,body').animate({
            scrollTop: el.offset().top - fixedHeight - 15 //The "15" is a typical gutter size and provides a little space from the top of the screen
        }, 1000);
        return false;   
        fixedHeight = 0;
    }

    function queueSmoothScroll() {
        var HashLinks = $('a[href*="#"]:not([href="#"])');
        var JumpLinks = [];
        if ( HashLinks.length > 0 ) {
            HashLinks.each(function(){
                if ( !$(this).parent().hasClass('accordion-navigation') ) {
                    JumpLinks.push($(this));
                }
            }); 
        } 
        for (let i=0;i<JumpLinks.length;i++) {
            var JumpLink = JumpLinks[i];
            JumpLink.click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        smoothScroll(target);
                    }
                }
            });
        }
        //Auto-scroll when landing on a new page
        var hash = window.location.hash.split('#')[1];
        var target = $('#'+hash+',[name='+hash+']');
        if (target.length > 0) {
            smoothScroll(target[0]);
        }
    } //window.addEventListener('scroll',queueSmoothScroll);


// REFACTOR THIS STUFF

//Modernizr Touch Test (DEPENDANCY/UTILITY)
    //Load custom build if Modernizr is not already loaded
        if (typeof Modernizr != 'object') { 
            !function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,i,r;for(var l in c){if(e=[],n=c[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),f.push((s?"":"no-")+r.join("-"))}}function a(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?u.className.baseVal=n:u.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,s){var a,l,f,c,d="modernizr",p=i("div"),h=r();if(parseInt(o,10))for(;o--;)f=i("div"),f.id=s?s[o]:d+(o+1),p.appendChild(f);return a=i("style"),a.type="text/css",a.id="s"+d,(h.fake?h:p).appendChild(a),h.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",c=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),l=t(p,e),h.fake?(h.parentNode.removeChild(h),u.style.overflow=c,u.offsetHeight):p.parentNode.removeChild(p),!!l}var f=[],c=[],d={_version:"3.0.0-alpha.4",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){c.push({name:e,fn:n,options:t})},addAsyncTest:function(e){c.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=d,Modernizr=new Modernizr;var u=n.documentElement,p="svg"===u.nodeName.toLowerCase(),h=d._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];d._prefixes=h;var m=d.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(o,function(e){t=9===e.offsetTop})}return t}),s(),a(f),delete d.addTest,delete d.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);
        }
    //Quick touch test - determines if the user is on a touch-capable device
    	let is_touch_device = false
        if (Modernizr.touch) { 
            is_touch_device = true;
        }


//Back To Top
    function backToTop() {
    	console.log("BTT");
        var backToTopButton = $('.BackToTop, .backtotop');
        
        function showBackToTop(){
        	console.log("test??");
            if ( $(window).scrollTop() > 500 ) {
                backToTopButton.addClass('visible');
            } else {
                backToTopButton.removeClass('visible');
            }
        }

        if (backToTopButton) {
        	console.log("WHAT??");
        	showBackToTop();
            window.addEventListener('scroll', showBackToTop, false );

            backToTopButton.click(function(){
                $('html,body').animate({
                    scrollTop: 0
                }, 1000);
            });

        }

    } //window.addEventListener('load', () => backToTop() );


    // Browse Field Prettifier
    var inputs = document.querySelectorAll( 'input[type=\'file\']' );
	Array.prototype.forEach.call( inputs, function( input ) {
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;
		input.addEventListener( 'change', function( e ) {
			var fileName = '';
			if( this.files && this.files.length > 1 ) {
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			} else {
				fileName = e.target.value.split( '\\' ).pop();
			}

			if( fileName ) {
				label.innerHTML = fileName;
			} else {
				label.innerHTML = labelVal;
			}
		});
	});










