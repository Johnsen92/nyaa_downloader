// ==UserScript==
// @name        nyaa.si Download Button
// @description Adds a "Download" button which downloads all selected torrents
// @homepage    https://github.com/Johnsen92/nyaa_downloader
// @updateURL   https://openuserjs.org/meta/Johnsen92/nyaa.si_download_all_button.meta.js
// @downloadURL https://openuserjs.org/install/Johnsen92/nyaa.si_download_all_button.user.js
// @version     1.1.0
// @grant       none
// @license     MIT
// @require     https://code.jquery.com/jquery-3.5.1.min.js
// @include     *nyaa.si/*
// @exclude     *nyaa.si/rules
// @exclude     *nyaa.si/help
// @exclude     *nyaa.si/upload
// ==/UserScript==

// Emulate click on selected magnet links in the search results
function magnetAll(){
	$("table.torrent-list tbody tr").each(function(){
		if($(".ckbox",this).is(":checked")){
			$("a",this).each(function (){
		  		if(this.href.match("magnet:") != null){
					this.click();
		  		}
			});
	  	}
	});
}
  
// Add checkboxes to every row of the search results
$("table.torrent-list thead tr").prepend("<th class=\"hdr-select\" style=\"width: 10px\"></td>");
$("table.torrent-list tbody tr").each(function(){
	$(this).prepend("<td class=\"row-select\" style=\"width: 10px\"><input checked class=\"ckbox\" type=\"checkbox\"></td>");
});

// Widen search input field	
$(".form-control.search-bar").css("width","455px");

// Add 'Download all/selected' button to page
if(document.getElementById("magnet-all") == null){
	$(".nav.navbar-nav.navbar-right").append("<li><button style=\"margin-top: 9px\" class=\"btn btn-primary\" id=\"magnet-all\">Download</button></li>");
	document.getElementById("magnet-all").addEventListener('click', magnetAll, false);
}