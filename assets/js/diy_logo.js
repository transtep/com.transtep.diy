var Timeer = function() {
	var	that = this;
	that.elem = document.getElementById('time');
	that.tmp_min;
	that.now = new Date();
}
Timeer.prototype = {	//負責支付相關處理
	zeroize: function(str) {
		return ('0' + str).slice(-2);
	},
	print: function(T) {
		this.elem.innerHTML = T.getFullYear() + ' 年 '
			+ this.zeroize(T.getMonth()+1) + ' 月 '
			+ this.zeroize(T.getDate()) + ' 日　'
			+ this.zeroize(T.getHours()) + '：'
			+ this.zeroize(T.getMinutes());
	},
	init: function() {
		var	that = this,
			run = setInterval(function() {
			that.now.setSeconds(that.now.getSeconds() + 1);
			that.print(that.now);
			if(!that.tmp_min) {
				that.tmp_min = that.now.getMinutes();
			} else if(that.tmp_min != that.now.getMinutes()) {
				clearInterval(run);
				delete that.tmp_min, that.now;
				that.play();
			}
		}, 1000);
	},
	play: function() {
		var	that = this;
		setInterval(function() {
			that.print(new Date());
		}, 60000);
	}
}

$(function() {
	$('body').append('<section><span id="time">0000 年 00 月 00 日　00：00</span></section>');

	var timeer = new Timeer();
	timeer.init();
});
