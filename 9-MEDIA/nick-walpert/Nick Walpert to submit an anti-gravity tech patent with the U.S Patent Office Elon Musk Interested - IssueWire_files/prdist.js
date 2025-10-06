$(document).ready(function($){
	 

$(".mn-social-bottom, .social-clk").click(function(event){
	event.preventDefault();
	var loc=$(this).attr('href');
	//console.log(loc);
        if (typeof loc !== typeof undefined && loc !== false) {
           newPopup(loc);
        }
	
	});
	
	
	



		var imageBox = $('.slider ul');
		// var imageWidth = $('.slider ul li').first().children('img').width();
		var imageWidth = $('.slider').width();
		var imageQuantity = $('.slider ul').children('li').length;
		var currentImage=1;

		imageBox.css('width', imageWidth*imageQuantity);
		//console.log(imageWidth);
	 
	   $('.nav button').on('click', function(){ 
	   var whichButton = $(this).data('nav'); 
	   //console.log(whichButton);
	   
	   if(whichButton=='next'){
			if(currentImage===imageQuantity){
			currentImage=1;
			}else{
			currentImage++;
			}	   
	   transition(currentImage,imageWidth);
	   
	   }else if(whichButton=='prev'){
		   if(currentImage===1){
			currentImage=imageQuantity;
			}else{
			currentImage--;
			}
	   transition(currentImage,imageWidth);
	   
	   }	   
	   });
	   

	   

	   
	 myVar = setInterval(function(){		
		if(currentImage===imageQuantity){
			currentImage=1;			
			}else{
			currentImage++;			
			}			
	   transition(currentImage,imageWidth);

		}, 3000);
		
		
			   $(".slider ul").hover(function(){
   
   		
clearTimeout(myVar);	
   
    }, function(){
   
    myVar = setInterval(function(){		
		if(currentImage===imageQuantity){
			currentImage=1;			
			}else{
			currentImage++;			
			}			
	   transition(currentImage,imageWidth);

		}, 3000);
   
   
});
	   
	   
	
	   
	   function transition(currentImageInput,imageWidthInput){
	   var pxValue = -(currentImageInput-1)*imageWidthInput;
		   imageBox.stop(true).animate({
			'left': pxValue
		   })
	   }
           
           
           
           
           
           
           
           var url = window.location.href;
	var title = document.title;
	var img=document.getElementById("pr-img").value;
	
	var mnsocial = document.getElementsByClassName('mn-social-bottom');
	//console.log(mnsocial.length);
        if(mnsocial.length!=0){
	mnsocial[0].href = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
	mnsocial[1].href = 'http://twitter.com/share?url=' + encodeURIComponent(url+"?utm_source=twitter") + '&text=' + title.replace(/[^\w\s]/gi, '');
	mnsocial[2].href = 'https://www.linkedin.com/shareArticle?mini=true&url=' + url;
	//mnsocial[3].href = 'https://plus.google.com/share?url=' + url;
	mnsocial[3].href = 'https://pinterest.com/pin/create/link/?url=' + url + '&media='+img+'&description=' + title.replace(/[^\w\s]/gi, '');
	// mnsocial[6].href = 'https://www.tumblr.com/share/link?url=' + url;
	mnsocial[7].href = 'https://getpocket.com/save?url=' + url;
	mnsocial[8].href = 'http://www.stumbleupon.com/submit?url=' + url;
	mnsocial[9].href = 'http://www.reddit.com/submit?url=' + url;
	mnsocial[10].href = 'mailto:?&subject=' + url + '&body=' + title + ', ' + url;
	mnsocial[11].href = 'https://delicious.com/share?url=' + url;
    }
        
        
        var mnsocial1 = document.getElementsByClassName('social-clk');
	//console.log(mnsocial.length);

        if(mnsocial1.length!=0){
	mnsocial1[0].href = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
	mnsocial1[1].href = 'http://twitter.com/share?url=' + encodeURIComponent(url+"?utm_source=twitter") + '&text=' + title.replace(/[^\w\s]/gi, '');
	mnsocial1[2].href = 'https://www.linkedin.com/shareArticle?mini=true&url=' + url;
	//mnsocial1[3].href = 'https://plus.google.com/share?url=' + url;
	mnsocial1[3].href = 'https://pinterest.com/pin/create/link/?url=' + url + '&media='+img+'&description=' + title.replace(/[^\w\s]/gi, '');
        // mnsocial1[4].href = 'https://www.tumblr.com/share/link?url=' + url;
        }
        
        
        
        function newPopup(url) {
           
            if(url){
                popupWindow = window.open(
                        url,
                        'popUpWindow',
                        'height=500,width=600,left=200,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes'
                        )
        }
            }
        
        
        var prcont=$("#prcont").html();
        $(".content").find("p").eq(0).prepend(prcont);
        $("#prcont").remove();
        
        
        
        $(".slider img").each(function(){
            var height=parseInt($( this ).css("height"));
            var width=parseInt($( this ).css("width"));
            
          
            if(height >= width){
                $(this).css({ 'height': "300px" });
                $(this).css({ 'width': "300px" });  
				$(this).css({ 'object-fit': "contain" }); 
                var w=parseInt($(this).width());
                var ml=((300-w)/2);
                if(ml>0){
               // $(this).css({ 'margin-left': ml+"px" }); 
            }
                
            }
            
            if(width >= height){
                $(this).css({ 'width': "300px" });
               $(this).css({ 'height': "300px" });  
			   $(this).css({ 'object-fit': "contain" }); 
               var h=parseInt($(this).height());
                var mt=((300-h)/2);
                
                if(mt>0){
               // $(this).css({ 'margin-top': mt+"px" });                
                }
            }
            
        });
        
        
        
        
	});
        
        
        
        
        
        
        



	
	
	
	
	
	
	
	