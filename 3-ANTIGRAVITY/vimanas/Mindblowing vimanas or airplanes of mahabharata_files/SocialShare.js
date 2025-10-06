function setIframe(e, r) {
    if (!e.hasBeenSet) {
        e.src = r;
        e.hasBeenSet = true;
    }
}
function openwindow(r) {
    window.open(r, "newwindow", "location=yes,resizable=yes,dependent=yes,width=500,height=380,left=0, top=0,scrollbars=yes");
}
function openurl(e, f) {
    var url = $(e).attr('title');
    var node = $(e).closest('#art').find(".imgBlog");
    var summary = $(e).closest('#art').find("span[id='summary']").text();
    var title = $(node).attr('alt');
    if (f === "fShare") {
        var r = "https://www.facebook.com/plugins/share_button.php?href=" + encodeURIComponent(url) + "&layout=button_count";
        setIframe(e, r);
    } else if (f === "fLike") {
        var r = "https://www.facebook.com/plugins/like.php?href=" + encodeURIComponent(url) + "&width&layout=button_count";
        setIframe(e, r);
    } else if (f === "Google") {
        var r = "https://plus.google.com/share?url=" + encodeURIComponent(url);
        openwindow(r);
    } else if (f === "Tumblr") {
        var r = "http://www.tumblr.com/share/link?url=" + encodeURIComponent(url) + "&name=" + title + "&description=" + summary;
        openwindow(r);
    } else if (f === "Twitter") {
        var r = "https://platform.twitter.com/widgets/tweet_button.html?url=" + encodeURIComponent(url) + "&via=twitterdev&related=twitterapi%2Ctwitter&text=" + title;
        // alert(r);
        /// var r = "https: //platform.twitter.com/widgets/tweet_button.html?size=l&url=" + url+
        //  "&via=twitterdev&related=twitterapi%2Ctwitter&text=" + title;
        //var r = "http://twitter.com/share?text=" + title + "&url=" + url + "&hashtags=stackoverflow,example,youssefusf"
        setIframe(e, r);
    } else if (f === "Email") {
        var r = "mailto:friend1@gmail.com?cc=friend2@gmail.com&bcc=yourself@gmail.com&subject=" + title + "&body=" + summary;
        openwindow(r);
    }
} 