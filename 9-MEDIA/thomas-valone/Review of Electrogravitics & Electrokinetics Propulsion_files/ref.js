String.prototype.startWith = function (s) {
    if (s == null || s == "" || this.length == 0 || s.length > this.length)
        return false;
    if (this.substr(0, s.length) == s)
        return true;
    else
        return false;
    return true;
}



/*给fig图片加样式*/
$(document).ready(function(){
    $(".imgGroupCss_h").next(".sacImgMarkCss").css("width","100%");
    $(".bracketImgMark").each(function(){
        $(this).wrap("<span class='mak'></span>");
        if($(this).width()>460){
            $(this).css("width","460px");
            $(this).css("height","auto")
        }
    });
    $(".imgPCss").each(function(){
        $(this).contents().not($(".mak")).not($(".bracketMark")).wrap("<span class='bar'></span>");
        if($(this).children("span").length>2){
            $(this).children("span.bar").css("float","left");
        }
    });
    $(".imgGroupCss_v img").removeAttr("hspace");
    $(".imgGroupCss_h img").removeAttr("hspace");

    // $(".imgMarkCss").click(function(){
      //  // window.open($(this).attr("src"));

       //   var _this = $(this); //将当前的pimg元素作为_this传入函数  
       //  imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);        
    // });

}); 

//html图片弹出层
function imgShow(outerdiv, innerdiv, bigimg, _this) {
    var src = _this.attr("src"); //获取当前点击的pimg元素中的src属性  
    $(bigimg).attr("src", src); //设置#bigimg元素的src属性  

    /*获取当前点击图片的真实大小，并显示弹出层及大图*/
    $("<img/>").attr("src", src).load(function () {
        var windowW = $(window).width(); //获取当前窗口宽度  
        var windowH = $(window).height(); //获取当前窗口高度  
        var realWidth = this.width; //获取图片真实宽度  
        var realHeight = this.height; //获取图片真实高度  
        var imgWidth, imgHeight;
        var scale = 0.8; //缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放  

        if (realHeight > windowH * scale) { //判断图片高度  
            imgHeight = windowH * scale; //如大于窗口高度，图片高度进行缩放  
            imgWidth = imgHeight / realHeight * realWidth; //等比例缩放宽度  
            if (imgWidth > windowW * scale) { //如宽度扔大于窗口宽度  
                imgWidth = windowW * scale; //再对宽度进行缩放  
            }
        } else if (realWidth > windowW * scale) { //如图片高度合适，判断图片宽度  
            imgWidth = windowW * scale; //如大于窗口宽度，图片宽度进行缩放  
            imgHeight = imgWidth / realWidth * realHeight; //等比例缩放高度  
        } else { //如果图片真实高度和宽度都符合要求，高宽不变  
            imgWidth = realWidth;
            imgHeight = realHeight;
        }
        $(bigimg).css("width", imgWidth); //以最终的宽度对图片缩放  

        var w = (windowW - imgWidth) / 2; //计算图片与窗口左边距  
        var h = (windowH - imgHeight) / 2; //计算图片与窗口上边距  
        $(innerdiv).css({
            "top": h,
            "left": w
        }); //设置#innerdiv的top和left属性  
        $(outerdiv).fadeIn("fast"); //淡入显示#outerdiv及.pimg  
    });

    $(outerdiv).click(function () { //再次点击淡出消失弹出层  
        $(this).fadeOut("fast");
    });
}



$(".refences_css > ol li").each(function (i) {
    var ah = "<a target=\"_self\" name=\"ref" + (i + 1) + "\" id=\"ref" + (i + 1) + "\">" + $(this).html() + "</a>";
    if (i < 10) {
        ah += "<a target=\"_self\" name=\"ref0" + (i + 1) + "\" id=\"ref0" + (i + 1) + "\"></a>";
    }
    $(this).html(ah);
});


try {
    var content = $("div#htmlContent").html();

content = content.replace("</a><a href=\"#r\" target=\"_self\">", "");


regex = /\[[0-9]*\]/ig;
var body = content;
var arr = new Array()
var count = 0;
function returnAuhor(id, count) {
    $("a[id^=r_return]").each(function (i) {
        $(this).parent().attr('style', '');
        $(this).remove();
    });
    id = "#ref" + id;
    $(id).parent().attr('style', 'background-color:#ffab02');
    $(id).parent().append('<a  target=\"_self\" id="r_return' + count + '"style="color: #FF0000" href="#return' + count + '"><br/><strong>Return to text</strong></a>');

}
} catch (e) {
}


