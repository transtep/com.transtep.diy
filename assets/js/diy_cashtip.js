/*
--------------------------------
	顯示投幣金額
--------------------------------
2016 / 02 / 25
-- -- -- -- -- -- -- -- -- -- --
config.xml
--
<preference name="position" value="0,532,1080,160"/><!-- ifarme 位置 大小 -->
<preference name="opacity" value="0.6" /><!-- ifarme 是否透明 -->
<preference name="display" value="false" /><!-- ifarme 是否顯示 -->
<preference name="z-index" value="4" /><!-- ifarme 先後順序 -->
<preference name="diy_css" value="{'color':'yellow', 'backgroundColor':'#000', 'fontSize':'64px', 'textAlign':'right'}"/>
<preference name="diy_text" value="已投入$ {0} 元，請選擇商品。"/>
<preference name="diy_style" value=""/><!-- 加載的 css 路徑 -->
<preference name="diy_script" value="./js/diy_cashtip.js"/><!-- 加載的 js 路徑 -->
<feature name="vmc" value="feature.transtep.vmc"/>
--------------------------------
 */

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

