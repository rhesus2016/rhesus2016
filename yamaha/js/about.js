$(document).ready(function(){
    var btn=$('header').find('button');
    var nav=btn.next();
    var mainNav=nav.children('ul').children('li');
    var bar=$('.bar');
    var footer=$('footer');
    var fbtn=footer.find('button');
    var introduce = $('#introduce');
    var video = $('#video');
    function navFadeOut(){
        nav.fadeOut(400);
        btn.removeClass('on');
        bar.addClass('off');
    }
    function navFadeIn(){
        nav.fadeIn(400);
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
    function tabletNav(){
        tabletNavBg($('.acoustic'),$('.acousticTmb'));
        tabletNavBg($('.hybrid'),$('.hybridTmb'));
        tabletNavBg($('.digital'),$('.digitalTmb'));
        tabletNavBg($('.app'),$('.appTmb'));    
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
    if($(window).width() >= 1263){
        
        /*pc 메인 메뉴 호버 시 서브 메뉴 슬라이드 다운*/
        subNavSlide();
        
    }else if($(window).width() < 1263 && $(window).width() >= 1007){
        
        /*tablet 메인 메뉴 호버 시 배경 슬라이드*/
        tabletNav(); 
    }
    
    /* pc, talbet // mobile*/
    if($(window).width() >= 1007){
       
        /*1024px 이상 footer 버튼 클릭 시 footer 슬라이드*/
        footerSlide();
    }
    
    /*스크롤 이벤트*/
    $(window).scroll(function(){
        
        /*#introduce 스크롤 이벤트*/
        if($(this).scrollTop() > introduce.offset().top-600 && $(this).width() >= 1007){
            introduce.find('.secondBox').addClass('animated fadeInLeftAbout');
        }
        
        /*#video 스크롤 이벤트*/
        if($(this).scrollTop() > video.offset().top-600 && $(this).width() >= 1007){
            video.find('.videoF').addClass('videoSlideF');
            video.find('.videoS').addClass('videoSlideS');
            video.find('.videoT').addClass('videoSlideT');
        }
        
        /*headerBg*/
        if($(this).scrollTop() > $('#abTop').offset().top+50){
            $('#headerBg').css('opacity','1');
        }else{
            $('#headerBg').css('opacity','0');
        }
    });
    
    /*resizing*/
    $(window).resize(function(){
        if($(this).width() < 1007){
            mainNav.off();
            mainNav.click(function(){
                navFadeOut();
            });
            navFadeOut();
            fbtn.off();
            footer.css({'position':'relative','bottom':'0'});
            fbtn.removeClass('on');
        }else if($(this).width() < 1263 && $(this).width() >= 1007){
            mainNav.off();
            mainNav.click(function(){
                navFadeOut();
            });
            navFadeOut();
            tabletNav();
            fbtn.off();
            ptFooter();
            footerSlide();
        }else{
            mainNav.off();
            mainNav.click(function(){
                navFadeOut();
            });
            navFadeOut();
            subNavSlide()
            fbtn.off();
            ptFooter();
            footerSlide();
        }
    });
});    