var map = {};
while (matches = regex.exec(content)) {
    try {
       
        var re = matches[0].replace('[', '').replace(']', '');
     
        var temp11 = map[re];
      
        if (temp11) {
         
            map[re] = map[re] + 1;
        } else {
         
            map[re] = 1;
        }
      
        arr[count] = re;

        var repla = "\[" + re + "\]";
        body = body.replace(repla, "[<a target=\"_self\" id='return" + count + "' href='#ref" + re + "' class='content_c" + re + "' onclick='returnAuhor(" + re + "," + count + ")'>" + re + "</a>]");
        count++;
    } catch (e) {
    }

}


///*参考文献的弹出层显示*/
//$(document).ready(function () {
//    try {
       
//        var x = $(window).width();
//        var y = $(window).height();
//        var timeout = '';
      
      
      
//        $("a[id^='ref']").each(function () {

//            var num = $(this).attr('name').replace('ref', '');
          
//            if (map[$(this).attr('name').replace('ref', '')]) {
//                $(this).parent().append("&nbsp;&nbsp;<span id=prefrence" + $(this).attr('name').replace('ref', '') + "> [Citation Time(s):" + map[$(this).attr('name').replace('ref', '')] + "]</span>");
//            }
//        });

//        $("span[id^='prefrence']").mouseover(function (e) {

//            var aa1 = $(this);
//            var uumm = $(this).attr('id').replace('prefrence', '');
//            //var temp = $(this)[0].previousSibling.nodeValue;
//            var tempContent = '';
//            //var temp1="a[href^=#ref]"+uumm;
//            //$("a[href=#ref"+uumm+"]").each(function(){
//            //alert($(this)[0].previousSibling.nodeValue);

//            //});
//            /*参考文献显示上下文*/

//            $('.content_c' + uumm).each(function (i) {

//                var cont_t1 = $(this)[0].previousSibling.nodeValue.replace(']', '').replace('[', '');
//                var error_flag = 0;
//                try {
//                    if (cont_t1 == ' ' || cont_t1 == ' - ' || cont_t1.length <= 2) {
//                        cont_t1 = $(this).prev()[0].previousSibling.nodeValue.replace(']', '').replace('[', '')
//                    }
//                    if (cont_t1 == ' ' || cont_t1 == ' - ' || cont_t1.length <= 2) {
//                        cont_t1 = $(this).prev().prev()[0].previousSibling.nodeValue.replace(']', '').replace('[', '')

//                    }
//                    if (cont_t1 == ' ' || cont_t1 == ' - ' || cont_t1.length <= 2) {
//                        cont_t1 = $(this).prev().prev().prev()[0].previousSibling.nodeValue.replace(']', '').replace('[', '')

//                    }
//                    if (cont_t1 == ' ' || cont_t1 == ' - ' || cont_t1.length <= 2) {
//                        cont_t1 = $(this).prev().prev().prev().prev()[0].previousSibling.nodeValue.replace(']', '').replace('[', '')

//                    }
//                    if (cont_t1 == ' ' || cont_t1 == ' - ' || cont_t1.length <= 2) {
//                        cont_t1 = $(this).prev().prev().prev().prev().prev()[0].previousSibling.nodeValue.replace(']', '').replace('[', '')

//                    }
//                } catch (e) {
//                    error_flag = 1;
//                }

//                if (error_flag == 1) {
//                    try {

//                        cont_t1 = $(this).parent().prev().html();

//                    } catch (e) {

//                    }
//                }

//                try {
//                    if (cont_t1.startWith(" .")) {
//                        cont_t1 = cont_t1.substring(2, cont_t1.length);
//                    }

//                } catch (e) {
//                }
//                tempContent += "<p style='border-bottom:1px solid green;'>" + cont_t1 + "</p>";

//            });

//            timeout1 = setTimeout(function () {

//                var s = $("<div id = 'imgdiv'>" + tempContent + "</div>");
//                $("body").append(s);
//                if (e.pageX < x / 2 && e.pageY < y / 2) {
//                    $("#imgdiv").css({
//                        "top": (e.pageY + 10) + "px",
//                        "left": (e.pageX + 20) + "px"
//                    }).show("slow");
//                } else if (e.pageX > x / 2 && e.pageY < y / 2) {
//                    $("#imgdiv").css({
//                        "top": (e.pageY + 20) + "px",
//                        "right": ((x - e.pageX) + 10) + "px"
//                    }).show("slow");
//                } else if (e.pageX < x / 2 && e.pageY > y / 2) {
//                    $("#imgdiv").css({
//                        "bottom": ((y - e.pageY) + 20) + "px",
//                        "left": (e.pageX + 10) + "px"
//                    }).show("slow");
//                } else if (e.pageX > x / 2 && e.pageY > y / 2) {
//                    $("#imgdiv").css({
//                        "bottom": ((y - e.pageY) + 20) + "px",
//                        "right": ((x - e.pageX) + 10) + "px"
//                    }).show("slow");
//                }
//            }, 1);

