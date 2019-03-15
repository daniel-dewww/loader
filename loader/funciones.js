// JavaScript Document
var load = 0, fake = 0;
document.onreadystatechange = function(e){
if(document.readyState=="interactive"){
	$('html').addClass('loading');
	var int = setInterval(function(){
			var prev = parseInt($('.num').text());
			if(prev >= 100){
				clearInterval(int);
				show();
			} else {
				var num = Math.floor((Math.random() * 5) + 1);
				var res = prev+num;
				if(res > 100){
					res = 100;
					if(load == 1){
						show();
					} else {
						fake = 1;
					}
				}
				$('.per').css('width', res + '%');
				$('.num').text(res + '%');
			}
		},100);
	}
}
function show(){
	$('#loader').fadeOut(900, 'easeInQuart',function(){
		iniciar();			
	});
}

//inicia
function iniciar(){
	/*$('#inicio img.espatula').removeClass('vx');
	setTimeout(function(){
	$('#inicio img.sarten').removeClass('vx');
	}, 500);*/
	
	setTimeout(function(){
		$('#inicio .wp').animate({
			'left': 0	
		}, 200);
		$('#inicio .wp').css('opacity',1);
	}, 500);
	
} 