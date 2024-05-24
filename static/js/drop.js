// https://github.com/cferdinandi/drop
(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], function () {
			return factory(root);
		});
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.Drop = factory(root);
	}
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

	'use strict';

	var closeOthers = function (elem, current, selector) {
		var details = elem.querySelectorAll(selector + '[open]');
		Array.prototype.forEach.call(details, function (detail) {
			if (detail === current) return;
			detail.removeAttribute('open');
		});
	};
	var Constructor = function (group, selector) {

		var publicAPIs = {};
		var elem = typeof group === 'string' ? document.querySelector(group) : group;
		var dropdown = selector || '.dropdown';
		var toggleHandler = function (event) {
			if (!event.target.open) return;
			closeOthers(elem, event.target, dropdown);
		};

		publicAPIs.destroy = function () {
			elem.removeEventListener('toggle', toggleHandler, true);
		};

		var init = function () {
			if (!elem) return;
			elem.addEventListener('toggle', toggleHandler, true);
		};
		init();
		return publicAPIs;

	};
	return Constructor;
});