//        }).mouseout(function () {
//            clearTimeout(timeout1);
//            $("#imgdiv").remove();
//        }).mousemove(function (e) {
//            if (e.pageX < x / 2 && e.pageY < y / 2) {
//                $("#imgdiv").css({
//                    "top": (e.pageY + 10) + "px",
//                    "left": (e.pageX + 20) + "px"
//                })
//            } else if (e.pageX > x / 2 && e.pageY < y / 2) {
//                $("#imgdiv").css({
//                    "top": (e.pageY + 20) + "px",
//                    "right": ((x - e.pageX) + 10) + "px"
//                })
//            } else if (e.pageX < x / 2 && e.pageY > y / 2) {
//                $("#imgdiv").css({
//                    "bottom": ((y - e.pageY) + 20) + "px",
//                    "left": (e.pageX + 10) + "px"
//                })
//            } else if (e.pageX > x / 2 && e.pageY > y / 2) {
//                $("#imgdiv").css({
//                    "bottom": ((y - e.pageY) + 20) + "px",
//                    "right": ((x - e.pageX) + 10) + "px"
//                })
//            }

//        });
//        /*正文弹出层显示*/
     
//        $("a[id^='return']").mouseover(function (e) {//添加定时任务,避免不必要请求
          
//            var aa = $(this);
      
//            var temp = "#ref" + aa.text();
           
//            var content = '';

//            try {
//                var child1 = $(temp).parent();
//                var cc = '';
              
//                if (child1) {
//                    cc = child1.html();
//                }
//                content = $(temp).parent().html().replace('<br><strong>Return to text</strong>', '');
            

//            } catch (e) {
//                /*人文社科正文弹出*/
//                temp = "#ref" + aa.attr('href').replace('#ref', '');
//                var child2 = $(temp).parent().children().eq(1);
//                var cc1 = '';
//                if (child2) {
//                    cc1 = child2.html();
//                }
                
//                try {
//                    content = $(temp).parent().html().replace('<br><strong>Return to text</strong>', '');
//                    //alert(content);
//                } catch (e) {
//                    content = $(temp).parent().html();
                  
//                }


//            }
            
//            timeout = setTimeout(function () {
               
//                //var s = $("<div id = 'imgdiv'>"+content+"&nbsp;&nbsp;&nbsp;&nbsp;[Paper reference:"+map[aa.text()]+"]</div>");
//                var s = $("<div id = 'imgdiv'>" + content + "</div>");
//                $("body").append(s);
//                if (e.pageX < x / 2 && e.pageY < y / 2) {
//                    $("#imgdiv").css({
//                        "top": (e.pageY + 10) + "px",
//                        "left": (e.pageX + 20) + "px"
//                    }).show("slow");
//                } else if (e.pageX > x / 2 && e.pageY < y / 2) {
//                    $("#imgdiv").css({
//                        "top": (e.pageY + 20) + "px",
//                        "right": ((x - e.pageX) + 10) + "px"
//                    }).show("slow");
//                } else if (e.pageX < x / 2 && e.pageY > y / 2) {
//                    $("#imgdiv").css({
//                        "bottom": ((y - e.pageY) + 20) + "px",
//                        "left": (e.pageX + 10) + "px"
//                    }).show("slow");
//                } else if (e.pageX > x / 2 && e.pageY > y / 2) {
//                    $("#imgdiv").css({
//                        "bottom": ((y - e.pageY) + 20) + "px",
//                        "right": ((x - e.pageX) + 10) + "px"
//                    }).show("slow");
//                }
//            }, 1);

//        }).mouseout(function () {
//            clearTimeout(timeout);
//            $("#imgdiv").remove();
//        }).mousemove(function (e) {
//            if (e.pageX < x / 2 && e.pageY < y / 2) {
//                $("#imgdiv").css({
//                    "top": (e.pageY + 10) + "px",
//                    "left": (e.pageX + 20) + "px"
//                })
//            } else if (e.pageX > x / 2 && e.pageY < y / 2) {
//                $("#imgdiv").css({
//                    "top": (e.pageY + 20) + "px",
//                    "right": ((x - e.pageX) + 10) + "px"
//                })
//            } else if (e.pageX < x / 2 && e.pageY > y / 2) {
//                $("#imgdiv").css({
//                    "bottom": ((y - e.pageY) + 20) + "px",
//                    "left": (e.pageX + 10) + "px"
//                })
//            } else if (e.pageX > x / 2 && e.pageY > y / 2) {
//                $("#imgdiv").css({
//                    "bottom": ((y - e.pageY) + 20) + "px",
//                    "right": ((x - e.pageX) + 10) + "px"
//                })
//            }
//        });
//    } catch (e) {
//    }

