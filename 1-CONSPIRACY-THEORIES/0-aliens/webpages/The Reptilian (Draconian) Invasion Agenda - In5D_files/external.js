function externalLinks() {
 if (!document.getElementsByTagName) return;
 var anchors = document.getElementsByTagName("a");
 for (var i=0; i<anchors.length; i++) {
   var anchor = anchors[i];
   if (anchor.getAttribute("href") &&
       anchor.getAttribute("rel") == "external")
     anchor.target = "_blank";
 }
}
window.onload = externalLinks;

jQuery(window).load(function() {

	// backtotop START
	jQuery("#topofpage").hide().removeAttr("href");
		
	if (jQuery(window).scrollTop() != "0")
		jQuery("#backtotop").fadeIn("slow")

	var scrollDiv = jQuery("#backtotop");
		
	jQuery(window).scroll(function()
	{
		if (jQuery(window).scrollTop() == "0")
			jQuery(scrollDiv).fadeOut("slow")

		else
			jQuery(scrollDiv).fadeIn("slow")
	});
		
	jQuery("#backtotop").click(function()
	{
		jQuery("html, body").animate({
			scrollTop: 0
		}, "slow")
	})
	// backtotop END

});