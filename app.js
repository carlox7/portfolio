'use strict';

function Project (name, description,url){
  this.name = name;
  this.description = description;
  this.url = url;

}

Project.prototype.toHtml = function() {
var $newProject = $('currentProjects').clone();

  $newProject.find('h2').text(this.name);
  $newProject.find('a').attr('href', this.url);

}
