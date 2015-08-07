$(function(){
    $('.information-entry-section').on('click', function(e){
        document.location.href = $(this).find('a').attr('href');
    });
});