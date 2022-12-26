// ==UserScript==
// @name		Extended Steamgifts
// @description	New features for Steamgifts.com
// @author		Nandee
// @namespace	esg
// @include	    *steamgifts.com*
// @version		2.4.6
// @downloadURL	https://github.com/nandee95/Extended_Steamgifts/raw/master/Extended_Steamgifts.user.js
// @updateURL	https://github.com/nandee95/Extended_Steamgifts/raw/master/Extended_Steamgifts.user.js
// @supportURL  http://steamcommunity.com/groups/extendedsg/discussions/0/
// @icon		https://raw.githubusercontent.com/nandee95/Extended_Steamgifts/master/img/logo.png
// @homepage	https://github.com/nandee95/Extended_Steamgifts
// @grant	   none
// @license	 MIT
// ==/UserScript==
/*
Changelog:
1.5.2[BETA] (2015. 03. 24.)
- First release
1.5.3[BETA] (2015. 03. 25.)
- Changed 'Miss' to 'Remove'
- Fixed enter button on profile page
- Blue line fixed behind the header
- Giveaway filter fix
- Dropdown menu fix
- Fixed Options (Scroll to top)
- Added description button
- Fixed problems with home page
- Changed some icons
1.5.4[BETA] (2015. 03. 28.)
- Fixed problems with description button
- Fixed wishlist hightlight
- Added support for SGv2 Dark Theme
- Added hide entered giveaway feaure (default disabled)
- Redesigned Recommended sales (sidebar)
- Redesigned Active discussions (sidebar)
- Small bugfixes
- Redesigned wishlist highlight
1.5.5 (2015. 07. 16.)
- Fixed font problem
- Fixed sidebar
- Fixed endless scrolling
- Fixed Wishlist - Featured giveaway problem
- Fixed chance problem with more than 1k copies giveaways
- Removed point refresh feature
- Removed recommended sales feature
- Changed icon
2.0 (2015. 11. 15.)
- Giveaway filter
- Optimized code(removed unneded parts)
- Community Voted sidebar
- Rewrited Infinite scrolling 
- Added infinite scrolling everywhere
- Added [NEW] giveaway mark
- Removed Giveaway Highlighting feature(becouse of bad performance & new filter feature)
- Giveaway filtering
- Re-enabled bug reporting button
- Added Steamgifts dicussion's url & GitHub url to the menu
- Re-added refreshing points (every 60 seconds, optional, turned off by default)
2.0.1 (2015. 11. 17.)
- Fixed point updater in options
- Colored menu icons
- Fixed auto scrolling in table based pages
- Added auto scrolling to comment based pages
2.0.2 (2015. 11. 19.)
- fixed multiple pages problem
- fixed comment reply
- [FREE] giveaway mark
2.0.3 (2016. 01. 11.)
- Hide giveaway fix (no page refreshing)
2.1 (2016. 04. 17.)
- Fixed JSHint errors & warnings
- Updated auto scrolling
- Fixed ga description
- Fixed auto scrolling on entered ga page
- Updated query protocol to https
- Added floating pagination
- Fixed auto scroll loading animation
- Added MIT license
- Added readme file
- Updated About page
2.1.1 (2016. 04. 17.)
- Updated Sgv2 Dark Support
- Fixed comment writing & replying
- Fixed broken enter giveaway button
- Fixed display chances in Options
- Fixed [FREE] tag on Invite Only giveaways
- Added giveaway train option to the discussions menu
2.1.2 (2016. 04. 17.)
- Small bugfixes
- Added option to hide Active Discussions from the sidebar
2.1.3 (2016. 04. 19.)
- Fixed giveaway hiding
- Fixed Filter button disappearing
- Fixed Fiter problems with autoscroll disabled
- Modified chance calculation (just a litte bit)
- Added chances to the entered giveaway page
- Auto scroll update: utomatically fill the window with pages no need to scroll
- Added 2 new menuitems to the Discussions menu: Quizzes
- Added 2 new menuitems to the Giveaways menu: Create Quiz
- Small ESG menu modification
2.1.4 (2016. 04. 20.)
- Fixed giveaway hiding
- Small ESG menu modification
- Added Search button (giveaway list)
- Added ESG logo to the begining of the title bar (+version info)
2.1.5 (2016. 04. 21.)
- Filter Local Storage Self-Fix
- Added Giveaway Signature Generator
- Added Search urls to the Community Wishlist Titles
- Fixed broken links in ESG menu
2.1.6 (2016. 04. 24.)
- Added lever bar (included Dark Theme support)
- Added giveaway signature generator to options
- Fixed giveaway signature generator
- Fixed chances on entered page
- Fixed giveaway search url
- Fixed hide entered giveaways (/giveaways/won page)
2.2 (2016. 05. 07.)
- Sightly brighter level bar
- Added auto display images option (disabled by default)
- Added Enter all button on Wishlist page
- Added animation to the Filter menu
- Added container for giveaway signature generator (SGv2 Dark support)
- Added giveaway marks to options
- Added non-linear slider for chance filter
- Fixed click event on Entered page (Remove button)
- Fixed broken titles in the discussions sidebar
- Removed Trains from Discussions menu
- Removed Quizzes from Discussions menu
- Removed Enter button from invite only giveaways on profile page
- Remade About page
- Code cleanup
2.2.1 (2016. 05. 07.)
- Fixed copies filter
2.2.2 (2016. 05. 13.)
- Fixed giveaway search button
2.2.3 (2016. 05. 18.)
- Auto scroll rules applied if the viewed page has no pagination
- Active discussions in sidebar appears in every giveaway page
- Advanced Search
- Removed border from filter menu
- Fixed wrong dates in the changelog
2.2.4 (2016. 05. 18.)
- Removed uncompleted features
2.2.5 (2016. 05. 19.)
- Fixed broken chances on entered page
- Fixed problem with header errors
2.2.6 (2016. 05. 20.)
- Syntax fixes
- Removed Enter all button (because it's against the ToS, still available here: )
2.3 (2016. 05. 28.)
- Added advanced comment editing
- Added featured giveaway hiding option(disabled by default)
- Added embedded youtube and vimeo videos
- Added embedded gleam.io giveaways
- Added re collapsable pinned giveaways
- Added odds to chances
- Added Bundle Games to Trades menu
- Removed entered giveaway hiding from featured giveaways and user profiles
- Redesigned chances
- Redesgined level bar
- Redesigned floating pagination
- Fixed comment cancel button
- Fixed auto scroll headers
- Fixed auto scroll on Bundle Games page
- Fixed auto scroll on messages page
- Code cleanup (multiple spaces replaced with tabs, multiline strings)
2.3.1 (2016. 05. 29.)
- Fixed vimeo embedded videos
- Fixed advanced comment editor
- Added headings and horizontal reference to the comment editor
- Added comment formatting for giveaway descriptions
- Added comment editor to the new discussion and new trade pages
- Modified About page
2.3.2 (2016. 05. 29.)
- Quick fix
2.3.3 (2016. 05. 29.)
- Added chances on giveaway's page to opitions
- Added an alert when you try to remove an entry and lose points
- The urls with embedded videos not hidden anymore.
2.3.4 (2016. 12. 03.)
- Re-collapsable pinned giveaway feature has been rewritten and now works under Firefox
- Added "Write a comment" button to the floating pagination
- Removed the search button from the giveaway explorer
- Added parsedown code to the giveaway signatures
- Fixed some issues with text highlighting in the comment formatter
- Added emoticons to comment formatter
2.3.6 (2016. 12. 03.)
- Quick fix
2.3.7 (2016. 12. 04.)
- Fixed level bar with SgV2 dark theme
- Added new design to the emoticons
2.3.8 (2017. 01. 19.)
- Fixed level bar
2.3.9 (2017. 06. 29.)
- Changed classes (sg update)
2.3.10 (2017. 07. 11.)
- Fixed re-collapsable pinned giveaways after class update
2.3.11 (2017. 07. 23.)
- Fixed broken elements in sidebar (sg update)
2.3.12 (2017. 07. 30.)
- Bundled games moved to the Help menu
- Fixed z-index for the floating pagination
2.3.13 (2017. 10. 17.)
- Updated some values after sg's point system update
2.4 (2017. 10. 28.)
- Popup box to set precise copies for the filter (just click on the numbers to reach it)
- Added steam store widgets
- Removed notification about loosing points by removing entry.
- Added hidded giveaway notification on giveaway page
2.4.1 (2017. 11. 01.)
- Comment features disabled inside of tables
- Comment features performance improved
2.4.2 (2017. 11. 06.)
- Added steam activator link to the won giveaways list
2.4.3 (2018. 02. 22.)
- Removed Pledgie links
2.4.4 (2018. 05. 29.)
- Merged pull request from alpe12: Don't show enter button if level too high for you #28
2.4.5 (2019. 08. 01.)
- Removed some commented code
- Added deals to the sidebar
- Handled timeout for the enter/remove button
- Fixed some code errors
2.4.6 (2022. 12. 26)
- Fixed sidebar
 */

/* jshint multistr: true */

this.GM_getValue = function(key, def) {
	return localStorage[key] || def;
};
this.GM_setValue = function(key, value) {
	localStorage[key] = value;
};
var path = window.location.pathname;

//Styles
$("body").prepend("	\
<style>	\
.sidebar__entry-custom	\
{	\
	display: inline-block;	\
	margin: 0 -10px 0 -10px !important;	\
	padding: 0 8px 0 8px !important;	\
	min-width: 50px;	\
	font-family: 'Arial',sans-serif;	\
	font-size: 11px;	\
	line-height: 26px;	\
}	\
.sidebar__navigation__itemz:hover .sidebar__navigation__item__underline	\
{	\
	border-bottom:2px solid transparent !important;	\
}	\
.sidebar__navigation__item__title	\
{	\
	font-weight:bold;	\
	font-size: 15px;	\
}	\
.sidebar__navigation__itemz	\
{	\
	font-size: 13px;	\
}	\
.filter_table	\
{	\
	width:100%;	\
}	\
.filter_table td	\
{	\
	padding:0;	\
	vertical-align: middle;	\
}	\
.scroll-top 	\
{	\
	cursor: pointer;	\
	position: fixed;	\
	bottom: 10px;	\
	right: 40px;	\
	transform: rotate(-90deg);	\
	opacity: 0.75;	\
	z-index: 50;	\
	padding: 10px !important;	\
	display: block;	\
}	\
.page-loading 	\
{	\
	width: 160px;	\
	height:24px;	\
	margin: 5px auto 5px auto;	\
	display:block;	\
}	\
.floating-pagination 	\
{ 	\
	position:fixed;	\
	bottom:45px;	\
	width:" + $(".sidebar").width() + "px;	\
	text-align:center;	\
  z-index:99999; \
}	\
.filter-content	\
{	\
	margin-top:10px;	\
	padding:5px;	\
}	\
.filter_table td	\
{	\
	padding: 2px;	\
} 	\
.advsearch_number	\
{	\
	width:100px;	\
}	\
.e-embed-frame,.e-widget-preloader	\
{	\
	margin:5px 0 5px 0 !important;	\
	.global__image-outer-wrap;	\
}	\
.comment__tools	\
{	\
	margin-bottom:3px;	\
}	\
.comment__tools div	\
{	\
	display:inline;	\
	padding:5px 5px 7px 5px;	\
	margin:0;	\
}	\
.comment__tools *	\
{	\
	-webkit-user-select: none;	\
	-moz-user-select: none;	\
}	\
.no-user-select	\
{	\
	-webkit-user-select: none;	\
	-moz-user-select: none;	\
}	\
.serperator	\
{	\
	margin-left: 10px !important;	\
}	\
.advanced_search	\
{	\
	padding:5px 20px 5px 20px;	\
}	\
.filter__slider	\
{	\
    width:80%;	\
}	\
.search__slider	\
{	\
	margin:2px 0 2px 0;	\
	width:100%;	\
}	\
.sidebar__navigation__itemz,.sidebar__navigation__item__link,.sidebar__navigation__item__underline \
{ \
  max-width:9999px !important; \
} \
</style>");

