// ==UserScript==
// @name        Extended Steamgifts - Enter all button
// @description	New features for Steamgifts.com
// @author		Nandee
// @namespace	esg
// @include		*steamgifts.com*
// @exclude     *.steamgifts.com/happy-holidays*
// @version		1.0.1
// @downloadURL	https://github.com/nandee95/Extended_Steamgifts/raw/master/Extended_Steamgifts_Enter_All.user.js
// @updateURL	https://github.com/nandee95/Extended_Steamgifts/raw/master/Extended_Steamgifts_Enter_All.user.js
// @supportURL  http://steamcommunity.com/groups/extendedsg/discussions/0/
// @icon        https://raw.githubusercontent.com/nandee95/Extended_Steamgifts/master/img/logo.png
// @homepage    https://github.com/nandee95/Extended_Steamgifts
// @grant       none
// @license     MIT
// ==/UserScript==

if(window.location=="https://www.steamgifts.com/giveaways/search?type=wishlist")
{
    $(".page__heading__breadcrumbs:first").after('<div class="sidebar__entry-insert enterall" style="cursor:pointer"><i style="margin-left:5px;display:inline" class="fa fa-plus-circle"></i> Enter all</div>');
    $(document).on('click', '.enterall', function() {
        $(".sidebar__entry-insert:not(.is-hidden):not(.enterall)").each(function () {
            if($(this).closest('.pinned-giveaways__inner-wrap').length===0) $(this).trigger('click');
        });
    });
}
