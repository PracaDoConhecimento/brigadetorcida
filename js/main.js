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

/*
	$('.hq_pag').each(function() {

		var pageId = $(this).attr('id');
		var controle = true;	

		$(this).on('mouseover', function() {			
			if (controle) {
				$(this).trigger('playSound', [pageId]);		// dispara evento playSound attr pID	
			}
			
		});


		$(this).bind('playSound', function(e, pID) {	// escuta evento PlaySound
			
			event.stopPropagation();

			//Sound.stop();	

			switch(pID) {
				case "1":		
					Sound.stop();
					Sound.play('tv_ligada.mp3');					
					break;
				case "2":
					//Sound.play('narracao.mp3');
					break;
			}
			var controle = true;
		});

	});
*/

});