//Read some values
var xsrf = $('input[type=hidden][name=xsrf_token]').val();
var loggedin = ($('.nav__sits').length > 0) ? false : true;
var lastpage = ($(".pagination__navigation:contains('Next')").length === 0);
var currentpage = Number($('.pagination__navigation').find('.is-selected').attr('data-page-number')?$('.pagination__navigation').find('.is-selected').attr('data-page-number'):1);
var hash = $(location).attr('hash');
var ver = GM_info.script.version;
var username = $(".nav__avatar-outer-wrap").attr("href").replace("/user/", "");
var pagename = $('.page__heading__breadcrumbs:first').html();
var pagination_url = "https://" + window.location.hostname + $(".pagination__navigation").find("a:last").attr("href");
var regex_pagination_results = /Displaying <strong>([0-9]{1,10})<\/strong> to <strong>([0-9]{1,10})<\/strong>/;

var rx = (regex_pagination_results).exec($(".pagination__results").html());
var pagination_min = 0,
	pagination_max = 0;
if (rx) {
	pagination_min = rx[1];
	pagination_max = rx[2];
}

//Funcs
function getPos(str, m, i) {
	return str.split(m, i).join(m).length;
}

function updateURLParameter(url, param, paramVal) {
	var newAdditionalURL = "";
	var tempArray = url.split("?");
	var baseURL = tempArray[0];
	var additionalURL = tempArray[1];
	var temp = "";
	if (additionalURL) {
		tempArray = additionalURL.split("&");
		for (var i = 0; i < tempArray.length; i++) {
			if (tempArray[i].split('=')[0] != param) {
				newAdditionalURL += temp + tempArray[i];
				temp = "&";
			}
		}
	}

	var rows_txt = temp + "" + param + "=" + paramVal;
	return baseURL + "?" + newAdditionalURL + rows_txt;
}

function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
}

//Custom menu elements
$(".nav__button:contains('Giveaways')").closest(".nav__button-container").find(".nav__absolute-dropdown").append('	\
<a class="nav__row" href="http://www.itstoohard.com/create" target="_blank"><i class="icon-green fa fa-fw fa-question"></i>	\
<div class="nav__row__summary"><p class="nav__row__summary__name">Create quiz</p><p class="nav__row__summary__description">It\'s too hard</p></div></a>	\
');
$(".nav__button:contains('Help')").closest(".nav__button-container").find(".nav__absolute-dropdown").append('	\
<a class="nav__row" href="/bundle-games"><i class="icon-red fa fa-fw fa-delicious"></i>	\
<div class="nav__row__summary"><p class="nav__row__summary__name">Bundle games</p><p class="nav__row__summary__description">Full list of bundle games.</p></div></a>	\
');

//Level bar
var account=$(".nav__button:contains('Account')");
var account_lv=Number($(account).find("span:nth-child(2)").attr("title"));
$(account).css("box-shadow","inset "+$(account).outerWidth()*(account_lv-Math.floor(account_lv))+"px 0 5px rgba(0,255,50,0.15)");

//ESG icon
$("header .nav__left-container").prepend('<img src="https://raw.githubusercontent.com/nandee95/Extended_Steamgifts/master/img/logo_trans.png" height="32px" width="32px" title="Extended Steamgifts '+ver+'&#013;By: Nandee">');

//Giveaway Signature Generator
if (path.match('^/giveaway/')&&Number(GM_getValue("esg_gsg", 1))) {
	var gacode=/\/(?:.*?)\/(.*?)\/(?:.*)/.exec(path)[1];
	$(".sidebar:first").append('<h3 class="sidebar__heading">Signature</h3><div class="sidebar__navigation"><div style="text-align:center"><img src="https://steamgifts.com/giveaway/'+gacode+'/signature.png" width="280px" height="53px"><br>HTML code (Websites & Blogs):<input width="280px" onclick="this.select();" value=\'<a href="https://steamgifts.com/giveaway/'+gacode+'/"><img src="https://steamgifts.com/giveaway/'+gacode+'/signature.png"></a>\'><br>BB code (Forums):<br><input width="280px" onclick="this.select();" value=\'[url=https://steamgifts.com/giveaway/'+gacode+'/][img]https://steamgifts.com/giveaway/'+gacode+'/signature.png[/img][/url]\'>Parsedown code (SteamGifts):<br><input width="280px" onclick="this.select();" value=\'![https://steamgifts.com/giveaway/'+gacode+'/](https://steamgifts.com/giveaway/'+gacode+'/signature.png)\'><br>Direct link:<br><input width="280px" onclick="this.select();" value=\'https://steamgifts.com/giveaway/'+gacode+'/signature.png\'></div></div>');
}

//Options
if (path.match('^/account/')) {
	var options_selected = false,
		about_selected = false;
	$(".sidebar__navigation:last").after("	\
		<h3 class=\"sidebar__heading\">Extended Steamgifts</h3>	\
		<ul class=\"sidebar__navigation\">	\
		<li class=\"sidebar__navigation__item esg__options\">	\
		<a class=\"sidebar__navigation__item__link\" href=\"/account/profile/sync#esg_options\">	\
		<div class=\"sidebar__navigation__item__name\">Options</div>	\
		<div class=\"sidebar__navigation__item__underline\"></div>	\
		</a>	\
		</li>	\
		<li class=\"sidebar__navigation__item esg__about\">	\
		<a class=\"sidebar__navigation__item__link\" href=\"/account/profile/sync#esg_about\">	\
		<div class=\"sidebar__navigation__item__name\">About</div>	\
		<div class=\"sidebar__navigation__item__underline\"></div>	\
		</a>	\
		</li>	\
		</ul>");
	$(".esg__options").click(display_options);
	$(".esg__about").click(display_about);
	if (hash == "#esg_options")
		display_options();
	if (hash == "#esg_about")
		display_about();
}

window.onhashchange = function() {
	hash = $(location).attr('hash');
	if (hash == "#esg_options")
		display_options();
	if (hash == "#esg_about")
		display_about();
};

function display_options() {
	document.title = "Account - Extended Steamgifts - Options";
	var page = $(".widget-container").children("div:last");
	page.empty();
	$(".sidebar__navigation__item").removeClass("is-selected");
	$(".fa-caret-right:first").remove();
	$(".esg__options").find(".sidebar__navigation__item__link").prepend("<i class=\"fa fa-caret-right\"></i>");
	$(".esg__options").addClass("is-selected");
	var content = "";
	var count = 0;

	function addToOptions(name, save, def) {
		count++;
		var val = Number(GM_getValue(save, def));
		content += "		\
		<div class=\"form__row\" value=\"" + val + "\" key=" + save + ">	\
		<div class=\"form__heading\"><div class=\"form__heading__number\">" + count + ".</div><div class=\"form__heading__text\">" + name + "</div></div><div class=\"form__row__indent\">	\
		<div class=\"form__checkbox cb__yes" + (val ? " is-selected" : "") + "\">	\
		<i class=\"form__checkbox__default fa fa-circle-o\"></i><i class=\"form__checkbox__hover fa fa-circle\"></i><i class=\"form__checkbox__selected fa fa-check-circle\"></i> Enabled	\
		</div>	\
		<div class=\"form__checkbox cb__no" + (val ? "" : " is-selected") + "\">	\
		<i class=\"form__checkbox__default fa fa-circle-o\"></i><i class=\"form__checkbox__hover fa fa-circle\"></i><i class=\"form__checkbox__selected fa fa-check-circle\"></i> Disabled	\
		</div>	\
		</div>	\
		</div>	\
		";
	}
	addToOptions("Enter/Remove button", "esg_enterremove", 1);
	addToOptions("Endless scrolling", "esg_autoscroll", 1);
	addToOptions("Display chances", "esg_chances", 1);
	addToOptions("Fixed header", "esg_fixedheader", 1);
	addToOptions("Refresh points (60sec)", "esg_refresh", 0);
	addToOptions("Scroll to top button", "esg_scrolltop", 1);
	addToOptions("Hide entered giveaways", "esg_hideentered", 0);
	addToOptions("Active discussions in sidebar", "esg_discussions", 1);
	addToOptions("Giveaway Signature Generator", "esg_gsg", 1);
	addToOptions("Giveaway marks", "esg_gamark", 1);
	addToOptions("Hide featured giveaway", "esg_hidefeatured", 0);
    addToOptions("Comment editor", "esg_commenteditor", 1);
    addToOptions("Comment features (embedded youtube & vimeo videos, gleam.io giveaways, auto load images)", "esg_comment", 1);
	page.html("				\
		<div class=\"page__heading\">	\
		<div class=\"page__heading__breadcrumbs\">	\
		<a>Extended Steamgifts</a>	\
		<i class=\"fa fa-angle-right\">	\
		</i><a href=\"/account/profile/sync#esg_options\">Options</a>	\
		</div></div>	\
		<form>						\																	\
		<div class=\"form__rows\">" + content + "																\
		<div value=\"\" class=\"form__submit-button\"><i class=\"fa fa-arrow-circle-right\"></i> Save Changes</div>	\
		</div>																								\
		</div>");
	$(".cb__yes").click(function() {
		$(this).addClass("is-selected").removeClass("is-disabled");
		$(this).parent().find(".cb__no").removeClass("is-selected").addClass("is-disabled");
		$(this).closest(".form__row").attr("value", "1");
	});
	$(".cb__no").click(function() {
		$(this).addClass("is-selected").removeClass("is-disabled");
		$(this).parent().find(".cb__yes").removeClass("is-selected").addClass("is-disabled");
		$(this).closest(".form__row").attr("value", "0");
	});
	$(".form__submit-button").click(function() {
		$(".form__row").each(function() {
			var val = $(this).attr("value");
			var key = $(this).attr("key");
			GM_setValue($(this).attr("key"), $(this).attr("value"));
		});
		alert("Settings are saved successfully!");
	});
}

