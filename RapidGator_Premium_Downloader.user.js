// ==UserScript==
// @name        RapidGator Premium Downloader
// @version     0.2
// @description Downloads from RapidGator account
// @namespace   https://github.com/ohec/RapidGator-Premium-Downloader
// @downloadURL https://github.com/ohec/RapidGator-Premium-Downloader/raw/master/RapidGator_Premium_Downloader.user.js
// @include     http://rapidgator.net/file/*
// @include     http://www.rapidgator.net/file/*
// @include     */fhn.html
// @include     */s.html
// ==/UserScript==
var $;
(function(){
	var gm_plugin = function() {
		var options = {
			debug: 1,
			openLink: 0, // Open by clicking the link
			openUrl: 1 // Open by setting the window href
		};

		return {
			/**
			 * Init the script.
			 */
			init: function() {
				this.log('gm_plugin.init');
				if (typeof unsafeWindow.jQuery == 'undefined') {
					this.log('gm_plugin.gm_wait.undefined');
					unsafeWindow.setTimeout(this.init, 100);
				} else {
					this.log('gm_plugin.gm_wait.defined');
					$ = unsafeWindow.jQuery.noConflict(true);
					this.run();
				}
			},
			run: function() {
				this.log('gm_plugin.letsJQuery');
				/*var i, x;
				 for (i = 0; x = document.styleSheets[i]; ++i) {
				 x.disabled = true;
				 }*/

				if(document.title == "File not found") {
					this.log('File not found - Closing');
					unsafeWindow.close();
				} else {
					var link = $('.btm > p > a');
					var url = $.trim(link.attr('href'));

					//$('body').html('<pre style="margin-left:30px;margin-top:20px;">Downloading ' + $.trim(link.html()) + '...</pre>');
					if(options.openUrl == 1) {
						unsafeWindow.location.href = url;
					} else if(options.openLink == 1) {
						link.click();
					} else {
						this.log('Opening ' + url);
					}
				}

				//setTimeout(function() { window.close(); }, 10000);
			},

			loadJS: function(src) {
				this.log('gm_plugin.loadJS');
				var GM_JQ = document.createElement('script');
				GM_JQ.type = 'text/javascript';
				GM_JQ.async = true;
				GM_JQ.src = src;

				var GM_Head = document.getElementsByTagName('head')[0] || document.documentElement;
				GM_Head.parentNode.insertBefore(GM_JQ, GM_Head.firstChild);
			},

			log: function(message) {
				if(options.debug > 0) {
					console.log(message);
				}
			}
		};
	}


	var gm = new gm_plugin();
	if (typeof unsafeWindow.jQuery == 'undefined') {
		console.log('Load jQuery');
		//http://code.jquery.com/jquery-1.7.2.js
		gm.loadJS('http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js');
	}
	gm.init();


})();