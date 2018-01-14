$(function(){
	 var carouselList = $("#carousel ul");
	 var changeSlides = setInterval(function(){
    	 carouselList.animate(
    		 {
    		 'marginLeft':-400}, 500, function(moveFirstSlide){
    			 var firstItem = carouselList.find("li:first");
				 var lastItem = carouselList.find("li:last");  
				 var moveFirstSlide = lastItem.after(firstItem);
				 $('carouselList').css ({
					 marginLeft: 0
				 });
    		 });
 }, 3000);
	 $('.next').on('click', function(){
		carouselList.animate(
    		 {
    		 'marginRight': '400px'}, 0, function(moveFirstSlide){
    			 var firstItem = carouselList.find("li:first");
				 var lastItem = carouselList.find("li:last");  
				 var moveFirstSlide = lastItem.after(firstItem);
				 $('carouselList').css ({
					 marginLeft: 0
				 });
    		 });
    
	});
	$('.prev').on('click', function(){
		carouselList.animate(
    		 {
    		 'marginLeft': '-400px'}, 0, function(moveLastSlide){
    			 var firstItem = carouselList.find("li:first");
				 var lastItem = carouselList.find("li:last");  
				 var moveLastSlide = firstItem.after(lastItem);
				 $('carouselList').css ({
					 marginLeft: 0
				 });
    		 });
	});
	$('.dot1').on('click', function() {
		 
	});
});
