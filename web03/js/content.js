$(document).ready(function(){
    $('<div>텍스트</div>').appendTo('body');
    var sec01=$('#sec01');
    var sec02=$('#sec02');
    var sec03=$('#sec03');
    var sec04=$('#sec04');
    var sec05=$('#sec05');
    var basket=sec02.find('.div1');
    var apple=sec02.find('.div2');
    var banana=sec02.find('.div3');
    var orange=sec02.find('.div4');
    sec01.find('.btn1').click(function(){
        $(this).siblings('.div1').text('text 메서드로 텍스트 적용');
    });
    sec01.find('.btn2').click(function(){
        $(this).siblings('.div2').html('html 메서드로 텍스트 적용');
    });
    sec01.find('.btn3').click(function(){
        $(this).siblings('.div3').text('<strong>text 메서드</strong>로 텍스트 적용');
    });
    sec01.find('.btn4').click(function(){
        $(this).siblings('.div4').html('<strong>html 메서드</strong>로 텍스트 적용');
    });
    sec02.find('.btn1').click(function(){
        basket.append(apple);
    });
    sec02.find('.btn2').click(function(){
        basket.append(banana);
    });
    sec02.find('.btn3').click(function(){
        basket.append(orange);
    });
    sec02.find('.btn4').click(function(){
        basket.prepend(apple);
    });
    sec02.find('.btn5').click(function(){
        basket.prepend(banana);
    });
    sec02.find('.btn6').click(function(){
        basket.prepend(orange);
    });
    sec02.find('.btn7').click(function(){
        basket.append(apple,banana,orange);
    });
    sec02.find('.btn8').click(function(){
        basket.prepend(apple,banana,orange);
    });
    sec03.find('.btn1').click(function(){
        sec03.find('img').attr({'src':'img/iphone1.jpg','alt':'아이폰1'});
    });
    sec03.find('.btn2').click(function(){
        sec03.find('img').attr({'src':'img/iphone2.jpg','alt':'아이폰2'});
    });
    sec03.find('.btn3').click(function(){
        sec03.find('img').attr({'src':'img/iphone3.jpg','alt':'아이폰3'});
    });
    sec03.find('.btn4').click(function(){
        sec03.find('img').attr({'src':'img/iphone4.jpg','alt':'아이폰4'});
    });
    sec03.find('.btn5').click(function(){
        sec03.find('img').attr({'src':'img/iphone5.jpg','alt':'아이폰5'});
    });
    sec04.find('input').val('제이쿼리에서 다시 작성');
    sec04.find('textarea').val('제이쿼리에서 다시 작성');
    sec04.find('.sel01').val('인천');
    sec04.find('.sel02').val(['구로','양천','강서']);
    sec05.find('.btn1').click(function(){
        $(this).siblings('div').addClass('dashed')
    });
    sec05.find('.btn2').click(function(){
        $(this).siblings('div').removeClass('dashed')
    });
    sec05.find('.btn3').click(function(){
        $(this).siblings('div').addClass('notice')
    });
    sec05.find('.btn4').click(function(){
        $(this).siblings('div').removeClass('notice')
    });
    sec05.find('.btn5').click(function(){
        $(this).siblings('div').toggleClass('dashed')
    });
    sec05.find('.btn6').click(function(){
        $(this).siblings('div').toggleClass('notice')
    });
});