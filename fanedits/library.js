//Event Handlers
	function addPageLoad_Handler(n, t, i) {
	    PH.push(n);
	    typeof t != "undefined" && t && addResize_Handler(n);
	    typeof i != "undefined" && i && addScroll_Handler(n)
	}
	function runPageLoad_Handlers() {
	    for (var n = 0; n < PH.length; n++) PH[n]()
	}
	function addResize_Handler(n) {
	    RH.push(n)
	}
	function runResize_Handlers(n) {
	    window.clearTimeout(RHT);
	    RHT = window.setTimeout(function() {
	        for (var t = 0; t < RH.length; t++) RH[t](n)
	    }, 500)
	}
	function addScroll_Handler(n) {
	    SH.push(n)
	}
	function runScroll_Handlers(n) {
	    for (var t = 0; t < SH.length; t++) SH[t](n)
	}
	var PH = [],
	    RH = [],
	    RHT = null,
	    SH = [];

//Modernizr Touch Test (DEPENDANCY/UTILITY)
    //Load custom build if Modernizr is not already loaded
        if (typeof Modernizr != 'object') { 
            !function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,i,r;for(var l in c){if(e=[],n=c[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),f.push((s?"":"no-")+r.join("-"))}}function a(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?u.className.baseVal=n:u.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,s){var a,l,f,c,d="modernizr",p=i("div"),h=r();if(parseInt(o,10))for(;o--;)f=i("div"),f.id=s?s[o]:d+(o+1),p.appendChild(f);return a=i("style"),a.type="text/css",a.id="s"+d,(h.fake?h:p).appendChild(a),h.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",c=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),l=t(p,e),h.fake?(h.parentNode.removeChild(h),u.style.overflow=c,u.offsetHeight):p.parentNode.removeChild(p),!!l}var f=[],c=[],d={_version:"3.0.0-alpha.4",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){c.push({name:e,fn:n,options:t})},addAsyncTest:function(e){c.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=d,Modernizr=new Modernizr;var u=n.documentElement,p="svg"===u.nodeName.toLowerCase(),h=d._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];d._prefixes=h;var m=d.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(o,function(e){t=9===e.offsetTop})}return t}),s(),a(f),delete d.addTest,delete d.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);
        }
    //Quick touch test - determines if the user is on a touch-capable device
        if (Modernizr.touch) { 
            is_touch_device = true;
        } else { 
            is_touch_device = false;
        }

//CSS Parser (UTILITY)
    //Parses CSS classes of passed object based on given delimiter
    //Returns an array of values
    //TODO: -
    function cssParser(el,term,delimiter){
        //Convert el to jQuery object, if not already
        if (el instanceof $ == false) {
            el = $(el);
        }
        // Make an array of classes
        var parse = el.attr('class').split(' ');
        var parsed = parse.length;
        var attributes = undefined;
        var delimit; 
        if (delimiter == undefined) {
            delimit = "_";
        } else {
            delimit = String(delimiter);
        }
        for (i=0; i<parsed; i++) {
            var target = parse[i];
            if ( target.indexOf(term) > -1 ) {
                attributes = target.split(delimit);
                attributes.splice(0,1); //Remove initial search term and only output variables.
            }
        }
        return attributes;
    }

//Get Fixed Height (UTILITY)
    //Returns the combined height of all fixed (sticky) elements
    function getFixedHeight() {
        TotalStackDiffs = 0;
        $('.FixedElementStack.fixed').each(function(){
            var $this = $(this);
            $this.attr('offset_top',window.fixedVars.StackDiffs);
            TotalStackDiffs += $this.outerHeight();
        });
        return TotalStackDiffs;
    }

//Image Source-Setter (for responsive srcset images)
    function imgSrcSettr() {
        var srcsetImgs = document.querySelectorAll('img[srcset]');
        var srcsetImgsLen = srcsetImgs.length;
        if ( srcsetImgsLen > 0 && srcsetImgs[0].currentSrc == undefined ) {
            for (i=0; i<srcsetImgsLen; i++) {
                var $this = srcsetImgs[i];
                var src = $this.getAttribute('data-src');
                $this.setAttribute('src',src);
            }
        }
    }
    addPageLoad_Handler(imgSrcSettr);

//Modular Toggle Script

    // !! Requires Modernizer Touch Test to function !!
    
    // This is simply a CSS class toggler that works with triggers and targets.
    // By applying the data-attribute `data-ts` to an element and setting any valid CSS selector as its value,
    //     the class of "open" will be applied to BOTH the trigger and the target on click.
    // The class that is applied can be specified with the `data-ts-class` attribute.
    // The toggle can be triggered on hover with `data-ts-hover="true"` set as an attribute
    // The click-to-toggle can be disabled with `data-ts-click="false"` set as an attribute
    // Adding the attribute `data-ts-group` to 2 or more items will allow any grouped trigger to close all other items in this group
    // Adding `data-ts-close` sets close behaviour: (First instance is the only one used)
    //      `one` only closes the item being interacted with
    //      `all` closes all item
    // Adding `data-ts-prop="true"` will allow the toggling to propogate down to child elements.
    
    // TODO: Get rid of the data-ts-click option. It's stupid. This script should be smarter.

    function togglr() {
        var Toggles = document.querySelectorAll('[data-ts],[data-ts-group]');
        var TogglesLen = Toggles.length;
        ToggleGroups = {};

        //Set up hover and click events
        if (TogglesLen > 0) {
            for (i=0; i<TogglesLen; i++) {
                //Set some defaults
                var TogEle = $(Toggles[i]);
                var TogClk = true;
                var TogHov = false;
                var TogGrp = TogEle.attr('data-ts-group');
                //Check for grouping
                if ( TogGrp != undefined ) {
                    if (ToggleGroups[TogGrp] == undefined) {
                        ToggleGroups[TogGrp] = {};
                        ToggleGroups[TogGrp].els = [];
                    }
                    ToggleGroups[TogGrp].els.push(TogEle);
                    //Closing behaviour canonly be defined once
                    if ( TogEle.attr('data-ts-close') != undefined && ToggleGroups[TogGrp].close == undefined) {
                        if ( TogEle.attr('data-ts-close') == '1' || TogEle.attr('data-ts-close') == 'one' ) {
                            ToggleGroups[TogGrp].close = 1
                        } else if ( TogEle.attr('data-ts-close') == '-1' || TogEle.attr('data-ts-close') == 'none' ) {
                            ToggleGroups[TogGrp].close = -1
                        }
                    } else if ( ToggleGroups[TogGrp].close == undefined ) {
                        ToggleGroups[TogGrp].close = 0
                    }
                }
                //Check for click behaviour
                if ( TogEle.attr('data-ts-click') && TogEle.attr('data-ts-click') == 'false') {
                    TogClk = false;
                }
                //Check for hover behaviour
                if ( TogEle.attr('data-ts-hover') && TogEle.attr('data-ts-hover') == 'true') {
                    TogHov = true;
                }
                //Attach click event, if appropriate
                if ( TogClk == true ) {
                    TogEle.click(function(e){
                        // console.log('click');
                        toggleIt($(this),null,$(this).attr('data-ts-group'));
                    });
                }
                //Attach hover event, if appropriate
                if ( TogHov == true ) {
                    TogEle.mouseenter(function(){
                        if (is_touch_device == false) {
                            // console.log('over');
                            toggleIt($(this),'over');
                        }
                    });
                    TogEle.mouseleave(function(){
                        if (is_touch_device == false) {
                            // console.log('out');
                            toggleIt($(this),'out');
                        }
                    });
                }
                //Stops clicking of child elements from closing the element toggled.
                TogEle.children().click(function(e){
                    if ( $(this).parent().attr("data-ts-prop") != "true" ) {
                        e.stopPropagation();
                    }
                });
            }
        }
        
        //The actual toggling
        function toggleIt(el,state,group){
            var State = state;
            var Trig = $(el);
            var Targ = $(Trig.attr('data-ts'));
            var Clas = 'open';
            var Group = ToggleGroups[group];

            if ( Trig.attr('data-ts-class') != undefined ) {
                Clas = Trig.attr('data-ts-class');
            }
            if ( State === 'over' ) {
                Targ.addClass(Clas);
                Trig.addClass(Clas);
            } else if ( State === 'out' ) {
                Targ.removeClass(Clas);
                Trig.removeClass(Clas);
            } else {
                if ( Group != undefined ) {
                    // console.log(ToggleGroups[group].close);
                    if ( ToggleGroups[group].close == 1 && Trig.hasClass(Clas) ) {
                        //Do nothing
                    } else if ( ToggleGroups[group].close == -1 ) {
                        //do soemthing — I'll sort this out later
                    } else {
                        //Store the updated classes
                        Targ.toggleClass(Clas); //Toggle's the specified classname on each target element
                        var TargetClass = []; //An empty array
                        Targ.each(function(){ //For each target in the Targ array
                            TargetClass.push( $(this).attr('class') ); //Push their classnames into the empty array
                        });
                        Trig.toggleClass(Clas); //Toggle the specified classname on the TRIGGER element
                        var TriggerClass = Trig.attr('class'); //Store the current trigger class as a variable
                        //Close everything within the group
                        var GrpLen = Group.els.length;
                        for (var j=0; j<GrpLen; j++) {
                            $(ToggleGroups[group].els[j]).removeClass(Clas);
                        }
                        //Re-add those stored classes
                        Targ.each(function(x){
                            $(this).attr('class',TargetClass[x]);
                        });
                        Trig.attr('class',TriggerClass);
                    }
                } else {
                    Targ.toggleClass(Clas);
                    Trig.toggleClass(Clas);
                }
            }
        }

    }addPageLoad_Handler(togglr,false,false);

//Parallax (ADD TO COMMON)
    //ToDo: Update for debouncing - may be a pipe dream
    //ToDo: Update for existing CSS3 transforms
    //ToDo: Update to ALSO accept data-attrs
    function parallax() {
        //Attach to window to make global
        window.parallax = $('[class*=parallax]');
        parallax.each(function(){
            //Set a bunch of defaults
            var el = $(this);
            var px = 0;
            var py = 0;
            var pp = 0;
            var pp_position = 0;
            var window_height = 0;
            var options = cssParser(el,'parallax');
            //Check for newly returned options, and set accordingly
            if ( options[0] != undefined && $.isNumeric( options[0] ) ) {
                px = parseInt(options[0]);
            }
            if ( options[1] != undefined && $.isNumeric( options[1] ) ) {
                py = parseInt(options[1]);
            }
            if ( options[2] != undefined && $.isNumeric(options[2]) && options[2] >= 1 ) {
                pp = options[2] - 1;
            }
            var x_offset = ($(window).height() - el.offset().top) * (px/100);
            var y_offset = ($(window).height() - el.offset().top) * (py/100);
            el.attr('data-x-movement',px).attr('data-y-movement',py).attr('data-x-start',x_offset).attr('data-y-start',y_offset);
            //Declare parent element
            pp = el.parents().eq(pp);
            //Set parent to contain element
            if (pp.css('position') == 'static') {
                pp.css('position','relative');
            }
            //Wrap the elements
            el.detach().prependTo(pp).wrap('<div style="position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;">');
            //Set all sibling elements to relative, so they sit on top of the parallaxed elements.
            pp.children().each(function(){
                var sibling = $(this);
                if (sibling.css('position') == 'static') {
                    sibling.css('position','relative');
                }   
            });
            parallaxResize(el);
        });

        function parallaxResize(el){
            var el,
                pp_position,
                window_height;
            if (el != undefined) {
                el = el;
                pp_position = el.offset().top;
                window_height = $(window).height();
            } else {
                parallax.each(function(){
                    el = $(this);
                    pp_position = el.offset().top;
                    window_height = $(window).height();
                });
            }
            var x_offset = ($(window).height() - el.offset().top) * (el.attr('data-x-movement')/100);
            var y_offset = ($(window).height() - el.offset().top) * (el.attr('data-y-movement')/100);
            el.attr('data-x-start',x_offset).attr('data-y-start',y_offset);
            parallaxScroll(el,pp_position,window_height);
        }

        function parallaxScroll(el,pp_position,window_height){
            if (el == undefined || pp_position == undefined || window_height == undefined) {
                parallaxResize();
            } else {
                parallaxScrollCore(el,pp_position,window_height)
            }
        }

        function parallaxScrollCore(el,pp_position,window_height) {
            var px = el.attr('data-x-movement');
            var py = el.attr('data-y-movement');
            var scroll_position = $(window).scrollTop() + window_height;
            if ( scroll_position >= pp_position ) {
                var x_offset = (scroll_position - pp_position) * (px/100);
                var y_offset = (scroll_position - pp_position) * (py/100);
                var x_shift = x_offset - el.attr('data-x-start');
                var y_shift = y_offset - el.attr('data-y-start');
                el.css({
                    '-webkit-transform' : 'translate(' + x_shift + 'px,' + y_shift + 'px)',
                    '-ms-transform'     : 'translate(' + x_shift + 'px,' + y_shift + 'px)',
                    'transform'         : 'translate(' + x_shift + 'px,' + y_shift + 'px)'
                });
            }
        }

        //Queue all the parallax funcations, if there are any parallax elements
        if (window.parallax.length > 0){
            addResize_Handler(parallaxResize);
            addScroll_Handler(parallaxScroll);
        }

    }addPageLoad_Handler(parallax);

//Back To Top
    function backToTop() {
        var BackToTop = $('.BackToTop, .backtotop');
        function showBackToTop(){
            if ( $(window).scrollTop() > 500 ) {
                BackToTop.addClass('visible');
            } else {
                BackToTop.removeClass('visible');
            }
        }
        if (BackToTop.length > 0) {
            addScroll_Handler(showBackToTop);
            BackToTop.click(function(){
                $('html,body').animate({
                    scrollTop: 0
                }, 1000);
            });
        }
    }addPageLoad_Handler(backToTop);

//ideaLEVER Pivot Tables
    function responsiveTables(){
        var TableRespond = $('table.pivot');
        //If there are responsive tables...
        if (TableRespond.length > 0) {
            //For each responsive table...
            TableRespond.each(function(){
                var $this = $(this);
                //Get the number of columns
                var NumCols = $this.find('tbody tr:first-of-type td').length;
                $this.attr('data-cols' , NumCols);
                //Define the header row as either the <th> row, or the first <td> in each column
                var headings = null;
                if ($this.find('th').length > 0) {
                    headings = 'th';
                } else if ($this.find('.HeaderRow td').length > 0) {
                    headings = '.HeaderRow td';
                }
                //If there is a header row
                if (headings!=null){
                    //Loop through each column
                    for (i=0; i<NumCols; i++) {
                        //Increase the value of [i] for css purposes
                        var $i = parseInt([i]) + 1;
                        //Get only the text for a given element, with no leading or trailing spaces
                        var ColHeadText = $.trim( $this.find(headings+':nth-of-type(' + $i + ')').text() );
                        //For each td in a given column
                        $this.find('td:nth-of-type(' + $i + ')').each(function(){
                            var td = $(this);
                            //Add a data-attribute with the column text
                            td.attr('data-heading', ColHeadText );
                        });
                    }
                }
            });
        }
    }
    addPageLoad_Handler(responsiveTables);

//Scroll Toggle
    //Universal Vars
    window.scrollToggleData = [];
    window.scrollToggleWindowHeight;
    //Init the function
    function scrollToggleInit() {
        //Reset array, in case this is re-init'd
        scrollToggleData = [];
        //Find each data-st element
        $('[data-st]').each(function(){
            //Define it
            var _this = $(this);
            //Get the custom class (if defined)
            var _class = _this.attr('data-st');
            //Define the custom class if it is NOT defined
            if ( _class.length == 0 ) {
                _class = 'in-view';
            }
            //Get custom offset (if defined) and convert to float
            var _offset = _this.attr('data-st-offset');
            //Auto-set _offset if undefined
            if ( _offset == undefined ) {
                _offset = 0;
            } else {
                // console.log('A',_offset);
                _offset = parseFloat(_offset);
            }
            //Create an ojbect for the data and add it
            var _data = {};
            _data.element = _this;
            _data.class = _class;
            _data.offset = _offset;
            //Add the new object to the array of objects
            scrollToggleData.push(_data);
        });
        //Call the resize function
        scrollToggleResize();
        //Queue the resize function
        addResize_Handler(scrollToggleResize);
    }addPageLoad_Handler(scrollToggleInit);
    //Resize funcs
    function scrollToggleResize() {
        //Cache the window height
        scrollToggleWindowHeight = $(window).height();
        //Shorten the array name
        var _data = scrollToggleData;
        var _dataL = _data.length;
        //Loop through each data-st element and log the calculated offset, if provided
        for (var i=0; i<_dataL; i++) {
            // if ( i == 0 ) {
            //     window.console && console.log('RAW Data: CalcOS, WinHt, CustOS', $(_data[i].element).offset().top, scrollToggleWindowHeight, _data[i].offset);
            // }
            _data[i].calcOffset = $(_data[i].element).offset().top + ( (scrollToggleWindowHeight / 100) * _data[i].offset );
        }
        //Call scroll func
        scrollToggleScroll();
        //Queue scroll func
        addScroll_Handler(scrollToggleScroll);
    }
    //Scroll Funcs
    function scrollToggleScroll() {
        //Calculate the position of the bottom of the window as user scrolls
        var _windowbottom = $(window).scrollTop() + scrollToggleWindowHeight;
        //Shorten the array name
        var _data = scrollToggleData;
        var _dataL = _data.length;
        //Loop though array
        for (var i=0; i<_dataL; i++) {
            // Get the top position of the element
            var _elementtop = _data[i].calcOffset;
            // If the element is in view
            if ( _windowbottom > _elementtop ) {
                //Add the custom or pre-defined class
                $(_data[i].element).addClass(_data[i].class);
            }
        }
    }

//User-Controlled Elements
    // These are the DATA-ATTRs used to control the elements.
    // data-uce="topbar" 
    // data-uce-reopen="<commercecm:languagecontent runat='server' LRMKey='topbar-reopen-rate-in-days' Default='1' />" 
    // data-uce-callback="scrollPage"
    // data-uce-close
    function openUCE(_el, _id) {
        _el.classList.remove('hide');
        var _cl = _el.querySelectorAll('[data-uce-close]')[0]; //Clickable element, assumes 1
        if (_cl) {
            _cl.addEventListener('click',function(){
                var _el = _cl
                while ( (_el = _el.parentElement) && !_el.hasAttribute('data-uce') ) {
                    _el = _el;
                }
                var _id = _el.getAttribute('data-uce'); //should be unique
                var _ct = new Date().getTime(); //Current Timestamp
                var _dl = _el.getAttribute('data-uce-reopen') * 86400000; //DeLay - expects days
                var _cc;
                if (_cl.getAttribute('data-uce-close') != '') {
                    _cc = _cl.getAttribute('data-uce-close');
                } else {
                    _cc = 'hide';
                }

                _el.classList.add(_cc);
                if ( _el.hasAttribute('data-uce-callback') ) {
                    window[_el.getAttribute('data-uce-callback')]();
                }
                localStorage[_id] = _ct + _dl;
            });
        }
    }
    function userControlledEls(_els) {
        //Define if undefined
        if ( _els == undefined ) {
            _els = document.querySelectorAll('[data-uce]');
        }
        var _len = _els.length;
        for ( var i=0; i<_len; i++ ) {
            var _el = _els[i];
            var _id = _el.getAttribute('data-uce'); //should be unique
            var _dl = _el.getAttribute('data-uce-reopen') * 86400000; //DeLay - expects days
            var _ct = new Date().getTime(); //Current Timestamp
            //Is it already registered?
            if ( localStorage[_id] != undefined) {
                if (localStorage[_id] != 'open' && localStorage[_id] > _ct) { 
                    window.console && console.log("The " + _id + " element will be visible again in " + ( (localStorage[_id] - _ct) / 1000 / 60) + " minutes..." );
                } else {
                    openUCE(_el);
                }
            } else {
                //Register element
                localStorage[_id] = 'open';
                //Show element
                openUCE(_el, _id, _dl);
            }
        }
    }addPageLoad_Handler(userControlledEls);

//Equal-Height Columns (Needs to be second-last, after all other elements have been styled and manupilated)
    //Sets an inline height on children of equal-heighted elements
     function equalHeightr(rows) {
        var rows;
        if (rows != undefined) {
            rows = $(rows);
        } else {
            rows = $('[eh],[data-eh]');
        }
        if (rows.length > 0) {
            rows.each(function(){
                var $row = $(this);
                var cols = $row.children();
                var tallest = 0;
                cols.each(function(){
                    var col = $(this);
                    col.css('height', '' );
                    if (
                        col.attr('ex') == undefined //Column is NOT EXcepted
                        && col.attr('data-ex') == undefined //Column is NOT EXcepted
                        && col.outerHeight() > tallest //Column is taller than the tallest column thusfar
                        && col.outerWidth(true) < col.parent().innerWidth() // Column is narrower than parent
                    ) {
                        tallest = col.outerHeight();
                    }
                });
                cols.each(function(){
                    var col = $(this);
                    if ( 
                        col.attr('ex') == undefined 
                        && col.attr('data-ex') == undefined
                        && col.outerWidth(true) < col.parent().innerWidth() 
                    ) {
                        col.css('height', tallest );
                    }
                });
            });
        }
    }
    addPageLoad_Handler(equalHeightr,true,false);

//Fixed item (needs to be last, needs to know final sizes of on-page elements)
    function FixedEls() {
    //Find elements with the 'data-fix' property, global, to be accessed by multiple functions.
        window.fixedVars = {
            fix : $('[data-fix]'),
            StackDiffs : 0
        } 
    //Prep each FIXED item
        fixedVars.fix.each(function(){
            //Assign it to a variable
            var fixed = $(this);
            //Find the parent
            var parent = fixed.parent();
            //Clone the fixed element
            var thisClone = fixed.clone().off();
            thisClone.insertBefore(fixed).css('opacity',0).removeAttr('data-fix');
            thisClone.find('script,#Login_Popup').remove();
            thisClone.find('[name],[id],[onclick]').each(function(){
                var $this = $(this);
                if ($this.attr('name') != undefined) {
                    $this.removeAttr('name');
                }
                if ($this.attr('onclick') != undefined) {
                    $this.removeAttr('onclick');
                }
                if ($this.attr('id') != undefined) {
                    $this.attr( 'id' , $this.attr('id') + '_cloned' );
                }
            });
            if (thisClone.attr('id') != undefined) {
                thisClone.attr('id',thisClone.attr('id')+'_cloned');
            }
            //If there are multple fixed elements, rank them.
            // if (fixed.attr('data-fix') != 'relative') {
                fixed.addClass('FixedElementStack');
            // }
            //If the parent is static, fix that.
            if (parent.css('position') == 'static') {
                parent.css('position','relative');
            }
            //Set these last so that the parent elements can be 'position'd correctly
            var thisCloneTop = thisClone.position().top + parseInt(thisClone.css('margin-top'));
            var thisCloneLeft = thisClone.position().left + parseInt(thisClone.css('margin-left'));
            //Style the original (fixed) element
            fixed.css({
                'position'  : 'absolute',
                'top'       : thisCloneTop,
                'left'      : thisCloneLeft,
                'margin'    : 0,
                'max-width' : thisClone.outerWidth() //width with padding, but withOUT margin
            });
            fixedElementResize(fixed);
        });
     //Resize Call
        function fixedElementResizeWrapper(el) {
            if (el != undefined && el.target == undefined) {
                fixedElementResize(el)
            } else {
                fixedVars.fix.each(function() {
                    var el = $(this);
                   fixedElementResize(el)
                });
            }
        }
        addResize_Handler(fixedElementResizeWrapper);
    //Resize Calc
        function fixedElementResize(el) {
            var fixed = el;
            var thisClone = fixed.prev();
            //Re-set those variables so the floating elements stays the intended size and shape
            var thisCloneTop  = thisClone.position().top + parseInt(thisClone.css('margin-top'));
            var thisCloneLeft = thisClone.position().left + parseInt(thisClone.css('margin-left'));
            //Re-style the default styling (this can be refactored, like, for sure)
            fixed.css({
                'left'      : thisCloneLeft,
                'max-width' : thisClone.outerWidth()
            });
            fixedElementScroll(fixed);
        }
    //Scroll Call
        function fixedElementScrollWrapper() {
            fixedVars.fix.each(function() {
                var el = $(this);
                fixedElementScroll(el)
            });
        }
        addScroll_Handler(fixedElementScrollWrapper);
    //Scroll Calc
        function fixedElementScroll(el){
            var fixed = el;
            var parent = fixed.parent();
            var thisClone = fixed.prev();
            //Re-set those variables so the floating elements stays the intended size and shape - this is expensive, but needs significant refactoring
            var thisCloneTop  = thisClone.position().top + parseInt(thisClone.css('margin-top'));
            var thisCloneLeft = thisClone.position().left + parseInt(thisClone.css('margin-left'));
            //Set stack height
            fixedVars.StackDiffs = 0;
            $('.FixedElementStack').each(function(){
                $(this).attr('offset_top',fixedVars.StackDiffs);
                fixedVars.StackDiffs += $(this).outerHeight();
            });
            //Grab the positional variables of the element
            var scrollTop   = $(window).scrollTop();
            var fixedOStop  = fixed.offset().top;
            var fixedOH     = fixed.outerHeight();
            var parentOStop = parent.offset().top;
            var parentOH    = parent.outerHeight();
            //If the element is relative to parent
            if (fixed.attr('data-fix') == 'relative') {
                //If the element is NOT taller than the window height
                if ( thisClone.outerHeight(true) - fixed.attr('offset_top') < $(window).height() ) {
                    //Several positional variables needed to make element stick/unstick as required
                    var elementBottom   = parseInt( fixedOStop + fixedOH - scrollTop );
                    var parentBottom    = parseInt( parentOStop + parentOH - scrollTop );
                    var windowTop       = parseInt( scrollTop );
                    var elementTop      = parseInt( fixedOStop );
                    var fixedDifference = parseInt( parentOStop + parentOH - fixedOH );
                    var cloneOffset     = parseInt( thisClone.offset().top );
                    var fixedOffset     = parseInt( elementTop - fixed.attr('offset_top') );
                    window.fx = 'elementButtom: '+elementBottom+'\nparentButtom: '+parentBottom+'\nwindowTop: '+windowTop+'\nelementTop: '+elementTop+'\nfixedDifference: '+fixedDifference+'\nCloneOffset: '+cloneOffset+'\nFixedOffset: '+fixedOffset;
                    //The top of the element is greater than the scroll position, but less than the clone
                    if ( fixedOffset >= windowTop && elementTop <= cloneOffset ) {
                        //Position it absolutely over top of the clone
                        fixed.css({
                            'position'  : 'absolute' ,
                            'top'       : thisCloneTop ,
                            'bottom'    : 'auto',
                            'left'      : thisCloneLeft
                        }).addClass('absolute').removeClass('fixed');
                    //Element top is less than scroll position and element bottom is greater than/equal to parent bottom
                    } else if ( fixedOffset <= windowTop && elementBottom >= parentBottom) {
                        //Position it at the bottom of the parent element
                        fixed.css({
                            'position'  : 'absolute',
                            'top'       : /*parent.height() - fixedOH*/ 'auto',
                            'bottom'    : 0,
                            'left'      : thisCloneLeft
                        }).addClass('absolute').removeClass('fixed');
                    //The bottom of the element is less then/equal to the parent bottom
                    } else if (  elementBottom <= parentBottom ) {
                        //Fix is to the top of the browser window
                        fixed.css({
                            'position'  : 'fixed' ,
                            'top'       : parseInt(0 + fixed.attr('offset_top')),
                            'bottom'    : 'auto',
                            'left'      : thisClone.offset().left
                        }).addClass('fixed').removeClass('absolute');
                    //Else...
                    } else {
                        window.console && console.log('It seems you have found the Twilight Zone...');
                    }
                }
            //If the element is NOT relative to parent
            } else {
                if ( scrollTop >= thisClone.offset().top - fixed.attr('offset_top') ) {
                    fixed.css({
                        'position'  : 'fixed',
                        'top'       : parseInt(fixed.attr('offset_top')),
                        'left'      : thisClone.offset().left
                    }).addClass('fixed').removeClass('absolute');
                } else {
                    fixed.css({
                        'position'  : 'absolute',
                        'top'       : thisCloneTop,
                        'left'      : thisClone.position().left
                    }).addClass('absolute').removeClass('fixed');
                }
            }
        }
    }addPageLoad_Handler(FixedEls);

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
        for (i=0;i<JumpLinks.length;i++) {
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
    }addPageLoad_Handler(queueSmoothScroll);

// Set Heights!
	function setHeights() {
		var _els = document.getElementsByClassName('content-area__content');
		var _len = _els.length;
		for (var _i=0; _i<_len; _i++) {
			var _this = _els[_i];
			_this.style.height = '';
			var _height = _this.offsetHeight;
			_this.style.height = _height;
		}
		setTimeout(function(){
			// closeEverything();
		},0);

	}addPageLoad_Handler(setHeights,true,false);

// Close Items
	function closeEverything() {
		var _els = document.querySelectorAll('.content-area__title-bar .button');
		var _len = _els.length;
		for (var _i=0; _i<_len; _i++) {
			var _this = _els[_i];
			_this.click();
		}
	}
	// }addPageLoad_Handler(closeEverything);

// Custom Popup
    (function(){
        //Popup Variables
        var Body = document.body;
        var PopUpContainer = document.getElementById( 'popup-container' );
        var PopUpLinks = document.getElementsByClassName( 'popup-link' );
        var PopUpBG = document.getElementById( 'popup-bg' );
        var PopUpClose = document.getElementById( 'popup-close' );
        //Open popup, attached to window for global access
        openPopUp = function(DataVariable) {
            DataVariable = document.getElementById( DataVariable );
            Body.classList.add('popup-open'); //Uses a class on the body to open and close the pop-up with CSS so it can be easily formatted by the implementer without needing to mess with JS, this also allows freezing of the body (overflow:hidden) so Michael can stop worrying about background scrolling behind the popup
            PopUpContainer.innerHTML = ''; //Empty #PopUpContainer
            PopUpBG.classList.add( DataVariable.getAttribute('id') ); //Re-set the Class Name
            PopUpContainer.innerHTML = DataVariable.innerHTML; //Populate #PopUpContainer
        }
        //Close PopUp, attached to window for global access
        closePopUp = function() {
            PopUpBG.setAttribute( 'class', 'popup-bg' ); //Remove any Class Names
            Body.classList.remove( 'popup-open' ); //Remove the Body class
            PopUpContainer.innerHTML = ''; //Empty #PopUpContainer
        }
        //PopUp Links Present?
        if ( PopUpLinks.length > 0 ) {
            //Format links
            for ( i=0; i<PopUpLinks.length; i++ ) {
                var DataContent = PopUpLinks[i].getAttribute( 'data-content' ); //Get the data-content attribute
                PopUpLinks[i].setAttribute( 'href','javascript:openPopUp(\'' + DataContent + '\')' ); //Sets the data-content as a variable in the JS link call
            }
            //Set-Up Close Conditions
            PopUpBG.setAttribute( 'onclick', 'closePopUp()' ); //Create onclick event to close popup
            PopUpClose.setAttribute( 'onclick', 'closePopUp()' );  //Create onclick event to close popup
            //Stop propogation from child elements of #PopUpContainer
            PopUpContainer.addEventListener ( 'click', function(e) {
                e.stopPropagation();
            } );
        }
    })();

//INIT THAT SHHHHHH!
$(document).ready(function(){
	runPageLoad_Handlers();
});
$(window).scroll(function(){
	runScroll_Handlers();
});
$(window).resize(function(){
	runResize_Handlers();
});