//});









regex1 = /(\[ [0-9]* ((,|-)? [0-9]*)? \]|\[ [0-9]* \]|\[ [0-9]* ((,|-)? [0-9]*)? ((,|-)? [0-9]*)? ((,|-)? [0-9]*)? \]|\[ [0-9]* \]|\[ [0-9]* ((,|-)? [0-9]*)? ((,|-)? [0-9]*)? \])/ig;
while (matches = regex1.exec(content)) {
    try {
        var re = matches[0].replace('[', '').replace(']', '');

        var temp = re.toString().replace('-', ',').split(',');
        var tempstr = '[';
        for (var ii = 0; ii < temp.length; ii++) {


            var temp11 = map[temp[ii]];
            if (temp11) {
                map[$.strim(temp[ii])] = map[$.trim(temp[ii])] + 1;
            } else {
                map[$.trim(temp[ii])] = 1;
            }
            arr[count] = temp[ii];
            count++;
            var reeee = temp[ii].replace(' ', '');
            tempstr += "<a target=\"_self\" id='return" + count + "' href='#ref" + reeee + "' class='content_c" + reeee + "' onclick='returnAuhor(" + reeee + "," + count + ")'>" + temp[ii] + "</a>";

        }
        tempstr += "]"
        var repla = "\[" + re + "\]";
        var re1 = re.replace(' ', '');
        body = body.replace(repla, tempstr);

    } catch (exxx) {

    }

}

try {

    
    $("div#htmlContent").html(body);

var footb = "<div   id=\"left-article-box\" class=\"right_m\" style=\"float: left; padding-left: 5px;position: relative; -webkit-background-clip: border-box;-webkit-background-origin: padding-box;-webkit-background-size: auto;-webkit-box-shadow: rgb(229, 229, 229) 0px 2px 7px 0px;-moz-box-shadow: rgb(229, 229, 229) 0px 2px 7px 0px;border-radius: 3px;border: 1px solid rgb(238, 238, 238);box-shadow: rgb(229, 229, 229) 0px 2px 7px 0px;color: rgb(51, 51, 51);display: block;line-height: 20px;padding: 15px 15px 15px 15px;width: 200px;line-height:22px;\"><ul id=\"outline\" class=\"r_nav\" style=\"font-size: 15px\"><li><a target=\"_self\" href=\"#\">Top</a></li>";
var foote = "</ul></div>";
$("p.E-Title1").each(function (i) {
    var a = "<li style='padding: 5px 0px'><a target=\"_self\" href=\"#txtF" + i + "\">" + $.trim($(this).text().substring($(this).text().indexOf('.') + 1)) + "</a></li>";
    footb += a;
    $(this).html("<a target=\"_self\" id=\"txtF" + i + "\">" + $(this).html() + "</a>")
});
$("div.right_m").after(footb + foote);
var leftWidth = document.getElementById("left-article-box").offsetLeft;
window.onmousewheel = document.onmousewheel = scrollFunc;
window.onscroll = scrollFunc;
function scrollFunc() {
    var div = document.getElementById("left-article-box");
    var t = $(document).scrollTop();
    if (t < 600) {
        div.style.position = "relative";
        div.style.left = 0;
    } else {
        div.style.position = "fixed";
        div.style.left = leftWidth + "px";
    }
}
} catch (e) {


}
    try {
    $("img.lazy").lazyload();
    $("img.200").lazyload();
    $("img.bracketImgMark").lazyload();
} catch (e) {


}





try {
    var tem = $("p.cs_t1").next();

    if (tem.attr('class') != 'temp_c') {

        var au = tem.text().replace(/\d+/g, '').replace('*', '').replace(',,', ',');

        var doc = $("div.refences_css").prev().prev();
        var cite_att = doc.attr('class');

        if (doc) {
            var temp = doc.html().substring(0, doc.html().indexOf('('));
            var temp = doc.html().replace(temp, '');
            var temp = au + ' ' + temp;
            doc.html(temp);
            doc.css('text-align', 'left');
        }
    }
} catch (e) {
}


$(
	function () {
	    var b = $("#sticky-footer");
	    function a() {
	        var c = 100;
	        if (($(window).scrollTop() > c) && (b.data("positioned") == "false")) {
	            b.fadeIn().data("positioned", "true");
	        }
	        else {
	            if (($(window).scrollTop() <= c) && (b.data("positioned") == "true")) {
	                b.fadeOut().data("positioned", "false");
	            }
	        }
	    }
	    $(window).scroll(a);
	    b.data("positioned", "false");
	    $("a.close").click(function (c) {
	        c.preventDefault();
	        b.fadeOut(function () {
	            b.css("visibility", "hidden");
	        });
	    });

	});




