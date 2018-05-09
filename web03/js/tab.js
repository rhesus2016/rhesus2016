$(document).ready(function(){
    lastTab=$('a').filter('.on');
    lastPanel=$(lastTab.attr('href'));
    $('.panel').hide();
    lastPanel.show();
    $('a').click(function(event){
        event.preventDefault();
        var thisTab=$(this);
        var thisPanel=$(thisTab.attr('href'));
        lastTab.removeClass('on');
        thisTab.addClass('on');
        lastPanel.hide();
        thisPanel.show();
        lastPanel=thisPanel;
        lastTab=thisTab;
    });
});