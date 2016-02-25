;(function($, self) {
"use strict";

var	pre = self.options.pre : '',
	suf = self.options.suf : '';

$("<div/>", {
	"id": "digtalcoin"
}).css($.extend(true, {
	"position": "relative",
	"left": 0,
	"top": 0,
	"color": "red",
	"text-shadow": "black -1px 0px, black 0px 1px, black 1px 0px, black 0px -1px",
	"font-size": "128px"
}, typeof self.options.css == 'object' ? self.options.css : {}))
.html(pre+"400"+suf)
.appendTo("body");

var digtalcoin = $("#digtalcoin");

if(self.vmc) {
	self.vmc.on("onMoneyCatch", function(cash) {
		digtalcoin.html(pre+parseFloat(cash)+suf);
		if(cash) {
			self.show();
		} else {
			self.hide();
		}
	});
}

})(jQuery, window);
