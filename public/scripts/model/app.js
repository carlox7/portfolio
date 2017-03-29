'use strict';


function Project (proj){
  this.name = proj.name,
  this.description = proj.description,
  this.url = proj.url,
  this.projectImage = proj.projectImage
}
Project.all = [];

Project.prototype.toHtml = function() {
  var source = $('#project-template').html();
    var templateRender = Handlebars.compile(source);
    return templateRender(this);
};

Project.loadAll = function(rawData) {
  rawData.forEach(function(projectItem) {
  Project.all.push(new Project(projectItem));
})
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
