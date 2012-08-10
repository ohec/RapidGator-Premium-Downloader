// ==UserScript==
// @name        RapidGator Premium Downloader
// @namespace   https://github.com/ohec/RapidGator-Premium-Downloader
// @description Downloads from RapidGator account
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// @downloadURL https://github.com/ohec/RapidGator-Premium-Downloader/raw/master/RapidGator_Premium_Downloader.user.js
// @include     http://rapidgator.net/file/*
// @include     http://www.rapidgator.net/file/*
// @include     */fhn.html
// @include     */s.html
// @version     0.1
// ==/UserScript==
// Add jQuery
(function(){
	if (typeof jQuery == 'undefined') {
		var GM_Head = document.getElementsByTagName('head')[0] || document.documentElement,
			GM_JQ = document.createElement('script');

		GM_JQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js';
		GM_JQ.type = 'text/javascript';
		GM_JQ.async = true;

		GM_Head.insertBefore(GM_JQ, GM_Head.firstChild);
	}
	GM_wait();
})();

// Check if jQuery's loaded
function GM_wait() {
	if (typeof jQuery == 'undefined') {
		console.log('undefined');
		window.setTimeout(GM_wait, 100);
	} else {
		console.log('defined');
		$ = jQuery.noConflict(true);
		letsJQuery();
	}
}

// The Code
function letsJQuery() {
	var i, x;
	for (i = 0; x = document.styleSheets[i]; ++i) {
		x.disabled = true;
	}
	if(document.title == "File not found") {
		console.log('File not found - Closing');
	} else {
		var link2 = $('.btm > p > a');
		var url = $.trim(link2.attr('href'));

		$('body').html('<pre style="margin-left:30px;margin-top:20px;">Downloading "' + $(document).attr('title') + '" ...</pre>');

		link2.click();
		//window.location.href = url;
	}

	setTimeout(function() { window.close(); }, 10000);
}
