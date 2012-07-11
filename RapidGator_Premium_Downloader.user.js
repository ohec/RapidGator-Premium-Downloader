// ==UserScript==
// @name        RapidGator Premium Downloader
// @namespace   https://github.com/ohec/RapidGator-Premium-Downloader
// @description Downloads from RapidGator account
// @include     http://rapidgator.net/file/*
// @include     http://www.rapidgator.net/file/*
// @version     0.1
// ==/UserScript==

var $;
(function () {
	if (typeof unsafeWindow.jQuery == 'undefined') {
		var GM_Head = document.getElementsByTagName('head')[0] || document.documentElement, GM_JQ = document.createElement('script');
		GM_JQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js';
		GM_JQ.type = 'text/javascript';
		GM_JQ.async = true;
		GM_Head.insertBefore(GM_JQ, GM_Head.firstChild);
	}
	GM_wait();
})();

// Check if jQuery's loaded
function GM_wait() {
	if (typeof unsafeWindow.jQuery == 'undefined') {
		window.setTimeout(GM_wait, 100);
	} else {
		$ = unsafeWindow.jQuery.noConflict(true);
		letsJQuery();
	}
}

function letsJQuery() {
//console.log($('.btm > p > a').attr('href'));
	if ($('.table_header').text().trim() != 'File not found') {
		//$('.btm > p > a').text().trim()
		$(document).attr('title', 'Downloading...');
		//$('body').html('<pre style="margin-left:30px;margin-top:20px;">Downloading "'   + '" ...</pre>');
		//unsafeWindow.location.href = $('.btm > p > a').attr('href');
		$('.btm > p > a').click();

		//setTimeout(function () { window.close(); }, 4000);
		/*var link = $('.btm > p > a');

		if ($('.btm > p > a') != null) {





		}*/
	}
}