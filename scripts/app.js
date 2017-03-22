'use strict';


function Project (proj){
  this.name = proj.name,
  this.description = proj.description,
  this.url = proj.url,
  this.projectImage = proj.projectImage
}
Projects.all = [];

Project.prototype.toHtml = function() {
  var source = $('#project-template').html();
    var templateRender = Handlebars.compile(source);
    return templateRender(this);
};

Projects.loadAll = function(rawData) {
carloProjects.forEach(function(projectItem) {
  Projects.all.push(new Project(projectItem));
})
};

Projects.fetchAll = function() {
  if (localStorage.rawData) {
    Projects.loadAll(JSON.parse(localStorage.rawData));
    projectView.initiateIndexPage();
  } else {
    $.getJSON('scripts/projects.json')
    .then(function(data){
      localStorage.rawData = JSON.stringify(data);
      Projects.loadAll(data);
      console.log(Projects.all);
      projectView.initiateIndexPage();
    }, function(err){
      console.error(err);
    })

  }
}
