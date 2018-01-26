$(function(){
	 var carouselList = $("#carousel ul");
	 var changeSlides = setInterval(changeSlide, 3000);
	
	function changeSlide(direction){
		var animatedStyles = {
			marginRight: '400px',
		}
		if (direction === 'left') {
			animatedStyles = {
				marginLeft: '-400px',
			}
		}
	
		carouselList.animate(animatedStyles, 500, function(){
			moveSlide(direction);
		});

	}
	function moveSlide(direction){
		 var firstItem = carouselList.find("li:first");
		 var lastItem = carouselList.find("li:last"); 
		 if (direction === 'left') {
		 	firstItem.before(lastItem);
		 } else {
		 	lastItem.after(firstItem);
		 }
		 $('carouselList').css ({
			 marginLeft: 0
		 });
	}
	$('.prev').on('click', function(){
		clearInterval(changeSlides);
		changeSlide('left');
		changeSlides = setInterval(changeSlide, 3000);
	});


	$('.next').on('click', function(){
		clearInterval(changeSlides);
		changeSlide('right');
		changeSlides = setInterval(changeSlide, 3000);
	});
	$('.dot').on('click', function() {
		clearInterval(changeSlides);
		var currentSlide = carouselList.find("li:first").data("slide");
		var currentDot = $(this).index() +1;
		if (currentDot < currentSlide) {
			for (var i = currentSlide; i >= currentDot; i--) {
			changeSlide('left');
			};
		} else {
			for (var i = currentSlide; i < currentDot; i++){
				changeSlide('right');
			}
		}
	});
		
});
