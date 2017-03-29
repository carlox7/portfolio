'use strict';

(function(module) {
  const projectController = {};
  projectController.projectInit = function(){
    $('#about').hide();
    $('#projects').show();
  }

  module.projectController = projectController;
})(window);
