﻿$(function(){
  $('scroll').click(function () {
    $('html, body').animate({
       scrollTop: $(document).height()
    }, 'slow');
    return false;
  });
});