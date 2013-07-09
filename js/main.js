jQuery(document).ready(function($) {
	// Stuff to do as soon as the DOM is ready;

	$('.grid').isotope({
	  // options
	  itemSelector : '.balao'
	  
	});


	$('.nav a').click(function() {

		var areaId = $(this).attr('href');

		$('.nav a').parent().removeClass('active'); //reset all
		$(this).parent().addClass('active');	//add on current	

		$('body').scrollTo( areaId, 1000, { offset: -170 } );//add or deduct from the final position	

/*		$(this).localScroll({	   
		   axis:'y',
		   offset: 100   
		});*/

		//return false;
	});

});
