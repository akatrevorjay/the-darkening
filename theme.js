// ==UserScript==
// @name        Apply CSS class name according to window frame status
// @version     1
// @include     *
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    // Sets the class of the HTML element using vanilla JavaScript
    document.documentElement.className += (window.self == window.top ? " top" : " framed");
})();
