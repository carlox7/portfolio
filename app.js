'use strict';

var myProjects = [];

function Project (proj){
  this.name = proj.name;
  this.description = proj.description;
  this.url = proj.url;

}

Project.prototype.toHtml = function() {
var $newProject = $('section.currentProjects').clone().removeClass('currentProjects');

  $newProject.find('h2').text(this.name);
  $newProject.find('.description').html(this.description);
  $newProject.find('a').text(this.name);
  $newProject.find('a').attr('href', this.url);
  return $newProject;
};

carloProjects.forEach(function(projectItem) {
  myProjects.push(new Project(projectItem));
});

myProjects.forEach(function(a){
  $('#work').append(a.toHtml());
});
