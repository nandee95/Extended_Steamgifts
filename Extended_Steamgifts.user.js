// ==UserScript==
// @name        Extended Steamgifts
// @description	New features for Steamgifts.com
// @author		Nandee
// @namespace	esg
// @include		*steamgifts.com*
// @version		2.0.2
// @downloadURL	https://github.com/nandee95/Extended_Steamgifts/raw/master/Extended_Steamgifts.user.js
// @updateURL	https://github.com/nandee95/Extended_Steamgifts/raw/master/Extended_Steamgifts.user.js
// @supportURL  http://steamcommunity.com/groups/extendedsg/discussions/0/
// @icon        https://raw.githubusercontent.com/nandee95/Extended_Steamgifts/master/img/logo.png
// @homepage    http://steamcommunity.com/groups/extendedsg
// @run-at		document-end
// @grant       none
// ==/UserScript==
/*
Changelog:
1.5.2[BETA] (03-24-2015)
- First release
1.5.3[BETA] (03-25-2015)
- Changed 'Miss' to 'Remove'
- Fixed enter button on profile page
- Blue line fixed behind the header
- Giveaway filter fix
- Dropdown menu fix
- Fixed Options (Scroll to top)
- Added description button
- Fixed problems with home page
- Changed some icons
1.5.4[BETA] (03-28-2015)
- Fixed problems with description button
- Fixed wishlist hightlight
- Added support for SGv2 Dark Theme
- Added hide entered giveaway feaure (default disabled)
- Redesigned Recommended sales (sidebar)
- Redesigned Active discussions (sidebar)
- Small bugfixes
- Redesigned wishlist highlight
1.5.5 (07-16-2015)
- Fixed font problem
- Fixed sidebar
- Fixed endless scrolling
- Fixed Wishlist - Featured giveaway problem
- Fixed chance problem with more than 1k copies giveaways
- Removed point refresh feature
- Removed recommended sales feature
- Changed icon
2.0 (11-15-2015)
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
2.0.1 (11-17-2015)
- Fixed point updater in options
- Colored menu icons
- Fixed auto scrolling in table based pages
- Added auto scrolling to comment based pages
2.0.2 (11-19-2015)
- fixed multiple pages problem
- fixed comment reply
- [FREE] giveaway mark

TODO:
- Entered section autoscroll
- Comment positon
- Comment reply

 */

this.GM_getValue=function (key,def) {
	return localStorage[key] || def;
};
this.GM_setValue=function (key,value) {
	return localStorage[key]=value;
};

//Styles
$("body").prepend("										\
<style>													\
.giveaway__chance										\
{														\
	display: block;										\
	padding-left: 5px;									\
	font-weight: bold;									\
	white-space: pre;									\
}														\
.sidebar__entry-custom									\
{														\
	display: inline-block;  							\
	margin: 0 -10px 0 -10px !important; 				\
	padding: 0 8px 0 8px !important;   					\
	min-width: 50px;									\
	font-family: 'Arial',sans-serif;  					\
	font-size: 11px;									\
	line-height: 26px;									\
}		\
.sidebar__navigation__itemz:hover .sidebar__navigation__item__underline    \
{	\
border-bottom:2px solid transparent !important;	\
}			\
.sidebar__navigation__item__title	\
{	\
	font-weight:bold;	\
	font-size: 15px;	\
}	\
.sidebar__navigation__itemz	\
{	\
	font-size: 13px;	\
	}	\
	.filter_table		\
{		\
	width:100%;	\
	}		\
	.filter_table td		\
{		\
	padding:0;		\
	vertical-align: middle; \
	}		\
	.scroll-top \
{	\
	cursor: pointer; \
	position: fixed; \
	bottom: 10px; \
	right: 40px; \
	transform: rotate(-90deg); \
	opacity: 0.75; \
	z-index: 50; \
	padding: 10px !important; \
	display: block; \
	}	\
	.page-loading \
{	\
	width: 160px; \
	height:24px; \
	margin: 5px auto 5px auto; \
	display:block; \
	}	\
	");

//Read some values
var path = window.location.pathname;
var xsrf = $('input[type=hidden][name=xsrf_token]').val();
var loggedin = ($('.nav__sits').length > 0) ? false : true;
var lastpage=($(".pagination__navigation:contains('Next')").length==0);
var currentpage = Number($('.pagination__navigation').find('.is-selected').attr('data-page-number'));
var hash = $(location).attr('hash');
var ver = GM_info.script.version;
var username = $(".nav__avatar-outer-wrap").attr("href").replace("/user/", "");
var pagename = $('.page__heading__breadcrumbs:first').text();
var pagination_url = "http://"+window.location.hostname+$(".pagination__navigation").find("a:last").attr("href");

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
		for (i = 0; i < tempArray.length; i++) {
			if (tempArray[i].split('=')[0] != param) {
				newAdditionalURL += temp + tempArray[i];
				temp = "&";
			}
		}
	}

	var rows_txt = temp + "" + param + "=" + paramVal;
	return baseURL + "?" + newAdditionalURL + rows_txt;
}

