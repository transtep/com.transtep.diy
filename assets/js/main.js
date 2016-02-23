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

	//加載js / css
	var extensions = function(path, html) {
		if($.isArray(path)) {
			var arr = [],
					i = 0;
			for(; i < path.length;) {
				arr.push((extensions(path[i++], html))[0]);
			}
			return arr;
		} else if(typeof path == 'string' && path.length) {
			if(!!html) {
				$('head').append(html.replace('$0', path));
			} else {
				var	d = $.Deferred();
				$.getScript(path).always(function() { d.resolve() }).fail(function() { console.error('error: '+path) });
				return [d];
			}
		}
	}

	$.when.apply($, extensions(options.script))	//js 採用延遲方法
	.then(function() {	//所有js文件載入完成後觸發 self.hook_init
		$(function() {
			self.hook('init');
		});
	});
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
