/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-folder': '&#xe900;',
		'icon-folder-open': '&#xe901;',
		'icon-folder-plus': '&#xe902;',
		'icon-folder-minus': '&#xe903;',
		'icon-box-add': '&#xe904;',
		'icon-spinner9': '&#xe905;',
		'icon-menu': '&#xe906;',
		'icon-grin': '&#xe907;',
		'icon-crying': '&#xe908;',
		'icon-toright': '&#xe909;',
		'icon-toleft': '&#xe90d;',
		'icon-embed2': '&#xe90a;',
		'icon-twitch': '&#xe90b;',
		'icon-github': '&#xe90c;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
