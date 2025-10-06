jQuery(document).ready(function($){"use strict"
var ajaxUrl=newsmaticObject.ajaxUrl,_wpnonce=newsmaticObject._wpnonce,sttOption=newsmaticObject.stt,query_vars=newsmaticObject.query_vars,paged=newsmaticObject.paged,stickeyHeader=newsmaticObject.stickey_header;if(newsmaticObject.animation){AOS.init({duration:1200,once:!0})}
setTimeout(function(){$('body .newsmatic_loading_box').hide()},3000);var nrtl=!1
var ndir="left"
if($('body').hasClass("rtl")){nrtl=!0;ndir="right"};function newsmaticclosemodal(elm,callback){$(document).mouseup(function(e){var container=$(elm);if(!container.is(e.target)&&container.has(e.target).length===0)callback();})}
var tc=$(".ticker-news-wrap");if(tc.length){var tDuration=tc.data("speed")
var tcM=tc.find(".ticker-item-wrap").marquee({duration:tDuration,gap:0,delayBeforeStart:0,direction:ndir,duplicated:!0,startVisible:!0,pauseOnHover:!0,});tc.on("click",".newsmatic-ticker-pause",function(){$(this).find("i").toggleClass("fa-pause fa-play")
tcM.marquee("toggle")})}
var timeElement=$(".top-date-time .time")
if(timeElement.length>0){setInterval(function(){timeElement.html(new Date().toLocaleTimeString())},1000)}
if(newsmaticObject.livesearch){var searchContainer=$("#masthead .search-wrap")
if(searchContainer.length>0){var searchFormContainer=searchContainer.find("form")
searchContainer.on('change, keyup','input[type="search"]',function(){var searchKey=$(this).val()
if(searchKey){$.ajax({method:'post',url:ajaxUrl,data:{action:'newsmatic_search_posts_content',search_key:searchKey.trim(),_wpnonce:_wpnonce},beforeSend:function(){searchFormContainer.addClass('retrieving-posts');searchFormContainer.removeClass('results-loaded')},success:function(res){var parsedRes=JSON.parse(res)
searchContainer.find(".search-results-wrap").remove()
searchFormContainer.after(parsedRes.posts)
searchFormContainer.removeClass('retrieving-posts').addClass('results-loaded')},complete:function(){}})}else{searchContainer.find(".search-results-wrap").remove()
searchFormContainer.removeClass('results-loaded')}})}}
$("#masthead").on("click",".sidebar-toggle-trigger",function(){$(this).addClass('slideshow');$('body').addClass('body_show_sidetoggle')});$("#masthead").on("click",".sidebar-toggle-trigger.slideshow, .sidebar-toggle .sidebar-toggle-close",function(){$('.sidebar-toggle-trigger').removeClass('slideshow');$('body').removeClass('body_show_sidetoggle')});$("#masthead").on("click",".search-trigger",function(){$(this).next().slideDown('slow');$(this).addClass('slideshow');$('#masthead .search-wrap input[type="search"]').focus()});$("#masthead").on("click",".search-trigger.slideshow",function(){$(this).next().slideUp('slow');$(this).removeClass('slideshow')});newsmaticclosemodal($(".search-wrap"),function(){$(".search-wrap .search-trigger").removeClass("slideshow");$(".search-form-wrap").slideUp();$("#masthead .search-wrap").find(".search-results-wrap").remove()
$("#masthead .search-wrap").removeClass('results-loaded')});newsmaticclosemodal($(".sidebar-toggle-wrap"),function(){$(".sidebar-toggle-wrap .sidebar-toggle-trigger").removeClass("slideshow");$('body').removeClass('body_show_sidetoggle')});newsmaticclosemodal($(".newsletter-popup-modal"),function(){$(".newsletter-popup-modal").removeClass("open");$("body").removeClass("newsletter-popup-active")});var nPopup=$(".newsletter-element")
if(nPopup.length>0){var nPopupType=nPopup.find("a").data("popup")
if(nPopupType=='popup'){nPopup.on("click","a",function(e){e.preventDefault()
var _this=$(this)
$("body").addClass("newsletter-popup-active")
_this.next(".newsletter-popup-modal").addClass("open")})}
$(document).on("click",".newsletter-popup-modal.open .modal-close",function(){$(".newsletter-popup-modal").removeClass("open");$("body").removeClass("newsletter-popup-active")})}
var thtn=$(".top-ticker-news");if(thtn.length){var thtnitems=thtn.find(".ticker-item-wrap")
var thtDir=thtnitems.data("dir")
var thtAuto=thtnitems.data("auto")
thtnitems.slick({dots:!1,infinite:!0,rtl:nrtl,vertical:(!thtDir),arrows:!0,autoplay:thtAuto,nextArrow:`<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>`,prevArrow:`<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>`,})}
var bc=$("#main-banner-section");if(bc.length){var bic=bc.find(".main-banner-slider")
var bAuto=bic.data("auto")
var bArrows=bic.data("arrows")
var bDots=bic.data("dots")
var bSpeed=bic.data("speed")
bic.slick({dots:bDots,infinite:!0,rtl:nrtl,arrows:bArrows,autoplay:bAuto,speed:bSpeed,nextArrow:`<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>`,prevArrow:`<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>`,})}
var bptc=bc.find(".main-banner-tabs")
bptc.on("click",".banner-tabs li.banner-tab",function(){var _this=$(this),tabItem=_this.attr("tab-item");_this.addClass("active").siblings().removeClass("active");bptc.find('.banner-tabs-content div[tab-content="'+tabItem+'"]').addClass("active").siblings().removeClass("active")})
var bpc=bc.find(".popular-posts-wrap");if(bpc.length){var bpcAuto=bpc.data("auto")
var bpcArrows=bpc.data("arrows")
var bpcVertical=bpc.data("vertical");if(bpcVertical){bpc.slick({vertical:bpcVertical,slidesToShow:4,dots:!1,infinite:!0,arrows:bpcArrows,autoplay:bpcAuto,nextArrow:`<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>`,prevArrow:`<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>`,})}else{bpc.slick({dots:!1,infinite:!0,arrows:bpcArrows,rtl:nrtl,draggable:!0,autoplay:bpcAuto,nextArrow:`<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>`,prevArrow:`<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>`,})}}
var nc=$(".newsmatic-section .news-carousel .news-carousel-post-wrap");if(nc.length){nc.each(function(){var _this=$(this)
var ncDots=_this.data("dots")=='1'
var ncLoop=_this.data("loop")=='1'
var ncArrows=_this.data("arrows")=='1'
var ncAuto=_this.data("auto")=='1'
var ncColumns=_this.data("columns")
_this.slick({dots:ncDots,infinite:ncLoop,arrows:ncArrows,autoplay:ncAuto,rtl:nrtl,slidesToShow:ncColumns,nextArrow:`<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>`,prevArrow:`<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>`,responsive:[{breakpoint:1100,settings:{slidesToShow:3,},},{breakpoint:768,settings:{slidesToShow:2,},},{breakpoint:640,settings:{slidesToShow:1,},}]})})}
var vidoeSection=$("#video-playlist-section");if(vidoeSection.length>0){vidoeSection.on("click",".playlist-items-wrap .video-item",function(){var _this=$(this),newTitle=_this.find(".video-title").html(),newDuration=_this.find(".video-duration").html(),videoId
videoId=_this.data("id")
vidoeSection.find(".active-player iframe").attr("src","https://www.youtube.com/embed/"+videoId+"?enablejsapi=1&autoplay=1")
_this.addClass("activePlayer").siblings().removeClass("activePlayer");vidoeSection.find(".thumb-video-highlight-text .video-title").html(newTitle)
vidoeSection.find(".thumb-video-highlight-text .video-duration").html(newDuration)
vidoeSection.find(".thumb-controller").removeClass("isPaused onRoll").addClass("onRoll")
vidoeSection.find(".thumb-controller i").removeClass("fas fa-play fas fa-pause").addClass("fas fa-pause")})
$(document).on("click","#video-playlist-section .thumb-controller.isPaused",function(){$(this).removeClass("isPaused").addClass("onRoll")
$(this).find("i").removeClass("fas fa-play").addClass("fas fa-pause")
vidoeSection.find(".active-player iframe")[0].contentWindow.postMessage('{"event":"command","func":"'+'playVideo'+'","args":""}','*')});$(document).on("click","#video-playlist-section .thumb-controller.onRoll",function(){$(this).removeClass("onRoll").addClass("isPaused")
$(this).find("i").removeClass("fas fa-pause").addClass("fas fa-play")
vidoeSection.find(".active-player iframe")[0].contentWindow.postMessage('{"event":"command","func":"'+'pauseVideo'+'","args":""}','*')});$("#video-playlist-section.layout--two").find(".playlist-items-wrap").slick({dots:!1,infinite:!0,arrows:!0,autoplay:!1,rtl:nrtl,slidesToShow:4,nextArrow:`<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>`,prevArrow:`<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>`,responsive:[{breakpoint:1100,settings:{slidesToShow:3,},},{breakpoint:768,settings:{slidesToShow:2,},},{breakpoint:640,settings:{slidesToShow:1,},}]})}
$(".newsmatic-section .news-filter").each(function(){var $scope=$(this),$scopeOptions=$scope.data("args"),newTabs=$scope.find(".filter-tab-wrapper"),newTabsContent=$scope.find(".filter-tab-content-wrapper");newTabs.on("click",".tab-title",function(){var a=$(this),aT=a.data("tab")
a.addClass("isActive").siblings().removeClass("isActive");if(newTabsContent.find(".tab-content.content-"+aT).length<1){$scopeOptions.category_name=aT
$.ajax({method:'get',url:ajaxUrl,data:{action:'newsmatic_filter_posts_load_tab_content',options:JSON.stringify($scopeOptions),_wpnonce:_wpnonce},beforeSend:function(){$scope.addClass('retrieving-posts')},success:function(res){var parsedRes=JSON.parse(res)
if(parsedRes.loaded){newTabsContent.append(parsedRes.posts)
$scope.removeClass('retrieving-posts')}},complete:function(){newTabsContent.find(".tab-content.content-"+aT).show().siblings().hide()}})}else{newTabsContent.find(".tab-content.content-"+aT).show().siblings().hide()}})})
if(newsmaticObject.ajaxPostsLoad=='1'){$("#primary .pagination .ajax-load-more").on("click",function(){var _this=$(this),$parent=_this.parents(".primary-content")
$.ajax({method:'post',url:ajaxUrl,data:{action:'newsmatic_posts_content',_wpnonce:_wpnonce,query_vars:JSON.stringify(query_vars),paged:paged+1},beforeSend:function(){$parent.addClass('retrieving-posts');_this.text("Retrieving posts")},success:function(res){var parsedRes=JSON.parse(res)
if(parsedRes.loaded){if($parent.find(" > div:first-child").length>0){$parent.find(" > div:first-child").append(parsedRes.posts)}else{$parent.find(".pagination").before(parsedRes.posts)}
if(parsedRes.continue){paged++}else{_this.remove()}}else{_this.remove()}},complete:function(){_this.text(newsmaticObject.loadMore)
$parent.removeClass('retrieving-posts')}})})}
var ppWidgets=$(".newsmatic-widget-popular-posts")
ppWidgets.each(function(){var _this=$(this),parentWidgetContainerId=_this.parents(".widget.widget_newsmatic_popular_posts_widget").attr("id"),parentWidgetContainer=$("#"+parentWidgetContainerId)
var ppWidget=parentWidgetContainer.find(".popular-posts-wrap");if(ppWidget.length>0){var ppWidgetAuto=ppWidget.data("auto")
var ppWidgetArrows=ppWidget.data("arrows")
var ppWidgetLoop=ppWidget.data("loop")
var ppWidgetVertical=ppWidget.data("vertical")
if(ppWidgetVertical=='vertical'){ppWidget.slick({vertical:!0,slidesToShow:4,dots:!1,infinite:ppWidgetLoop,arrows:ppWidgetArrows,autoplay:ppWidgetAuto,nextArrow:`<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>`,prevArrow:`<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>`})}else{ppWidget.slick({dots:!1,infinite:ppWidgetLoop,rtl:nrtl,arrows:ppWidgetArrows,autoplay:ppWidgetAuto,nextArrow:`<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>`,prevArrow:`<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>`})}}})
var cpWidgets=$(".newsmatic-widget-carousel-posts")
cpWidgets.each(function(){var _this=$(this),parentWidgetContainerId=_this.parents(".widget.widget_newsmatic_carousel_widget").attr("id"),parentWidgetContainer
if(typeof parentWidgetContainerId!='undefined'){parentWidgetContainer=$("#"+parentWidgetContainerId)
var ppWidget=parentWidgetContainer.find(".carousel-posts-wrap")}else{var ppWidget=_this}
if(ppWidget.length>0){var ppWidgetAuto=ppWidget.data("auto")
var ppWidgetArrows=ppWidget.data("arrows")
var ppWidgetLoop=ppWidget.data("loop")
var ppWidgetVertical=ppWidget.data("vertical")
if(ppWidgetVertical=='vertical'){ppWidget.slick({vertical:!0,dots:!1,infinite:ppWidgetLoop,arrows:ppWidgetArrows,autoplay:ppWidgetAuto,nextArrow:`<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>`,prevArrow:`<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>`})}else{ppWidget.slick({dots:!1,infinite:ppWidgetLoop,rtl:nrtl,arrows:ppWidgetArrows,autoplay:ppWidgetAuto,nextArrow:`<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>`,prevArrow:`<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>`})}}})
var tabpWidgets=$(".newsmatic-tabbed-widget-tabs-wrap")
tabpWidgets.each(function(){var _this=$(this),parentWidgetContainerId=_this.parents(".widget.widget_newsmatic_tabbed_posts_widget").attr("id"),parentWidgetContainer
if(typeof parentWidgetContainerId!='undefined'){parentWidgetContainer=$("#"+parentWidgetContainerId)
var tabpWidget=parentWidgetContainer.find(".newsmatic-tabbed-widget-tabs-wrap")}else{var tabpWidget=_this}
if(tabpWidget.length>0){tabpWidget.on("click",".tabbed-widget-tabs li.tabbed-widget",function(){var _this=$(this),tabItem=_this.attr("tab-item");_this.addClass("active").siblings().removeClass("active");tabpWidget.find('.widget-tabs-content div[tab-content="'+tabItem+'"]').addClass("active").siblings().removeClass("active")})}})
var nftabpWidgets=$(".newsmatic-news-filter-tabbed-widget-tabs-wrap")
nftabpWidgets.each(function(){var _this=$(this),parentWidgetContainerId=_this.parents(".widget.widget_newsmatic_news_filter_tabbed_widget").attr("id"),parentWidgetContainer
if(typeof parentWidgetContainerId!='undefined'){parentWidgetContainer=$("#"+parentWidgetContainerId)
var nftabpWidget=parentWidgetContainer.find(".newsmatic-news-filter-tabbed-widget-tabs-wrap")}else{var nftabpWidget=_this}
if(nftabpWidget.length>0){nftabpWidget.on("click",".widget-tabs li.widget-tab",function(){var _this=$(this),tabItem=_this.attr("tab-item");_this.addClass("active").siblings().removeClass("active");nftabpWidget.find('.tabs-content-wrap div.tabs-content.'+tabItem).addClass("show").siblings().removeClass("show")})}})
var widgetLoader=$(".newsmatic-widget-loader")
if(widgetLoader.length>0){widgetLoader.each(function(){var widgetLoaderContainer=$(this),widgetPaged=1
widgetLoaderContainer.on("click",".load-more",function(){var _this=$(this)
var widget=_this.data("widget")
var instance=_this.data("instance")
var widgetParent=_this.parents(".widget_newsmatic_"+widget)
$.ajax({method:'post',url:ajaxUrl,data:{action:'newsmatic_'+widget+'_content',_wpnonce:_wpnonce,instance:JSON.stringify(instance),widgetPaged:widgetPaged},beforeSend:function(){widgetParent.addClass('retrieving-posts');_this.text("Retrieving posts")},success:function(res){var parsedRes=JSON.parse(res)
if(parsedRes.loaded){if(widgetParent.find(" > div.posts-wrap").length>0){widgetParent.find(" > div.posts-wrap").append(parsedRes.posts)}else{widgetParent.find(".nwsmatic-widget-loader").before(parsedRes.posts)}
if(parsedRes.continue){widgetPaged++}else{_this.remove()}}else{_this.remove()}},complete:function(){_this.text("Show more")
widgetParent.removeClass('retrieving-posts')}})})})}
if('.single-related-posts-section-wrap'){$('.single .entry-footer').waypoint(function(direction){$('.single-related-posts-section-wrap.related_posts_popup').addClass('related_posts_popup_sidebar')},{offset:+50})}
$('.related_post_close').on('click',function(){$('.single .single-related-posts-section-wrap.related_posts_popup').removeClass('related_posts_popup_sidebar related_posts_popup')});$(".mode_toggle_wrap").on("click",function(){var _this=$(this)
$("body").toggleClass("newsmatic_dark_mode")
if(_this.find("input:checked").length>0&&$("body").hasClass("newsmatic_dark_mode")){$.cookie("themeMode","dark",{path:'/'});$("body").removeClass("newsmatic_main_body")}else{$.cookie("themeMode","light",{path:'/'});$("body").addClass("newsmatic_main_body")}});if(stickeyHeader){var lastScroll=0;$(window).on('scroll',function(){var scroll=$(window).scrollTop();if(scroll>50){if(lastScroll-scroll>0){$(".main-header .menu-section").addClass("fixed_header")}else{$(".main-header .menu-section").removeClass("fixed_header")}
lastScroll=scroll}else{$(".main-header .menu-section").removeClass("fixed_header")}})}
if(sttOption&&$("#newsmatic-scroll-to-top").length){var scrollContainer=$("#newsmatic-scroll-to-top");$(window).scroll(function(){if($(this).scrollTop()>800){scrollContainer.addClass('show')}else{scrollContainer.removeClass('show')}});scrollContainer.click(function(event){event.preventDefault();$("html, body").animate({scrollTop:0},"slow")})}
var featuredPost=$(".archive.category .featured-post.is-sticky")
if(featuredPost.length>0){var postHide="#post-"+featuredPost.data("id")
$(postHide).addClass("sticky-hide")}})
;