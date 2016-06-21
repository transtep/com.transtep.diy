/*
--------------------------------
	顯示软通兑换
--------------------------------
2016 / 03 / 13
-- -- -- -- -- -- -- -- -- -- --
config.xml
--
<preference name="position" value="914,578,166,59" /><!-- ifarme 位置 大小 -->
<preference name="z-index" value="1" /><!-- ifarme 先後順序 -->
<preference name="diy_style" value="./css/style_exchange.css"/><!-- 加載的 css 路徑 -->
<preference name="diy_script" value="./js/diy_exchange.js"/><!-- 加載的 js 路徑 -->
--------------------------------
 */

;(function($, self) {
"use strict";

var ctrl, excg,
Exchange = function() {
};
Exchange.prototype = {
	constructor: Exchange,
	initialize: function() {
		excg.show();
		$('body').html($('<section></section>').on('click', function() {
			ctrl.payment.homepage(1, 0, {});	//依序生成頁面，避免無法預期的錯誤
			ctrl.payment.modulePage('exchange');
		}));
		return this;
	},
	show: function() {
		self.show();
	},
	hide: function() {
		self.hide();
	}
};
excg = self.excg = new Exchange();

/* (必須存在)與主控制器界接的必要函數 */
if('exports' in self) {
	self.exports.interface = function(scope) {
		ctrl = self.ctrl = scope;
		return excg;
	}
}

})(jQuery, window);

