// ==UserScript==
// @name     nyaa.si
// @version  1
// @grant    none
// @require  https://code.jquery.com/jquery-3.5.1.min.js
// @include	 *nyaa.si*
// ==/UserScript==

function magnetAll(){
  $("a").each(function() {
    var match = this.href.match("magnet:")
    if(match != null){
      console.log(this.href);
    	this.click();
    }
	})
}

$(".nav.navbar-nav.navbar-right").append("<li><button style=\"margin-top: 9px\" class=\"btn btn-primary\" id=\"magnetall\">Download all</button></li>");
document.getElementById("magnetall").addEventListener('click', magnetAll, false);

