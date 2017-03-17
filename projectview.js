var projectView = {};

projectView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    $('.projects').hide();
    $('#' + $(this).attr('about')).show();
      console.log(this);
  });
  //$('.main-nav .tab:first').click();
};

projectView.handleMainNav();
