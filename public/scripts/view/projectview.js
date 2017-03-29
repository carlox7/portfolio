'use strict';

var projectView = {};
var x;

projectView.initiateIndexPage = function() {
  Project.all.forEach(function(a){
    $('#projects').append(a.toHtml())
  });
};
