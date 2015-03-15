// ==UserScript==
// @name        Extended Steamgifts
// @namespace	Nandee
// @include		*steamgifts.com*
// @version		1.2
// @downloadURL	https://github.com/nandee95/Extended-Steamgifts/raw/master/Extended_Steamgifts.user.js
// @updateURL	https://github.com/nandee95/Extended-Steamgifts/raw/master/Extended_Steamgifts.user.js
// @run-at		document-end
// @grant		none
// ==/UserScript==

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
	font-family: 'Arial,sans-serif';  					\
	font-size: 11px;									\
	line-height: 26px;									\
}														\
.sale__img												\
{														\
	width:184px;										\
	height:69px;										\
}														\
.sales__line											\
{														\
	margin:5px;											\
	padding:0;											\
	border-bottom: 1px solid lightgray;					\
	width:300px;										\
}														\
.refresh__page											\
{														\
	cursor:pointer;										\
}														\
</style>												\
");

//Read some values
var path = window.location.pathname;
var xsrf = $('input[type=hidden][name=xsrf_token]').val();
var loggedin = ($('.nav__sits').length > 0) ? false : true;
var totalpage = Number($('.pagination__navigation').find('a:last').attr('data-page-number'));
var currentpage = Number($('.pagination__navigation').find('.is-selected').attr('data-page-number'));
var hash = $(location).attr('hash');

//Funcs
function getPos(str, m, i) {
	return str.split(m, i).join(m).length;
}

function get_time(time) {
    var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dnow = new Date();
    var ppos = getPos(time, ":", 1);
    var hour = Number(time[ppos - 2]) * 10 + Number(time[ppos - 1]);
    var pm = time.indexOf("pm") > -1 ? true : false;
    var newhour = pm ? hour + 12 : 12
	var t2morro= new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
	var tyest= new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
    var f = time.replace("am", "").replace("Today,", mL[dnow.getMonth()] + " " + dnow.getDate() + ", " + dnow.getFullYear() + ",").replace("pm", "").replace(hour + ":", Math.floor(newhour / 10) + newhour - Math.floor(newhour / 10) + ":").replace("Tomorrow,", mL[t2morro.getMonth()] + " " + t2morro.getDate() + ", " + t2morro.getFullYear() + ",").replace("Yesterday,", mL[tyest.getMonth()] + " " + tyest.getDate() + ", " + tyest.getFullYear() + ",");
    var dend = new Date(f);
    return dend.getTime();
}

//Options
if (path.match('^/account/'))
{
	var options_selected=false,about_selected=false;
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
    if(hash=="#esg_options")
        display_options();
    if(hash=="#esg_about")
        display_about();
}

function display_options()
{
	document.title= "Account - Extended Steamgifts - Options";
	var page=$(".widget-container").children("div:last");
    page.empty();
	$(".sidebar__navigation__item").removeClass("is-selected");
    $(".fa-caret-right:first").remove();
    $(".esg__options").find(".sidebar__navigation__item__link").prepend("<i class=\"fa fa-caret-right\"></i>");
    $(".esg__options").addClass("is-selected");
	var content="";
	var count=0;
	function addToOptions(name,save,def)
	{
		count++;
		var val=Number(GM_getValue(save,def));
		content+="		\
			<div class=\"form__row\" value=\""+val+"\" key="+save+">   \
			<div class=\"form__heading\"><div class=\"form__heading__number\">"+count+".</div><div class=\"form__heading__text\">"+name+"</div></div><div class=\"form__row__indent\">   \
			<div class=\"form__checkbox cb__yes"+(val?" is-selected":"")+"\">   \
			<i class=\"form__checkbox__default fa fa-circle-o\"></i><i class=\"form__checkbox__hover fa fa-circle\"></i><i class=\"form__checkbox__selected fa fa-check-circle\"></i> Enabled   \
			</div>   \
			<div class=\"form__checkbox cb__no"+(val?"":" is-selected")+"\">   \
			<i class=\"form__checkbox__default fa fa-circle-o\"></i><i class=\"form__checkbox__hover fa fa-circle\"></i><i class=\"form__checkbox__selected fa fa-check-circle\"></i> Disabled   \
			</div>   \
			</div>   \
			</div>   \
			";
	}
	addToOptions("Enter/Miss button","esg_entermiss",1);
	addToOptions("Auto scrolling","esg_autoscroll",1);
	addToOptions("Display Chances","esg_chances",1);
	addToOptions("Fixed header","esg_fixedheader",1);
	page.html("				\
		<div class=\"page__heading\"> \
        <div class=\"page__heading__breadcrumbs\">   \
        <a>Extended Steamgifts</a>   \
        <i class=\"fa fa-angle-right\">   \
        </i><a href=\"/account/profile/sync#esg_options\">Options</a>   \
        </div></div>    \
		<form>						\																	\
		<div class=\"form__rows\">"+content+"																\
		<div value=\"\" class=\"form__submit-button\"><i class=\"fa fa-arrow-circle-right\"></i> Save Changes</div>	\
		</div>																								\
		</div>");
	$(".cb__yes").click(function () {
		$(this).addClass("is-selected").removeClass("is-disabled");
		$(this).parent().find(".cb__no").removeClass("is-selected").addClass("is-disabled");
		$(this).closest(".form__row").attr("value","1");
	});
	$(".cb__no").click(function () {
		$(this).addClass("is-selected").removeClass("is-disabled");
		$(this).parent().find(".cb__yes").removeClass("is-selected").addClass("is-disabled");
		$(this).closest(".form__row").attr("value","0");
	});
	$(".form__submit-button").click(function () {
		$(".form__row").each(function() {
			var val=$(this).attr("value");
			var key=$(this).attr("key");
			GM_setValue($(this).attr("key"),$(this).attr("value"));
		});
		alert("Settings are saved successfully!");
	});
}

