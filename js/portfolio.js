$( document ).ready(function() {

    function cycleBackgrounds() {
	var index = 0;

	$imageEls = $('.toggle-image'); // Get the images to be cycled.

	setInterval(function () {
		// Get the next index.  If at end, restart to the beginning.
		index = index + 1 < $imageEls.length ? index + 1 : 0;
		// Show the next image.
		$imageEls.eq(index).addClass('show');
		// Hide the previous image.
		$imageEls.eq(index - 1).removeClass('show');

	}, 2000);
};

// Document Ready.
$(function () {
	cycleBackgrounds();
});
/*var url = ['../img/prague.png' ,
        '../img/budapest.png'];
curentImageIndex = 0;
setInterval(function(){ 
 console.log(url[curentImageIndex])
 var p = $('.backgr');
  p.css("background","url("+url[curentImageIndex++] + ")");
  if(curentImageIndex>= url.length){curentImageIndex = 0}
 }, 1000);*/
});

