'use strict';

let projectView = {};
//let x;

projectView.initiateIndexPage = function() {
  Project.all.forEach(function(a){
    $('#projects').append(a.toHtml())
  });
};
