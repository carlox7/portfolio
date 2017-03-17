var projectView = {};

projectView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    $('#projects').hide();
    $('#' + $(this).attr('about')).show();

  });
};

projectView.handleMainNav();
