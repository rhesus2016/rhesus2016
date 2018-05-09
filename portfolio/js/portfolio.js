$(document).ready(function(){
    var header=$('header');
    var btn=header.find('button');
    var nav=btn.next();
    var mainNav=nav.find('a');
    var mainBtn=$('.main').find('button');
    
    function navSlideUp(){
        btn.removeClass('on');
        nav.slideUp(300);
        header.removeClass('on');    
    }
    function bigLink(link){
		var target=$(link.attr('href')).offset().top-56;
		$('html,body').animate({scrollTop:target},800,'swing');
	}
    function smallLink(link){
		var target=$(link.attr('href')).offset().top-40;
		$('html,body').animate({scrollTop:target},800,'swing');
	}
    
    /*우측 상단 버튼 클릭*/
    btn.click(function(){
        if(btn.hasClass('on')){
            navSlideUp();   
        }else{
            btn.addClass('on');
            nav.slideDown(400);
            header.addClass('on');
        }
    });
    
    /*좌측 하단 버튼 클릭*/
    mainBtn.click(function(){
        var topTarget=$('.main').offset().top;
        $('html,body').animate({scrollTop:topTarget},800,'swing');        
    });
    
    mainNav.click(function(){
        
        /*메인 메뉴 클릭 시 메뉴 슬라이드 업*/
        navSlideUp();
        
        /*메인 메뉴 클릭 시 해당 위치로 부드럽게 이동*/
        if($(window).width() < 480){
            smallLink($(this));    
        }else{
            bigLink($(this));    
        }
    });
    
    /*bxslider*/
    $('#web').find('.webBxslider').bxSlider({
        auto: false,
        speed: 1000    
    });
    
    $('#design').find('.designBxslider').bxSlider({
        auto: false,
        speed: 1000    
    });
    
    /*resizing*/
    $(window).resize(function(){
        if($(this).width() < 480){
            smallLink($(this));
        }else{
            bigLink($(this)); 
        }
    });
});