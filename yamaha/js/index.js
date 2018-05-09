$(document).ready(function(){
    var btn=$('header').find('button');
    var nav=btn.next();
    var mainNav=nav.children('ul').children('li');
    var bar=$('.bar');
    var footer=$('footer');
    var fbtn=footer.find('button');
    var section=$('.section');
    var bxLia = $('.acSliderWrap').html();
    var bxLih = $('.hySliderWrap').html();
    var bxLid = $('.digSliderWrap').html();
    var bxLip = $('.appSliderWrap').html();
    var acoustic = $('#acoustic');
    var hybrid = $('#hybrid');
    var digital = $('#digital');
    var app = $('#app');
    var bottom = $('#bottom');
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
        bsSliderStart($('.acSliderWrap'),$('#acoustic-pager'));
        bsSliderStart($('.hySliderWrap'),$('#hybrid-pager'));
        bsSliderStart($('.digSliderWrap'),$('#digital-pager'));
        bsSliderStart($('.appSliderWrap'),$('#app-pager'));
    }
    function tabletNav(){
        tabletNavBg($('.acoustic'),$('.acousticTmb'));
        tabletNavBg($('.hybrid'),$('.hybridTmb'));
        tabletNavBg($('.digital'),$('.digitalTmb'));
        tabletNavBg($('.app'),$('.appTmb'));    
    }
    function oddMotion(a,b,c,d,e){
        a.addClass('fadeInRight');
        b.addClass('animated bounceInLeft');
        c.addClass('animated fadeInLeftBig');
        d.addClass('animated fadeInUpSmall');
        e.addClass('animated fadeInUpSmall');
    }
    function evenMotion(a,b,c,d,e){
        a.addClass('fadeInLeft');
        b.addClass('animated fadeInRightBig');
        c.addClass('animated bounceInRight');
        d.addClass('animated fadeInUpSmall');    
        e.addClass('animated fadeInUpSmall'); 
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
    function footerAutoSlide(){
        app.mousewheel(function(event,delta){
            if(delta < 0){
                footer.css('bottom','0');
                fbtn.addClass('on');
            }  
        })
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
        
        /*#acoustic 스크롤 이벤트*/
        if($(this).scrollTop() > acoustic.offset().top-600 && $(this).width() >= 1024){
            oddMotion(acoustic.find('.bx-wrapper'),acoustic.find('.a'),acoustic.find('.n'),acoustic.find('#acoustic-pager'),acoustic.find('p'));
        }
        
        /*#hybrid 스크롤 이벤트*/
        if($(this).scrollTop() > hybrid.offset().top-600 && $(this).width() >= 1024){
            evenMotion(hybrid.find('.bx-wrapper'),hybrid.find('.l'),hybrid.find('.k'),hybrid.find('#hybrid-pager'),hybrid.find('p')); 
        }
        
        /*#digital 스크롤 이벤트*/
        if($(this).scrollTop() > digital.offset().top-600 && $(this).width() >= 1024){
            oddMotion(digital.find('.bx-wrapper'),digital.find('.a'),digital.find('.m'),digital.find('#digital-pager'),digital.find('p'));
        }
        
        /*#app 스크롤 이벤트*/
        if($(this).scrollTop() > app.offset().top-600 && $(this).width() >= 1024){
            evenMotion(app.find('.bx-wrapper'),app.find('.n'),app.find('.m'),app.find('#app-pager'),app.find('p'));
        }
        
        /*#bottom 스크롤 이벤트*/
        if($(this).scrollTop() > bottom.offset().top-600 && $(this).width() >= 1024){
            bottom.find('p').addClass('animated fadeInUpSmall');
            bottom.find('span').addClass('animated fadeInUpSmall');
            bottom.find('a').addClass('animated flipInX');
        }
        
        /*headerBg*/
        if($(this).scrollTop() > $('#top').offset().top+50){
            $('#headerBg').css('opacity','1');
        }else{
            $('#headerBg').css('opacity','0');
        }
    });

    /*footer 자동 슬라이드*/
    footerAutoSlide();
    
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
            $('.acSliderWrap').html(bxLia);
            $('.hySliderWrap').html(bxLih);
            $('.digSliderWrap').html(bxLid);
            $('.appSliderWrap').html(bxLip);
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
            section.off();
            section.height($(window).height());
            mousewheelEvent();
            footerAutoSlide();
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
            section.off();
            section.height($(window).height());
            mousewheelEvent();
            footerAutoSlide();
        }
    });
});
