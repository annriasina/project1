$(document).ready(function(){
	$("#popup").hide();
    $(document).on('click','#popup .close', function(){
        $('#shadow').hide('fast');
        $("#popup").hide("fast");
	});
   $(document).on('click','#shadow', function(){
        $('#shadow').hide('fast');
        $("#popup").hide("fast");
	});

	$(".show-popup").click(function(){
		$("#popup").show("fast");
		if(!$('#shadow').length){
            $("body").prepend('<div id="shadow" style="z-index:12; position:absolute; top:0; left:0; width:100%; height:100%; background:#000; opacity:0.6;"></div>');
        } else {
			$('#shadow').show('fast');
		}
		return false;
	})
});
$(document).on('keyup',function(evt) {
    if (evt.keyCode == 27) {
    	$("#popup").hide("fast");
		$(".shadow").remove();	
    }
});