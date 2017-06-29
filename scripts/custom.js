var jpract;

jpract = {
	accordion: function(){
		$('.top-tabs li a').click(function(){
			var tab = $(this).data('tab');
			var $tab = $('#'+tab);
			$('.top-tabs li.active').removeClass('active');
			$(this).parent().addClass('active');
			$('.content').slideUp();
			$tab.slideDown();
		});
	}
}

$(document).ready(function(){
	jpract.accordion();
});