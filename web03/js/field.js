$(document).ready(function(){
    $('#sec01').find('button').click(function(){
        var age=$('#sec01').find('input').val();
        if(age == ''){
            alert('성인인증해주세요.');
        }else if(age < 20){
            alert('미성년입니다.');
        }else if(age >= 20){
            alert('성인입니다.');
        }else{
            alert('숫자만 입력해주세요');
        }
    });
    $('#sec02').find('.sec02').each(function(){
        var inputText=$(this);
        var guideText=this.defaultValue;
        if(inputText.val() == guideText){
            inputText.addClass('gray');
        }
        inputText.focus(function(){
            if(inputText.val() == guideText){
                inputText.val('').removeClass('gray');
            }
        });
        inputText.blur(function(){
            if(inputText.val() == '')
                inputText.val(guideText).addClass('gray');
        });
    });
    $('#sec03').find('input').each(function(){
        var sec03=$(this);
        sec03.focus(function(){
            sec03.siblings('label').hide();
        });
        sec03.blur(function(){
            if(sec03.val() == ''){
                sec03.siblings('label').show();
            }
        });
    });
});