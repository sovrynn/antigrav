function editlink() {
	pageURL = this.location;
	contactURL = "/home/contribute/edit.html?eu=" + pageURL;
	document.write('<a href="'+contactURL+'">Edit this page</a>');
}