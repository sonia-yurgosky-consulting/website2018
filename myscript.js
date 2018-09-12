$('.fade-anchor').click(function(e){
				e.preventDefault();

				$('#fade-content').css('max-height','none');
				$('.fade-anchor').remove();
			});