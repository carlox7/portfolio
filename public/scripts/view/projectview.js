'use strict';
(function(module) {
let projectView = {};

  projectView.initiateIndexPage = function() {
    Project.all.forEach(function(a){
      $('#projects').append(a.toHtml())
    });
  };
  module.projectView = projectView;
})(window);
