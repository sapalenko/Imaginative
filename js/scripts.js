$(document).ready( function () {
	console.log("scrips loaded");
	gallery();
	setInterval(function(){slideshow();}, 8000);
});
function gallery(){
	$('.bullets li').click( function(){
		var $this = $(this);
		var $siblings = $this.parent().children();
		var position = $siblings.index($this);

		$('.slide').removeClass('active').eq(position).addClass('active');
		$('.bullets li').removeClass('active').eq(position).addClass('active');
	});	
}