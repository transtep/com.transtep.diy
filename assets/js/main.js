;(function($, self) {
"use strict";

	var options = self.options = {
		style: '',
		script: ''
		//style: './css/style_logo.css',
		//script: './js/diy_logo.js'
	};
	if('getPreference' in self) {	//把 diy_ 全接收進參數
		try {
			$.each(self.getPreference({}), function(key, val) {
				if(key.indexOf('diy_')==0) {
					try {
						options[ key.substring(4) ] =
							val === 'false' ? !1 :
							val === 'true' ? !0 :
							+val+'' === val ? +val :
							/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/.test(val) ? JSON.parse(val.replace(/\'/g, '"')) :
							val;
					} catch( e ) {}
				}
			});
		} catch( e ) {console.error('ivm-0.0.29 以上才支援 getPreference({}) 用法')}
	}

	/* 按照檔案順序加載js *//* 加載 css */
	var extensions = function(path, html, callback) {
		var defer;
		if($.isArray(path)) {
			extensions(path.shift(), html, function() {	//LIFO, 可處理多層次數組
				if(path.length) {
					extensions(path, html, callback);
				} else {	//全部加載完才執行 callback
					callback && callback();
				}
			});
			return false;
		} else if(typeof path == 'string' && path.length) {
			if(html) {
				$('head').append(html.replace('$0', path));
			} else {	//js 有 defer，當前加載完才能加載下一個
				defer = $.Deferred();
				$.getScript(path).always(function() { defer.resolve() }).fail(function() { console.error('error: '+path) });
			}
		}
		callback && $.when(defer).then(callback);
	}

	extensions(options.script, false, function() {	//js 採用延遲方法
		$(function() {	//所有js文件載入完成後才准許執行 plugin 主要功能
			self.hook('init');
		});
	})
	extensions(options.style, '<link rel="stylesheet" href="$0">');

	self.hook = function(name) {
		var args = Array.prototype.slice.call(arguments);
		name = 'hook_' + name;
		return typeof self[name] == 'function' && self[name].apply(self, args.splice(1));
	}
})(jQuery, window);

/* 防止被拖曳 */
document.ondragstart = function() {
	return false;
};
/* 防止被反白 */
document.onselectstart = function() {
	return false;
};