//Options
if (path.match('^/account/')) {
	var options_selected = false,
	about_selected = false;
	$(".sidebar__navigation:last").after("  \
		<h3 class=\"sidebar__heading\">Extended Steamgifts</h3>   \
		<ul class=\"sidebar__navigation\">   \
		<li class=\"sidebar__navigation__item esg__options\">   \
		<a class=\"sidebar__navigation__item__link\" href=\"/account/profile/sync#esg_options\">   \
		<div class=\"sidebar__navigation__item__name\">Options</div>   \
		<div class=\"sidebar__navigation__item__underline\"></div>   \
		</a>   \
		</li>   \
		<li class=\"sidebar__navigation__item esg__about\">   \
		<a class=\"sidebar__navigation__item__link\" href=\"/account/profile/sync#esg_about\">   \
		<div class=\"sidebar__navigation__item__name\">About</div>   \
		<div class=\"sidebar__navigation__item__underline\"></div>   \
		</a>   \
		</li>   \
		</ul>");
	$(".esg__options").click(display_options);
	$(".esg__about").click(display_about);
	if (hash == "#esg_options")
		display_options();
	if (hash == "#esg_about")
		display_about();
}

window.onhashchange = function () {
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
		<div class=\"form__row\" value=\"" + val + "\" key=" + save + ">   \
		<div class=\"form__heading\"><div class=\"form__heading__number\">" + count + ".</div><div class=\"form__heading__text\">" + name + "</div></div><div class=\"form__row__indent\">   \
		<div class=\"form__checkbox cb__yes" + (val ? " is-selected" : "") + "\">   \
		<i class=\"form__checkbox__default fa fa-circle-o\"></i><i class=\"form__checkbox__hover fa fa-circle\"></i><i class=\"form__checkbox__selected fa fa-check-circle\"></i> Enabled   \
		</div>   \
		<div class=\"form__checkbox cb__no" + (val ? "" : " is-selected") + "\">   \
		<i class=\"form__checkbox__default fa fa-circle-o\"></i><i class=\"form__checkbox__hover fa fa-circle\"></i><i class=\"form__checkbox__selected fa fa-check-circle\"></i> Disabled   \
		</div>   \
		</div>   \
		</div>   \
		";
	}
	addToOptions("Enter/Remove button", "esg_enterremove", 1);
	addToOptions("Endless scrolling", "esg_autoscroll", 1);
	addToOptions("Display chances", "esg_chances", 1);
	addToOptions("Fixed header", "esg_fixedheader", 1);
	addToOptions("Refresh points (60sec)", "esg_refresh", 0);
	addToOptions("Scroll to top button", "esg_scrolltop", 1);
	addToOptions("Hide entered giveaways", "esg_hideentered", 0);
	page.html("				\
		<div class=\"page__heading\"> \
		<div class=\"page__heading__breadcrumbs\">   \
		<a>Extended Steamgifts</a>   \
		<i class=\"fa fa-angle-right\">   \
		</i><a href=\"/account/profile/sync#esg_options\">Options</a>   \
		</div></div>    \
		<form>						\																	\
		<div class=\"form__rows\">" + content + "																\
		<div value=\"\" class=\"form__submit-button\"><i class=\"fa fa-arrow-circle-right\"></i> Save Changes</div>	\
		</div>																								\
		</div>");
	$(".cb__yes").click(function () {
		$(this).addClass("is-selected").removeClass("is-disabled");
		$(this).parent().find(".cb__no").removeClass("is-selected").addClass("is-disabled");
		$(this).closest(".form__row").attr("value", "1");
	});
	$(".cb__no").click(function () {
		$(this).addClass("is-selected").removeClass("is-disabled");
		$(this).parent().find(".cb__yes").removeClass("is-selected").addClass("is-disabled");
		$(this).closest(".form__row").attr("value", "0");
	});
	$(".form__submit-button").click(function () {
		$(".form__row").each(function () {
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

	page.html("  \
		<div class=\"page__heading\"> \
		<div class=\"page__heading__breadcrumbs\">   \
		<a>Extended Steamgifts</a>   \
		<i class=\"fa fa-angle-right\">   \
		</i><a href=\"/account/profile/sync#esg_about\">About</a>   \
		</div></div>    \
		<div class=form__rows><div style=\"float:right;width:200px;text-align:center;margin-bottom:5px\">			\
		<span style=\"font-size:25px\">If you want to <br>support me:</span>\
		<form style=\"width: 150px;padding-left:25px;padding-top:10px;margin-bottom:-15px\" action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">   \
		<input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">   \
		<input type=\"hidden\" name=\"hosted_button_id\" value=\"M62RESN46NKWS\">   \
		<input style=\"border:none;padding:0;\" type=\"image\" src=\"https://raw.githubusercontent.com/nandee95/Extended_Steamgifts/master/img/buy_me_a_beer.png\" border=\"0\" name=\"submit\" alt=\"PayPal - The safer, easier way to pay online!\">   \
		<img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\">   \
		</form> <br><center style=\"font-size: 50px;font-weight:bold\">OR</center><br>	\
		<a target=\"_blank\" href=\"https://steamcommunity.com/tradeoffer/new/?partner=95793561&token=HxnczDWg\"><img src=\"https://raw.githubusercontent.com/nandee95/Extended_Steamgifts/master/img/steam_donate.png\"></a>			\
		</div>\
		<p style=font-size:30px>Extended Steamgifts " + ver + " By: Nandee &copy; 2014-2015<br>  <br><a alt=\"Steam Profile\" href=\"http://steamcommunity.com/profiles/76561198056059289\"><p style=font-size:25px><img style=width:70% src=\"http://steamsignature.com/card/1/76561198056059289.png\"></a>  \
		</p></span>  </div> \
		");
}

//Active Discussions

if ((path == '/' || path == "/giveaways/") && Number(GM_getValue("esg_autoscroll", 1))) {
	if ($(".page__heading__breadcrumbs:contains('Active Discussions')").length) {
		var c1 = "";
		$(".page__heading__breadcrumbs:contains('Active Discussions')").closest(".page__heading").next()
		.find(".table__rows").find(".table__row-outer-wrap").each(function () {
			var img = $(this).find(".global__image-inner-wrap").css('background-image');
			img = img.replace('url(', '').replace(')', '').replace('"', '').replace('"', '');
			var otitle = $(this).find(".table__column__heading").text();
			var url = $(this).find(".table__column__heading").attr("href");
			var comments = $(this).find(".text-center").text();
			var topic = $(this).find(".table__column__secondary-link").eq(0).text();
			var owner = $(this).find(".table__column__secondary-link").eq(1).text();
			var created = $(this).find(".table__column__secondary-link").eq(0).closest("p").find("span").text();
			var title = otitle;
			/*if (title.length > 25)
				title = title.substring(0, 22) + "...";
            */

			c1 += '<li class="sidebar__navigation__itemz">	\
			<a class="sidebar__navigation__item__link" href="' + url + '" title="' + otitle + '" >	\
			<i class="global__image-outer-wrap global__image-outer-wrap--avatar-small">	\
			<div class="global__image-inner-wrap" style="background-image:url(' + img + ');"></div></i>	\
			</div>	\
			<div class="sidebar__navigation__item__underline">	\
<div class="sidebar__navigation__item__title" style="max-width:270px;white-space: nowrap;overflow:hidden">' + title + '</div>	\
			<i class="fa fa-comment" style="color:white;text-shadow:0px 1px #AAB5C6, 0px -1px #AAB5C6, 1px 0px #AAB5C6, -1px 0px #AAB5C6"></i> ' + comments + ' Comment<br>	\
			<span style="float:right" class="sidebar__navigation__item__name">' + topic + '</span>  \
			' + created + ' by <span class="sidebar__navigation__item__name">' + owner + '</span>	\
			</div>	\
			</a>	\
			</li>';
		});
		$(".sidebar__navigation:last").after('					\
			<h3 class="sidebar__heading">Active Discussions</h3>	\
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

	if ($(".page__heading__breadcrumbs:contains('Community Voted')").length) {

		var c2 = "";
		var total_votes = 0;
		$(".page__heading__breadcrumbs:contains('Community Voted')").closest(".page__heading").next()
		.find(".table__rows").find(".table__row-outer-wrap").each(function () {
			total_votes += Number($(this).attr("data-votes"));
		});

		$(".page__heading__breadcrumbs:contains('Community Voted')").closest(".page__heading").next()
		.find(".table__rows").find(".table__row-outer-wrap").each(function () {
			var img = $(this).find(".global__image-inner-wrap").css('background-image');
			img = img.replace('url(', '').replace(')', '').replace('"', '').replace('"', '');
			var title = $(this).find(".table__column__heading").text();
			var votes = Number($(this).attr("data-votes"));
			var id = $(this).attr("data-id");
            var url=$(this).find('a').attr('href');
			var form = $(this).find("form");
			$(form).find('.poll__vote-button').css("padding", 0).addClass('poll__vote-button-sidebar');
			form = $(form).html().replace("Voted", "").replace("Vote", "");
			var percent = Math.round(votes / (total_votes > 0 ? total_votes : 1) * 10000) / 100;
			c2 += '<li class="sidebar__navigation__itemz table__row-outer-wrap' + ($(this).hasClass("is-selected") ? ' is-selected' : ' not-selected') + '" data-id=' + $(this).attr("data-id") + ' data-votes=' + votes + '>	\
			<div class="sidebar__navigation__item__link" title="' + title + '"> \
			<i class="global__image-outer-wrap global__image-outer-wrap--game-small">	\
			<div class="global__image-inner-wrap" style="background-image:url(' + img + ');"></div></i>	\
<div class="sidebar__navigation__item__underline">	\
			<div class="sidebar__navigation__item__title" style="width:150px;white-space: nowrap;overflow:hidden"><a target="_blank" href="'+url+'">' + title + '</a></div>	\
			' + votes + ' votes <br>' + percent + '%</div>       <form>' + form + '</form>     \
			</div></li>';
		});
		$(".sidebar__navigation:last").after('					\
			<h3 class="sidebar__heading">Community Voted</h3>	\
			<ul class="sidebar__navigation">	\
			' + c2 + '\
			</ul>	\
			')
	}

}

//Auto scroll
if ($(".pagination__navigation").length > 0 && Number(GM_getValue("esg_autoscroll", 1))) {
	var loading = false;
	$('.pagination').remove();
	$('.widget-container--margin-top').remove();
	$('.giveaway__row-outer-wrap:last').parent().after('<img src="https://raw.githubusercontent.com/nandee95/Extended_Steamgifts/master/img/loading.gif" class="page-loading"></div>');
	$('.table:last').after('<br><img src="https://raw.githubusercontent.com/nandee95/Extended_Steamgifts/master/img/loading.gif" class="page-loading"></div>');
	$('.comments:last').after('<br><img src="https://raw.githubusercontent.com/nandee95/Extended_Steamgifts/master/img/loading.gif" class="page-loading"></div>');
	$('page-loading').hide();
	var page = currentpage;
	$('.page__heading__breadcrumbs:first').append('<i class="fa fa-angle-right"></i><a href="' + window.location.href + '"> Page ' + page + '</a>')
	if($('.comment--submit').length>0)
	{
		$(".page__heading:contains('Comment')").after('<div class="comment--submit">'+$('.comment--submit').html()+"</div>")
		
		$('.comment--submit:last').remove()
	}

	$(window).scroll(function () {
		if (!loading && $(window).scrollTop() + $(window).height() > $(document).height() - 1000 && !lastpage) {
			loading = true;
			$('.page-loading').show();
            var pageurl = updateURLParameter(pagination_url, "page", page + 1)
				$.ajax({
					url : pageurl,
					success : function (source) {
						lastpage = (source.indexOf('<span>Next</span>') == -1)
						if (path.match('^/giveaways/') || path == "/") {
							$('.giveaway__row-outer-wrap:last').parent().after('<div class="page__heading"><div class="page__heading__breadcrumbs"><a href="/">Giveaways</a> <i class="fa fa-angle-right"></i> <a href="' + pageurl + '">Page ' + (page + 1)+ '</a></div></div><div>' + $(source).find('.giveaway__row-outer-wrap:last').parent().html() + '</div>')
							$(".giveaway__row-outer-wrap:last").parent().find(".giveaway__row-outer-wrap").format_ga().filter_ga();
						} else if ($('.table').length > 0) {
							
              var mainurl=pageurl.substring(0, pageurl.indexOf('&'));
						
							$('.table:last').after('<div class="page__heading"><div class="page__heading__breadcrumbs"><a href="' + mainurl + '">' + pagename + '</a> <i class="fa fa-angle-right"></i> <a href="'+pageurl+'">Page ' + (page + 1)+ '</a></div></div><div class="table">' + $(source).find('.table').html() + '</div>')
						}
						else if ($('.comments').length > 0) {
							
              var mainurl=pageurl.substring(0, pageurl.indexOf('&'));
							 $('.comments:last').after('<div class="page__heading"><div class="page__heading__breadcrumbs"><a href="' + mainurl + '">Comments </a> <i class="fa fa-angle-right"></i> <a href="'+pageurl+'">Page ' + (page + 1)+ '</a></div></div><div class="comments">' + $(source).find('.comments:last').html() + '</div>')
						
						}
						page++;
					},
					complete : function () {
						loading = false;
						$('.page-loading').hide();
					}
				});
		}
	});
}

if (Number(GM_getValue("esg_fixedheader", 1))) {
	$("header").css("position", "fixed");
	$("header").css("width", "100%");
	$("header").css("z-index", "100");
	$("header").css("top", "0");
	if ($(".featured__container").length > 0)
		$(".featured__container").css("margin-top", "38px");
	else
		$(".page__outer-wrap").css("margin-top", "38px").css("right", "0");
}

//Filter
$.fn.filter_ga = function () {
	if (path != "/")
		return $(this);
	return $(this).each(function () {
		var ga = $(this);
		if ($(ga).closest(".pinned-giveaways__outer-wrap").length != 0)
			return;
		//Read some data
		var url = $(ga).find('.giveaway__heading__name').attr('href');
		var c = $(ga).find('.giveaway__heading__thin').text();
		var copies = 1,
		e = 0;
		if (c.indexOf('Copies') >  - 1) {
			copies = Number(c.substring(1, getPos(c, ' ', 1)));
		}

		var entered = $(ga).find('.giveaway__row-inner-wrap').hasClass('is-faded');
		var e = $(ga).find('.giveaway__links').find('span:first').text().replace(/\,/g, '');
		e = e.substring(0, getPos(e, ' ', 1));
		var entries = Number(e);

		var chance = 0;
		if (entries <= 0)
			chance = 100;
		else
			chance = Math.round(copies / (entries + 1) * 10000) / 100;
		if (chance > 100)
			chance = 100;

		var req = Number($(ga).find(".giveaway__heading__thin:last").text().replace("(", "").replace(")", "").replace("P", ""));
		var has = Number($(".nav__points").text());
		var enough = req <= has ? true : false;

		//var wishlist=(($.inArray(url,wishlist)!=-1)?true:false);
		var group = $(ga).find('.giveaway__column--group').length > 0 ? 1 : 0
			var whitelist = $(ga).find('.giveaway__column--whitelist').length > 0 ? 1 : 0
			var regionrestricted = $(ga).find('.giveaway__column--region-restricted').length > 0 ? 1 : 0
			var communityvoted = $(ga).find('.giveaway__column--community-voted').length > 0 ? 1 : 0
			var level = 0;
		if ($(ga).find(".giveaway__column--contributor-level").length != 0)
			level = Number($(ga).find(".giveaway__column--contributor-level").text().replace("Level", "").replace("+", "").trim());

		if (!(GM_getValue("esg_f_min_level", 0) <= level && level <= GM_getValue("esg_f_max_level", 10)))
			$(ga).hide();
		else if (!(GM_getValue("esg_f_min_chance", 0) <= chance && chance <= GM_getValue("esg_f_max_chance", 100)))
			$(ga).hide();
		else if (!(GM_getValue("esg_f_min_points", 0) <= req && req <= GM_getValue("esg_f_max_points", 100)))
			$(ga).hide();
		else if ((GM_getValue("esg_f_group", 1) == 0 && group) || (GM_getValue("esg_f_group", 1) == 2 && !group))
			$(ga).hide();
		else if ((GM_getValue("esg_f_whitelist", 1) == 0 && whitelist) || (GM_getValue("esg_f_whitelist", 1) == 2 && !whitelist))
			$(ga).hide();
		else if ((GM_getValue("esg_f_regionrestricted", 1) == 0 && regionrestricted) || (GM_getValue("esg_f_regionrestricted", 1) == 2 && !regionrestricted))
			$(ga).hide();
		else if ((GM_getValue("esg_f_community", 1) == 0 && communityvoted) || (GM_getValue("esg_f_community", 1) == 2 && !communityvoted))
			$(ga).hide();
		else
			$(ga).show();
	});
}
//Giveaway function
$.fn.format_ga = function () {
	return $(this).each(function () {
		var ga = $(this);

		//Read some data
		var url = $(ga).find('.giveaway__heading__name').attr('href');
		var code = url.substring(getPos(url, '/', 2) + 1, getPos(url, '/', 3));

		var c = $(ga).find('.giveaway__heading__thin').text();
		var copies = 1,
		e = 0;
		if (c.indexOf('Copies') >  - 1) {
			copies = Number(c.substring(1, getPos(c, ' ', 1)).replace("(", "").replace("(", "").replace(",", ""));
		}

		var entered = $(ga).find('.giveaway__row-inner-wrap').hasClass('is-faded');
		var e = $(ga).find('.giveaway__links').find('span:first').text().replace(/\,/g, '');
		e = e.substring(0, getPos(e, ' ', 1));
		var entries = Number(e);

		var chance = 0;
		if (entries <= 0)
			chance = 100;
		else
			chance = Math.round(copies / (entries + 1) * 10000) / 100;
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

		//Display chances
		if (Number(GM_getValue("esg_chances", 1)) || loggedin) {
			var color;
			if (chance == 100)
				color = "red";
			else
				color = 'rgb(' + Math.round(150 - chance) + ',' + Math.round(150 - chance) + ',' + Math.round(150 - chance) + ')';
			$(ga).find('.giveaway__heading').append('<span style="color:' + color + '" class="giveaway__chance">' + chance.toFixed(2) + '% chance</span>');
		}

		//Enter/Remove button
		if (Number(GM_getValue("esg_enterremove", 1)) && loggedin && active && user != username) {
			$(ga).find('.giveaway__row-inner-wrap').removeClass('is-faded');
			$(ga).find(".giveaway__columns").append("<form>   \
				<input type=\"hidden\" name=\"xsrf_token\" value=\"" + xsrf + "\" />   \
				<input type=\"hidden\" name=\"do\" value=\"\" />   \
				<input type=\"hidden\" name=\"code\" value=\"" + code + "\" />   \
				<div data-do=\"entry_insert\" class=\"sidebar__entry-custom sidebar__entry-insert" + (!entered && enough ? "" : " is-hidden") + "\"><i class=\"fa fa-plus-circle\"></i> Enter</div>   \
				<div data-do=\"entry_delete\" class=\"sidebar__entry-custom sidebar__entry-delete" + (entered ? "" : " is-hidden") + "\"><i class=\"fa fa-minus-circle\"></i> Remove</div>   \
				<div class=\"sidebar__entry-custom sidebar__entry-loading is-hidden\"><i class=\"fa fa-refresh fa-spin\"></i> Wait</div>   \
				<div class=\"sidebar__entry-custom sidebar__error " + (!enough && !entered ? "" : " is-hidden") + "\">" + (!enough && !entered ? "<i class=\"fa fa-exclamation-circle\"></i> Not enough points" : "") + "</div>   \
				</form>");
		}

		//Mark new giveaways
		if (Number(GM_getValue("esg_h_new", 1)) && newga) {
			$(ga).find(".giveaway__heading__name").prepend('<font color="#BFBF00">[NEW]</font> ');
		}
		if (Number(GM_getValue("esg_h_new", 1)) && req==0) {
			$(ga).find(".giveaway__heading__name").prepend('<font color="#00BFBF">[FREE]</font> ');
		}

		//Description
		$(ga).find(".giveaway__hide").after("<i class=\"giveaway__icon fa fa-file-text-o open--desc\"></i>");

		//Hide entered
		if (Number(GM_getValue("esg_hideentered", 0)) && entered) {
			$(ga).addClass("is-hidden");
		}
	});
};

//Format giveaways (on load)
$('.giveaway__row-outer-wrap').format_ga();

//Enter/Remove Button click
setTimeout(function () {
	$(".sidebar__entry-insert, .sidebar__entry-delete").unbind("click");
	$(document).on('click', '.sidebar__entry-insert, .sidebar__entry-delete', function () {
		var t = $(this);
		t.addClass("is-hidden"),
		t.closest("form").find(".sidebar__entry-loading").removeClass("is-hidden"),
		t.closest("form").find("input[name=do]").val(t.attr("data-do")),
		$.ajax({
			url : "/ajax.php",
			type : "POST",
			dataType : "json",
			data : t.closest("form").serialize(),
			success : function (e) {
				t.closest("form").find(".sidebar__entry-loading").addClass("is-hidden"),
				"success" === e.type ? t.hasClass("sidebar__entry-insert") ? t.closest("form").find(".sidebar__entry-delete").removeClass("is-hidden") : t.hasClass("sidebar__entry-delete") && t.closest("form").find(".sidebar__entry-insert").removeClass("is-hidden") : "error" === e.type && t.closest("form").find(".sidebar__error").removeClass("is-hidden").html("undefined" != typeof e.link && e.link !== !1 ? '<a href="' + e.link + '><i class="fa fa-exclamation-circle"></i> ' + e.msg + "</a>" : '<i class="fa fa-exclamation-circle"></i> ' + e.msg),
				"undefined" != typeof e.entry_count && e.entry_count !== !1 && $(".live__entry-count").text(e.entry_count),
				$(".nav__points").text(e.points)
				if (Number(GM_getValue("esg_hideentered", 0)) && "success" === e.type && !t.closest(".sidebar__entry-delete").hasClass("is-hidden")) {
					$(t).closest(".giveaway__row-outer-wrap").hide("blind", {}, 500);
				}
				update_gas(e.points);
			}
		});
	});
	$(document).on('click', '.sidebar__error', function () {
		$(this).addClass("is-hidden").parent().find(".sidebar__entry-insert").removeClass("is-hidden");
	});
}, 10);
function update_gas(p) {
	if (p == -1)
		p = Number($(".nav__points").text());
	$('.giveaway__row-outer-wrap').each(function () {
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
if(GM_getValue("esg_refresh",0))
	{
	setInterval(function () {
	$.ajax({
	url: "/ajax.php",
	type: "POST",
	dataType: "json",
	data: "xsrf_token="+xsrf+"&do=entry_insert",
	success: function(e) {
	if($(".nav__points").text()!=e.points)
	{
	$(".nav__points").text(e.points);
	update_gas(e.points);
	}
	}
	});
	},60000);
}
 

//Scroll to top
if (Number(GM_getValue("esg_scrolltop", 1))) {
	$("body").prepend("<div class=\"scroll-top form__submit-button\">&gt;</div>");
	$(".scroll-top").hide();
	$(".scroll-top").click(function () {
		$('html, body').animate({
			scrollTop : 0
		}, 'fast');
	});
	var state = 0;
	$(window).scroll(function () {
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

//SGE menu

$(".nav__button[href|=\"/about/faq\"]").closest(".nav__button-container").before("	\
	<div class=\"nav__button-container\">		\
	<div class=\"nav__relative-dropdown is-hidden\">		\
	<div class=\"nav__absolute-dropdown\">		\
	<a class=\"nav__row\" target=\"_blank\" href=\"http://steamcommunity.com/groups/extendedsg\">		\
	<i class=\"icon-grey fa fa-fw fa-steam\"></i>		\
	<div class=\"nav__row__summary\">		\
	<p class=\"nav__row__summary__name\">Steam Group</p>		\
	<p class=\"nav__row__summary__description\">Open ESG steam group        \</p>		\
	</div>		\
	</a>		\
	<a class=\"nav__row\" href=\"http://www.steamgifts.com/discussions/search?q=extended+steamgifts\">		\
	<i class=\"icon-blue fa fa-fw fa-comment\"></i>		\
	<div class=\"nav__row__summary\">		\
	<p class=\"nav__row__summary__name\">Dicussion</p>		\
	<p class=\"nav__row__summary__description\">Steamgifts dicussion</p>		\
	</div>		\
	</a>		\
	<a class=\"nav__row\" href=\"/account/profile/sync#esg_options\">		\
	<i class=\"icon-grey fa fa-fw fa-cog\"></i>		\
	<div class=\"nav__row__summary\">		\
	<p class=\"nav__row__summary__name\">Options</p>		\
	<p class=\"nav__row__summary__description\">Open options        \</p>		\
	</div>		\
	</a>		\
	<a class=\"nav__row\" target=\"blank\" href=\"http://steamcommunity.com/groups/extendedsg/discussions/0/\">		\
	<i class=\"icon-red fa fa-fw fa-bug\"></i>		\
	<div class=\"nav__row__summary\">		\
	<p class=\"nav__row__summary__name\">Bug report</p>		\
	<p class=\"nav__row__summary__description\">Report bugs here!        \</p>		\
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
	<p class=\"nav__row__summary__description\">Extended Steamgifts " + ver + "        \</p>		\
	</div>		\
	</a>		\
	</div>		\
	</div>		\
	<a class=\"nav__button nav__button--is-dropdown\" href=\"http://www.steamgifts.com/discussion/qbPEr/extended-steamgifts-browser-addon\">ESG</a>		\
	<div class=\"nav__button nav__button--is-dropdown-arrow\"><i class=\"fa fa-angle-down\"></i></div>		\
	</div>");

//Click event fix (part of original js)
$(document).on('click', '.trigger-popup', function () {
	$("." + $(this).attr("data-popup")).bPopup({
		opacity : .85,
		fadeSpeed : 200,
		followSpeed : 500,
		modalColor : "#3c424d"
	})
});
$(document).on('click', '.giveaway__hide', function () {
	$(".popup--hide-games input[name=game_id]").val($(this).attr("data-game-id")),
	$(".popup--hide-games .popup__heading__bold").text($(this).closest("h2").find(".giveaway__heading__name").text())
});
$(document).on('click', 'nav .nav__button--is-dropdown-arrow', function () {
	var e = $(this).hasClass("is-selected");
	$("nav .nav__button").removeClass("is-selected"),
	$("nav .nav__relative-dropdown").addClass("is-hidden"),
	e || $(this).addClass("is-selected").siblings(".nav__relative-dropdown").removeClass("is-hidden"),
	t.stopPropagation()
});

$(document).on('click', '.poll__vote-button-sidebar', function () {
		var t = $(this);
		t.closest("form").find("input[name=do]").val(t.hasClass("poll__vote-button--voted") ? "poll_vote_delete" : "poll_vote_insert");
		var i = $(this).closest(".sidebar__navigation__itemz");
		$.ajax({
			url : ajax_url,
			type : "POST",
			data : t.closest("form").serialize()
		})
		$(this).closest(".poll").find(".sidebar__navigation__itemz.is-selected").attr("data-votes", function (e, t) {
			return Number(t) - 1
		})
        
		//i.toggleClass("is-selected")
        if(i.hasClass("is-selected"))
        {
            i.removeClass("not-selected")
            i.siblings(".sidebar__navigation__itemz").removeClass("is-selected")
        i.siblings(".sidebar__navigation__itemz").addClass("not-selected")
        i.attr("data-votes", function (e, t) {
				return Number(t) + 1
			})
        } else
        {
            i.siblings(".sidebar__navigation__itemz").removeClass("not-selected")
        }
	})


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
$(document).on('click', '.open--desc', function () {
	var t = $(this);
	var link = $(t).closest(".giveaway__row-outer-wrap").find(".giveaway__heading__name").attr("href");
	$(".popup__desc-loading").bPopup({
		opacity : .85,
		fadeSpeed : 200,
		followSpeed : 500,
		modalColor : "#3c424d",
		onClose : function () {
			req.abort();
		}
	});
	var req = $.ajax({
			url : link,
			success : function (source) {
				var desc = $(source).find(".page__description").html();
				if (desc) {
					$(".popup__desc-display").find(".popup__heading").html('<span class="popup__heading__bold">Description:</span><br><div class=\"popup--content page__description\" style=\"word-break: break-all;text-align:left;\">' + desc + "</div>");
					$(".popup__desc-loading").find(".b-close").trigger("click");
					$(".popup__desc-display").bPopup({
						opacity : .85,
						fadeSpeed : 200,
						followSpeed : 500,
						modalColor : "#3c424d",
						onClose : function () {
							req.abort();
						}
					});
				} else {
					$(".popup__desc-loading").find(".b-close").trigger("click");
					$(".popup__desc-error").find(".popup__heading__bold").text("No description found!");
					$(".popup__desc-error").bPopup({
						opacity : .85,
						fadeSpeed : 200,
						followSpeed : 500,
						modalColor : "#3c424d",
						onClose : function () {
							req.abort();
						}
					});
				}
			},
			error : function () {
				$(".popup__desc-loading").find(".b-close").trigger("click");
				$(".popup__desc-error").find(".popup__heading__bold").text("Connection failed!");
				$(".popup__desc-error").bPopup({
					opacity : .85,
					fadeSpeed : 200,
					followSpeed : 500,
					modalColor : "#3c424d",
					onClose : function () {
						req.abort();
					}
				});
			}
		});
});

$('.giveaway__row-outer-wrap').filter_ga();
if (path == '/') {
	$(".page__heading__breadcrumbs").eq(0).after('<div class="filter" style="cursor:pointer"><i style="margin-left:5px;display:inline" class="fa fa-filter"><i style="margin-left:5px;width:10px;" class="fa fa-caret-left"></div>');
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

	$(".page__heading").after('<div class="filter-content pinned-giveaways" style="display:none;">			\
		<table class="filter_table">	\
		<tr>	\
		<td>	\
		Level <span class="f_lv">' + (f_lv_min == f_lv_max ? f_lv_min : f_lv_min + " - " + f_lv_max) + '</span>			\
		<div class="form__slider form__slider_filter--level ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">	\
		<div style="width: 0%;" class="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min"></div>	\
		<span style="left: 0%;" class="ui-slider-handle ui-state-default ui-corner-all" tabindex="1">	\
		</span></div>	\
		</div>	\
		</td>	\
		<td><div class="form__checkbox cb__three" save="esg_f_group">	\
		<i class="fa fa-circle-o"' + (f_group == 0 ? "" : ' style="display:none"') + '></i>	\
		<i class="fa fa-check-circle"' + (f_group == 1 ? "" : ' style="display:none"') + '></i>		\
		<i class="fa fa-circle"' + (f_group == 2 ? "" : ' style="display:none"') + '></i> Group	\
		</div>\
		</td>		\
		<td><div class="form__checkbox cb__three" save="esg_f_whitelist">	\
		<i class="fa fa-circle-o"' + (f_white == 0 ? "" : ' style="display:none"') + '></i>	\
		<i class="fa fa-check-circle"' + (f_white == 1 ? "" : ' style="display:none"') + '></i>		\
		<i class="fa fa-circle"' + (f_white == 2 ? "" : ' style="display:none"') + '></i> Whitelist	\
		</div>\
		</td>		\
		</tr>		\
		<tr>	\
		<td>	\
		Chance <span class="f_chance">' + (f_ch_min == f_ch_max ? f_ch_min : f_ch_min + " - " + f_ch_max) + '</span>%			\
		<div class="form__slider form__slider_filter--chance ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">	\
		<div style="width: 0%;" class="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min"></div>	\
		<span style="left: 0%;" class="ui-slider-handle ui-state-default ui-corner-all" tabindex="1">	\
		</span></div>	\
		</div></td>	\
		<td><div class="form__checkbox cb__three" save="esg_f_regionrestricted">	\
		<i class="fa fa-circle-o"' + (f_region == 0 ? "" : ' style="display:none"') + '></i>	\
		<i class="fa fa-check-circle"' + (f_region == 1 ? "" : ' style="display:none"') + '></i>		\
		<i class="fa fa-circle"' + (f_region == 2 ? "" : ' style="display:none"') + '></i> Region restricted	\
		</div>\
		</td>		\
		<td><div class="form__checkbox cb__three" save="esg_f_community">	\
		<i class="fa fa-circle-o"' + (f_community == 0 ? "" : ' style="display:none"') + '></i>	\
		<i class="fa fa-check-circle"' + (f_community == 1 ? "" : ' style="display:none"') + '></i>		\
		<i class="fa fa-circle"' + (f_community == 2 ? "" : ' style="display:none"') + '></i> Community Voted	\
		</div>\
		</td>		\
		</tr>		\
		<tr>	\
		<td>	\
		Entry cost <span class="f_points">' + (f_p_min == f_p_max ? f_p_min : f_p_min + " - " + f_p_max) + '</span>P			\
		<div class="form__slider form__slider_filter--points ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">	\
		<div style="width: 0%;" class="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min"></div>	\
		<span style="left: 0%;" class="ui-slider-handle ui-state-default ui-corner-all" tabindex="1">	\
		</span></div>	\
		</div>	\
		</td>	\
		<td><span style=\"float:right;margin-right:30px\">Hints:</span> \
		</td> \
		<td>\
		<i class="fa fa-circle-o"></i> - Hide	\
		<i class="fa fa-check-circle"></i> - Show		\
		<i class="fa fa-circle"></i> - Only	\
		</td>		\
		</tr>		\
		</table>		\
		');
	$('.form__slider_filter--level').slider({
		range : true,
		values : [f_lv_min, f_lv_max],
		min : 0,
		max : 10,
		slide : function (event, ui) {
			GM_setValue("esg_f_min_level", ui.values[0]);
			GM_setValue("esg_f_max_level", ui.values[1]);

			$(".f_lv").text(ui.values[0] == ui.values[1] ? ui.values[0] : ui.values[0] + " - " + ui.values[1]);
			$('.giveaway__row-outer-wrap').filter_ga();
		}
	});
	$('.form__slider_filter--chance').slider({
		range : true,
		values : [f_ch_min, f_ch_max],
		min : 0,
		max : 100,
		slide : function (event, ui) {
			GM_setValue("esg_f_min_chance", ui.values[0]);
			GM_setValue("esg_f_max_chance", ui.values[1]);

			$(".f_chance").text(ui.values[0] == ui.values[1] ? ui.values[0] : ui.values[0] + " - " + ui.values[1]);
			$('.giveaway__row-outer-wrap').filter_ga();
		}
	});
	$('.form__slider_filter--points').slider({
		range : true,
		values : [f_p_min, f_p_max],
		min : 0,
		max : 100,
		slide : function (event, ui) {
			GM_setValue("esg_f_min_points", ui.values[0]);
			GM_setValue("esg_f_max_points", ui.values[1]);

			$(".f_points").text(ui.values[0] == ui.values[1] ? ui.values[0] : ui.values[0] + " - " + ui.values[1]);
			$('.giveaway__row-outer-wrap').filter_ga();
		}
	});
	$(".filter").click(function () {
		if ($(".filter-content").toggle().is(":hidden"))
			$(this).find(".fa:last").removeClass("fa-caret-down").addClass("fa-caret-left");
		else
			$(this).find(".fa:last").removeClass("fa-caret-left").addClass("fa-caret-down");
	});
	$(".cb__three").click(function () {
		var icon = $(this).find("i:visible");
		var s = -1;
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
