'use strict';

let projectView = {};

projectView.initiateIndexPage = function() {
  Project.all.forEach(function(a){
    $('#projects').append(a.toHtml())
  });
};
