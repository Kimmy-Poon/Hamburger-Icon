function isMobile(){
	var isMobile = (/iphone|ipod|android|ie|blackberry|fennec/).test(navigator.userAgent.toLowerCase());
	return isMobile;
}
 
$( document ).ready(function() {
	if(isMobile()){
		$( ".svg_demo .bar" ).show();
		$( ".svg_demo svg" ).hide();
	}
});
 
$( ".svg_demo" ).click(function() {
 	var clicked = $( "div.svg_demo" ).hasClass('active');
	if(!clicked){
		$( "div.svg_demo" ).addClass('active');
		$( "div.svg_demo" ).removeClass('normal');
		$( "div.div_normal" ).addClass('active');
		$( "div.div_normal" ).removeClass('normal');
		$( "span.bar i" ).removeClass('fa-bars');
		$( "span.bar i" ).addClass('fa-times');
	} else {
		$( "div.svg_demo" ).addClass('normal');
		$( "div.svg_demo" ).removeClass('active');
		$( "div.div_normal" ).removeClass('active');
		$( "div.div_normal" ).addClass('normal');
		$( "span.bar i" ).addClass('fa-bars');
		$( "span.bar i" ).removeClass('fa-times');
	}
});