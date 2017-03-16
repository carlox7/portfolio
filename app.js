'use strict';

var myProjects = {};

function Project (name, description,url){
  this.name = name;
  this.description = description;
  this.url = url;

}

Project.prototype.toHtml = function() {
var $newProject = $('currentProjects').clone();

  $newProject.find('h2').text(this.name);
  $newArticle.find('.description').html(this.body);
  $newProject.find('a').attr('href', this.url);

};

carloProjects.forEach(function(projectItem) {
  myProjects.push(new Project(projectItem));
});