function display_about() {
	document.title = "Account - Extended Steamgifts - About";
	var page = $(".widget-container").children("div:last");
	page.empty();
	$(".sidebar__navigation__item").removeClass("is-selected");
	$(".fa-caret-right:first").remove();
	$(".esg__about").find(".sidebar__navigation__item__link").prepend("<i class=\"fa fa-caret-right\"></i>");
	$(".esg__about").addClass("is-selected");

	page.html("	\
		<div class=\"page__heading\">	\
		<div class=\"page__heading__breadcrumbs\">	\
		<a href=\"https://www.steamgifts.com/discussion/qbPEr/\">Extended Steamgifts</a>	\
		<i class=\"fa fa-angle-right\">	\
		</i><a href=\"/account/profile/sync#esg_about\">About</a>	\
		</div></div>	\
		<div class=\"form__rows\"><div class=\"form__row\">	\
		<div class=\"form__heading\"><div class=\"form__heading__number\">1.</div><div class=\"form__heading__text\">Extended Steamgifts " + ver + "</div></div>	\
		<div class=\"form__row__indent markdown\">Author: Nandee<br>Copyright: &copy; 2014-2016<br>Licensed under the <a href=\"https://github.com/nandee95/Extended_Steamgifts/blob/master/LICENSE.md\" target=\_blank\">MIT license</a><br><br>Steam group:<a href=\"http://steamcommunity.com/groups/extendedsg\">steamcommunity.com/groups/extendedsg</a>	\
		<br>GitHub: <a href=\"https://github.com/nandee95/Extended_Steamgifts\">github.com/nandee95/Extended_Steamgifts</a></div></div>\
		<div class=\"form__row\">	\
		<div class=\"form__heading\"><div class=\"form__heading__number\">2.</div><div class=\"form__heading__text\">About me:</div></div>	\
		<div class=\"form__row__indent\">I'm usually working on this addon in my freetime.<br>It take me a lot of time to keep it working.<br>If you like this addon please think about a donation!<br>Enjoy! :D</div></div>\
		<div class=\"form__row\">	\
		<div class=\"form__heading\"><div class=\"form__heading__number\">3.</div><div class=\"form__heading__text\">Donation:</div></div>	\
		<div class=\"form__row__indent\">	\
		Thank you all for your donations! I really appreciate them! <br>\
		Steam donate (tradeoffer):<br>	\
		<a href='https://steamcommunity.com/tradeoffer/new/?partner=95793561&amp;token=HxnczDWg'><img src='https://raw.githubusercontent.com/nandee95/Extended_Steamgifts/master/img/steam_donate.png' style='max-width:100%;'></a><br>	\
		Whitelist: \
		<a href=\"https://www.steamgifts.com/user/Nandee\" target=\"_blank\"><div class=\"giveaway__columns\"><div style=\"width:130px !important\" class=\"giveaway__column--whitelist\" title=\"Whitelist\"><i class=\"fa fa-fw fa-heart\"></i> Whitelist</div></div></div>	\
		<div class=\"form__row\">	\
		<div class=\"form__heading\"><div class=\"form__heading__number\">4.</div><div class=\"form__heading__text\">Contact:</div></div>	\
		<div class=\"form__row__indent markdown\"><a href=\"http://steamcommunity.com/id/nandee95\" target=\"_blank\">Steam profile</a><br><a href=\"https://www.steamgifts.com/user/Nandee\" target=\"_blank\">SteamGifts profile</a></div></div>\
		</div>	\
		");
}

//Steam activator link
$(".icon_to_clipboard").each(function () {
    if($(this).attr("data-clipboard-text").indexOf("http")!=-1) return; //Skip links
    $(this).before('<a href="https://store.steampowered.com/account/registerkey?key='+$(this).attr("data-clipboard-text")+'" title="Activate key on steam"><i class="fa fa-fw fa-steam-square"></i></a>');
});