function display_about()
{
	document.title= "Account - Extended Steamgifts - About";
	var page=$(".widget-container").children("div:last");
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
            <form style=\"width: 150px; margin: 10px 0 -100px auto;\" action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">   \
            <input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">   \
            <input type=\"hidden\" name=\"hosted_button_id\" value=\"M62RESN46NKWS\">   \
            <input style=\"border:none;padding:0\" type=\"image\" src=\"https://raw.githubusercontent.com/nandee95/Extended-Steamgifts/master/img/buy-me-a-beer.png\" border=\"0\" name=\"submit\" alt=\"PayPal - The safer, easier way to pay online!\">   \
            <img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\">   \
            </form> \
            <a style=\"margin: 10px auto 10px auto; display:block;width:184px\" alt=\"Steam Profile\" href=\"http://steamcommunity.com/id/nandee95\">    \
            <img style=\"border-radius:15px;border:5px solid rgb(150,160,190)\" src=\"http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/a6/a6ecd53808894e65e86192c6177ba167ad90fab3_full.jpg\">   \
            </a>    \
            <center class=\"giveaway__heading__name\" style=\"margin:10px 0 10px 0\">Extended Steamgifts By: Nandee<br>    \
            </center>   \
			<span>Tester/thinker:</span> Pele	\
            ");
}
//Sales
if ((path == '/' || path=="/giveaways/")&& Number(GM_getValue("esg_autoscroll",1)))
{
	var c="";
	$(".table__rows:last").find(".table__row-outer-wrap").each(function () {
		var img = $(this).find(".global__image-inner-wrap").css('background-image');
		img = img.replace('url(','').replace(')','').replace('"','');
		var site=$(this).find(".table__column__secondary-link:last").text();
		var siteimg="";
		var percent=$(this).find(".table__column--width-small:first").find("span").text();
		//var wishlist=$(this).find(".fa-heart").length>0?true:false;
		
		var del=$(this).find("del");
		var before=$(del).text();
		var p=del.parent();
		$(del).remove();
		var after=$(p).text();
		
		var url=$(this).find("a:first").attr("href");
		var appid=Number(img.slice(getPos(img,"/",5)+1,getPos(img,"/",6)));
		if(site=="Steam")
		{
			siteimg="http://steamcommunity.com//favicon.ico";
		}
		else if(site=="GamersGate")
		{
			siteimg="http://www.gamersgate.com/favicon.ico";
		}
		else if(site=="GreenManGaming")
		{
			siteimg="http://www.greenmangaming.com/static/favicon.ico";
		}
		c+="<a target=\"_blank\" href=\""+url+"\">\
		<div class=\"sales__line\"><img align=\"top\" class=\"sale__img\" style=\"display:inline\" src=\""+img+"\">\
		<img style=\"display:inline;margin-left:-18px;\" src=\""+siteimg+"\">	\
		<div style=\"margin:-73px 0 5px 190px;height:69px;text-align:center\">	\
		<a style=\"float:right;margin-right:5px\" href=\"http://store.steampowered.com/app/"+appid+"\" target=\"_blank\"><i title=\"Open via Steam\" class=\"fa fa-info\"></i></a>\
		<div style='font-size:40px;font-weight:bold'>"+percent+"</div>	\
		<div style='height:20px'><s>"+before+"</s> -<i class=\"fa fa-caret-right\"></i> "+after+"</div>			\
		</div></div></a>";
	});
	var source=$(".table:last").html();
	$(".sidebar__navigation:last").after("					\
	<h3 class='sidebar__heading'>Recommended Sales</h3><div class='table' style='width:100%'>"+c+"</div>		\
	<a style=\"padding:5px;font-weight:bold;\" class=\"page__heading__button page__heading__button--green\" href=\"/sales\">More discounts<i class=\"fa fa-angle-right\"></i></a>	\
	")
}

