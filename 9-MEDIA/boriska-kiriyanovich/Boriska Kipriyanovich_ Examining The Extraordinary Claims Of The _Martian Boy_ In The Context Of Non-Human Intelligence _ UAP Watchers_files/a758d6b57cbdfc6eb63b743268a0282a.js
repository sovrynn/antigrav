(function($){const siteNavigation=document.getElementById('site-navigation');if(!siteNavigation){return}
const button=siteNavigation.getElementsByTagName('button')[0];if('undefined'===typeof button){return}
const menu=siteNavigation.getElementsByTagName('ul')[0];if('undefined'===typeof menu){button.style.display='none';return}
if(!menu.classList.contains('nav-menu')){menu.classList.add('nav-menu')}
button.addEventListener('click',function(){siteNavigation.classList.toggle('toggled');if(button.getAttribute('aria-expanded')==='true'){button.setAttribute('aria-expanded','false')}else{button.setAttribute('aria-expanded','true')}});document.addEventListener('click',function(event){const isClickInside=siteNavigation.contains(event.target);if(!isClickInside){siteNavigation.classList.remove('toggled');button.setAttribute('aria-expanded','false')}});const links=menu.getElementsByTagName('a');const linksWithChildren=menu.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');for(const link of links){link.addEventListener('focus',toggleFocus,!0);link.addEventListener('blur',toggleFocus,!0)}
for(const link of linksWithChildren){link.addEventListener('touchstart',toggleFocus,!1)}
function toggleFocus(){if(event.type==='focus'||event.type==='blur'){let self=this;while(!self.classList.contains('nav-menu')){if('li'===self.tagName.toLowerCase()){self.classList.toggle('focus')}
self=self.parentNode}}
if(event.type==='touchstart'){const menuItem=this.parentNode;for(const link of menuItem.parentNode.children){if(menuItem!==link){link.classList.remove('focus')}}
menuItem.classList.toggle('focus')}}
function dropdownMenuMobileHandle(){if(!$("#site-navigation .menu-item.menu-item-has-children").length>0&&!$("#site-navigation .page_item.page_item_has_children").length>0){return}
$("#site-navigation .menu-item.menu-item-has-children .sub-menu, #site-navigation .page_item.page_item_has_children .children").before('<a href="#" class="toggle-sub-menu"><i class="fas fa-plus"></i></a>');$(document).on("click","#site-navigation .toggle-sub-menu",function(e){e.preventDefault();var _this=$(this)
_this.parent().siblings().children(".sub-menu, .children").removeClass("isShow");_this.siblings(".sub-menu, .children").toggleClass("isShow");_this.parent().siblings().find("> .toggle-sub-menu i").removeClass("fa-minus").addClass("fa-plus");if(_this.siblings(".sub-menu, .children").hasClass("isShow")){_this.children().removeClass("fa-plus").addClass("fa-minus")}else{_this.children().removeClass("fa-minus").addClass("fa-plus")}})}
dropdownMenuMobileHandle()}(jQuery))
;