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
<<<<<<< HEAD
    Project.all = rawData.map(projectItem => new Project(projectItem));
=======
  rawData.forEach(function(projectItem) {
    Project.all.push(new Project(projectItem));
  })
>>>>>>> ac66520aa69f5e657da93d3a755e477f7d886e82
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