//Auto scroll
if ((path == '/' || path=="/giveaways/") && Number(GM_getValue("esg_autoscroll",1))) {
	var loading = false;
	var ms = 0;
	$('.page__heading:contains(Giveaways)').find('a').eq(0).append(' page ' + currentpage + '/' + totalpage);
	$('.pagination').remove();
	$('.widget-container--margin-top').remove();
	var page = currentpage;
	$(window).scroll(function () {
		if (!loading && $(window).scrollTop() + $(window).height() > $(document).height() - 1000) {
			$('.giveaway__row-outer-wrap:last').after('<div class="page__heading"><div class="page__heading__breadcrumbs"><a href="/">Giveaways page ' + (page + 1) + '/' + totalpage + '</a></div><div class="refresh__page" page="' + (page + 1) + '"><i class="fa fa-refresh fa-spin"></i></div></div>');
			loading = true;
			ms = Date.now();
			$.ajax({
				url : 'http://www.steamgifts.com/giveaways/search?page=' + (page + 1),
				success : function (source) {
					$('.refresh__page:last').click(refresh_page);
					var htm = $(source).find('.widget-container').children('div:nth-child(2)');
					$($(htm).find('.giveaway__row-outer-wrap').get().reverse()).each(function (index) {
						if ($(this).parent().attr('class') != 'pinned-giveaways') {
							$(this).wrap('<div class="giveaway__row-outer-wrap"></div>');
							$('.page__heading:last').after($(this).parent().format_ga().html());
						}
					});
					var lt = (Date.now() - ms) / 1000;
					$('.page__heading__breadcrumbs:last').find('a').append('<span class=\'is-faded\' style=\'font-size:10px;margin-left:10px\'>' + lt + ' sec</span>');
					page++;
				},
				complete : function () {
					if (page < totalpage) {
						loading = false;
					}
					$('.refresh__page:last').addClass('giveaway__column--group');
					$('.refresh__page:last').find('.fa-refresh').removeClass('fa-spin');
				}
			});
		}
	});
}

function refresh_page() {
	if (!$(this).hasClass('giveaway__column--group')) {
		return;
	}
	var refreshButton = $(this);
	refreshButton.removeClass('giveaway__column--group');
	refreshButton.find('.fa-refresh').addClass('fa-spin');
	var ms = Date.now();
	var page = $(this).attr('page');
	$.ajax({
		url : 'http://www.steamgifts.com/giveaways/search?page=' + page,
		success : function (source) {
			$(refreshButton).parent().nextUntil('.page__heading').remove();
			var htm = $(source).find('.widget-container').children('div:nth-child(2)');
			$($(htm).find('.giveaway__row-outer-wrap').get().reverse()).each(function (index) {
				if ($(this).parent().attr('class') != 'pinned-giveaways') {
					$(this).wrap('<div class="giveaway__row-outer-wrap"></div>');
					$(refreshButton).parent().after($(this).parent().format_ga().html());
				}
			});
			var lt = (Date.now() - ms) / 1000;
			$(refreshButton).parent().find('a').html('Giveaways page ' + page + '/' + totalpage + '<span class="is-faded" style="font-size:10px;margin-left:10px">' + lt + ' sec</span>');
		},
		complete : function () {
			$(refreshButton).addClass('giveaway__column--group');
			$(refreshButton).find('.fa-refresh').removeClass('fa-spin');
		}
	});
}

//Fixed header
if(Number(GM_getValue("esg_fixedheader",1)))
{
	$("header").css("position","fixed");
	$("header").css("width","100%");
	$("header").css("z-index","100");
	$("header").css("top","0");
	$(".page__outer-wrap").css("margin-top","38px");
	$(".featured__container").css("margin-top","38px");
}

