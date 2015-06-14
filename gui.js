$(document).ready(function() {
	$("#menu input").each(function() {
		$(this).click(function() {
			var val = $(this).attr("class");
			//alert(val);
			$("#main div").each(function() {
				$(this).hide();
			});
			$("#main").find("#"+val).show();
			//alert($("#main").find('.'+val));
		});
	});
	$("#main div").each(function() {
		$(this).hide();
	});
});