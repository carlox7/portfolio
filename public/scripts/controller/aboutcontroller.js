'use strict';

(function(module) {
  const aboutController = {};
  aboutController.aboutInit = function(){
    $('#projects').hide();
    $('#about').show();
  }

  module.aboutController = aboutController;
})(window);
