<!-- Header
Billboard
About Me
My Projects
Contact Form
Footer -->

<html>
	<head>
		<title>128k.ca | I Make Things</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="index.css?v=1.0">
	</head>
	<body>
		<header class="header" sticky>
			<a class="header-logo" href="/index.php">128k.ca</a>
			<div class="header-nav-wrapper">
				<div class="header-nav-trigger" data-ts=".header-nav">MENU</div>
				<nav class="header-nav" data-nav>
					<a href="#about-me">About Me</a>
					<a href="#projects">My Projects</a>
					<a href="#design-thoughts">Thoughts on Design</a>
					<a href="#contact-me">Contact Me</a>
				</nav>
			</div>
		</header>
		<div class="billboard">
			<div class="billboard-slide active" data-bgimg="_images/main-header.jpg">
				<h1>128k.ca</h1>
				<p>Hi, my name is Conrad. I make things. Sometimes they're good.</p>
				<a href="#contact-me" class="button">Reach Out</a>
			</div>
		</div>
		<section class="about-me" id="about-me" data-bgimg="_images/conrad.jpg">
			<div class="about-me-inner">
				<div class="text-section">
					<h2 class="about-me_title">About Me</h2>
					<p>As I attempt to write up an "about me" that is even remotely usful or interesting, I find myself struggling. Is this a personal site? An online resume? Man, who knows. Hopefully by the time you're done reading this, you'll have a better idea about who I am.</p>
					<p>I have political opinions. I don't feel compelled to share them publically.</p> 
					<p>I love my family. All my choices are filtered through the lens of what I feel is best for my children. They are easily the greatest thing I have ever helped to create. But let's by honest; my wife did all the hard parts.</p>
					<p>I like TV more than movies. But I am a sucker for franchises and love reboots that come in the form of sequels. I adored Rocky 6, am looking forward to Bill & Ted 3 more than is reasonable, and would go opening night to see Gremlins 3.</p>
					<p>Best dramatic show of the 60s is The Fugitive, 70s is The Rockford Files, 80s is MacGyver (maybe Quantum Leap), 90s is Law & Order (maybe X-Files), 00s is 24 (maybe LOST). Has there been a good show this decade?</p>
					<p>I used to be a pastor, now I'm a web developer, perhaps in the future I'll be something different again. My vocation doesn't define who I am. It's just something I do. And, honestly, my work falls well below being a dad and teaching my sons how to be good men in terms of definition and fulfillment.</p>
					<p>If you want to reach out or do something together, I'm always excited to work on something great. <a href="#contact-me">Let's do it!</a></p>
				</div>
			</div>
		</section>
		<section class="projects" id="projects">
			<div class="text-section">
				<h2>My Projects</h2>
				<p>Below are some projects, or project categories, that I've worked on. </p>
			</div>
			<div class="project games">
				<div class="project-billboard">
					<div class="project-billboard-slide" data-bgimg="https://r.hswstatic.com/w_907/gif/how-to-play-blackjack-lead.jpg">
						<p class="project-title">Games</p>
						<p>I've made several web games, including BlackJack, Jeopardy, and Buck 'N' Pat Bingo</p>
						<button class="button popup-link" data-content="games">Try a game</button>
					</div>
				</div>
				<div class="project-info popup-content" id="games">
					<div>
						<div class="project-specifics">
							<h3>Buck 'N' Pat Bingo</h3>
							<img src="_images/bingo.jpg" alt="">
							<p>If you watch the Blue Jays much, you'll quickly hear some of the broadcaster's favourite phrases. This is an attempt to make those common sayings a little more fun. So tune into the Jays and <a href="#">play along</a>!</p>
						</div>
						<div class="project-specifics">
							<h3>Blackjack</h3>
							<img src="_images/blackjack.jpg" alt="">
							<p>This was a student project I built as an assignment while I was at BCIT. It stands as my favourite thing I built while I was there. I still play it on a regular basis. Wanna <a href="#">play a hand</a>?</p>
						</div>
						<div class="project-specifics">
							<h3>Brand Wars (Pre-Alpha)</h3>
							<img src="_images/brand-wars.jpg" alt="">
							<p>When WWE Smackdown! vs RAW 2006 was released the "GM Mode" blew my mind. It was like franchise, but for pro-wrestling. Ever since it was removed in 2009, I stopped buying WWE games annually, and typically pick up used copies every couple years. I want to build my own version. That's what this work-in-progress is. Want to play a rough pre-alpha build of the booking/match engine? <a href="#">Give 'er a go</a>!</p>
						</div>
						<div class="project-specifics">
							<h3>Family Feud (Beta)</h3>
							<img src="_images/family-feud.jpg" alt="">
							<p>As a youth pastor I needed to make some games that could be played by a fairly large group in a fairly small space. Game shows seemed like a great option. So I threw this together. Currently they have no documentation, but I'll work on that. In the meantime, feel free to <a href="#">poke around</a>.</p>
						</div>
						<div class="project-specifics">
							<h3>Jeopardy (Beta)</h3>
							<img src="_images/jeopardy.jpg" alt="">
							<p>Same as above. <a href="#">Have a look</a>.</p>
						</div>
						<div class="project-specifics">
							<h3>Wheel of Fortune (Beta)</h3>
							<img src="_images/wheel-of-fortune.jpg" alt="">
							<p>Same as above. <a href="#">Have a look</a>.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="project fanedits">
				<div class="project-billboard">
					<div class="project-billboard-slide" data-bgimg="https://www.screengeek.net/wp-content/uploads/2017/09/tim-curry-pennywise-it.jpg">
						<p class="project-title">Fanedits</p>
						<p>I've always loved the Stephen King miniseries' from the 90s. But I've also always had gripes with them too. These are my attempts to polish them and turn them into single-sitting feature films.</p>
						<button class="button popup-link" data-content="fanedits">Check them out</button>
					</div>
				</div>
				<div class="project-info popup-content" id="fanedits">
					<div>
						<div class="project-specifics">
							<h3>It (1990)</h3>
							<img src="_images/bingo.jpg" alt="">
							<p>My refined take on the evil force that feeds on the fear of a small town in Maine. <a href="#">You'll float too</a>!</p>
						</div>
						<div class="project-specifics">
							<h3>The Stand (1994)</h3>
							<img src="_images/bingo.jpg" alt="">
							<p>I turned a 6-hour, 4-part miniseries into a single-sitting 3-hours-and-21-minute film. <a href="#">Take your stand</a>!</p>
						</div>
						<div class="project-specifics">
							<h3>The Shining (1997)</h3>
							<img src="_images/bingo.jpg" alt="">
							<p>I removed over half of the 4:30 runtime of the original mini. And I think this streamlined update makes this miniseries much more compelling. <a href="#">Shine on</a>!</p>
						</div>
					</div>
				</div>
			</div>
			<div class="project n64">
				<div class="project-billboard">
					<div class="project-billboard-slide" data-bgimg="https://timedotcom.files.wordpress.com/2015/04/174122452.jpg">
						<p class="project-title">Nintendo 64</p>
						<p>I got into collecting for the Nintendo 64 in 2017. But I needed a way to quickly assess the value of a set of games in Canadian dollars. So I built this site using data from pricecharting.com.</p>
						<button class="button popup-link" data-content="n64">Price some games</button>
					</div>
				</div>
				<div class="project-info popup-content" id="n64">
					<div>
						<div class="project-specifics">
							<h3>N64 Bundlr</h3>
							<img src="_images/bingo.jpg" alt="">
							<p>Wanna buy or sell some old N64 games and not sure what they're worth? <a href="#">Find out</a>!</p>
						</div>
					</div>
				</div>
			</div> 
			<div class="project videos">
				<div class="project-billboard">
					<div class="project-billboard-slide" data-bgimg="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2017/05/fcpx_new_timeline.png">
						<p class="project-title">Video Projects</p>
						<p>Over the years I've done some video projects. These vary from wedding/funeral slideshows to event promotions, and youth group video projects.</p>
						<button class="button popup-link" data-content="videos">Watch something.</button>
					</div>
				</div>
				<div class="project-info popup-content" id="videos">
					<div>
						<div class="project-specifics">
							<h3>My YouTube Channel</h3>
							<img src="_images/bingo.jpg" alt="">
							<p>This is just where my content happens to be, you can check out the stuff I've published here. I'll add more items as I have time and inclination. <a href="#">Like, comment, and subscribe</a>!</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="design-thoughts" id="design-thoughts">
			<div class="text-section">
				<h2 class="about-me_title">Thoughts on Design</h2>
				<p>As I began in hobbyist web development (circa 1999), I regarded design and appearance as synonyms. Design was, to my mind, making something "look cool". Turns out "looking cool" is both extremely subjective and inadequate as a definition of design. While appearance is obviously not without its merit, it is but one facet of design.</p>
				<p>It took years before this idea rooted itself in my mind. Some time in 2006 I had my first experience with an Apple product — the iPod. It was my girlfriend's and it was, much to my surprise as a then Mac-hater, awesome. And as I thought about why it was so awesome I realized that it was the union of the user interface and the user experience. The marriage of form and function.</p>
				<p>It was the design. As Steve Jobs once said:</p>
				<blockquote>Design is not just what it looks like and feels like. Design is how it works.
				I believe this philosophy should permeate every aspect of what we do. Especially as a web designer.</blockquote>
				<p>I always want to do something great. Something of value. Something that I'm proud to put my name on. 
				Let's do that together.</p>
			</div>
		</section>
		<section id="contact-me" class="contact-me">
			<h2>Contact</h2>
		
			<form class="contact" name="contact" method="post">
				<label for="form-name">Name:</label>
				<input required type='text' name='name' id='form-name' value='' placeholder="Name">
				<label for="form-email">Email:</label>
				<input required type='email' name='email' id='form-email' value='' placeholder="Email">
				<label for="form-text">What do you want to do?</label>
				<textarea required name='text' id='form-text' placeholder="What do you want to do?"></textarea>
				<button type="submit" name='submit' id='form-submit' value="Submit">Submit</button>
			</form>
			
			<div class="message-container"></div>
			
			<h2>Connect</h2>
			
			<div id="social-icons">
				<a class="noroll" href="email" user="conrad" domain="128k.ca">
					<span class="icon-email"></span>
				</a>
				<a class="noroll" href="http://twitter.com/conradmacintyre">
					<span class="icon-twitter"></span>
				</a>
				<a class="noroll" href="http://ca.linkedin.com/in/conradmacintyre/">
					<span class="icon-linkedin"></span>
				</a>
				<a class="noroll" href="http://github.com/conradmacintyre">
					<span class="icon-github"></span>
				</A>
			</div>
		</section>
		<footer>
			<p>&copy; 2014<?php if ( date("Y") > 2014 ) { echo "-".date("Y"); } ?>, <a href="http://conradmacintyre.com">Conrad MacIntyre</a>. <a href="email" user="conrad" domain="128k.ca"></a></p>
		</footer>
		<!-- Back to top -->
		<a href="jacascript:void(0);" class="backtotop"></a>
		<!-- Popup container -->
		<div id="popup-bg" class="popup-bg">
			<div id="popup-wrap" class="popup-wrap">
				<span id="popup-close" class="popup-close"></span>
				<div id="popup-container" class="popup-container"> </div>
			</div>
		</div>		
		<!-- Call Javascript -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
		<script src="_js/library.min.js"></script>
	</body>
</html>