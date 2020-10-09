// ==UserScript==
// @name        nyaa.si download all button
// @description Adds a "Download all" button next to the top right nav bar
// @version     1
// @grant       none
// @license     MIT
// @require     https://code.jquery.com/jquery-3.5.1.min.js
// @include     *nyaa.si/*
// @exclude     *nyaa.si/rules
// @exclude     *nyaa.si/help
// @exclude     *nyaa.si/upload
// ==/UserScript==

function magnetAll(){
  $(".torrent-list a").each(function() {
    if(this.href.match("magnet:") != null){
    	this.click();
    }
	})
}

if(document.getElementById("magnet-all") == null){
	$(".nav.navbar-nav.navbar-right").append("<li><button style=\"margin-top: 9px\" class=\"btn btn-primary\" id=\"magnet-all\">Download all</button></li>");
	document.getElementById("magnet-all").addEventListener('click', magnetAll, false);
}

