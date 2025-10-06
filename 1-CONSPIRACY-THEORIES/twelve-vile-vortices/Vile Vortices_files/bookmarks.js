function bookmarks() {
	var bm_stumbleURL = 'http://www.stumbleupon.com/submit/?url=';
	var bm_deliciousURL = 'http://del.icio.us/post?url=';
	var bm_diggURL = 'http://digg.com/submit?phrase=2&amp;url=';
	var bm_redditURL = 'http://reddit.com/submit?url=';
	var bm_googleURL = 'http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk=';
	var bm_thisURL = document.location;
	var bm_title = document.title;
	bm_title = bm_title.split(' ');
	bm_title = bm_title.join('+');
	var bm_div = document.getElementById('bookmarks');

	bm_div.innerHTML = 'Bookmark this page:<br> <a href="' + bm_stumbleURL + bm_thisURL + '&amp;title=' + bm_title + '" title="Stumble this page" rel="nofollow"><img src="/images/icons/stumbleupon.png" width="16" height="16" alt="Stumble" border="0" class="bm_ico" /></a>';
	bm_div.innerHTML += '<a href="' + bm_deliciousURL + bm_thisURL + '&amp;title=' + bm_title + '" title="Bookmark this page on del.icio.us" rel="nofollow"><img src="/images/icons/delicious.png" width="16" height="16" alt="Delicious" border="0" class="bm_ico" /></a>';
	bm_div.innerHTML += '<a href="' + bm_diggURL + bm_thisURL + '&amp;title=' + bm_title + '" title="Digg this page on digg.com" rel="nofollow"><img src="/images/icons/digg.png" width="16" height="16" alt="Digg" border="0" class="bm_ico" /></a>';
	bm_div.innerHTML += '<a href="' + bm_redditURL + bm_thisURL + '&amp;title=' + bm_title + '" title="Submit this page on reddit.com" rel="nofollow"><img src="/images/icons/reddit.png" width="16" height="16" alt="Reddit" border="0" class="bm_ico" /></a>';
	bm_div.innerHTML += '<a href="' + bm_googleURL + bm_thisURL + '&amp;title=' + bm_title + '" title="Bookmark on Google" rel="nofollow"><img src="/images/icons/google.gif" width="16" height="16" alt="Google" border="0" class="bm_ico" /></a>';
}

window.onload = bookmarks;