var projectView = {};
var x;

projectView.handleMainNav = function () {
  $('.main-menu').on('click', '.tab', function() {
    var $dataContent = $(this).attr('data-content');
    $('.main-nav').hide();
    x = $(this);
    $('#' + $(this).attr('data-content')).show();
  });
}

projectView.initiateIndexPage = function() {
  Project.all.forEach(function(a){
    $('#projects').append(a.toHtml())
  });

projectView.handleMainNav();
};