//Active Discussions
if($(".block_header_text:contains('Discussions')").length>0 && Number(GM_getValue("esg_autoscroll", 1))) {
	if ($(".block_header_text:contains('Discussions')").length && Number(GM_getValue("esg_discussions", 1))) {
        var c1 = "";
		$(".block_header_text:contains('Discussions')").parent().parent().find(".table").find(".table__rows").find(".table__row-outer-wrap").each(function() {
				var img = $(this).find(".table_image_avatar").css('background-image');

				img = img.replace('url(', '').replace(')', '').replace('"', '').replace('"', '');
				var otitle = $(this).find(".homepage_table_column_heading").text();
				var url = $(this).find(".homepage_table_column_heading").attr("href");
				var comments = $(this).find(".table__column__secondary-link").eq(0).text();
			  var owner = $(this).find(".table__column__secondary-link").eq(1).text();
				var elapsed = $(this).find(".table__column__secondary-link").eq(0).closest("p").find("span").text();
				var title = otitle;
			  

				c1 += '<li class="sidebar__navigation__itemz">	\
			<a class="sidebar__navigation__item__link" href="' + url + '" title="' + otitle.replace(/\"/g,"'") + '" >	\
			<i class="global__image-outer-wrap global__image-outer-wrap--avatar-small">	\
			<div class="global__image-inner-wrap" style="background-image:url(' + img + ');"></div></i>	\
			</div>	\
			<div class="sidebar__navigation__item__underline">	\
<div class="sidebar__navigation__item__title" style="max-width:270px;white-space: nowrap;overflow:hidden">' + title + '</div>	\
			<i class="fa fa-comment" style="color:white;text-shadow:0px 1px #AAB5C6, 0px -1px #AAB5C6, 1px 0px #AAB5C6, -1px 0px #AAB5C6"></i> ' + comments + '<br>\
			<span style="float:right" class="sidebar__navigation__item__name"></span>	\
      Last post: ' + elapsed + ' ago by <span class="sidebar__navigation__item__name">' + owner + '</span> 	\
			</div>	\
			</a>	\
			</li>';
			});
		$(".sidebar__navigation:last").after('					\
			<h3 class="sidebar__heading">Discussions</h3>	\
			<ul class="sidebar__navigation">	\
			' + c1 + '\
			<li class="sidebar__navigation__item">		\
			<a class="sidebar__navigation__item__link" href="/discussions">		\
			<div class="sidebar__navigation__item__name">More discussions</div>		\
			<div class="sidebar__navigation__item__underline"></div>		\
			</a>	\
			</li>		\
			</ul>	\
			');
	}

    if ($(".block_header_text:contains('Deals')").length && Number(GM_getValue("esg_discussions", 1))) {
		var c3 = "";
		$(".block_header_text:contains('Deals')").parent().parent().find(".table").find(".table__rows").find(".table__row-outer-wrap").each(function() {
				var img = $(this).find(".table_image_avatar").css('background-image');

				img = img.replace('url(', '').replace(')', '').replace('"', '').replace('"', '');
				var otitle = $(this).find(".homepage_table_column_heading").text();
				var url = $(this).find(".homepage_table_column_heading").attr("href");
				var comments = $(this).find(".table__column__secondary-link").eq(0).text();
			  var owner = $(this).find(".table__column__secondary-link").eq(1).text();
				var elapsed = $(this).find(".table__column__secondary-link").eq(0).closest("p").find("span").text();
				var title = otitle;

				c3 += '<li class="sidebar__navigation__itemz">	\
			<a class="sidebar__navigation__item__link" href="' + url + '" title="' + otitle.replace(/\"/g,"'") + '" >	\
			<i class="global__image-outer-wrap global__image-outer-wrap--avatar-small">	\
			<div class="global__image-inner-wrap" style="background-image:url(' + img + ');"></div></i>	\
			</div>	\
			<div class="sidebar__navigation__item__underline">	\
<div class="sidebar__navigation__item__title" style="max-width:270px;white-space: nowrap;overflow:hidden">' + title + '</div>	\
			<i class="fa fa-comment" style="color:white;text-shadow:0px 1px #AAB5C6, 0px -1px #AAB5C6, 1px 0px #AAB5C6, -1px 0px #AAB5C6"></i> ' + comments + '<br>\
			<span style="float:right" class="sidebar__navigation__item__name"></span>	\
      Last post: ' + elapsed + ' ago by <span class="sidebar__navigation__item__name">' + owner + '</span> 	\
			</div>	\
			</a>	\
			</li>';
			});
		$(".sidebar__navigation:last").after('					\
			<h3 class="sidebar__heading">Deals</h3>	\
			<ul class="sidebar__navigation">	\
			' + c3 + '\
			<li class="sidebar__navigation__item">		\
			<a class="sidebar__navigation__item__link" href="/discussions/deals">		\
			<div class="sidebar__navigation__item__name">More deals</div>		\
			<div class="sidebar__navigation__item__underline"></div>		\
			</a>	\
			</li>		\
			</ul>	\
			');
	}

	if ($(".block_header_text:contains('Community Poll')").length) {
		var c2 = "";
		var total_votes = 0;
		$(".block_header_text:contains('Community Poll')").parent().parent().find(".poll")
			.find(".table__rows").find(".table__row-outer-wrap").each(function() {
				total_votes += Number($(this).attr("data-votes"));
			});

		$(".block_header_text:contains('Community Poll')").parent().parent().find(".poll")
			.find(".table__rows").find(".table__row-outer-wrap").each(function() {
				var img = $(this).find(".global__image-inner-wrap").css('background-image');
			  if(img)
				img = img.replace('url(', '').replace(')', '').replace('"', '').replace('"', '');
				var title = $(this).find(".table__column__heading").text();
				var votes = Number($(this).attr("data-votes"));
				var id = $(this).attr("data-id");
				var url = $(this).find('a').attr('href');
				var form = $(this).find("form");
				$(form).find('.poll__vote-button').css("padding", 0).addClass('poll__vote-button-sidebar');
				form = $(form).html().replace("Voted", "").replace("Vote", "");
				var percent = Math.round(votes / (total_votes > 0 ? total_votes : 1) * 10000) / 100;
				c2 += '<li class="sidebar__navigation__itemz table__row-outer-wrap' + ($(this).hasClass("is-selected") ? ' is-selected' : ' not-selected') + '" data-id=' + $(this).attr("data-id") + ' data-votes=' + votes + '>	\
			<div class="sidebar__navigation__item__link" title="' + title + '">	\
			'+ (img ?'<i class="global__image-outer-wrap global__image-outer-wrap--game-small">	\
			<div class="global__image-inner-wrap" style="background-image:url(' + img + ');"></div></i>' : '')+'	\
<div class="sidebar__navigation__item__underline">	\
			<div class="sidebar__navigation__item__title" style="width:150px;white-space: nowrap;overflow:hidden"><a target="_blank" href="' + url + '">' + title + '</a></div>	\
			' + votes + ' votes <br>' + percent + '%</div>	   <form>' + form + '</form>		\
			</div></li>';
			});
		$(".sidebar__navigation:last").after('					\
			<h3 class="sidebar__heading">Community Poll</h3>	\
			<ul class="sidebar__navigation">	\
			' + c2 + '\
			</ul>	\
			');
	}

}

//Comment editor
if(Number(GM_getValue("esg_commenteditor",1)))
{
    $(".comment__submit-button").prepend("<i class='fa fa-paper-plane'></i> ");
    $(".comment__description,.form__row__indent").has("textarea").prepend('<div class="comment__tools">	\
<div class="comment__submit-button" title="Italic text" type="wrap" value="*"><i class="fa fa-italic fa-fw"></i></div>	\
<div class="comment__submit-button" title="Bold text" type="wrap" value="**"><i class="fa fa-bold fa-fw"></i></div>	\
<div class="comment__submit-button" title="Strikethrough" type="wrap" value="~~"><i class="fa fa-strikethrough fa-fw"></i></div>	\
<div class="comment__submit-button" title="Emojis" type="emoticon">😀</div>	\
<div class="comment__submit-button serperator" title="List" type="list" value="* "><i class="fa fa-list-ul fa-fw"></i></div>	\
<div class="comment__submit-button" title="Spoiler" type="wrap" value="~"><i class="fa fa-stop fa-fw"></i></div>	\
<div class="comment__submit-button" title="Code" type="wrap" value="```"><i class="fa fa-code fa-fw"></i></div>	\
<div class="comment__submit-button" title="Block quote" type="list" value="> "><i class="fa fa-quote-left fa-fw"></i></div>	\
<div class="comment__submit-button" title="Horizontal reference" type="insert" value="\n---\n"><i class="fa fa-minus fa-fw"></i></div>	\
<div class="comment__submit-button serperator" title="Heading 1" type="list" value="# "><i class="fa fa-header fa-fw"></i>1</div>	\
<div class="comment__submit-button" title="Heading 2" type="list" value="## "><i class="fa fa-header fa-fw"></i>2</div>	\
<div class="comment__submit-button" title="Heading 3" type="list" value="### "><i class="fa fa-header fa-fw"></i>3</div>	\
<div class="comment__submit-button serperator" title="Insert url" type="url"><i class="fa fa-globe fa-fw"></i></div>	\
<div class="comment__submit-button" title="Insert image" type="image"><i class="fa fa-image fa-fw"></i></div>	\
<a href="https://www.steamgifts.com/about/comment-formatting" target="_blank"><div class="comment__submit-button serperator" title="Comment Formatting"><i class="fa fa-info fa-fw"></i></div></a>	\
</div>');
    $(".comment__tools .comment__submit-button[type=emoticon]").after('<div class="emoticons giveaway__column--invite-only" style="width:330px;height:170px;position:absolute;padding:5px;display:none;z-index:9999"> \
<div class="comment__submit-button" title=":)" type="insert" value="😀">😀</div>	\
<div class="comment__submit-button" title=":D" type="insert" value="😃">😃</div>	\
<div class="comment__submit-button" title="xD" type="insert" value="😆">😆</div>	\
<div class="comment__submit-button" title="Halo" type="insert" value="😇">😇</div>	\
<div class="comment__submit-button" title="Tongue" type="insert" value="😜">😜</div>	\
<div class="comment__submit-button" title="In love" type="insert" value="😍">😍</div>	\
<div class="comment__submit-button" title="Cool" type="insert" value="😎">😎</div>	\
<div class="comment__submit-button" title="Neutral" type="insert" value="😐">😐</div>	\
<div class="comment__submit-button" title="Fear" type="insert" value="😨">😨</div>	\
<div class="comment__submit-button" title="Crying" type="insert" value="😭">😭</div>	\
<div class="comment__submit-button" title="Zipped mouth" type="insert" value="🤐">🤐</div>	\
<div class="comment__submit-button" title="Rolling" type="insert" value="🤣">🤣</div>	\
<div class="comment__submit-button" title="Devil" type="insert" value="😈">😈</div>	\
<div class="comment__submit-button" title="Sleeping" type="insert" value="😴">😴</div>	\
<div class="comment__submit-button" title="Dizzy" type="insert" value="😵">😵</div>	\
<div class="comment__submit-button" title="Doc" type="insert" value="😷">😷</div>	\
<div class="comment__submit-button" title="Nerd face" type="insert" value="🤓">🤓</div>	\
<div class="comment__submit-button" title="Upside down" type="insert" value="🙃">🙃</div>	\
<div class="comment__submit-button" title="Money mouth" type="insert" value="🤑">🤑</div>	\
<div class="comment__submit-button" title="Angry" type="insert" value="😤">😤</div>	\
<div class="comment__submit-button" title="Cowboy" type="insert" value="🤠">🤠</div>	\
<div class="comment__submit-button" title="Clown" type="insert" value="🤡">🤡</div>	\
<div class="comment__submit-button" title="Skull" type="insert" value="💀">💀</div>	\
<div class="comment__submit-button" title="Ghost" type="insert" value="👻">👻</div>	\
<div class="comment__submit-button" title="Alien" type="insert" value="👽">👽</div>	\
<div class="comment__submit-button" title="Poop" type="insert" value="💩">💩</div>	\
<div class="comment__submit-button" title="Bit-monster" type="insert" value="👾">👾</div>	\
<div class="comment__submit-button" title="Robot" type="insert" value="🤖">🤖</div>	\
<div class="comment__submit-button" title="Cat" type="insert" value="😸">😸</div>	\
<div class="comment__submit-button" title="Happy Cat" type="insert" value="😺">😺</div>	\
<div class="comment__submit-button" title="Cat in love" type="insert" value="😻">😻</div>	\
<div class="comment__submit-button" title="Crying cat" type="insert" value="😿">😿</div>	\
<div class="comment__submit-button" title="Weary cat" type="insert" value="🙀">🙀</div>	\
<div class="comment__submit-button" title="Kitty face" type="insert" value="🐱">🐱</div>	\
<div class="comment__submit-button" title="Kitty" type="insert" value="🐈">🐈</div>	\
<div class="comment__submit-button" title="Eyes" type="insert" value="👀">👀</div>	\
<div class="comment__submit-button" title="Kiss" type="insert" value="💋">💋</div>	\
<div class="comment__submit-button" title="Mouth" type="insert" value="👄">👄</div>	\
<div class="comment__submit-button" title="Bomb" type="insert" value="💣">💣</div>	\
<div class="comment__submit-button" title="Unicorn" type="insert" value="🦄">🦄</div>	\
<div class="comment__submit-button" title="Goat" type="insert" value="🐐">🐐</div>	\
<div class="comment__submit-button" title="Pig" type="insert" value="🐷">🐷</div>	\
<div class="comment__submit-button" title="Luck" type="insert" value="🍀">🍀</div>	\
<div class="comment__submit-button" title="Controller" type="insert" value="🎮">🎮</div>	\
<div class="comment__submit-button" title="Santa" type="insert" value="🎅">🎅</div>	\
</div>');
    
    $(".emoticons").find(".comment__submit-button").each(function () { $(this).css("display","inline-block").css("width","32px").css("height","32px").css("padding","0") } );

    $(document).on('click', '.comment__tools .comment__submit-button', function() {
        var type=$(this).attr("type");
        var val=$(this).attr("value");
        var textarea=$(this).parent().parent().parent().find("textarea");
        var text=$(textarea).val();
        var before=text.substr(0,$(textarea)[0].selectionStart);
        var between=text.substr($(textarea)[0].selectionStart,$(textarea)[0].selectionEnd-$(textarea)[0].selectionStart);
        var after=text.substr($(textarea)[0].selectionEnd,text.length-$(textarea)[0].selectionEnd);
        if(type!="emoticon") $(textarea).focus();
        if(type=="emoticon")
        {
            $(".emoticons").toggle();
        }
        if(type=="url")
        {
            var url=prompt("Url:","http://");
            if(url===null) return;
            var txt=prompt("Text:","");
            if(txt===null) return;
            var out="["+txt+"]("+url+")";
            $(textarea).val(before+out+after);
            $(textarea)[0].selectionStart=before.length;
            $(textarea)[0].selectionEnd=before.length+out.length;
        }
        if(type=="image")
        {
            var url2=prompt("Image url:","http://");
            if(url2===null) return;
            var txt2=prompt("Text:","");
            if(txt2===null) return;
            var out2="!["+txt2+"]("+url2+")";
            $(textarea).val(before+out2+after);
            $(textarea)[0].selectionStart=before.length;
            $(textarea)[0].selectionEnd=before.length+out2.length;
        }
        if(type=="wrap")
        {
            $(textarea).val(before+val+between+val+after);
            $(textarea)[0].selectionStart=before.length+val.length;
            $(textarea)[0].selectionEnd=$(textarea)[0].selectionStart+between.length;
        }
        if(type=="insert")
        {
            $(textarea).val(before+val+after);
            $(textarea)[0].selectionStart=before.length+val.length;
            $(textarea)[0].selectionEnd=before.length+val.length;
        }
        if(type=="list")
        {
            var start=0;
            var begin=false;
            for(var i=$(textarea)[0].selectionStart;i>0;i--)
            {
                if(i==1) begin=true;
                if(text[i]=="\n")
                {
                    start=i;
                    break;
                }
            }
            before=text.substr(0,start);
            between=text.substr(start,$(textarea)[0].selectionEnd-start);
            if(begin) between=val+between;
            between=between.replace(/\n/g, "\n"+val);
            if(before[before.length-1]=="\n") between=val+between;
            $(textarea).val(before+between+after);
            $(textarea)[0].selectionStart=before.length+(between[0]=='\n'?1:0);
            $(textarea)[0].selectionEnd=$(textarea)[0].selectionStart+between.length;
        }
    });
}

//Advanced Search - Coming soon
/*
if (path.match('^/giveaways/')|| path == '/')
{
    $(".sidebar__search-container").css("margin-bottom","2px");
	$(".sidebar__search-container").before('<h3 class="sidebar__heading">Advanced Search</h3>');
	var s_lv_min=getUrlParameter("level_min")?Math.max(Math.min(getUrlParameter("level_min"),10),0):0;
	var s_lv_max=getUrlParameter("level_max")?Math.max(Math.min(getUrlParameter("level_max"),10),0):10;
	var s_e_min=getUrlParameter("entry_min")?Math.max(Math.min(getUrlParameter("entry_min"),5000),0):0;
	var s_e_max=getUrlParameter("entry_max")?Math.max(Math.min(getUrlParameter("entry_max"),5000),0):5000;
	$(".sidebar__search-container").after('<div class="advanced_search"><form method="GET">	\
		Level <span class="s_lv">' + (s_lv_min == s_lv_max ? s_lv_min : s_lv_min + " - " + s_lv_max) + '</span>			\
		<div class="search__slider form__slider_search--level ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">	\
		<div style="width: 0%;" class="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min"></div>	\
		<span style="left: 0%;" class="ui-slider-handle ui-state-default ui-corner-all" tabindex="1" width="100%">	\
		</span></div>	\
		Entry <span class="s_entries">' + (s_e_min == s_e_max ? (s_e_max==5000?"&infin;":s_e_max) : s_e_min + " - " + (s_e_max==5000?"&infin;":s_e_max)) + '</span>			\
		<div class="search__slider form__slider_search--entry ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">	\
		<div style="width: 0%;" class="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min"></div>	\
		<span style="left: 0%;" class="ui-slider-handle ui-state-default ui-corner-all" tabindex="1" width="100%">	\
		</span></div>	\
');
	$('.form__slider_search--level').slider({
		range: true,
		values: [s_lv_min, s_lv_max],
		min: 0,
		max: 10,
		slide: function(event, ui) {
			$(".s_lv").text(ui.values[0] == ui.values[1] ? ui.values[0] : ui.values[0] + " - " + ui.values[1]);
		}
	});
	
	 $('.form__slider_search--entry').slider({
		range: true,
		values: [s_e_min, s_e_max],
		min: 0,
		max: 5000,
		slide: function(event, ui) {
			var min=ui.values[0];
			var max=ui.values[1];
			if(max==5000) max="&infin;";
			if(min==5000) min="&infin;";
			$(".s_entries").html(min == max ? max : min + " - " + max);
		}
	});

}
*/

//Remove the paddings if adblock enabled
if($(".sidebar__mpu").height()<10)
	$(".sidebar__mpu").hide();
if($(".leaderboard").height()<10)
	$(".leaderboard").hide();

//Auto scroll
if ($(".pagination").length > 0 && Number(GM_getValue("esg_autoscroll", 1))) {
	var loading = false;
	$('.widget-container--margin-top').remove();
	$('.giveaway__row-outer-wrap:last').parent().after('<img src="https://raw.githubusercontent.com/nandee95/Extended_Steamgifts/master/img/loading.gif" class="page-loading"></div>');
	$('.table:last').after('<br><img src="https://raw.githubusercontent.com/nandee95/Extended_Steamgifts/master/img/loading.gif" class="page-loading"></div>');
    if($(".comments__entity").length === 0) $('.comments:last').after('<br><img src="https://raw.githubusercontent.com/nandee95/Extended_Steamgifts/master/img/loading.gif" class="page-loading"></div>');
    else $('.comments__entity:last').parent().after('<br><img src="https://raw.githubusercontent.com/nandee95/Extended_Steamgifts/master/img/loading.gif" class="page-loading"></div>');
	$('.page-loading').hide();
	var page = currentpage;
	$('.page__heading__breadcrumbs:first').append('<i class="fa fa-angle-right"></i><a href="' + window.location.href + '"> Page ' + page + '</a>');
	if ($('.comment--submit').length > 0) {
		$('.comment--submit').insertAfter(".page__heading:contains('Comment')");
	}
	
	$(document).on("click",".js__comment-reply-cancel",function () {
		$('.comment--submit').insertAfter(".page__heading:contains('Comment')");
	});

	$(".sidebar").append("<span class=\"fp-mark\" height=0></span><div class=\"floating-pagination global__image-outer-wrap\">"+($(".comment--submit").length >0? '<div class="sidebar__action-button jump_to_comment no-user-select">Write a comment</div>':'') + $('.pagination').html().replace("Previous", "").replace("...", "").replace("...", "").replace("Next", "").replace("First", "").replace("Last", "") + "</div>");
	$('.pagination').remove();
	if ($(".fp-mark").offset().top-$(window).height()+150<$(window).scrollTop()) $(".floating-pagination").show();
	else $(".floating-pagination").hide();

	$(window).scroll(function() {
		if ($(".fp-mark").offset().top-$(window).height()+150<$(window).scrollTop()) $(".floating-pagination").show();
		else $(".floating-pagination").hide();
		if (!loading && $(window).scrollTop() + $(window).height() > $(document).height() - 1000 && !lastpage) {
			loading = true;
			$('.page-loading').show();
			var pageurl = updateURLParameter(pagination_url, "page", page + 1);
			$.ajax({
				url: pageurl,
				success: function(source) {
					lastpage = (source.indexOf('<span>Next</span>') == -1);
					var mainurl;
					pageurl.substring(0, pageurl.indexOf('&'));
					if ($('.table').length > 0) {
						$('.table:last').after('<div class="page__heading"><div class="page__heading__breadcrumbs">' + pagename + ' <i class="fa fa-angle-right"></i> <a href="' + pageurl + '">Page ' + (page + 1) + '</a></div></div><div class="table">' + $(source).find('.table').html() + '</div>');
						check_entered_chances();
						if(path=="/giveaways/wishlist")
						{
							$(".table:last").find(".table__column__heading").each(function () {
								var title=$(this).html();
								$(this).html("<a href=\"/giveaways/search?q="+encodeURI(title)+"\">"+title+"</a>");
							});
						}

					} else if ($(".giveaway__row-outer-wrap").length > 0) {

						$('.giveaway__row-outer-wrap:last').parent().after('<div class="page__heading"><div class="page__heading__breadcrumbs"><a href="/">Giveaways</a> <i class="fa fa-angle-right"></i> <a href="' + pageurl + '">Page ' + (page + 1) + '</a></div></div>');
						$(source).find(".giveaway__row-outer-wrap:last").parent().insertAfter(".page__heading:last");
						$(".giveaway__row-outer-wrap:last").parent().find(".giveaway__row-outer-wrap").format_ga().filter_ga();
					} else if ($('.comments__entity').length > 0) { //messages page
                        $(".comments__entity:last").parent().after('<div class="page__heading"><div class="page__heading__breadcrumbs">'+pagename+' <i class="fa fa-angle-right"></i> <a href="' + pageurl + '">Page ' + (page + 1) + '</a></div></div><div>' + $(source).find('.comments__entity:first').parent().html() + '</div>');
						$(".comments__entity:last").parent().find(".comment").find("div[class='comment__description markdown markdown--resize-body']").format_comment();
					} else if ($('.comments').length > 0) {
						$('.comments:last').after('<div class="page__heading"><div class="page__heading__breadcrumbs"><a href="' + mainurl + '">Comments </a> <i class="fa fa-angle-right"></i> <a href="' + pageurl + '">Page ' + (page + 1) + '</a></div></div><div class="comments">' + $(source).find('.comments:last').html() + '</div>');
						$(".comments:last").find(".comment").find("div[class='comment__description markdown markdown--resize-body']").format_comment();
					}
					page++;
					rx = (regex_pagination_results).exec($(source).find(".pagination__results").html());
					if (rx)
						pagination_max = rx[2];

					$(".floating-pagination").html(($(".comment--submit").length >0? '<div class="sidebar__action-button jump_to_comment">Write a comment</div>':'') + $(source).find('.pagination').html().replace("Previous", "").replace("...", "").replace("...", "").replace("Next", "").replace("First", "").replace("Last", ""));
					$(".pagination__results strong:first").html(pagination_min);
					$(".pagination__results strong:nth-child(2)").html(pagination_max);
				},
				complete: function() {
					loading = false;
					$('.page-loading').hide();
					$(window).trigger('scroll');
				}
			});
		}
	});
}

$(document).on("click",".jump_to_comment",function () { 
    setTimeout(function() {
    $('html, body').animate({
			scrollTop: $(".comment--submit").offset().top-100
		}, 'fast', function() {
    $("textarea[name=description]").focus();
  });
    }, 1);
});

if(Number(GM_getValue("esg_hidefeatured"))&&(path.match('^/giveaways/')||path=="/"))
{
	$(".featured__container").remove();
}

if (Number(GM_getValue("esg_fixedheader", 1))) {
	$("header").css("position", "fixed");
	$("header").css("width", "100%");
	$("header").css("z-index", "100");
	$("header").css("top", "0");
	if($(".header__error").length > 0)				$(".header__error").css("margin-top", "38px");
	else if ($(".featured__container").length > 0)	$(".featured__container").css("margin-top", "38px");
	else											  $(".page__outer-wrap").css("margin-top", "38px").css("right", "0");
}

//Re collapse pinned giveaways
if($(".pinned-giveaways__button").length>0)
{
	$(".pinned-giveaways__button").find("i").removeClass("fa-angle-down").addClass("fa-chevron-down");
	$(document).on("click",".pinned-giveaways__button",function () {
		$(this).show();
		var collapsed = $(this).attr("collapsed");
		if(collapsed == 1)
		 $(".pinned-giveaways__inner-wrap").addClass("pinned-giveaways__inner-wrap--minimized");
		else
		 $(".pinned-giveaways__inner-wrap").removeClass("pinned-giveaways__inner-wrap--minimized");
    $(".pinned-giveaways__inner-wrap").css("border-bottom-left-radius","0");
		$(".pinned-giveaways__inner-wrap").css("border-bottom-right-radius","0");
		$(this).attr("collapsed",collapsed=="1"?"0":"1");
		$(this).find(".fa").toggleClass("fa-chevron-down").toggleClass("fa-chevron-up");
	});
}

/*
if($(".pinned-giveaways__button").length>0)
{
	$(".pinned-giveaways__button").addClass("pinned-giveaways__button2").removeClass("pinned-giveaways__button")
	$(".pinned-giveaways__button2").css("margin-top","-20px").find("i").removeClass("fa-angle-down").addClass("fa-chevron-down");
	setTimeout(function () {
		$(document).on("click",".pinned-giveaways__button2",function () {
			$(".pinned-giveaways__inner-wrap").toggleClass("pinned-giveaways__inner-wrap--minimized");
			$(this).find(".fa").toggleClass("fa-chevron-down").toggleClass("fa-chevron-up");
			return false;
		});
	},1);
}*/

//Display chances on giveaway's page
if(Number(GM_getValue("esg_chances", 1))&&path.match("^/giveaway/"))
{
    var entries=Number($(".live__entry-count").text().replace(/\,/,""));
    var copies=1;
    if($(".featured__heading").find(".featured__heading__small").length>1)
        copies=Number($(".featured__heading").find(".featured__heading__small:first").text().replace(/\,/,"").replace(" Copies)","").replace("(",""));
    var chance = 0;
		if (entries <= 0)
			chance = 100;
		else
			chance = Math.round(copies / (entries) * 10000) / 100;
		if (chance > 100)
			chance = 100;
    $(".featured__columns").find(".featured__column:first").after('<div class="featured__column"><i class="fa fa-fw fa-area-chart icon-yellow"></i> <span alt="Odds: '+(entries/copies).toFixed(0)+':1"'+(chance>=5?" style='font-weight:bold'":"")+'>'+chance+'% chance</span></div>');
}

//Hidden giveaway notfication
if(path.match("^/giveaway/") && $(".featured__giveaway__hide").length == 0)
{
    $(".featured__columns").find(".featured__column:first").after('<div class="featured__column"><i class="fa fa-fw fa-ban icon-red"></i> Hidden game</div>');
}

//Filter
$.fn.filter_ga = function() {
	if (path != "/")
		return $(this);
	return $(this).each(function() {
		var ga = $(this);
		if ($(ga).closest(".pinned-giveaways__outer-wrap").length !== 0)
			return;
		//Read some data
		var url = $(ga).find('.giveaway__heading__name').attr('href');
		var c = $(ga).find('.giveaway__heading__thin').text();
		var copies = 1,
			e = 0;
		if (c.indexOf('Copies') > -1) {
			copies = Number(c.substring(1, getPos(c, ' ', 1)).replace("(", "").replace("(", "").replace(",", ""));
		}

		var entered = $(ga).find('.giveaway__row-inner-wrap').hasClass('is-faded');
		e = $(ga).find('.giveaway__links').find('span:first').text().replace(/\,/g, '');
		e = e.substring(0, getPos(e, ' ', 1));
		var entries = Number(e);

		var chance = 0;
		if (entries <= 0)
			chance = 100;
		else
			chance = Math.round(copies / (entries + (entered?0:1)) * 10000) / 100;
		if (chance > 100)
			chance = 100;

		var req = Number($(ga).find(".giveaway__heading__thin:last").text().replace("(", "").replace(")", "").replace("P", ""));
		var has = Number($(".nav__points").text());
		var enough = req <= has ? true : false;

		//var wishlist=(($.inArray(url,wishlist)!=-1)?true:false);
		var group = $(ga).find('.giveaway__column--group').length > 0 ? 1 : 0;
		var whitelist = $(ga).find('.giveaway__column--whitelist').length > 0 ? 1 : 0;
		var regionrestricted = $(ga).find('.giveaway__column--region-restricted').length > 0 ? 1 : 0;
		var communityvoted = $(ga).find('.giveaway__column--community-voted').length > 0 ? 1 : 0;
		var level = 0;
		if ($(ga).find(".giveaway__column--contributor-level").length !== 0)
			level = Number($(ga).find(".giveaway__column--contributor-level").text().replace("Level", "").replace("+", "").trim());

		if (!(GM_getValue("esg_f_min_level", 0) <= level && level <= GM_getValue("esg_f_max_level", 10)))
			$(ga).hide();
		else if (!(GM_getValue("esg_f_min_chance", 0) <= chance && chance <= GM_getValue("esg_f_max_chance", 100)))
			$(ga).hide();
		else if (!(GM_getValue("esg_f_min_points", 0) <= req && req <= GM_getValue("esg_f_max_points", 100)))
			$(ga).hide();
		else if(!(GM_getValue("esg_f_min_copies", 1) <= copies && (copies <= GM_getValue("esg_f_max_copies", 100000)|| GM_getValue("esg_f_max_copies", 100000)==100000)))
			$(ga).hide();
		else if ((GM_getValue("esg_f_group", 1) === 0 && group) || (GM_getValue("esg_f_group", 1) == 2 && !group))
			$(ga).hide();
		else if ((GM_getValue("esg_f_whitelist", 1) === 0 && whitelist) || (GM_getValue("esg_f_whitelist", 1) == 2 && !whitelist))
			$(ga).hide();
		else if ((GM_getValue("esg_f_regionrestricted", 1) === 0 && regionrestricted) || (GM_getValue("esg_f_regionrestricted", 1) == 2 && !regionrestricted))
			$(ga).hide();
		else if ((GM_getValue("esg_f_community", 1) === 0 && communityvoted) || (GM_getValue("esg_f_community", 1) == 2 && !communityvoted))
			$(ga).hide();
		else
			$(ga).show();
        $(window).trigger('scroll');
	});
};

//Community wishlist
if(path=="/giveaways/wishlist")
{
	$(".table__column__heading").each(function () {
		var title=$(this).html();
		$(this).html("<a href=\"/giveaways/search?q="+encodeURI(title)+"\">"+title+"</a>");
	});
}

//Giveaway function
$.fn.format_ga = function() {
	return $(this).each(function() {
		var ga = $(this);
		//Read some data
		var url = $(ga).find('.giveaway__heading__name').attr('href');
		var code = 0;
		if (url) code = url.substring(getPos(url, '/', 2) + 1, getPos(url, '/', 3));
		var c = $(ga).find('.giveaway__heading__thin').text();
		var copies = 1,
			e = 0;
		if (c.indexOf('Copies') > -1) {
			copies = Number(c.substring(1, getPos(c, ' ', 1)).replace("(", "").replace("(", "").replace(",", ""));
		}

		var entered = $(ga).find('.giveaway__row-inner-wrap').hasClass('is-faded');
		e = $(ga).find('.giveaway__links').find('span:first').text().replace(/\,/g, '');
		e = e.substring(0, getPos(e, ' ', 1));
		var entries = Number(e);

		var chance = 0;
		if (entries <= 0)
			chance = 100;
		else
			chance = Math.round(copies / (entries + (entered?0:1)) * 10000) / 100;
		if (chance > 100)
			chance = 100;

		var time = $(ga).find(".giveaway__columns").find("div:first");
		var active = (time.text().indexOf('ago') > -1) ? 0 : 1;
		var time2 = $(ga).find(".giveaway__column--width-fill span");
		var newga = (time2.text().indexOf('minute') > -1 || time.text().indexOf('second') > -1) ? 1 : 0;

		var req = Number($(ga).find(".giveaway__heading__thin:last").text().replace("(", "").replace(")", "").replace("P", ""));
		var has = Number($(".nav__points").text());
		var enough = req <= has ? true : false;
		var user = $(ga).find(".giveaway__username").text();
		
		var title=$(ga).find(".giveaway__heading__name").text();
		
		var pinned=$(ga).closest(".pinned-giveaways__outer-wrap").length!==0?1:0;
		
		//Display chances
		if (Number(GM_getValue("esg_chances", 1)) && loggedin) {
			$(ga).find('.giveaway__columns').find("div:first").after('<div><i class="fa fa-fw fa-area-chart"></i> <span title="Odds: '+(entries/copies).toFixed(0)+':1"'+(chance>=5?" style='font-weight:bold'":"")+'>' + chance.toFixed(2) + '% chance</span></div>');
		}

		//Enter/Remove button
		if (Number(GM_getValue("esg_enterremove", 1)) && loggedin && active && user != username && title!="Invite Only" && $(ga).find('.giveaway__column--contributor-level--negative').length === 0) {
			$(ga).find('.giveaway__row-inner-wrap').removeClass('is-faded');
			$(ga).find(".giveaway__columns").append("<div><form>	\
				<input type=\"hidden\" name=\"xsrf_token\" value=\"" + xsrf + "\" />	\
				<input type=\"hidden\" name=\"do\" value=\"\" />	\
				<input type=\"hidden\" name=\"code\" value=\"" + code + "\" />	\
				<div data-do=\"entry_insert\" class=\"sidebar__entry-custom sidebar__entry-insert" + (!entered && enough ? "" : " is-hidden") + "\"><i class=\"fa fa-plus-circle\"></i> Enter</div>	\
				<div data-do=\"entry_delete\" class=\"sidebar__entry-custom sidebar__entry-delete" + (entered ? "" : " is-hidden") + "\"><i class=\"fa fa-minus-circle\"></i> Remove</div>	\
				<div class=\"sidebar__entry-custom sidebar__entry-loading is-hidden\"><i class=\"fa fa-refresh fa-spin\"></i> Wait</div>	\
				<div class=\"sidebar__entry-custom sidebar__error " + (!enough && !entered ? "" : " is-hidden") + "\">" + (!enough && !entered ? "<i class=\"fa fa-exclamation-circle\"></i> Not enough points" : "") + "</div>	\
				</form></div>");
		}

		//Description
		$(ga).find(".giveaway__hide").after("<i class=\"giveaway__icon fa fa-file-text-o open--desc\"></i>");
		//Search
		//$(ga).find(".giveaway__hide").after("<a href=\"/giveaways/search?q="+encodeURIComponent(title.replace('...', ''))+"\" target=\"_blank\"><i class=\"giveaway__icon fa fa-search\"></i></a>");

		//Marks
		if (Number(GM_getValue("esg_gamark", 1))) {
			if (newga) {
				$(ga).find(".giveaway__heading__name").prepend('<font color="#BFBF00" class="ga-mark">[NEW]</font> ');
			}
			if (req === 0 && $(ga).find('.giveaway__heading__name').html() != 'Invite Only') {
				$(ga).find(".giveaway__heading__name").prepend('<font color="#00BFBF" class="ga-mark">[FREE]</font> ');
			}
		}
		//Hide entered
		if (Number(GM_getValue("esg_hideentered", 0)) && entered && !pinned && path!=$(".nav__avatar-outer-wrap").attr('href')+"/giveaways/won" && !path.match("^/user")) {
			$(ga).addClass("is-hidden");
			$(window).trigger('scroll');
		}

		if(path==$(".nav__avatar-outer-wrap").attr('href')+"/giveaways/won" || path.match("^/user"))
		{
			$(ga).find('.giveaway__row-inner-wrap').removeClass('is-faded');
		}
	});
};

setTimeout(function () {  $(window).trigger('scroll'); },200);

//Format giveaways (on load)
$('.giveaway__row-outer-wrap').format_ga();

//Enter/Remove Button click
setTimeout(function() {
	if (path.match('^/giveaway/')) return;
	$(".sidebar__entry-insert, .sidebar__entry-delete").unbind("click");
	$(document).on('click', '.sidebar__entry-insert:not(.enterall), .sidebar__entry-delete', function() {
		var t = $(this);
        /*
        if(t.hasClass("sidebar__entry-delete"))
        {
            var ga=$(t).closest(".giveaway__row-outer-wrap");
            var points = Number($(ga).find(".giveaway__heading__thin:last").text().replace("(", "").replace(")", "").replace("P", ""));
            var has = Number($(".nav__points").text());
            if(has+points>400)
            {
                var diff=points+has-400;
                if(!confirm("Are you sure?\nYou will lose "+diff+" point"+(diff>1?"s":"")+" by doing this!")) return;
            }
        }*/
        t.addClass("is-hidden");
		t.closest("form").find(".sidebar__entry-loading").removeClass("is-hidden");
		t.closest("form").find("input[name=do]").val(t.attr("data-do"));
		$.ajax({
			url: "/ajax.php",
			type: "POST",
			dataType: "json",
			data: t.closest("form").serialize(),
            timeout: 5000,
			success: function(e) {
				t.closest("form").find(".sidebar__entry-loading").addClass("is-hidden");
				if("success" === e.type)
				{
					if(t.hasClass("sidebar__entry-insert"))t.closest("form").find(".sidebar__entry-delete").removeClass("is-hidden");
					else if(t.hasClass("sidebar__entry-delete")) t.closest("form").find(".sidebar__entry-insert").removeClass("is-hidden");
				} else if("error" === e.type) t.closest("form").find(".sidebar__error").removeClass("is-hidden").html("undefined" != typeof e.link && e.link !== 0 ? '<a href="' + e.link + '"><i class="fa fa-exclamation-circle"></i> ' + e.msg + "</a>" : '<i class="fa fa-exclamation-circle"></i> ' + e.msg);
				$(".live__entry-count").text(e.entry_count);
				$(".nav__points").text(e.points);
                var pinned=$(t).closest(".pinned-giveaways__outer-wrap").length!==0?1:0;
				if (Number(GM_getValue("esg_hideentered", 0)) && "success" === e.type &&!pinned) {
					$(t).closest(".giveaway__row-outer-wrap").slideToggle(500);
				}
				update_gas(e.points);
			},
            error: function(e)
            {
				t.closest("form").find(".sidebar__entry-loading").addClass("is-hidden");
                t.closest("form").find(".sidebar__error").removeClass("is-hidden").html("undefined" != typeof e.link && e.link !== 0 ? '<a href="' + e.link + '"><i class="fa fa-exclamation-circle"></i> Timeout</a>' : '<i class="fa fa-exclamation-circle"></i> Timeout');
            }
		});
	});
	$(document).on('click', '.sidebar__error', function() {
		$(this).addClass("is-hidden").parent().find(".sidebar__entry-insert").removeClass("is-hidden");
	});
}, 10);

function update_gas(p) {
	if (p == -1)
		p = Number($(".nav__points").text());
	$('.giveaway__row-outer-wrap').each(function() {
		if(!$(this).find(".sidebar__error").hasClass("is-hidden")&&$(this).find(".sidebar__error").text()!=" Not enough points") return;
		var req = Number($(this).find(".giveaway__heading__thin:last").text().replace("(", "").replace(")", "").replace("P", ""));
		var entered = !$(this).find(".sidebar__entry-delete").hasClass('is-hidden');
		if (req > p && !entered) {
			$(this).find(".sidebar__entry-delete").addClass("is-hidden");
			$(this).find(".sidebar__entry-insert").addClass("is-hidden");
			$(this).find(".sidebar__entry-loading").addClass("is-hidden");
			$(this).find(".sidebar__error").removeClass("is-hidden").html('<i class="fa fa-exclamation-circle"></i> Not enough points');
		} else if (entered) {
			$(this).find(".sidebar__entry-delete").removeClass("is-hidden");
			$(this).find(".sidebar__entry-insert").addClass("is-hidden");
			$(this).find(".sidebar__entry-loading").addClass("is-hidden");
			$(this).find(".sidebar__error").addClass("is-hidden");
		} else {
			$(this).find(".sidebar__entry-delete").addClass("is-hidden");
			$(this).find(".sidebar__entry-insert").removeClass("is-hidden");
			$(this).find(".sidebar__entry-loading").addClass("is-hidden");
			$(this).find(".sidebar__error").addClass("is-hidden");
		}
	});
}

//Refresh points every min
if (Number(GM_getValue("esg_refresh", 0))) {
	setInterval(function() {
		$.ajax({
			url: "/ajax.php",
			type: "POST",
			dataType: "json",
			data: "xsrf_token=" + xsrf + "&do=entry_insert",
			success: function(e) {
				if ($(".nav__points").text() != e.points) {
					$(".nav__points").text(e.points);
					update_gas(e.points);
				}
			}
		});
	}, 60000);
}

//Chances on entered page
function check_entered_chances()
{
	if (path.match('^/giveaways/entered')&&Number(GM_getValue("esg_chances", 1))) {
		$(".table:last").find(".table__column--width-small:first").before('<div class="table__column--width-small text-center">Chance</div>');
		$(".table:last").find(".table__row-outer-wrap").each(function () {
			var title=$(this).find('.table__column__heading').html();
			var copies=1;
			if(title.indexOf("Copies")!=-1) copies=Number(title.match(/(?:.*)\(([0-9\,]{1,7}) Copies\)/)[1].replace(/,/g, ''));
			var entries=$(this).find(".table__column--width-small:first").html().replace(/,/g, '');
			var chance = 0;
			if (entries <= 0)
				chance = 100;
			else
				chance = Math.round(copies / (entries) * 10000) / 100;
			if (chance > 100)
				chance = 100;
			$(this).find(".table__column--width-small:first").before('<div class="table__column--width-small text-center">'+chance+'%</div>');
		});
	}
}
check_entered_chances();

//Comment formatting
$.fn.format_comment = function() {
    if(!Number(GM_getValue("esg_comment",1))) return $(this);
    
	return $(this).each(function() {
			$(this).find(".comment__toggle-attached").remove();
			$(this).find("img").removeClass("is-hidden");
			$(this).find("a").each(function () {
                
                if($(this).closest("table").length != 0 ) return
                var res = $(this).attr("href").match(/^(?:https?:\/\/(?:www.)?)(?:youtube.com\/watch\?v=|youtu.be\/)([a-zA-Z0-9\_\-]+).*?$/);
                if(res)
                {
                    $(this).after('<iframe class="global__image-outer-wrap" src="https://www.youtube.com/embed/'+res[1]+'" width="420" height="315"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
                }
                
                res = $(this).attr("href").match(/^(?:https?:\/\/(?:www.)?)vimeo.com\/([0-9]{5,12})\/?.+?$/);
                if(res)
                {
                    $(this).after('<iframe src="https://player.vimeo.com/video/'+res[1]+'" class="global__image-outer-wrap" width="420" height="315" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
                }
                
                 res = $(this).attr("href").match(/^(?:https?:\/\/)store.steampowered.com\/app\/(\d+)\/.*?$/);
                if(res)
                {
                    $(this).after('<iframe src="https://store.steampowered.com/widget/'+res[1]+'/?dynamiclink=1" class="global__image-outer-wrap" width="563" height="190" frameborder="0"></iframe>');
                }
                res = $(this).attr("href").match(/^((?:https?:\/\/(?:www.)?)gleam.io\/[A-Za-z0-9]{5}\/?.*?)$/);
                if(res)
                {
                    $(this).after('<div class="global__image-outer-wrap" style="width:545px !important;padding:5px 5px 5px 10px"><a class="e-gleam" href="'+res[1]+'" rel="nofollow">$2</a></div><script type="text/javascript" src="https://js.gleam.io/e.js" async="true"></script>');
                }
            });
	});
};
$(".comment").find("div[class='comment__description markdown markdown--resize-body']").format_comment();
$(".page__description").format_comment();

//Scroll to top
if (Number(GM_getValue("esg_scrolltop", 1))) {
	$("body").prepend("<div class=\"scroll-top form__submit-button\">&gt;</div>");
	$(".scroll-top").hide();
	$(".scroll-top").click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 'fast');
	});
	var state = 0;
	$(window).scroll(function() {
		var st = $(window).scrollTop();
		if (st > 500 && !state) {
			$(".scroll-top").fadeIn("fast");
			state = 1;
		} else if (st <= 500 && state) {
			$(".scroll-top").fadeOut("fast");
			state = 0;
		}
	});

}

//ESG menu
$("header .nav__left-container").append("	\
	<div class=\"nav__button-container\">		\
	<div class=\"nav__relative-dropdown is-hidden\">		\
	<div class=\"nav__absolute-dropdown\">		\
	<a class=\"nav__row\" target=\"_blank\" href=\"http://steamcommunity.com/groups/extendedsg\">		\
	<i class=\"icon-grey fa fa-fw fa-steam\"></i>		\
	<div class=\"nav__row__summary\">		\
	<p class=\"nav__row__summary__name\">Steam Group</p>		\
	<p class=\"nav__row__summary__description\">Open ESG steam group		\</p>		\
	</div>		\
	</a>		\
	<a class=\"nav__row\" href=\"/account/profile/sync#esg_options\">		\
	<i class=\"icon-grey fa fa-fw fa-cog\"></i>		\
	<div class=\"nav__row__summary\">		\
	<p class=\"nav__row__summary__name\">Options</p>		\
	<p class=\"nav__row__summary__description\">Open options		\</p>		\
	</div>		\
	</a>		\
	<a class=\"nav__row\" target=\"blank\" href=\"http://steamcommunity.com/groups/extendedsg/discussions/0/\">		\
	<i class=\"icon-red fa fa-fw fa-bug\"></i>		\
	<div class=\"nav__row__summary\">		\
	<p class=\"nav__row__summary__name\">Bug report</p>		\
	<p class=\"nav__row__summary__description\">Report bugs here!		\</p>		\
	</div>		\
	</a>	\
	<a class=\"nav__row\" target=\"blank\" href=\"https://github.com/nandee95/Extended_Steamgifts\">		\
	<i class=\"icon-green fa fa-fw fa-github\"></i>		\
	<div class=\"nav__row__summary\">		\
	<p class=\"nav__row__summary__name\">Source Code</p>		\
	<p class=\"nav__row__summary__description\">GitHub</p>		\
	</div>		\
	</a>		\
	<a class=\"nav__row\" href=\"/account/profile/sync#esg_about\">		\
	<i class=\"fa fa-fw fa-info-circle\" style=\"color:lightblue\"></i>		\
	<div class=\"nav__row__summary\">		\
	<p class=\"nav__row__summary__name\">About</p>		\
	<p class=\"nav__row__summary__description\">Author / Contact / Donate		\
	</p>		\
	</div>		\
	</a>		\
	</div>		\
	</div>		\
	<a class=\"nav__button nav__button--is-dropdown\" href=\"/discussion/qbPEr/\">ESG</a>		\
	<div class=\"nav__button nav__button--is-dropdown-arrow\"><i class=\"fa fa-angle-down\"></i></div>		\
	</div>");

//Click event fix (part of original js)
$(document).on('click',".table__remove-default",function() { 
	var e=$(this);
	e.addClass("is-hidden");
	e.siblings(".table__remove-loading").removeClass("is-hidden");
	$.ajax({
		url:ajax_url,
		type:"POST",
		dataType:"json",
		data:e.closest("form").serialize(),
		success:function(t){
			e.siblings(".table__remove-loading").addClass("is-hidden");
			e.siblings(".table__remove-complete").removeClass("is-hidden");
			e.closest(".table__row-inner-wrap").addClass("is-faded");
			if("undefined"!=typeof t.points&&t.points!==0)
				$(".nav__points").text(t.points);
		}
	});
});

$(document).on('click', '.trigger-popup', function() {
	$("." + $(this).attr("data-popup")).bPopup({
		opacity: 0.85,
		fadeSpeed: 200,
		followSpeed: 500,
		modalColor: "#3c424d"
	});
});

$(document).on('click', '.giveaway__hide', function () {
	$(".popup--hide-games input[name=game_id]").val($(this).closest(".giveaway__row-outer-wrap").attr("data-game-id"));
	$(".popup--hide-games .popup__heading__bold").text($(this).closest("h2").find(".giveaway__heading__name").text());
	//Use AJAX when hiding GAs
	var t = $(".popup--hide-games .form__submit-button.js__submit-form");
	t.removeClass("is-disabled").html('<i class="fa fa-check-circle"></i> Yes').unbind(); // Reset button state if we had previously hidden GAs
	t.on("click", function () {
		var game_id = t.closest("form").find("input[name=game_id]").val();
		$.ajax({
			url : "/", // Is unknown if there is an API param for hiding GAs so we post to main page instead
			type : "POST",
			dataType : "json",
			data : t.closest("form").serialize(),
			complete : function (data) {
				if(data.readyState === 4) {
					t.addClass("is-disabled").html("Done!").unbind(); // Don't allow form resubmission if user clicks the button again
					$(document).find("i[data-game-id=" + game_id + "]").closest(".giveaway__row-outer-wrap").remove(); // Remove all matching visible GAs instances
				}
			}
		});
	});
});

$(document).on('click', 'nav .nav__button--is-dropdown-arrow', function() {
	var e = $(this).hasClass("is-selected");
	$("nav .nav__button").removeClass("is-selected");
	$("nav .nav__relative-dropdown").addClass("is-hidden");
	if (e || $(this).addClass("is-selected").siblings(".nav__relative-dropdown").removeClass("is-hidden"))
		t.stopPropagation();
});

$(document).on('click', '.poll__vote-button-sidebar', function() {
	var t = $(this);
	t.closest("form").find("input[name=do]").val(t.hasClass("poll__vote-button--voted") ? "poll_vote_delete" : "poll_vote_insert");
	var i = $(this).closest(".sidebar__navigation__itemz");
	$.ajax({
		url: ajax_url,
		type: "POST",
		data: t.closest("form").serialize()
	});
	$(this).closest(".poll").find(".sidebar__navigation__itemz.is-selected").attr("data-votes", function(e, t) {
		return Number(t) - 1;
	});
	if (i.hasClass("is-selected")) {
		i.removeClass("not-selected");
		i.siblings(".sidebar__navigation__itemz").removeClass("is-selected");
		i.siblings(".sidebar__navigation__itemz").addClass("not-selected");
		i.attr("data-votes", function(e, t) {
			return Number(t) + 1;
		});
	} else {
		i.siblings(".sidebar__navigation__itemz").removeClass("not-selected");
	}
});


//View description button
var dsc_created = false;
$(".footer__outer-wrap").prepend('		\
	<div style="z-index: 9999" class="popup__desc-loading popup">		\
	<i class="popup__icon fa fa-spinner fa-spin"></i>		\
	<p class="popup__heading"><span class="popup__heading__bold">Loading ...</span></p>		\
	<p class="popup__actions">		\
	<span class="b-close">Close</span>		\
	</p>		\
	</div>		\
	<div style="z-index: 9999; max-width:1000px" class="popup__desc-display popup">		\
	<i class="popup__icon fa fa-file-text-o"></i>		\
	<p class="popup__heading"></p>		\
	<p class="popup__actions">		\
	<span class="b-close">Close</span>		\
	</p>		\
	</div>			\
	<div style="z-index: 9999; " class="popup__desc-error popup">		\
	<i class="popup__icon fa fa-exclamation-circle"></i>		\
	<p class="popup__heading"><span class="popup__heading__bold">No description found!</span></p>		\
	<p class="popup__actions">		\
	<span class="b-close">Close</span>		\
	</p>		\
	</div>');

//Giveaway description
$(document).on('click', '.open--desc', function() {
	var t = $(this);
	var link = $(t).closest(".giveaway__row-outer-wrap").find(".giveaway__heading__name").attr("href");
	$(".popup__desc-loading").bPopup({
		opacity: 0.85,
		fadeSpeed: 200,
		followSpeed: 500,
		modalColor: "#3c424d",
		onClose: function() {
			req.abort();
		}
	});
	var req = $.ajax({
		url: link,
		success: function(source) {
			$(".popup__desc-loading").hide();
			var desc = $(source).find(".page__description").html();
			if (desc) {
				$(".popup__desc-display").find(".popup__heading").html('<span class="popup__heading__bold">Description:</span><br><div class=\"popup--content page__description\" style=\"word-break: break-all;text-align:left;\">' + desc + "</div>");
				$(".popup__desc-loading").find(".b-close").trigger("click");
				$(".popup__desc-display").bPopup({
					opacity: 0.85,
					fadeSpeed: 200,
					followSpeed: 500,
					modalColor: "#3c424d",
					onClose: function() {
						req.abort();
					}
				});
			} else {
				$(".popup__desc-loading").find(".b-close").trigger("click");
				$(".popup__desc-error").find(".popup__heading__bold").text("No description found!");
				$(".popup__desc-error").bPopup({
					opacity: 0.85,
					fadeSpeed: 200,
					followSpeed: 500,
					modalColor: "#3c424d",
					onClose: function() {
						req.abort();
					}
				});
			}
		},
		error: function() {
			$(".popup__desc-loading").find(".b-close").trigger("click");
			$(".popup__desc-error").find(".popup__heading__bold").text("Connection failed!");
			$(".popup__desc-error").bPopup({
				opacity: 0.85,
				fadeSpeed: 200,
				followSpeed: 500,
				modalColor: "#3c424d",
				onClose: function() {
					req.abort();
				}
			});
		}
	});
});

//Giveaway filtering
$('.giveaway__row-outer-wrap').filter_ga();
if (path == '/') {
	$(".page__heading__breadcrumbs:first").after('<div class="filter" style="cursor:pointer"><i style="margin-left:5px;display:inline" class="fa fa-filter"><i style="margin-left:5px;width:10px;" class="fa fa-caret-left"></div>');
	var f_lv_min = GM_getValue("esg_f_min_level", 0);
	var f_lv_max = GM_getValue("esg_f_max_level", 10);
	var f_ch_min = GM_getValue("esg_f_min_chance", 0);
	var f_ch_max = GM_getValue("esg_f_max_chance", 100);
	var f_p_min = GM_getValue("esg_f_min_points", 0);
	var f_p_max = GM_getValue("esg_f_max_points", 100);
	var f_group = GM_getValue("esg_f_group", 1);
	var f_white = GM_getValue("esg_f_whitelist", 1);
	var f_region = GM_getValue("esg_f_regionrestricted", 1);
	var f_community = GM_getValue("esg_f_community", 1);
	var f_c_min = GM_getValue("esg_f_min_copies", 1);
	var f_c_max = Math.min(GM_getValue("esg_f_max_copies", 1000),1000);

	$(".page__heading:first").after('<div class="filter-content pinned-giveaways" style="display:none;">			\
		<table class="filter_table">	\
		<tr>	\
		<td width="50%">	\
		Level <span class="f_lv">' + (f_lv_min == f_lv_max ? f_lv_min : f_lv_min + " - " + f_lv_max) + '</span>			\
		<div class="filter__slider form__slider_filter--level ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">	\
		<div style="width: 0%;" class="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min"></div>	\
		<span style="left: 0%;" class="ui-slider-handle ui-state-default ui-corner-all" tabindex="1">	\
		</span></div>	\
		</td>	\
		<td width="25%"><div class="form__checkbox cb__three" save="esg_f_group">	\
		<i class="fa fa-circle-o"' + (f_group <= 0 ? "" : ' style="display:none"') + '></i>	\
		<i class="fa fa-check-circle"' + (f_group == 1 ? "" : ' style="display:none"') + '></i>		\
		<i class="fa fa-circle"' + (f_group >= 2 ? "" : ' style="display:none"') + '></i> Group	\
		</div>\
		</td>		\
		<td width="25%"><div class="form__checkbox cb__three" save="esg_f_whitelist">	\
		<i class="fa fa-circle-o"' + (f_white <= 0 ? "" : ' style="display:none"') + '></i>	\
		<i class="fa fa-check-circle"' + (f_white == 1 ? "" : ' style="display:none"') + '></i>		\
		<i class="fa fa-circle"' + (f_white >= 2 ? "" : ' style="display:none"') + '></i> Whitelist	\
		</div>\
		</td>		\
		</tr>		\
		<tr>	\
		<td>	\
		Chance <span class="f_chance">' + (f_ch_min == f_ch_max ? f_ch_min : f_ch_min + " - " + f_ch_max) + '</span>%			\
		<div class="filter__slider form__slider_filter--chance ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">	\
		<div style="width: 0%;" class="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min"></div>	\
		<span style="left: 0%;" class="ui-slider-handle ui-state-default ui-corner-all" tabindex="1">	\
		</span></div>	\
		</td>	\
		<td><div class="form__checkbox cb__three" save="esg_f_regionrestricted">	\
		<i class="fa fa-circle-o"' + (f_region <= 0 ? "" : ' style="display:none"') + '></i>	\
		<i class="fa fa-check-circle"' + (f_region == 1 ? "" : ' style="display:none"') + '></i>		\
		<i class="fa fa-circle"' + (f_region >= 2 ? "" : ' style="display:none"') + '></i> Region restricted	\
		</div>\
		</td>		\
		<td><div class="form__checkbox cb__three" save="esg_f_community">	\
		<i class="fa fa-circle-o"' + (f_community <= 0 ? "" : ' style="display:none"') + '></i>	\
		<i class="fa fa-check-circle"' + (f_community == 1 ? "" : ' style="display:none"') + '></i>		\
		<i class="fa fa-circle"' + (f_community >= 2 ? "" : ' style="display:none"') + '></i> Community Voted	\
		</div>\
		</td>		\
		</tr>		\
		<tr>	\
		<td>	\
		Entry cost <span class="f_points">' + (f_p_min == f_p_max ? f_p_min : f_p_min + " - " + f_p_max) + '</span>P			\
		<div class="filter__slider form__slider_filter--points ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">	\
		<div style="width: 0%;" class="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min"></div>	\
		<span style="left: 0%;" class="ui-slider-handle ui-state-default ui-corner-all" tabindex="1">	\
		</span></div>	\
		</td>	\
		<td>	\
		</td>		\
		<td>	\
		</td>		\
		</tr>		\
		<tr>	\
		<td>	\
		Copies <span class="f_copies"><span class="f_min_copy">' + (f_c_min == f_c_max ? (f_c_max==1000? "&infin;": f_c_max) : f_c_min + "</span> - <span class=\"f_max_copy\">" + (f_c_max==1000? "&infin;":f_c_max)) + '</span></span>			\
		<div class="filter__slider form__slider_filter--copies ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">	\
		<div style="width: 0%;" class="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min"></div>	\
		<span style="left: 0%;" class="ui-slider-handle ui-state-default ui-corner-all" tabindex="1">	\
		</span></div>	\
		</td>	\
		<td><span style=\"float:right;margin-right:30px\">Hints:</span>	\
		</td>	\
		<td style="color:#587cd7">\
		<i class="fa fa-circle-o"></i> - Hide	\
		<i class="fa fa-check-circle"></i> - Show		\
		<i class="fa fa-circle"></i> - Only	\
		</td>		\
		</tr>		\
		</table></div>		\
		');
    $(document).on("click",".f_min_copy",function () {
        var val = prompt("Minimum copy:");
        var int = Number(val);
        if(!$.isNumeric(val) || int <= 0)
        {
         alert("Invalid number")
         return
        }
        var max = GM_getValue("esg_f_max_copies", 1000)
        if(int > max)
        {
         alert("The minimum value can't be higher than the maximum value.")
         return
        }
        
        GM_setValue("esg_f_min_copies", int);
        var min = int;
              
        
        $(".f_copies").html("<span class=\"f_min_copy\">"+(min == max ? (max==1000? "&infin;":max) : min )+ "</span> - <span class=\"f_max_copy\">" + (max==1000? "&infin;":max)+"</span>");
        
        $('.form__slider_filter--copies').slider('values',0,min).slider('values',1,max);
        
        $('.giveaway__row-outer-wrap').filter_ga();
    });
    
    $(document).on("click",".f_max_copy",function () {
        var val = prompt("Maximum copy: (1000 means infinity)");
        var int = Number(val);
        if(!$.isNumeric(val) || int > 1000)
        {
         alert("Invalid number")
         return
        }
        var min = GM_getValue("esg_f_min_copies", 1)
        if(int < min)
        {
         alert("The maximum value can't be lower than the minimum value.")
         return
        }
        
        GM_setValue("esg_f_max_copies", int);
        var max = int;
              
        
        $(".f_copies").html("<span class=\"f_min_copy\">"+(min == max ? (max==1000? "&infin;":max) : min )+ "</span> - <span class=\"f_max_copy\">" + (max==1000? "&infin;":max)+"</span>");
        
        $('.form__slider_filter--copies').slider('values',0,min).slider('values',1,max);
        
        $('.giveaway__row-outer-wrap').filter_ga();
    });
    
	
	Math.easeIn = function (val, min, max, strength) {
		val /= max;
		return (max-1)*Math.pow(val, strength) + min;
	};
	$('.form__slider_filter--level').slider({
		range: true,
		values: [f_lv_min, f_lv_max],
		min: 0,
		max: 10,
		slide: function(event, ui) {
			GM_setValue("esg_f_min_level", ui.values[0]);
			GM_setValue("esg_f_max_level", ui.values[1]);

			$(".f_lv").text(ui.values[0] == ui.values[1] ? ui.values[0] : ui.values[0] + " - " + ui.values[1]);
			$('.giveaway__row-outer-wrap').filter_ga();
		}
	});
	$('.form__slider_filter--chance').slider({
		range: true,
		values: [f_ch_min, f_ch_max],
		min: 0.0,
		max: 100.0,
		step:0.01,
		slide: function(event, ui) {
			var min=Math.round((ui.values[0]<20.0?(ui.values[0]/20.0):((ui.values[0]-20)*1.25))*100.0)/100.0;
			var max=Math.round((ui.values[1]<20.0?(ui.values[1]/20.0):((ui.values[1]-20)*1.25))*100.0)/100.0;
			GM_setValue("esg_f_min_chance", min);
			GM_setValue("esg_f_max_chance", max);

			$(".f_chance").text(min == max ? min : min + " - " + max);
			$('.giveaway__row-outer-wrap').filter_ga();
		}
	});
	$('.form__slider_filter--points').slider({
		range: true,
		values: [f_p_min, f_p_max],
		min: 0,
		max: 100,
		slide: function(event, ui) {
			GM_setValue("esg_f_min_points", ui.values[0]);
			GM_setValue("esg_f_max_points", ui.values[1]);

			$(".f_points").text(ui.values[0] == ui.values[1] ? ui.values[0] : ui.values[0] + " - " + ui.values[1]);
			$('.giveaway__row-outer-wrap').filter_ga();
		}
	});
	$('.form__slider_filter--copies').slider({
		range: true,
		values: [f_c_min, f_c_max],
		min: 1,
		max: 1000,
		slide: function(event, ui) {
			var min=ui.values[0];
			var max=ui.values[1];
			GM_setValue("esg_f_min_copies", min);
			GM_setValue("esg_f_max_copies", max);
			$(".f_copies").html("<span class=\"f_min_copy\">"+(min == max ? (max==1000? "&infin;":max) : min) + "</span> - <span class=\"f_max_copy\">" + (max==1000? "&infin;":max)+"</span>");
			$('.giveaway__row-outer-wrap').filter_ga();
		}
	});
	$(".filter").click(function() {
		if ($(".filter-content").slideToggle(500).is(":hidden"))
			$(this).find(".fa:last").removeClass("fa-caret-down").addClass("fa-caret-left");
		else
			$(this).find(".fa:last").removeClass("fa-caret-left").addClass("fa-caret-down");
	});
	$(".cb__three").click(function() {
		var icon = $(this).find("i:visible");
		var s = 0;
		if ($(icon).hasClass("fa-circle-o")) {
			$(this).find(".fa-circle-o").hide();
			$(this).find(".fa-check-circle").show();
			$(this).find(".fa-circle").hide();
			s = 1;
		} else if ($(icon).hasClass("fa-check-circle")) {
			$(this).find(".fa-circle-o").hide();
			$(this).find(".fa-check-circle").hide();
			$(this).find(".fa-circle").show();
			s = 2;
		} else if ($(icon).hasClass("fa-circle")) {
			$(this).find(".fa-circle-o").show();
			$(this).find(".fa-check-circle").hide();
			$(this).find(".fa-circle").hide();
			s = 0;
		}
		GM_setValue($(this).attr("save"), s);
		$('.giveaway__row-outer-wrap').filter_ga();
	});
}
