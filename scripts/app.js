'use strict';

var myProjects = [];

function Project (proj){
  this.name = proj.name,
  this.description = proj.description,
  this.url = proj.url,
  this.projectImage = proj.projectImage
}

Project.prototype.toHtml = function() {
  var source = $('#project-template').html();
    var templateRender = Handlebars.compile(source);
    return templateRender(this);
};

carloProjects.forEach(function(projectItem) {
  myProjects.push(new Project(projectItem));
});

myProjects.forEach(function(a){
  $('#projects').append(a.toHtml());
});
