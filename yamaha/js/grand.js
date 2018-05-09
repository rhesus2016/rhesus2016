$(document).ready(function(){
    var btn=$('header').find('button');
    var nav=btn.next();
    var mainNav=nav.children('ul').children('li');
    var bar=$('.bar');
    var footer=$('footer');
    var fbtn=footer.find('button');
    var section=$('.section');
    var bxLic = $('.comSliderWrap').html();
    var bxLip = $('.proSliderWrap').html();
    var craft = $('#craft');
    var component = $('#component');
    var product = $('#product');
    function navFadeOut(){
        nav.stop().fadeOut(400);
        btn.removeClass('on');
        bar.addClass('off');
    }
    function navFadeIn(){
        nav.stop().fadeIn(400);
        btn.addClass('on');
        bar.removeClass('off');
    }
    function tabletNavBg(a,b){
        a.on({
            'mouseenter focusIn':function(){b.css('width','72%')},
            'mouseleave focusOut':function(){b.css('width','0%')}
        });
    }
    function subNavSlide(){
        mainNav.on({
            'mouseenter focusin':function(){$(this).find('ul').stop().slideDown(400);},
            'mouseleave focusout':function(){$(this).find('ul').stop().slideUp(100);}
        });   
    }
    function aniLink(link){
		var target = $(link.attr('href')).offset().top;
		$('html,body').animate({scrollTop:target},800,'swing');
	}
    function bsSliderStart(a,b){
        a.find('ul').bxSlider({
            pagerCustom : b,
            auto: false,
            speed: 1000
        });    
    }
    function ptFooter(){
        footer.css({'position':'fixed','bottom':'-231px'});
        fbtn.removeClass('on');
    }
    function footerSlide(){
        fbtn.click(function(){
            if(fbtn.hasClass('on')){
                ptFooter();
            }else{
                footer.css({'position':'fixed','bottom':'0'});
                fbtn.addClass('on');
            }
        }); 
    }
    function bsSliderPT(){
        bsSliderStart($('.comSliderWrap'),$('#component-pager'));
        bsSliderStart($('.proSliderWrap'),$('#product-pager'));
    }
    function tabletNav(){
        tabletNavBg($('.acoustic'),$('.acousticTmb'));
        tabletNavBg($('.hybrid'),$('.hybridTmb'));
        tabletNavBg($('.digital'),$('.digitalTmb'));
        tabletNavBg($('.app'),$('.appTmb'));    
    }
    function mousewheelEvent(){
        section.mousewheel(function(event,delta){
            if(delta > 0){
                var prev = $(this).prev().offset().top;
                $('html,body').stop().animate({scrollTop:prev},800);
            }else if(delta < 0){
                var next = $(this).next().offset().top;
                $('html,body').stop().animate({scrollTop:next},800);
            }
	    });
    }
   
    /*우측 상단 메뉴 클릭*/
    btn.click(function(){
        if(btn.hasClass('on')){
            navFadeOut();
        }else{
            navFadeIn();
        }
    });
    
    /*메인 메뉴 클릭 시 메뉴 페이드 아웃*/
    mainNav.click(function(){
        navFadeOut();
    });
    
    /*메인 메뉴 클릭 시 해당 위치로 부드럽게 이동*/
    mainNav.children('a').click(function(){
		aniLink($(this));
	});
    
    $('header').find('h1').find('a').click(function(){
        
        /*왼쪽 상단 로고 클릭 시 메뉴 페이드 아웃*/
        navFadeOut();
        
        /*왼쪽 상단 로고 클릭 시 해당 위치로 부드럽게 이동*/
        aniLink($(this));
    });
    
    /*pc // tablet*/
    if($(window).width() >= 1280){
        
        /*pc 메인 메뉴 호버 시 서브 메뉴 슬라이드 다운*/
        subNavSlide();   
        
    }else if($(window).width() < 1280 && $(window).width() >= 1024){
        
        /*tablet 메인 메뉴 호버 시 배경 슬라이드*/
        tabletNav(); 
    }
    
    /* pc, talbet // mobile*/
    if($(window).width() >= 1024){
       
        /*1024px 이상 footer 버튼 클릭 시 footer 슬라이드*/
        footerSlide();
    
        /*1024px 이상 fullpage*/
        section.height($(window).height());
    
        /*1024px 이상 mousewheel*/
        mousewheelEvent();
       
        /*1024px 이상 bxslider*/
        bsSliderPT();
    }
    
    /*스크롤 이벤트*/
    $(window).scroll(function(){
        
        /*#craft 스크롤 이벤트*/
        if($(this).scrollTop() > craft.offset().top-600 && $(this).width() >= 1024){
            craft.find('.a').addClass('animated slideInLeft');
            craft.find('.b').addClass('animated bounceInRight');
            craft.find('.c').addClass('lineSize');
            craft.find('.txt').addClass('animated fadeInDown');
            craft.find('.tBox').addClass('animated fadeInDown');
            craft.find('.bBox').addClass('animated fadeInLeftGrands');
            craft.find('.sBox').addClass('animated fadeInRightGrand');
        }
        
        /*#component 스크롤 이벤트*/
        if($(this).scrollTop() > component.offset().top-600 && $(this).width() >= 1024){
            component.find('.shadowBox').addClass('animated slideInRight');
            component.find('#component-pager').addClass('animated fadeInLeftGrand');
        }
        
        /*#product 스크롤 이벤트*/
        if($(this).scrollTop() > product.offset().top-600 && $(this).width() >= 1024){
            product.find('.shadowBox').addClass('animated slideInLeftGrand');
            product.find('#product-pager').addClass('animated fadeInRightGrand');
        }
        
        /*headerBg*/
        if($(this).scrollTop() > $('#gdTop').offset().top+50){
            $('#headerBg').css('opacity','1');
        }else{
            $('#headerBg').css('opacity','0');
        }
    });

    /*resizing*/
    $(window).resize(function(){
        if($(this).width() < 1024){
            mainNav.off();
            mainNav.click(function(){
                navFadeOut();
            });
            navFadeOut();
            fbtn.off();
            footer.css({'position':'relative','bottom':'0'});
            fbtn.removeClass('on');
            $('.comSliderWrap').html(bxLic);
            $('.proSliderWrap').html(bxLip);
            section.off().height('auto');
        }else if($(this).width() < 1280 && $(this).width() >= 1024){
            mainNav.off();
            mainNav.click(function(){
                navFadeOut();
            });
            navFadeOut();
            tabletNav();
            fbtn.off();
            ptFooter();
            footerSlide();
            bsSliderPT();
            section.off()
            section.height($(window).height());
            mousewheelEvent();
        }else{
            mainNav.off();
            mainNav.click(function(){
                navFadeOut();
            });
            navFadeOut();
            subNavSlide();
            fbtn.off();
            ptFooter();
            footerSlide();
            bsSliderPT();
            section.off()
            section.height($(window).height());
            mousewheelEvent();
        }
    });
});