;(function($, self) {
"use strict";

String.prototype.format = function() {
	var  i = 0,
		content = this;
	for (; i < arguments.length; i++) {
		content = content.replace('{' + i + '}', arguments[i]);
	}
	return content;
};

$('<div/>', {
	'id': 'digtalcoin'
}).css($.extend(true, {
	"position": "relative",
	"left": 0,
	"top": 0,
	"color": "red",
	"text-shadow": "black -1px 0px, black 0px 1px, black 1px 0px, black 0px -1px",
	"font-size": "128px"
}, typeof self.options.css == 'object' ? self.options.css : {}))
.appendTo('body');

var digtalcoin = $('#digtalcoin'),
	text = self.options.text || '已投入$ {0} 元，請選擇商品。';
digtalcoin.html(text.format(1));

if(self.vmc) {
	self.vmc.on("onMoneyCatch", function(cash) {
		digtalcoin.html(text.format(parseFloat(cash)));
		if(cash) {
			self.show();
		} else {
			self.hide();
		}
	});
}

})(jQuery, window);

