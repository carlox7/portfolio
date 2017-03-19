'use strict';

var myProjects = [];

function Project (proj){
  this.name = proj.name,
  this.description = proj.description,
  this.url = proj.url,
  this.projectImage = proj.projectImage
}

Project.prototype.toHtml = function() {
var $newProject = $('section.currentProjects').clone().removeClass('currentProjects').removeAttr('id');

  $newProject.find('h2').text(this.name);
  $newProject.find('img').attr('src', this.projectImage);
  $newProject.find('.description').html(this.description);
  $newProject.find('a').text(this.name);
  $newProject.find('a').attr('href', this.url);
  return $newProject;
};

carloProjects.forEach(function(projectItem) {
  myProjects.push(new Project(projectItem));
});

myProjects.forEach(function(a){
  $('#projects').append(a.toHtml());
});
