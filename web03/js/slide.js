$(document).ready(function(){
    $('div').each(function(){
        var div=$(this);
        function slide(){
            var firstImg=div.find('img').eq(0);
            var secondImg=div.find('img').eq(1);
            firstImg.fadeOut().appendTo(div);
            secondImg.fadeIn();
        }
        setInterval(slide,1000);
    });
});