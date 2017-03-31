'use strict';
(function(module) {
let projectView = {};

<<<<<<< HEAD
let projectView = {};

projectView.initiateIndexPage = function() {
  Project.all.forEach(function(a){
    $('#projects').append(a.toHtml())
  });
};
=======
  projectView.initiateIndexPage = function() {
    Project.all.forEach(function(a){
      $('#projects').append(a.toHtml())
    });
  };
  module.projectView = projectView;
})(window);
>>>>>>> e90a14e248fd24c570103342bc2859292a2429a1
