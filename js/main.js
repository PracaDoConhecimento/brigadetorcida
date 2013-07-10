jQuery(document).ready(function($) {	

	$('#navbar').scrollspy();

	$('.grid').isotope({
	  itemSelector : '.balao'	 
	});


	$('.nav a').click(function() {

		var areaId = $(this).attr('href');

		$('.nav a').parent().removeClass('active'); //reset all
		$(this).parent().addClass('active');	//add on current	

		$('body').scrollTo( areaId, 1000, { offset: -170 } );//add or deduct from the final position	

	});

});
