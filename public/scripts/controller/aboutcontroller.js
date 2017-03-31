'use strict';

(function(module) {
  const aboutController = {};
  aboutController.aboutInit = function(){
    $('#projects').hide();
    $('#about').show();
    repos.requestRepos(repoView.index);
  }

  module.aboutController = aboutController;
})(window);
