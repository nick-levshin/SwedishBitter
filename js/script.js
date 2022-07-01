$(function(){
  $('.list-inner .tab, .reviews-tab').on('click', function(event) {
    var id = $(this).attr('data-id');
    $('.list-inner, .reviews-inner').find('.tab-item, .reviews-content-item').removeClass('active-tab').hide();
    $('.list-inner .tabs, .reviews-tabs').find('.tab, .reviews-tab').removeClass('active');
    $(this).addClass('active');
    $('#'+id).addClass('active-tab').fadeIn();
    return false;
  });
});