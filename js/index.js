$(document).ready(function() {
    setInterval(gun, 1000);

    function gun() {
        $('#noticetext li').first().slideUp(); //向上滚动  
        $('#noticetext').append('<li>' + $('#noticetext li').first().html() + '</li>');
        setTimeout(function() {
            $('#noticetext li').first().remove();
        }, 500);
    }
});