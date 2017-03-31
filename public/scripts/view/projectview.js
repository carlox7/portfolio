'use strict';
(function(module) {
let projectView = {};

<<<<<<< HEAD
<<<<<<< HEAD
let projectView = {};
=======
let projectView = {};
//let x;
>>>>>>> ac66520aa69f5e657da93d3a755e477f7d886e82

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
