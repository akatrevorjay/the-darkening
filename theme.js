// ==UserScript==
// @name        The Darkening
// @description Stylish theme to darken all sites that doesn't suck. All syntax highlighting is kept while being dead simple.
// @url         https://github.com/akatrevorjay/the-darkening
// @version     1
// @include     *
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    // Apply CSS class name according to window frame status
    document.documentElement.className += (window.self == window.top ? " top" : " framed");
})();
