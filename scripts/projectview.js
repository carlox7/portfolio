var projectView = {};
var x;

projectView.handleMainNav = function () {
  $('.main-menu').on('click', '.tab', function() {
    var $dataContent = $(this).attr('data-content');
    console.log($dataContent);
    $('.main-nav').hide();
    console.log($(this));
    x = $(this);
    $('#' + $(this).attr('data-content')).show();
  });
}

projectView.initiateIndexPage = function() {
  Projects.all.forEach(function(a){
    $('#projects').append(a.toHtml())
  });

projectView.handleMainNav();
};