//Each giveaway
$.fn.format_ga = function () {
	return $(this).each(function() { 
	var ga = $(this).find('.giveaway__heading').parent().parent().parent();
	
	//Read some data
	var code = $(ga).find('.giveaway__heading__name').attr('href');
	code = code.substring(getPos(code, '/', 2) + 1, getPos(code, '/', 3));
	
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
		chance = Math.round(copies / (entries+1) * 10000) / 100;
	if (chance > 100)
		chance = 100;
	
	var time=$(this).find(".giveaway__columns").find("div:first");
	var active=1;
	if (time.text().indexOf('ago') >  - 1)
	{
		active=0;
	}
	
	var end=$(time).find("span").attr("title");
	var start=$(this).find(".giveaway__column--width-fill").find("span").attr("title");
	
	//Display chances
	if(Number(GM_getValue("esg_chances",1))||loggedin)
	{
		var color;
		if (chance == 100)
			color = "red";
		else
			color = 'rgb(' + Math.round(150 - chance) + ',' + Math.round(150 - chance) + ',' + Math.round(150 - chance) + ')';
		$(ga).find('.giveaway__heading').append('<span style="color:' + color + '" class="giveaway__chance">' + chance.toFixed(2) + '% chance</span>');
	}
	
	//Enter/Miss button
	if(Number(GM_getValue("esg_entermiss",1))&&loggedin&&active)
	{
		$(ga).find('.giveaway__row-inner-wrap').removeClass('is-faded');
		$(this).find(".giveaway__columns").append("<form>   \
            <input type=\"hidden\" name=\"xsrf_token\" value=\""+xsrf+"\" />   \
            <input type=\"hidden\" name=\"do\" value=\"\" />   \
            <input type=\"hidden\" name=\"code\" value=\""+code+"\" />   \
            <div data-do=\"entry_insert\" class=\"sidebar__entry-custom sidebar__entry-insert"+(entered?" is-hidden":"")+"\"><i class=\"fa fa-plus-circle\"></i> Enter</div>   \
            <div data-do=\"entry_delete\" class=\"sidebar__entry-custom sidebar__entry-delete"+(entered?"":" is-hidden")+"\"><i class=\"fa fa-minus-circle\"></i> Miss</div>   \
            <div class=\"sidebar__entry-custom sidebar__entry-loading is-disabled is-hidden\"><i class=\"fa fa-refresh fa-spin\"></i> Wait</div>   \
            </form>");
	}
	//time %
	/*
	var dnow = new Date();
	var e = get_time(end);
	var s = get_time(start);
	var now = dnow.getTime();
	var p=Math.floor((now-s)/(e-s)*100)
	//$(this).find(".giveaway__columns").find("span:first").text(p)
	var tt=$(this).find(".giveaway__columns").find("div:first");
	tt.css("width","150px");
	tt.clone().text("_").css("margin-left","-173px").css("width",Math.floor(1.5*p)+"px").css("margin-right",(150-(1.5*p))+"px").css("background-image","linear-gradient(#CAEEA7 0%, #B4DF8A 50%, #9AC96A 100%)").insertAfter(tt);
	*/
});
};
//Format giveaways (load)
$('.giveaway__row-outer-wrap').format_ga();

//Bugfix: Enter/Miss Button's click event call
setTimeout(function () {
$(".sidebar__entry-insert").prop ("onclick", null);
$(".sidebar__entry-delete").prop ("onclick", null);
$(document).on( 'click', '.sidebar__entry-insert, .sidebar__entry-delete', function () {
        var t = $(this);
        t.addClass("is-hidden"), t.closest("form").find(".sidebar__entry-loading").removeClass("is-hidden"), t.closest("form").find("input[name=do]").val(t.attr("data-do")), $.ajax({
            url: "/ajax.php",
            type: "POST",
            dataType: "json",
            data: t.closest("form").serialize(),
            success: function(e) {
                t.closest("form").find(".sidebar__entry-loading").addClass("is-hidden"), "success" === e.type ? t.hasClass("sidebar__entry-insert") ? t.closest("form").find(".sidebar__entry-delete").removeClass("is-hidden") : t.hasClass("sidebar__entry-delete") && t.closest("form").find(".sidebar__entry-insert").removeClass("is-hidden") : "error" === e.type && t.closest("form").html("undefined" != typeof e.link && e.link !== !1 ? '<a href="' + e.link + '" class="sidebar__entry-custom sidebar__error"><i class="fa fa-exclamation-circle"></i> ' + e.msg + "</a>" : '<div class="sidebar__entry-custom sidebar__error is-disabled"><i class="fa fa-exclamation-circle"></i> ' + e.msg + "</div>"), "undefined" != typeof e.entry_count && e.entry_count !== !1 && $(".live__entry-count").text(e.entry_count), $(".nav__points").text(e.points)
            }
        });
});
},10);