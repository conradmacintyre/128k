
<!doctype html>
<html>
	<head>
		<title>128k.ca</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="n64.css">
	</head>
	<body>
        <header class="header">
            <a class="header-logo" href="/index.php">128k.ca</a>
            <div class="header-nav-wrapper">
                <div class="header-nav-trigger" data-ts=".header-nav">MENU</div>
                <nav class="header-nav" data-nav>
                    <a href="javascript:void(0);" class="popup-link" data-content="share-modal">Share</a>
                    <div id="share-modal" class="popup-content">
                        <div class="share-modal__content">
                            <h2>Share this bundle</h2>
                            <textarea id="currentBundle" class="currentBundle hide"></textarea>
                            <div id="sharingInstructions" class="sharingInstructions">Copy and Paste the following:</div>
                            <textarea id="sharingUrl" class="sharingUrl"></textarea>
                        </div>
                    </div>

                    <a href="javascript:void(0);" class="popup-link" data-content="save-modal">Save</a>
                    <div id="save-modal" class="popup-content">
                        <div class="save-modal__content">
                            <h2>Save This Bundle</h2>
                            <input type="text" id="bundleName" class="bundleName" placeholder="Generic Bundle Name"><a id="saveBundleName" class="save-bundle">SAVE</a>
                        </div>
                    </div>

                    <a href="javascript:void(0);" class="popup-link" data-content="bundles-modal">Manage</a>
                    <div id="bundles-modal" class="popup-content">
                        <div class="bundles-modal__content">
                            <h2>Your Saved Bundles</h2>
                            <div id="bundles"></div>
                            <div class="emptyUl">You have not saved any bundles</div>
                            <br><br>
                            <a id="resetBundles" class="resetBundles">Remove all my bundles</a>
                            <br><br>
                            <small>Note that your saved bundles are only available on the device you saved them to. In order to make them available across all your devices, I would need a login system. And that means I would need your personal information and I do not want it. :)</small>
                        </div>
                    </div>

                    <a href="javascript:void(0);" class="popup-link" data-content="pricing-modal">Pricing</a>
                    <div id="pricing-modal" class="popup-content">
                        <div class="pricing-modal__content">
                            <div class="discount-description">You want to ask for a discount from a seller? Figure out what to offer a bundle at? This is a quick reference chart. Also offers approximate ebay fees, if you're into that sort of thing.</div>
                            <table class="discount-table">
                                <tbody>
                                    <tr>
                                        <td class="discount-value">10% Discount</td>
                                        <td class="discount-dollars" id="discount10"></td>
                                    </tr>
                                    <tr>
                                        <td class="discount-value">15% Discount</td>
                                        <td class="discount-dollars" id="discount15"></td>
                                    </tr>
                                    <tr>
                                        <td class="discount-value">20% Discount</td>
                                        <td class="discount-dollars" id="discount20"></td>
                                    </tr>
                                    <tr>
                                        <td class="discount-value">25% Discount</td>
                                        <td class="discount-dollars" id="discount25"></td>
                                    </tr>
                                    <tr>
                                        <td class="discount-value">eBay Fees</td>
                                        <td class="discount-dollars" id="ebayFees"></td>
                                    </tr>
                                    <tr>
                                        <td class="discount-value">Total After eBay Fees</td>
                                        <td class="discount-dollars" id="adjTotal"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <a href="javascript:void(0);" class="popup-link" data-content="options-modal">Options</a>
                    <div id="options-modal" class="popup-content">
                        <div class="options-modal__content">
                            <h2>Display Options</h2>
                            <a id="toggleBundled" class="option-toggle" data-ts>Show Only Bundled Items</a>
                            <br>
                            <a id="clearSelected" class="option-button">Clear Bundled Items</a>
                            <h2>Pricing Options</h2>
                            <a id="roundUpCad" class="option-toggle open" data-ts data-ts-group="pricing-options">Show exact price</a>
                            <a id="roundUp1" class="option-toggle" data-ts data-ts-group="pricing-options">Round up to nearest $1</a>
                            <a id="roundUp5" class="option-toggle" data-ts data-ts-group="pricing-options">Round up to nearest $5</a>
                            <h2>Reset Data</h2>
                            <a id="resetPrices" class="option-button">Force Price Data Reset</a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

        <div class="title-wrap">
            <h1 class="main-title">
                <span class="n64">Nintendo 64</span> Bundler
            </h1>
        </div>

		<section class="game-table" id="info">
            <table id="GameTable" class="tablesorter" border="1">
                <thead>
                    <tr>
                        <th id="gameImage" class="gameImage"></th>
                        <th id="gameTitle" class="gameTitle">Title</th>
                        <th id="gameLooseValue" class="gameLooseValue">Loose</th>
                        <th id="gameCIBValue" class="gameCIBValue hidden">CIB</th>
                        <th id="gameReleaseDate" class="gameReleaseDate hidden">Release Date</th>
                    </tr>
                </thead>
                <tbody id="GameIndex">
                </tbody>
            </table>
		</section>
        
        <footer class="cta-strip cta-strip--searchbar">
            <input type="text" id="search" placeholder="Search"><button class="alert" id="clear">CLEAR</button>
            <div id="itemCount" class="item-callout item-callout--count">
                <span id="itemNumber" class="item-callout__inner">0</span>
            </div>
            <div class="item-callout item-callout--total">
                <a id="bundletotal" class="item-callout__inner popup-link" data-content="math-modal">0.00</a>
            </div>
        </footer>

        <!-- COMMON FOOTER, CUSTOM SCRIPT CALLS -->
		<a href="jacascript:void(0);" class="backtotop"></a>

		<div id="popup-bg" class="popup-bg">
			<div id="popup-wrap" class="popup-wrap">
				<span id="popup-close" class="popup-close"></span>
				<div id="popup-container" class="popup-container"></div>
			</div>
		</div>

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script src="../_js/library.min.js"></script>
        <script src="n64.min.js?v=0.1"></script>
        <script src="tablesorter.js"></script>
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            
            ga('create', 'UA-89649345-1', 'auto');
            ga('send', 'pageview');
        </script>
	</body>
</html>