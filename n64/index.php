
<!doctype html>
<html>
	<head>
		<title>128k.ca</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="n64.css">
	</head>
	<body>
		<nav class="nav" data-fix>
			<div class="nav__inner">
				<div class="nav__128k">
					<a href="../index">128k.ca</a>
				</div>
				<div class="nav__internal">
					<span class="mobile-toggle" data-ts=".mobile-flyout,nav.nav"></span>
					<div class="mobile-flyout">
                        <a href="javascript:void(0);" class="popup-link" data-content="share-modal">
                            Share
                        </a>
                        <div id="share-modal" class="popup-content">
                            <div class="share-modal__content">
                                <h2>Share this bundle</h2>
                                <a id="copyBundleUrl" class="copyBundleUrl">Copy URL to Clipboard</a>
                                <textarea id="currentBundle" class="currentBundle"></textarea>
                            </div>
                        </div>
						<a href="javascript:void(0);" class="popup-link" data-content="save-modal">
                            Save
                        </a>
                        <div id="save-modal" class="popup-content">
                            <div class="share-modal__content">
                                <h2>Save This Bundle</h2>
                                <input type="text" id="bundleName" class="bundleName" placeholder="Generic Bundle Name"><a id="saveBundleName" class="saveBundleName">SAVE</a>
                            </div>
                        </div>
                        <a href="javascript:void(0);" class="popup-link" data-content="bundles-modal">
                            Bundles
                        </a>
                        <div id="bundles-modal" class="popup-content">
                            <div class="bundles-modal__content">
                                <h2>Your Saved Bundles</h2>
                                <div id="bundles"></div>
                                <div class="emptyUl">You have not saved any bundles</div>
                                <a id="resetBundles" class="resetBundles">Remove all my bundles</a>
                                <small>Note that your saved bundles are only available on the device you saved them to. In order to make them available across all your devices, I would need a login system. And that means I would need your personal information and I do not want it. :)</small>
                            </div>
                        </div>
                        <a href="javascript:void(0);" class="popup-link" data-content="options-modal">
                            Options
                        </a>
                        <div id="options-modal" class="popup-content">
                            <div class="options-modal__content">
                                <h2>Display Options</h2>
                                <span id="toggleBundled" class="option-toggle">Show Only Bundled Items</span>
                                <span id="clearSelected" class="option-button">Clear Bundled Items</span>
                                <h2>Pricing Options</h2>
                                <a id="roundUp1" class="option-toggle" data-ts data-ts-group="pricing-options">Round up to nearest $1</a>
                                <a id="roundUp5" class="option-toggle" data-ts data-ts-group="pricing-options">Round up to nearest $5</a>
                                <h2>Reset Data</h2>
                                <a id="resetPrices" class="option-button">Force Price Data Reset</a>
                            </div>
                        </div>
					</div>
				</div>
			</div>
        </nav>

<!-- COMMON HEADER, CUSTOM ITEMS -->

		<h1 class="main-title">
            Nintendo 64 Bundler
        </h1>
		<section class="cta-strip cta-strip--searchbar" data-fix>
            <input type="text" id="search" placeholder="Search"><button class="alert" id="clear">CLEAR</button>
            <div id="itemCount" class="item-callout item-callout--count">
                <span id="itemNumber" class="item-callout__inner">0</span>
            </div>
            <div class="item-callout item-callout--total">
                <a id="bundletotal" class="item-callout__inner popup-link" data-content="math-modal">0.00</a>
            </div>
            <div id="math-modal" class="popup-content">
                <div class="math-modal__content">
                    <p class="valuePreamble">Total with a 10% discount: <span id="discount10" class="dollarValue">0</span></p>
                    <p class="valuePreamble">Total with a 15% discount: <span id="discount15" class="dollarValue">0</span></p>
                    <p class="valuePreamble">Total with a 20% discount: <span id="discount20" class="dollarValue">0</span></p>
                    <p class="valuePreamble">Total with a 25% discount: <span id="discount25" class="dollarValue">0</span></p>
                    <p class="valuePreamble">eBay/PayPal fees: <span id="ebayFees" class="dollarValue">0</span></p>
                    <p class="valuePreamble">Total (minus fees): <span id="adjTotal" class="dollarValue">0</span></p>
                    <p style="display:none;">Estimated shipping cost: <span id="estShipping">(coming soon)</span></p>
                </div>
            </div>
		</section>
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
        
        <!-- COMMON FOOTER, CUSTOM SCRIPT CALLS -->
		<a href="jacascript:void(0);" class="backtotop"></a>
		<div id="popup-bg" class="popup-bg">
			<div id="popup-wrap" class="popup-wrap">
				<span id="popup-close" class="popup-close"></span>
				<div id="popup-container" class="popup-container"> </div>
			</div>
		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script src="../library.min.js"></script>
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