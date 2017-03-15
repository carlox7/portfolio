'use strict';

function Project (name, description,url){
  this.name = name;
  this.description = description;
  this.url = url;

};

var salmonCookies = new Project('Salmon Cookies', 'Week two assignment of Code 201', 'www.salmon.cookies');
console.log(salmonCookies);
