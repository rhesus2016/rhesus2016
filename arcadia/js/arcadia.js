$(document).ready(function(){
	var btn = $('header').find('button');
	var nav = btn.next();
	function aniLink(link){
		var target = $(link.attr('href')).offset().top;
		$('html,body').animate({scrollTop:target},800);
	}
	function fadeObject(target){
		var object = target;
		var objectOffset = object.offset().top;
		if($(this).scrollTop() > objectOffset-1000){
			object.addClass('fadeIn');
		}else{
			object.removeClass('fadeIn');
		}
	}
	
	/*상단 버튼 클릭*/
	btn.click(function(){
		if(btn.hasClass('on')){
			nav.stop().fadeOut();
			btn.removeClass('on');
		}else{
			nav.stop().fadeIn();
			btn.addClass('on');
		}
	});
	
	
	$(window).scroll(function(){
        /*스크롤 시 nav fadeOut*/
		if($(this).width() < 1280){
			nav.fadeOut();
			btn.removeClass('on');
		}
		
		/*스크롤 시 fadeIn*/
		fadeObject($('#service').find('div'));
		fadeObject($('.partners').find('div'));
		fadeObject($('.staff'));
	});	
	
    /*nav 클릭 시 해당 위치로 이동*/
	nav.find('a').click(function(){
		aniLink($(this));
	});
    
    /*.arrow 클릭 시 해당 위치로 이동*/
	$('.arrow,a[href="#top"]').click(function(){
		aniLink($(this));
	});
	
	/*bxSlider*/
	$('.slider').bxSlider({
		auto:true,
		controls:false
	});
	
	/*footer form*/
	$('footer').find('form').find('input,textarea').on({
		focus:function(){$(this).prev().hide();},
		blur:function(){if($(this).val() == ''){$(this).prev().show();}
		}
	});
});