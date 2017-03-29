'use strict';

function Project (proj){
  this.name = proj.name,
  this.description = proj.description,
  this.url = proj.url,
  this.projectImage = proj.projectImage
}
Project.all = [];

Project.prototype.toHtml = function() {
  let source = $('#project-template').html();
  let templateRender = Handlebars.compile(source);
  return templateRender(this);
};

Project.loadAll = function(rawData) {
    Project.all = rawData.map(projectItem => new Project(projectItem));
};

Project.fetchAll = function() {
  if (localStorage.rawData) {
    Project.loadAll(JSON.parse(localStorage.rawData));
    projectView.initiateIndexPage();
  } else {
    $.getJSON('data/projects.json')
    .then(function(data){
      localStorage.rawData = JSON.stringify(data);
      Project.loadAll(data);
      projectView.initiateIndexPage();
    }, function(err){
      console.error(err);
    })

  }
}
